"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import BeforeAfterComparison from "../components/BeforeCompanrioson"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "deep-cleaning", name: "Deep Cleaning" },
    { id: "carpet", name: "Carpet Cleaning" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "residential",
      title: "Kitchen Deep Clean",
      description: "Complete kitchen transformation with appliance cleaning",
      beforeImage: "/before.webp",
      afterImage: "/after.webp",
      location: "Downtown Home",
    },
    {
      id: 2,
      category: "residential",
      title: "Bathroom Restoration",
      description: "Tile and grout cleaning with sanitization",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      location: "Suburban House",
    },
    {
      id: 3,
      category: "commercial",
      title: "Office Space Cleaning",
      description: "Complete office cleaning and sanitization",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      location: "Business District",
    },
    {
      id: 4,
      category: "deep-cleaning",
      title: "Move-Out Deep Clean",
      description: "Comprehensive cleaning for property handover",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      location: "Apartment Complex",
    },
    {
      id: 5,
      category: "carpet",
      title: "Carpet Restoration",
      description: "Pet stain removal and deep carpet cleaning",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      location: "Family Home",
    },
    {
      id: 6,
      category: "residential",
      title: "Living Room Refresh",
      description: "Complete living space cleaning and organizing",
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      location: "Modern Condo",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Before & After Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the incredible transformations we&apos;ve achieved for our clients. From residential homes to commercial
              spaces, witness the SparkleClean Pro difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Before/After Comparison */}
                <BeforeAfterComparison beforeImage={item.beforeImage} afterImage={item.afterImage} title={item.title} />

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">📍 {item.location}</span>
                    <span className="text-sm text-gray-500 capitalize">{item.category.replace("-", " ")}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Transformations That Speak for Themselves</h2>
            <p className="text-xl opacity-90">Numbers that showcase our commitment to excellence</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Homes Cleaned</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Offices Serviced</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Carpets Restored</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to See Your Own Transformation?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our gallery of satisfied customers. Book your cleaning service today and experience the SparkleClean
              Pro difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg">
                Book Your Service
              </a>
              <a href="tel:+1234567890" className="btn-secondary text-lg">
                Call: (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
