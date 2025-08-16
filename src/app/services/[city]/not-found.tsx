import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          Go Home
        </Link>
        <Link 
          href="/services" 
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          Browse Services
        </Link>
      </div>
      
      <div className="mt-12 bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Need Help Finding Something?</h3>
        <p className="text-gray-700 mb-6">
          If you're looking for a specific service or location, try browsing our directory:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div>
            <h4 className="font-medium mb-2">Popular Services</h4>
            <ul className="space-y-1 text-blue-600">
              <li><Link href="/services/plumbing" className="hover:underline">Plumbing</Link></li>
              <li><Link href="/services/electrician" className="hover:underline">Electrician</Link></li>
              <li><Link href="/services/landscaping" className="hover:underline">Landscaping</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Popular Cities</h4>
            <ul className="space-y-1 text-blue-600">
              <li><Link href="/services/new-york" className="hover:underline">New York</Link></li>
              <li><Link href="/services/los-angeles" className="hover:underline">Los Angeles</Link></li>
              <li><Link href="/services/chicago" className="hover:underline">Chicago</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
