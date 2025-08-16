import Link from 'next/link'

interface ServiceCardProps {
  name: string
  icon: string
  description: string
  link: string
}

export default function ServiceCard({ name, icon, description, link }: ServiceCardProps) {
  return (
    <div className='bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-200 h-full flex flex-col'>
      <div className='p-6 flex-grow'>
        <div className='text-4xl mb-4 text-blue-600'>{icon}</div>
        <h3 className='text-xl font-semibold mb-2'>{name}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
      </div>
      <div className='px-6 pb-6 mt-auto'>
        <Link 
          href={link}
          className='text-blue-600 hover:underline font-medium inline-flex items-center'
        >
          Learn more
          <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </Link>
      </div>
    </div>
  )
}
