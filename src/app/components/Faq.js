"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

export default function FaqAccordion() {
    const faqs = [
  {
    question: "How much does your cleaning service cost?",
    answer: "Our cleaning services start at $80 for a standard home cleaning. Pricing varies based on your home's size, condition, and the specific services requested. We offer free, no-obligation estimates tailored to your exact needs. Contact us for a personalized quote, or use our online calculator for an instant estimate."
  },
  {
    question: "What's included in your standard cleaning service?",
    answer: "Our standard cleaning service includes dusting all accessible surfaces, vacuuming carpets and floors, mopping hard floors, cleaning and sanitizing bathrooms (toilets, showers, tubs, sinks), cleaning and sanitizing kitchens (countertops, sinks, appliance exteriors), and removing trash. We also offer deep cleaning and specialized services for an additional fee."
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer: "We prioritize your family's health and safety. We use eco-friendly, non-toxic cleaning products that are effective yet safe for children, pets, and family members with allergies or sensitivities. If you have specific product preferences or concerns, just let us know, and we can accommodate your requests."
  },
  {
    question: "Do I need to be home during the cleaning service?",
    answer: "No, you don't need to be present. Many of our clients provide a key or access code so we can clean while they're at work or running errands. We have strict security protocols for key handling and all our staff undergo thorough background checks. Of course, you're welcome to be home during the service if you prefer."
  },
  {
    question: "How do you screen your cleaning staff?",
    answer: "We take security very seriously. All our cleaning professionals undergo comprehensive background checks, reference verification, and extensive training before joining our team. Our staff are fully insured, bonded, and employed directly by us (not contractors), ensuring consistent quality and accountability."
  },
  {
    question: "Can I request the same cleaners for each service?",
    answer: "Yes! We understand the importance of consistency and trust. Once you find cleaners you're comfortable with, we'll do our best to send the same team for each of your scheduled cleanings, barring illness or time off. Consistency helps our team learn your preferences and provide personalized service."
  },
  {
    question: "How often should I schedule professional cleaning?",
    answer: "For most homes, we recommend bi-weekly cleaning to maintain a consistently clean environment. However, this depends on your specific needs. Homes with pets, children, or high traffic may benefit from weekly cleaning, while less frequently used spaces might only need monthly service. We can help you determine the optimal schedule during your consultation."
  },
  {
    question: "Do you bring your own cleaning supplies and equipment?",
    answer: "Yes, we bring all necessary professional-grade cleaning supplies, equipment, and tools needed to thoroughly clean your home. Our commercial-grade vacuums with HEPA filters, microfiber cleaning systems, and eco-friendly products ensure optimal results. If you prefer we use specific products you provide, we're happy to accommodate."
  },
  {
    question: "What if I'm not satisfied with the cleaning service?",
    answer: "Your satisfaction is our top priority! If you're not completely happy with any aspect of our service, please contact us within 24 hours, and we'll return to re-clean the areas of concern at no additional cost. We stand behind our work with a 100% satisfaction guarantee."
  },
  {
    question: "How do you handle breakage or damage?",
    answer: "While our professional cleaners take great care with your belongings, accidents can occasionally happen. We're fully insured, so in the rare event that something is damaged during cleaning, we'll repair or replace the item, or provide compensation for the damage. Simply notify us within 24 hours of your service."
  },
  {
    question: "Do you offer any discounts for recurring service?",
    answer: "Yes! We offer tiered discounts based on cleaning frequency. Weekly cleanings receive our highest discount, followed by bi-weekly and monthly services. We also offer special rates for seniors, veterans, and first-time customers. Ask about our referral program to earn credits toward future cleanings."
  },
  {
    question: "How far in advance should I book your services?",
    answer: "For regular scheduling, we recommend booking 1-2 weeks in advance to secure your preferred date and time. For special occasions or one-time deep cleanings, especially during busy seasons (holidays, spring), we suggest booking 2-3 weeks ahead. We do offer same-week and sometimes same-day service for urgent situations, subject to availability."
  },
  {
    question: "Can you accommodate special cleaning requests?",
    answer: "Whether you need extra attention to certain areas, have specific cleaning preferences, or require specialized services like oven cleaning, refrigerator cleaning, or window washing, we can customize our service to meet your needs. Just let us know your requirements when booking."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We understand that plans change. We request at least 48 hours' notice for cancellations or rescheduling to avoid a cancellation fee (50% of the service cost). For cancellations with less than 24 hours' notice, a full service fee may apply. Emergency situations are handled on a case-by-case basis."
  },
  {
    question: "Do you offer commercial cleaning services?",
    answer: "Yes, we provide professional cleaning services for offices, retail spaces, medical facilities, and other commercial properties. Our commercial cleaning services can be scheduled after business hours or during weekends to minimize disruption. Contact us for a customized commercial cleaning quote."
  }
];
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="">
{/* <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">Find answers to frequently asked questions and learn more about what to expect from our services.</p> */}

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center w-full p-5 text-left ${
              activeIndex === index ? "bg-blue-50" : "bg-white"
            }`}
            aria-expanded={activeIndex === index}
          >
            <span className="text-lg font-medium text-gray-900">{faq.question}</span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 ml-2"
            >
              <ChevronDownIcon className="h-5 w-5 text-blue-600" />
            </motion.div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-5 border-t border-gray-200 text-gray-600">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
