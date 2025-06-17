"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid"

// All services data


export default function ServiceDetailPage({service}) {
  
 

  const [selectedPackage, setSelectedPackage] = useState(Object.keys(service.packages)[0])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    package: Object.keys(service.packages)[0],
    specialRequests: "",
    // Dynamic fields based on service
    ...(service.formFields.includes("bedrooms") && { bedrooms: "2" }),
    ...(service.formFields.includes("bathrooms") && { bathrooms: "2" }),
    ...(service.formFields.includes("frequency") && { frequency: "weekly" }),
    ...(service.formFields.includes("propertySize") && { propertySize: "medium" }),
    ...(service.formFields.includes("officeSize") && { officeSize: "small" }),
    ...(service.formFields.includes("employees") && { employees: "1-10" }),
    ...(service.formFields.includes("afterHours") && { afterHours: "yes" }),
    ...(service.formFields.includes("carpetArea") && { carpetArea: "living-room" }),
    ...(service.formFields.includes("windowCount") && { windowCount: "10-20" }),
    ...(service.formFields.includes("moveType") && { moveType: "move-out" }),
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert(`Thank you! We will contact you within 24 hours to confirm your ${service.name} booking.`)
  }

  const renderDynamicFields = () => {
    const fields = []

    if (service.formFields.includes("bedrooms") && service.formFields.includes("bathrooms")) {
      fields.push(
        <div key="rooms" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
            <select
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5+">5+ Bedrooms</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
            <select
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1">1 Bathroom</option>
              <option value="2">2 Bathrooms</option>
              <option value="3">3 Bathrooms</option>
              <option value="4+">4+ Bathrooms</option>
            </select>
          </div>
        </div>,
      )
    }

    if (service.formFields.includes("frequency")) {
      fields.push(
        <div key="frequency">
          <label className="block text-sm font-medium text-gray-700 mb-2">Cleaning Frequency</label>
          <select
            name="frequency"
            value={formData.frequency}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
            <option value="onetime">One-time</option>
          </select>
        </div>,
      )
    }

    if (service.formFields.includes("propertySize")) {
      fields.push(
        <div key="propertySize">
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Size</label>
          <select
            name="propertySize"
            value={formData.propertySize}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="small">Small (1-2 bedrooms)</option>
            <option value="medium">Medium (3-4 bedrooms)</option>
            <option value="large">Large (5+ bedrooms)</option>
          </select>
        </div>,
      )
    }

    if (service.formFields.includes("officeSize")) {
      fields.push(
        <div key="officeSize" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Office Size</label>
            <select
              name="officeSize"
              value={formData.officeSize}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="small">Small (1-10 employees)</option>
              <option value="medium">Medium (11-50 employees)</option>
              <option value="large">Large (50+ employees)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">After Hours Service</label>
            <select
              name="afterHours"
              value={formData.afterHours}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="yes">Yes, after business hours</option>
              <option value="no">No, during business hours</option>
              <option value="weekend">Weekends only</option>
            </select>
          </div>
        </div>,
      )
    }

    if (service.formFields.includes("carpetArea")) {
      fields.push(
        <div key="carpetArea" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Areas to Clean</label>
            <select
              name="carpetArea"
              value={formData.carpetArea}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="living-room">Living Room</option>
              <option value="bedrooms">Bedrooms</option>
              <option value="whole-house">Whole House</option>
              <option value="stairs">Stairs</option>
              <option value="commercial">Commercial Space</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pet Owner?</label>
            <select
              name="petOwner"
              value={formData.petOwner}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="no">No pets</option>
              <option value="yes">Yes, I have pets</option>
            </select>
          </div>
        </div>,
      )
    }

    if (service.formFields.includes("windowCount")) {
      fields.push(
        <div key="windowCount" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Windows</label>
            <select
              name="windowCount"
              value={formData.windowCount}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1-10">1-10 windows</option>
              <option value="10-20">10-20 windows</option>
              <option value="20-30">20-30 windows</option>
              <option value="30+">30+ windows</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Building Stories</label>
            <select
              name="stories"
              value={formData.stories}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1">1 Story</option>
              <option value="2">2 Stories</option>
              <option value="3+">3+ Stories</option>
            </select>
          </div>
        </div>,
      )
    }

    if (service.formFields.includes("moveType")) {
      fields.push(
        <div key="moveType" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Move Type</label>
            <select
              name="moveType"
              value={formData.moveType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="move-out">Move-Out Cleaning</option>
              <option value="move-in">Move-In Cleaning</option>
              <option value="both">Both Properties</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Move Date</label>
            <input
              type="date"
              name="moveDate"
              value={formData.moveDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>,
      )
    }

    return fields
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center space-x-2 mb-4">
                {service.icon}
                <span className="text-blue-600 font-semibold">{service.category}</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">{service.name}</h1>
              <p className="text-xl text-gray-600 mb-8">{service.description}</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">{service.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Satisfaction Guaranteed</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Service Package</h2>
            <p className="text-xl text-gray-600">Select the package that best fits your needs and budget</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(service.packages).map(([key, pkg]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: Object.keys(service.packages).indexOf(key) * 0.1 }}
                viewport={{ once: true }}
                className={`border-2 rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                  selectedPackage === key
                    ? "border-blue-600 bg-blue-50 shadow-lg"
                    : "border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => {
                  setSelectedPackage(key)
                  setFormData({ ...formData, package: key })
                }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">${pkg.price}</div>
                  <div className="text-gray-600">{pkg.duration}</div>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your {service.name}</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we&apos;ll contact you within 24 hours to confirm your booking
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Address *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Dynamic Fields Based on Service */}
                {renderDynamicFields()}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Notes</label>
                  <textarea
                    name="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any special instructions, areas of focus, or additional services needed..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Selected Package: {service.packages[selectedPackage].name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Estimated Price:{" "}
                    <span className="font-bold text-blue-600">${service.packages[selectedPackage].price}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Final price may vary based on specific requirements. We&apos;ll provide an exact quote when we contact
                    you.
                  </p>
                </div>

                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Book {service.name}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
