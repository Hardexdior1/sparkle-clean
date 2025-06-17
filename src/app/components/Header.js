"use client"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
//   const [activeLink,setActiveLink]=useState("Home")

  const pathname=usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ] 
  let path=pathname.split('/')
  const activeLink=path[1]?path[1].toLocaleUpperCase():"HOME"
// console.log()

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">SparkleClean Pro</span>
          </Link>
{/* relative font-medium transition-colors duration-300 pb-1 */}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // onClick={(()=>{
                //     setActiveLink(item.name)
                // })}
                // text-gray-700 
                className={`relative pb-1 hover:text-blue-600 font-medium transition-colors duration-300 ${activeLink==item.name.toUpperCase()?`text-blue-600 font-bold`:`text-gray-700`}`}
              >
                {item.name}
{activeLink==item.name.toUpperCase()&&                    <span className="absolute left-0 top-7 -bottom-0.5 h-[5px] w-[80%] bg-blue-500 rounded-[30px] transition-all duration-300"></span>
}
              </Link>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>(123) 456-7890</span>
            </a>
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-blue-600 font-semibold py-2">
                <PhoneIcon className="h-5 w-5" />
                <span>(123) 456-7890</span>
              </a>
              <Link href="/contact" className="btn-primary w-fit" onClick={() => setIsOpen(false)}>
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
