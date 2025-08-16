import Link from 'next/link'

interface CityCardProps {
  name: string
  serviceCount: number
  link: string
}

export default function CityCard({ name, serviceCount, link }: CityCardProps) {
  return (
    <Link 
      href={link}
      className='bg-white border rounded-lg p-4 text-center hover:shadow-md transition duration-200 block'
    >
      <div className='font-medium text-gray-900'>{name}</div>
      <div className='text-sm text-gray-600 mt-1'>{serviceCount}+ services</div>
      <div className='text-sm text-blue-600 mt-2'>View Services</div>
    </Link>
  )
}
