import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Professional Services Directory',
    default: 'Professional Services Directory - Find Quality Services Nationwide'
  },
  description: 'Find quality professional services in your city. Plumbing, electrical, landscaping, roofing, HVAC, and more.',
  keywords: 'professional services, local services, plumbing, electrician, landscaping, roofing, hvac',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='bg-white shadow'>
          <div className='max-w-6xl mx-auto px-4 py-4'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
              <div>
                <h1 className='text-2xl font-bold text-blue-600'>
                  <a href='/'>Professional Services Directory</a>
                </h1>
                <p className='text-sm text-gray-600 hidden md:block'>Connecting you with trusted local professionals</p>
              </div>
              <nav className='mt-4 md:mt-0'>
                <ul className='flex flex-wrap gap-4 text-sm'>
                  <li><a href='/' className='text-blue-600 hover:underline font-medium'>Home</a></li>
                  <li><a href='/services' className='text-gray-600 hover:text-blue-600'>Services</a></li>
                  <li><a href='/#cities' className='text-gray-600 hover:text-blue-600'>Cities</a></li>
                  <li><a href='/#about' className='text-gray-600 hover:text-blue-600'>About</a></li>
                  <li><a href='/#contact' className='text-gray-600 hover:text-blue-600'>Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className='min-h-screen'>{children}</main>
        <footer className='bg-gray-100 border-t mt-12'>
          <div className='max-w-6xl mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Services Directory</h3>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li><a href='/services/plumbing' className='hover:text-blue-600'>Plumbing</a></li>
                  <li><a href='/services/electrician' className='hover:text-blue-600'>Electrician</a></li>
                  <li><a href='/services/landscaping' className='hover:text-blue-600'>Landscaping</a></li>
                  <li><a href='/services/roofing' className='hover:text-blue-600'>Roofing</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Top Cities</h3>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li><a href='/services/new-york' className='hover:text-blue-600'>New York</a></li>
                  <li><a href='/services/los-angeles' className='hover:text-blue-600'>Los Angeles</a></li>
                  <li><a href='/services/chicago' className='hover:text-blue-600'>Chicago</a></li>
                  <li><a href='/services/houston' className='hover:text-blue-600'>Houston</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Company</h3>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li><a href='#' className='hover:text-blue-600'>About Us</a></li>
                  <li><a href='#' className='hover:text-blue-600'>How It Works</a></li>
                  <li><a href='#' className='hover:text-blue-600'>Contact</a></li>
                  <li><a href='#' className='hover:text-blue-600'>Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>Connect With Us</h3>
                <div className='flex space-x-4 mb-4'>
                  <a href='#' className='text-gray-600 hover:text-blue-600'>FB</a>
                  <a href='#' className='text-gray-600 hover:text-blue-600'>TW</a>
                  <a href='#' className='text-gray-600 hover:text-blue-600'>IG</a>
                  <a href='#' className='text-gray-600 hover:text-blue-600'>IN</a>
                </div>
                <p className='text-sm text-gray-600'>
                  Subscribe to our newsletter for the latest updates and offers.
                </p>
              </div>
            </div>
            <div className='border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500'>
              <p>
                &copy; {new Date().getFullYear()} Professional Services Directory. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
