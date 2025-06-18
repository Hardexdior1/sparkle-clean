"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  TrophyIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "data:image/jpeg;base64,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",
      bio: "10+ years in the cleaning industry with a passion for excellence",
    },
    {
      name: "Mike Rodriguez",
      role: "Operations Manager",
      image: "data:image/jpeg;base64,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",
      bio: "Expert in commercial cleaning with 8 years of experience",
    },
    {
      name: "Emily Chen",
      role: "Quality Supervisor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XjT3g7oGhqBqL6XMdd1fEG3RRTnMf2qc2Q&s",
      bio: "Ensures every job meets our high standards of cleanliness",
    },
    {
      name: "David Thompson",
      role: "Customer Relations",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpgan2RWonyImrchiykkb1j2-jkMzZv0d4g&s",
      bio: "Dedicated to providing exceptional customer service",
    },
  ]

  const values = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-600" />,
      title: "Trust & Reliability",
      description: "We build lasting relationships through consistent, dependable service",
    },
    {
      icon: <SparklesIcon className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for perfection in every cleaning task we undertake",
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-blue-600" />,
      title: "Care & Respect",
      description: "We treat every home and office with the utmost care and respect",
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
      title: "Community",
      description: "We are proud to serve and give back to our local community",
    },
  ]

  const certifications = [
    "ISSA Certified Cleaning Professionals",
    "EPA Green Cleaning Certified",
    "OSHA Safety Training Certified",
    "Bonded & Insured",
    "Background Checked Staff",
    "Local Business Association Member",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">About SparkleClean Pro</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2014, SparkleClean Pro has been transforming homes and businesses with professional cleaning
                services. We&apos;re not just a cleaning company – we&apos;re your partners in creating healthier, happier spaces.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                // src="/placeholder.svg?height=500&width=600"
                                src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg"
                alt="SparkleClean Pro team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To provide exceptional cleaning services that give our clients more time to focus on what matters most to
              them. We believe everyone deserves a clean, healthy environment where they can thrive, and we&apos;re committed
              to making that a reality through our professional, reliable, and eco-friendly cleaning solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The dedicated professionals behind SparkleClean Pro</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <TrophyIcon className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-4xl font-bold mb-4">Certified & Trusted</h2>
            <p className="text-xl opacity-90">Our certifications and training ensure the highest quality service</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg"
              >
                <AcademicCapIcon className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
              <Image
                src="https://img.freepik.com/premium-photo/professional-cleaning-service-team-cleans-living-room-modern-apartment_130111-3783.jpg"
                alt="Our story"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              // initial={{ opacity: 0, x: 50 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.8, delay: 0.2 }}
              // viewport={{ once: true }}



               initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SparkleClean Pro was born from a simple observation: people needed more time for the things that truly
                  mattered to them. Our founder, Sarah Johnson, started the company after years of working in the
                  hospitality industry, where she learned the importance of immaculate cleanliness.
                </p>
                <p>
                  What began as a small residential cleaning service has grown into a comprehensive cleaning company
                  serving both homes and businesses. We&apos;ve maintained our commitment to personal service while expanding
                  our capabilities and team.
                </p>
                <p>
                  Today, we&apos;re proud to be a trusted part of our community, helping families and businesses maintain
                  clean, healthy environments. Every member of our team shares our passion for excellence and our
                  commitment to making our clients&apos; lives easier.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8 }}
            // viewport={{ once: true }}
            
               initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience the SparkleClean Pro Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our family of satisfied customers and discover why we&apos;re the most trusted cleaning service in the
              area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg">
                Get Your Free Quote
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
