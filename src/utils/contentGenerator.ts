import { prisma } from '@/utils/db'
import { GoogleGenerativeAI } from '@google/generative-ai'

// Initialize Gemini API client
// Note: You'll need to set GEMINI_API_KEY in your environment variables
const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null

export async function generateContentForCityService(citySlug: string, serviceSlug: string) {
  // First, try to get existing content from database
  const existingContent = await prisma.content.findUnique({
    where: {
      cityId_serviceId: {
        cityId: (await prisma.city.findUnique({ where: { slug: citySlug } }))?.id || 0,
        serviceId: (await prisma.service.findUnique({ where: { slug: serviceSlug } }))?.id || 0
      }
    },
    include: {
      city: true,
      service: true
    }
  })

  // If content exists and is published, return it
  if (existingContent && existingContent.isPublished) {
    return {
      title: existingContent.title,
      content: existingContent.body
    }
  }

  // Get city and service details
  const city = await prisma.city.findUnique({ where: { slug: citySlug } })
  const service = await prisma.service.findUnique({ where: { slug: serviceSlug } })

  if (!city || !service) {
    throw new Error('City or service not found')
  }

  // Generate new content using AI
  let aiContent = ''
  let title = ''

  if (genAI) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" })
      
      const prompt = `Generate high-quality, SEO-optimized content for a professional service directory. 
      Write a comprehensive guide about ${service.name} services in ${city.name}.
      
      Requirements:
      1. Minimum 2000 words
      2. Include an engaging introduction
      3. Cover local market insights for ${city.name}
      4. Discuss regulations, requirements, and best practices
      5. Include pricing information specific to ${city.name}
      6. Provide actionable advice for consumers
      7. Use proper heading structure (H1, H2, H3)
      8. Include E-E-A-T principles (Experience, Expertise, Authoritativeness, Trustworthiness)
      9. Avoid duplicate content
      10. Optimize for search engines
      
      Format the response in markdown.`

      const result = await model.generateContent(prompt)
      aiContent = result.response.text()
      
      // Extract title from content or generate one
      const titleMatch = aiContent.match(/^#\s+(.+)$/m)
      title = titleMatch ? titleMatch[1] : `${service.name} Services in ${city.name} | Expert Guide`
    } catch (error) {
      console.error('AI content generation failed:', error)
      // Fallback to template-based content
      aiContent = generateFallbackContent(city.name, service.name)
      title = `${service.name} Services in ${city.name} | Expert Guide`
    }
  } else {
    // Fallback to template-based content if AI is not configured
    aiContent = generateFallbackContent(city.name, service.name)
    title = `${service.name} Services in ${city.name} | Expert Guide`
  }

  // Save content to database
  const savedContent = await prisma.content.upsert({
    where: {
      cityId_serviceId: {
        cityId: city.id,
        serviceId: service.id
      }
    },
    update: {
      title: title,
      body: aiContent,
      isPublished: true,
      updatedAt: new Date()
    },
    create: {
      title: title,
      body: aiContent,
      cityId: city.id,
      serviceId: service.id,
      isPublished: true
    }
  })

  return {
    title: savedContent.title,
    content: savedContent.body
  }
}

function generateFallbackContent(cityName: string, serviceName: string): string {
  return `# ${serviceName} Services in ${cityName}

Welcome to our comprehensive guide on ${serviceName} in ${cityName}. Our expert team has researched and compiled all the essential information you need to know.

## Why Choose ${cityName} for ${serviceName}?

${cityName} offers unique advantages for ${serviceName} that you won't find elsewhere. The local market provides excellent opportunities and competitive pricing.

## Local Providers

We've researched and verified local providers offering ${serviceName} in ${cityName}. All our recommended providers are licensed, insured, and have excellent customer reviews.

## Market Trends

The ${serviceName} market in ${cityName} has been growing steadily over the past few years. Current trends indicate an increased demand for specialized services in this sector.

## Regulations and Requirements

When seeking ${serviceName} in ${cityName}, it's important to understand the local regulations to ensure compliance and quality service.

## Pricing Information

While pricing can vary based on specific requirements, the average cost for ${serviceName} in ${cityName} is competitive with national averages.

## Contact Our Experts

If you have specific questions about ${serviceName} in ${cityName}, our team of experts is ready to assist you with personalized recommendations.

## Conclusion

${cityName} remains an excellent location for ${serviceName} with a growing market and increasing opportunities. Whether you're a resident or planning to visit, understanding the ${serviceName} landscape here is crucial for making informed decisions.`
}
