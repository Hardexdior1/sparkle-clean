"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ServicesPage() {
  const residentialServices = [
    {
      title: "Regular House Cleaning",
      description: "Weekly, bi-weekly, or monthly cleaning to keep your home spotless",
      features: ["Kitchen & bathroom deep clean", "Dusting all surfaces", "Vacuuming & mopping", "Trash removal"],
      price: "Starting at $80",
      href: "/services/house-cleaning",
    },
    {
      title: "Deep Cleaning",
      description: "Intensive one-time cleaning perfect for move-ins or seasonal cleaning",
      features: ["Inside appliances", "Baseboards & window sills", "Light fixtures", "Cabinet interiors"],
      price: "Starting at $200",
      href: "/services/deep-cleaning",
    },
    {
      title: "Move-In/Move-Out",
      description: "Specialized cleaning for property transitions",
      features: ["Complete property cleaning", "Security deposit protection", "Quick turnaround", "Detailed checklist"],
      price: "Starting at $250",
      href: "/services/move-cleaning",
    },
  ]

  const commercialServices = [
    {
      title: "Office Cleaning",
      description: "Professional cleaning for offices and commercial spaces",
      features: ["Daily or weekly service", "After-hours availability", "Sanitization protocols", "Supply management"],
      price: "Custom pricing",
      href: "/services/office-cleaning",
    },
//     {
//       title: "Retail Cleaning",
//       description: "Specialized cleaning for retail and customer-facing spaces",
//       features: ["Customer area focus", "Flexible scheduling", "Window & display cleaning", "Floor maintenance"],
//       price: "Custom pricing",
//       href: "/services/retail-cleaning",
//     },
//     {
//       title: "Medical Facility",
//       description: "Hospital-grade cleaning for medical facilities",
//       features: ["OSHA compliance", "Specialized training", "Biohazard handling", "Disinfection protocols"],
//       price: "Custom pricing",
//       href: "/services/medical-cleaning",
//     },
  ]

  const specializedServices = [
    {
      title: "Carpet & Upholstery",
      description: "Professional carpet and furniture cleaning",
      features: ["Steam cleaning", "Stain removal", "Pet odor elimination", "Fabric protection"],
      price: "Starting at $120",
      href: "/services/carpet-cleaning",
    },
    {
      title: "Window Cleaning",
      description: "Interior and exterior window cleaning",
      features: ["Streak-free guarantee", "Screen cleaning", "High-rise capabilities", "Sill cleaning"],
      price: "Starting at $80",
      href: "/services/window-cleaning",
    },
    // {
    //   title: "Pressure Washing",
    //   description: "Exterior cleaning for driveways, patios, and siding",
    //   features: ["Driveway cleaning", "Patio restoration", "Siding cleaning", "Graffiti removal"],
    //   price: "Starting at $150",
    //   href: "/services/pressure-washing",
    // },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Professional Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From regular maintenance to specialized deep cleaning, we offer comprehensive solutions for all your
              residential and commercial cleaning needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0}}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Residential Cleaning</h2>
            <p className="text-xl text-gray-600">Professional home cleaning services tailored to your lifestyle</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <Link href={service.href} className="btn-primary">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Cleaning</h2>
            <p className="text-xl text-gray-600">Professional cleaning solutions for businesses of all sizes</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <Link href={service.href} className="btn-primary">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600">Expert cleaning for specific needs and surfaces</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <Link href={service.href} className="btn-primary">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Need a Custom Cleaning Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We offer customized cleaning packages to meet your specific needs. Contact us for a personalized quote.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
