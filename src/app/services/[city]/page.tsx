import { notFound } from 'next/navigation'
import { faker } from '@faker-js/faker'

// Mock data for services and cities
const services = [
  'Plumbing',
  'Electrician',
  'Landscaping',
  'Roofing',
  'HVAC',
  'Cleaning',
  'Pest Control',
  'Handyman',
  'Locksmith'
]

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose'
]

// Mock function to generate service-specific content
function generateServiceContent(service: string, city: string) {
  const companyName = faker.company.name()
  const phone = faker.phone.number('(###) ###-####')
  const email = faker.internet.email()
  const address = faker.location.streetAddress()
  const rating = faker.number.float({ min: 3.5, max: 5.0, precision: 0.1 }).toFixed(1)
  const reviews = faker.number.int({ min: 10, max: 500 })
  
  return {
    title: `${service} Services in ${city} | ${companyName}`,
    description: `Professional ${service.toLowerCase()} services in ${city}. Rated ${rating}/5 from ${reviews} reviews. Call ${phone} for a free estimate.`,
    companyName,
    phone,
    email,
    address,
    rating,
    reviews,
    content: `
      <p>When you need reliable ${service.toLowerCase()} services in ${city}, our team at ${companyName} is here to help. With over 15 years of experience, we've been providing quality service to the ${city} community.</p>
      
      <h2 class="text-2xl font-semibold my-4">Our ${service} Services</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Emergency ${service.toLowerCase()} repairs</li>
        <li>Installation services</li>
        <li>Regular maintenance</li>
        <li>Inspection and diagnostics</li>
        <li>24/7 emergency support</li>
      </ul>
      
      <h2 class="text-2xl font-semibold my-4">Why Choose Our ${service} Services?</h2>
      <p>Our certified professionals are equipped with the latest tools and knowledge to handle all your ${service.toLowerCase()} needs. We pride ourselves on:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Licensed and insured technicians</li>
        <li>Transparent pricing with no hidden fees</li>
        <li>Satisfaction guarantee on all work</li>
        <li>Timely and respectful service</li>
        <li>Environmentally responsible practices</li>
      </ul>
      
      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <h3 class="text-xl font-semibold mb-3">Limited Time Offer</h3>
        <p>Book your service today and receive 15% off your first visit. Mention offer code: ${service.toUpperCase()}15 when calling.</p>
      </div>
      
      <h2 class="text-2xl font-semibold my-4">Customer Reviews</h2>
      <p class="italic">"${faker.lorem.sentence()} ${faker.lorem.sentence()}" - ${faker.person.fullName()}</p>
      <p class="italic mt-4">"${faker.lorem.sentence()} ${faker.lorem.sentence()}" - ${faker.person.fullName()}</p>
      
      <h2 class="text-2xl font-semibold my-4">Contact Us</h2>
      <p>Ready to schedule your service or have questions? Contact ${companyName} today:</p>
      <ul class="list-none space-y-2 mt-4">
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Address:</strong> ${address}, ${city}</li>
      </ul>
    `
  }
}

export async function generateMetadata({ params }: { params: { city: string } }) {
  const city = decodeURIComponent(params.city).replace(/-/g, ' ')
  const service = 'Plumbing' // Default service for metadata
  
  return {
    title: `${service} Services in ${city} | Professional Services Directory`,
    description: `Find quality ${service.toLowerCase()} services in ${city}. Compare providers, read reviews, and book your appointment today.`
  }
}

export default function ServicePage({ params }: { params: { city: string } }) {
  const city = decodeURIComponent(params.city).replace(/-/g, ' ')
  
  // In a real implementation, this would come from your database/API
  const content = generateServiceContent('Plumbing', city)
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="flex mb-6 text-sm text-gray-600">
        <a href="/" className="text-blue-600 hover:underline">Home</a>
        <span className="mx-2">/</span>
        <span>{city}</span>
      </nav>
      
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.description}</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.content }} />
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-lg shadow-sm p-6 sticky top-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Company</h4>
                <p className="text-gray-700">{content.companyName}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-700">{content.address}<br />{city}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-blue-600 font-medium">{content.phone}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-blue-600 font-medium">{content.email}</p>
              </div>
              
              <div>
                <h4 className="font-medium">Rating</h4>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span className="font-medium">{content.rating}</span>
                  <span className="text-gray-500 ml-1">({content.reviews} reviews)</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg mt-6 transition duration-200">
              Request Free Quote
            </button>
          </div>
          
          <div className="bg-gray-50 border rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Related Services</h3>
            <ul className="space-y-2">
              {services.filter(s => s !== 'Plumbing').slice(0, 5).map((service) => (
                <li key={service}>
                  <a href={`/services/${city.toLowerCase().replace(/\s+/g, '-')}/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                     className="text-blue-600 hover:underline">
                    {service} in {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <section className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">How quickly can you respond to service requests?</h3>
            <p className="text-gray-700">We offer same-day service for emergency requests and typically schedule non-emergency visits within 24-48 hours.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Do you provide free estimates?</h3>
            <p className="text-gray-700">Yes, all our estimates are free of charge with no obligation to proceed with the work.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">What areas do you serve?</h3>
            <p className="text-gray-700">We provide {services[0].toLowerCase()} services throughout {city} and surrounding areas.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
