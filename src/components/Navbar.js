import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-center py-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/booking" className="hover:text-gray-400">
            Booking
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-gray-400">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/Shoppingtutor" className="hover:text-gray-400">
            Tutor Profile
          </Link>
        </li>
      </ul>
      
    </nav>
  )
}