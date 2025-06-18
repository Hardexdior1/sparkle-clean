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
      image: "/placeholder.svg?height=300&width=300",
      bio: "10+ years in the cleaning industry with a passion for excellence",
    },
    {
      name: "Mike Rodriguez",
      role: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in commercial cleaning with 8 years of experience",
    },
    {
      name: "Emily Chen",
      role: "Quality Supervisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ensures every job meets our high standards of cleanliness",
    },
    {
      name: "David Thompson",
      role: "Customer Relations",
      image: "/placeholder.svg?height=300&width=300",
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
      title: "Excelllence",
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
