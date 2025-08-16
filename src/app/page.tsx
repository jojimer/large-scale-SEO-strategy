import Link from 'next/link'

export default function Home() {
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

  return (
    <div className='max-w-6xl mx-auto p-4'>
      {/* Hero Section */}
      <section className='text-center py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-16'>
        <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
          Find Trusted <span className='text-blue-600'>Professional Services</span>
        </h1>
        <p className='text-xl text-gray-700 max-w-3xl mx-auto mb-10'>
          Connect with vetted professionals in your area for all your home and business needs. 
          Quality service guaranteed.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200 shadow-lg'>
            Find a Professional
          </button>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg border border-gray-300 transition duration-200'>
            Become a Professional
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className='mb-16' id='services'>
        <h2 className='text-3xl font-bold text-center mb-12'>Popular Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <div key={service} className='bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-200'>
              <div className='p-6'>
                <div className='text-3xl mb-4 text-blue-600'>
                  {index === 0 && '💧'}
                  {index === 1 && '⚡'}
                  {index === 2 && '🌿'}
                  {index === 3 && '🏠'}
                  {index === 4 && '❄️'}
                  {index === 5 && '🧹'}
                  {index === 6 && '🐀'}
                  {index === 7 && '🔧'}
                  {index === 8 && '🔒'}
                </div>
                <h3 className='text-xl font-semibold mb-2'>{service}</h3>
                <p className='text-gray-600 mb-4'>
                  Professional {service.toLowerCase()} services for your home and business needs.
                </p>
                <Link 
                  href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                  className='text-blue-600 hover:underline font-medium'
                >
                  Find {service} Services →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className='bg-gray-50 rounded-2xl p-8 mb-16'>
        <h2 className='text-3xl font-bold text-center mb-12'>How It Works</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-4 mx-auto'>1</div>
            <h3 className='text-xl font-semibold mb-2'>Search</h3>
            <p className='text-gray-600'>
              Tell us what service you need and your location.
            </p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-4 mx-auto'>2</div>
            <h3 className='text-xl font-semibold mb-2'>Compare</h3>
            <p className='text-gray-600'>
              Browse profiles, read reviews, and compare prices.
            </p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-4 mx-auto'>3</div>
            <h3 className='text-xl font-semibold mb-2'>Connect</h3>
            <p className='text-gray-600'>
              Book directly with your chosen professional.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className='mb-16' id='cities'>
        <h2 className='text-3xl font-bold text-center mb-4'>Popular Cities</h2>
        <p className='text-gray-600 text-center mb-12 max-w-2xl mx-auto'>
          Find professional services in major cities across the country.
        </p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
          {cities.map((city) => (
            <Link 
              key={city} 
              href={`/services/${city.toLowerCase().replace(/\s+/g, '-')}`}
              className='bg-white border rounded-lg p-4 text-center hover:shadow-md transition duration-200'
            >
              <div className='font-medium text-gray-900'>{city}</div>
              <div className='text-sm text-blue-600'>View Services</div>
            </Link>
          ))}
        </div>
        <div className='text-center mt-8'>
          <Link href='/services' className='text-blue-600 hover:underline font-medium'>
            Browse All Cities →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-blue-600 rounded-2xl p-8 text-center text-white mb-16'>
        <h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
        <p className='text-blue-100 max-w-2xl mx-auto mb-8'>
          Join thousands of satisfied customers who found the perfect professional services through our platform.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <button className='bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-200 shadow-lg'>
            Find a Professional
          </button>
          <button className='bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-lg border border-blue-300 transition duration-200'>
            Become a Professional
          </button>
        </div>
      </section>
    </div>
  )
}
