import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import CityCard from '@/components/CityCard'

export default function Services() {
  const services = [
    { name: 'Plumbing', icon: '💧', description: 'Professional plumbing services for residential and commercial needs', link: '/services/plumbing' },
    { name: 'Electrician', icon: '⚡', description: 'Licensed electricians for all your electrical work and repairs', link: '/services/electrician' },
    { name: 'Landscaping', icon: '🌿', description: 'Transform your outdoor space with our landscaping expertise', link: '/services/landscaping' },
    { name: 'Roofing', icon: '🏠', description: 'Roof installation, repair, and maintenance services', link: '/services/roofing' },
    { name: 'HVAC', icon: '❄️', description: 'Heating, ventilation, and air conditioning installation and repair', link: '/services/hvac' },
    { name: 'Cleaning', icon: '🧹', description: 'Residential and commercial cleaning services', link: '/services/cleaning' },
    { name: 'Pest Control', icon: '🐀', description: 'Effective pest control and prevention services', link: '/services/pest-control' },
    { name: 'Handyman', icon: '🔧', description: 'General repair and maintenance services', link: '/services/handyman' },
    { name: 'Locksmith', icon: '🔒', description: 'Lock installation, repair, and emergency services', link: '/services/locksmith' }
  ]
  
  const cities = [
    { name: 'New York', serviceCount: 42000, link: '/services/new-york' },
    { name: 'Los Angeles', serviceCount: 38000, link: '/services/los-angeles' },
    { name: 'Chicago', serviceCount: 25000, link: '/services/chicago' },
    { name: 'Houston', serviceCount: 22000, link: '/services/houston' },
    { name: 'Phoenix', serviceCount: 18000, link: '/services/phoenix' },
    { name: 'Philadelphia', serviceCount: 15000, link: '/services/philadelphia' },
    { name: 'San Antonio', serviceCount: 14000, link: '/services/san-antonio' },
    { name: 'San Diego', serviceCount: 13000, link: '/services/san-diego' },
    { name: 'Dallas', serviceCount: 12000, link: '/services/dallas' },
    { name: 'San Jose', serviceCount: 11000, link: '/services/san-jose' }
  ]

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <nav className='flex mb-6 text-sm text-gray-600'>
        <Link href="/" className='text-blue-600 hover:underline'>Home</Link>
        <span className='mx-2'>/</span>
        <span>Services</span>
      </nav>
      
      <header className='mb-12 text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>Professional Services Directory</h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          Find quality professional services in your city. Browse our comprehensive directory of vetted professionals.
        </p>
      </header>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
        {services.map((service) => (
          <ServiceCard 
            key={service.name}
            name={service.name}
            icon={service.icon}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>

      <section className='bg-gray-50 rounded-2xl p-8'>
        <h2 className='text-3xl font-bold text-center mb-6'>Browse Services by City</h2>
        <p className='text-gray-600 text-center mb-8 max-w-2xl mx-auto'>
          Find professional services in major cities across the country.
        </p>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
          {cities.map((city) => (
            <CityCard 
              key={city.name}
              name={city.name}
              serviceCount={city.serviceCount}
              link={city.link}
            />
          ))}
        </div>
        
        <div className='text-center mt-8'>
          <Link href='#' className='text-blue-600 hover:underline font-medium'>
            View All Cities →
          </Link>
        </div>
      </section>
    </div>
  )
}
