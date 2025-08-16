import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/utils/db'

export async function POST(request: NextRequest) {
  try {
    const { citySlug, serviceSlug } = await request.json()
    
    // Check if content already exists
    let content = await prisma.content.findUnique({
      where: {
        city_slug_service_slug: {
          city_slug: citySlug,
          service_slug: serviceSlug
        }
      }
    })
    
    // If content doesn't exist, generate it
    if (!content) {
      // In a real implementation, we would call the AI API here
      // For now, we'll generate sample content
      
      const city = await prisma.city.findUnique({
        where: { slug: citySlug }
      })
      
      const service = await prisma.service.findUnique({
        where: { slug: serviceSlug }
      })
      
      if (!city || !service) {
        return NextResponse.json(
          { error: 'City or service not found' }, 
          { status: 404 }
        )
      }
      
      // Generate content (this is where you would call your AI API)
      const generatedContent = `# ${service.name} Services in ${city.name}\n\n` +
        `Welcome to our comprehensive guide on ${service.name.toLowerCase()} in ${city.name}. ` +
        `Our expert team has researched and compiled all the essential information you need to know.\n\n` +
        `## Why Choose ${city.name} for ${service.name}?\n\n` +
        `${city.name} offers unique advantages for ${service.name.toLowerCase()} that you won't find elsewhere. ` +
        `The local market provides excellent opportunities and competitive pricing.\n\n` +
        `## Local Providers\n\n` +
        `We've researched and verified local providers offering ${service.name.toLowerCase()} in ${city.name}. ` +
        `All our recommended providers are licensed, insured, and have excellent customer reviews.\n\n` +
        `## Market Trends\n\n` +
        `The ${service.name.toLowerCase()} market in ${city.name} has been growing steadily over the past few years. ` +
        `Current trends indicate an increased demand for specialized services in this sector.\n\n` +
        `## Regulations and Requirements\n\n` +
        `When seeking ${service.name.toLowerCase()} in ${city.name}, it's important to understand the local regulations ` +
        `to ensure compliance and quality service.\n\n` +
        `## Pricing Information\n\n` +
        `While pricing can vary based on specific requirements, the average cost for ${service.name.toLowerCase()} ` +
        `in ${city.name} is competitive with national averages.\n\n` +
        `## Contact Our Experts\n\n` +
        `If you have specific questions about ${service.name.toLowerCase()} in ${city.name}, our team of experts ` +
        `is ready to assist you with personalized recommendations.\n\n` +
        `## Conclusion\n\n` +
        `${city.name} remains an excellent location for ${service.name.toLowerCase()} with a growing market ` +
        `and increasing opportunities. Whether you're a resident or planning to visit, understanding the ` +
        `${service.name.toLowerCase()} landscape here is crucial for making informed decisions.`
      
      // Save content to database
      content = await prisma.content.create({
        data: {
          title: `${service.name} Services in ${city.name} | Expert Guide`,
          body: generatedContent,
          city: {
            connect: { id: city.id }
          },
          service: {
            connect: { id: service.id }
          },
          isPublished: true
        }
      })
    }
    
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Error generating content:', error)
    return NextResponse.json(
      { error: 'Failed to generate content' }, 
      { status: 500 }
    )
  }
}
