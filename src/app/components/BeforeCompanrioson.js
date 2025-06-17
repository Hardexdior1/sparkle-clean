"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function BeforeAfterComparison({ beforeImage, afterImage, title }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const containerWidth = rect.width
      const position = (x / containerWidth) * 100

      // Clamp position between 0 and 100
      const clampedPosition = Math.max(0, Math.min(100, position))
      setSliderPosition(clampedPosition)
    }
  }

  const handleTouchMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const containerWidth = rect.width
      const position = (x / containerWidth) * 100

      // Clamp position between 0 and 100
      const clampedPosition = Math.max(0, Math.min(100, position))
      setSliderPosition(clampedPosition)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging])

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      {/* Title */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent z-20 p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>

      {/* Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[300px] md:h-[400px] select-none cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After Image (Full) */}
        <div className="absolute inset-0 z-10">
          <Image src={afterImage || "/placeholder.svg"} alt="After cleaning" fill className="object-cover" />
        </div>

        {/* Before Image (Clipped) */}
        <div className="absolute inset-0 z-20 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <Image src={beforeImage || "/placeholder.svg"} alt="Before cleaning" fill className="object-cover" />

          {/* Before Label */}
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            Before
          </div>
        </div>

        {/* After Label */}
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
          After
        </div>

        {/* Slider */}
        <div
          className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 16l4-4-4-4"></path>
              <path d="M8 8l-4 4 4 4"></path>
            </svg>
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-0 right-0 text-center z-30">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-black/50 text-white text-sm py-1 px-3 rounded-full inline-block"
          >
            Slide to compare
          </motion.div>
        </div>
      </div>
    </div>
  )
}
