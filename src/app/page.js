"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { StarIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon, SparklesIcon } from "@heroicons/react/24/solid"

// Add the FAQ section before the CTA section and after the Testimonials section

// First, import the FaqAccordion component at the top of the file
import FaqAccordion from "./components/Faq"

export default function HomePage() {
  const services = [
    {
      title: "House Cleaning",
      description: "Regular and deep cleaning for your home",
      icon: "🏠",
      href: "/services/house-cleaning",
    },
    {
      title: "Office Cleaning",
      description: "Professional commercial cleaning services",
      icon: "🏢",
      href: "/services/office-cleaning",
    },
    {
      title: "Deep Cleaning",
      description: "Intensive cleaning for move-ins and special occasions",
      icon: "✨",
      href: "/services/deep-cleaning",
    },
    {
      title: "Carpet Cleaning",
      description: "Professional carpet and upholstery cleaning",
      icon: "🧽",
      href: "/services/carpet-cleaning",
    },
  ]

  const features = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-600" />,
      title: "Fully Insured & Bonded",
      description: "Complete protection for your peace of mind",
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
      title: "Trained Professionals",
      description: "Background-checked and expertly trained staff",
    },
    {
      icon: <ClockIcon className="h-8 w-8 text-blue-600" />,
      title: "Flexible Scheduling",
      description: "We work around your busy schedule",
    },
    {
      icon: <SparklesIcon className="h-8 w-8 text-blue-600" />,
      title: "100% Satisfaction",
      description: "Money-back guarantee on all services",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "SparkleClean Pro transformed my home! Their attention to detail is incredible.",
      location: "Downtown",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional, reliable, and thorough. I recommend them to everyone!",
      location: "Westside",
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "Best cleaning service in the city. They saved me so much time!",
      location: "Northside",
    },
  ]

  // Then add this constant with the FAQ data after the testimonials constant
  const faqs = [
    {
      question: "How often should I schedule a professional cleaning?",
      answer:
        "For most homes, we recommend bi-weekly cleaning to maintain a consistently clean environment. However, this depends on your specific needs. Homes with pets, children, or high traffic may benefit from weekly cleaning, while less frequently used spaces might only need monthly service.",
    },
    {
      question: "Are your cleaning products safe for children and pets?",
      answer:
        "Absolutely! We prioritize your family's health and safety. We use eco-friendly, non-toxic cleaning products that are effective yet safe for children, pets, and family members with allergies or sensitivities. If you have specific product preferences or concerns, just let us know.",
    },
    {
      question: "Do I need to be home during the cleaning service?",
      answer:
        "No, you don't need to be present. Many of our clients provide a key or access code so we can clean while they're at work or running errands. We have strict security protocols for key handling. Of course, you're welcome to be home during the service if you prefer.",
    },
    {
      question: "What if I'm not satisfied with the cleaning service?",
      answer:
        "Your satisfaction is our top priority! If you're not completely happy with any aspect of our service, please contact us within 24 hours, and we'll return to re-clean the areas of concern at no additional cost. We stand behind our work with a 100% satisfaction guarantee.",
    },
    {
      question: "How do you handle breakage or damage?",
      answer:
        "While our professional cleaners take great care with your belongings, accidents can occasionally happen. We're fully insured, so in the rare event that something is damaged during cleaning, we'll repair or replace the item, or provide compensation for the damage.",
    },
    {
      question: "Can I request the same cleaners for each service?",
      answer:
        "Yes! We understand the importance of consistency and trust. Once you find cleaners you're comfortable with, we'll do our best to send the same team for each of your scheduled cleanings, barring illness or time off.",
    },
  ]

  const scrollToServices = () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 to-blue-300 overflow-hidden 2xl:h-screen">
        <div className="absolute inset-0 bg-black/3"></div>
        <div className="container-custom relative z-10 py-14 md:py-14 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Space Into a <span className="text-blue-600">Spotless Sanctuary</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional cleaning services that save you time and give you peace of mind. Experience the difference
                of a truly clean home or office.
              </p>
              <div className=" flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToServices} className="btn-primary text-lg view-services">
                  View Our Services
                </button>
                                  <Link href="/contact" className="btn-secondary text-lg text-center book-now">

                <button>
                  Book Now
                </button>  </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                // src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg"
                src={'https://img.freepik.com/premium-photo/professional-cleaning-service-team-cleans-living-room-modern-apartment_130111-3534.jpg'}
                alt="Professional cleaning service"
                width={1000}
                height={1000}
                className="rounded-2xl shadow-2xl md:h-[560px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5" />
                    ))}
                  </div>
                  <span className="font-semibold">500+ Happy Customers</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From regular house cleaning to specialized commercial services, we have the expertise to handle all your
              cleaning needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={service.href} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SparkleClean Pro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just another cleaning service. We&apos;re your trusted partners in creating a cleaner, healthier
              environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don&apos;t just take our word for it - hear from our satisfied customers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic"> &quot; {testimonial.text}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white" id="faq">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our cleaning services? Find quick answers to our most commonly asked questions.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <FaqAccordion faqs={faqs} />
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
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust SparkleClean Pro for their cleaning needs. Get your free
              quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+1234567890"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Call Now: (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
