import { notFound } from 'next/navigation'
import { generateContentForCityService } from '@/utils/contentGenerator'
import { prisma } from '@/utils/db'

// This function will generate static parameters for our pages
export async function generateStaticParams() {
  // In a real implementation, we would fetch these from our database
  const cities = ['new-york', 'los-angeles', 'chicago', 'houston', 'phoenix']
  const services = ['plumbing', 'electrician', 'landscaping', 'roofing', 'hvac']

  // For demo purposes, we're only generating a few combinations
  // In production, this would be all combinations from the database
  const params = []
  for (const city of cities.slice(0, 2)) {
    for (const service of services.slice(0, 2)) {
      params.push({ city, service })
    }
  }

  return params
}

// This enables ISR for this page
export const dynamicParams = true // true | false,
export const revalidate = 3600 // revalidate at most every hour

export default async function ServicePage({
  params
}: {
  params: Promise<{ city: string; service: string }>
}) {
  // For demo purposes, we'll always generate new content
  // In a real implementation, we would check our database first
  const resolvedParams = await params;
  const cityName = resolvedParams.city.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
  
  const serviceName = resolvedParams.service.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  // Generate content using our new system
  const generatedContent = await generateContentForCityService(resolvedParams.city, resolvedParams.service)

  // Convert markdown to HTML (simple conversion)
  const contentHtml = generatedContent.content
    .replace(/\n#/g, '</p><h2>')
    .replace(/#/g, '<h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br />')

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>{generatedContent.title}</h1>
      <div className='prose prose-lg bg-white p-6 rounded-lg shadow'>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  )
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ city: string; service: string }>
}) {
  const resolvedParams = await params;
  const cityName = resolvedParams.city.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
  
  const serviceName = resolvedParams.service.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
  
  // Generate content to get metadata
  const generatedContent = await generateContentForCityService(resolvedParams.city, resolvedParams.service)

  return {
    title: generatedContent.title,
    description: `Comprehensive guide to ${serviceName} services in ${cityName}. Expert advice, local insights, and trusted providers.`
  }
}
