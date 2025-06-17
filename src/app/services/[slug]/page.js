import React from "react";
import ServiceDetails from "./components/ServiceDetailsPage";
import { notFound } from "next/navigation";
import { HomeIcon, BuildingOfficeIcon, SparklesIcon } from "@heroicons/react/24/solid"

const servicesData = {
  "house-cleaning": {
    name: "Professional House Cleaning",
    category: "Residential Service",
    icon: <HomeIcon className="h-8 w-8 text-blue-600" />,
    description:
      "Regular house cleaning services to keep your home spotless and healthy. Choose from weekly, bi-weekly, or monthly cleaning schedules.",
    duration: "2-5 hours",
    image: "https://media.alohamaids.com/wp-content/uploads/2019/08/21104854/latina-worker.jpg",
    packages: {
      basic: {
        name: "Basic Clean",
        price: 80,
        duration: "2-3 hours",
        features: [
          "Kitchen cleaning (counters, sink, stovetop)",
          "Bathroom cleaning (toilet, sink, shower/tub)",
          "Dusting furniture and surfaces",
          "Vacuuming carpets and rugs",
          "Mopping hard floors",
          "Trash removal",
        ],
      },
      standard: {
        name: "Standard Clean",
        price: 120,
        duration: "3-4 hours",
        features: [
          "Everything in Basic Clean",
          "Inside microwave cleaning",
          "Refrigerator exterior cleaning",
          "Window sill cleaning",
          "Baseboards dusting",
          "Light switch and door handle sanitizing",
          "Mirror cleaning",
        ],
      },
      premium: {
        name: "Premium Clean",
        price: 180,
        duration: "4-5 hours",
        features: [
          "Everything in Standard Clean",
          "Inside oven cleaning",
          "Inside refrigerator cleaning",
          "Cabinet front cleaning",
          "Ceiling fan dusting",
          "Interior window cleaning",
          "Detailed bathroom scrubbing",
        ],
      },
    },
    formFields: ["bedrooms", "bathrooms", "frequency"],
  },
  "deep-cleaning": {
    name: "Deep Cleaning Service",
    category: "Intensive Cleaning",
    icon: <SparklesIcon className="h-8 w-8 text-blue-600" />,
    description:
      "Comprehensive deep cleaning service perfect for move-ins, move-outs, or seasonal cleaning. We clean areas that regular cleaning doesn't reach.",
    duration: "4-8 hours",
    image: "https://img.freepik.com/free-photo/full-shot-people-cleaning-office_23-2150454486.jpg?semt=ais_hybrid&w=740",
    packages: {
      standard: {
        name: "Standard Deep Clean",
        price: 250,
        duration: "4-6 hours",
        features: [
          "All regular cleaning tasks",
          "Inside all appliances (oven, refrigerator, microwave)",
          "Cabinet interiors and exteriors",
          "Baseboards and window sills",
          "Light fixtures and ceiling fans",
          "Door frames and switches",
          "Detailed bathroom scrubbing",
          "Closet cleaning",
        ],
      },
      premium: {
        name: "Premium Deep Clean",
        price: 350,
        duration: "6-8 hours",
        features: [
          "Everything in Standard Deep Clean",
          "Interior window cleaning",
          "Garage cleaning",
          "Basement/attic cleaning",
          "Pressure washing patios/decks",
          "Carpet deep cleaning",
          "Upholstery cleaning",
          "Wall washing",
        ],
      },
    },
    formFields: ["propertySize", "lastCleaned", "specialAreas"],
  },
  "office-cleaning": {
    name: "Office Cleaning Service",
    category: "Commercial Service",
    icon: <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />,
    description:
      "Professional commercial cleaning services for offices, retail spaces, and business facilities. Flexible scheduling to meet your business needs.",
    duration: "2-6 hours",
    image: "https://img.freepik.com/premium-photo/professional-service-team-cleaning-company_161094-21666.jpg?ga=GA1.1.620112731.1750165519&semt=ais_hybrid&w=740",
    packages: {
      basic: {
        name: "Basic Office Clean",
        price: 150,
        duration: "2-3 hours",
        features: [
          "Trash removal and recycling",
          "Desk and surface dusting",
          "Vacuuming carpets and rugs",
          "Mopping hard floors",
          "Restroom cleaning and sanitizing",
          "Kitchen/break room cleaning",
        ],
      },
      standard: {
        name: "Standard Office Clean",
        price: 250,
        duration: "3-4 hours",
        features: [
          "Everything in Basic Clean",
          "Window cleaning (interior)",
          "Conference room deep clean",
          "Reception area detailing",
          "Supply restocking",
          "Disinfection of high-touch surfaces",
          "Floor polishing",
        ],
      },
      premium: {
        name: "Premium Office Clean",
        price: 400,
        duration: "4-6 hours",
        features: [
          "Everything in Standard Clean",
          "Carpet deep cleaning",
          "Upholstery cleaning",
          "Air vent cleaning",
          "Light fixture cleaning",
          "Wall spot cleaning",
          "Exterior window cleaning",
        ],
      },
    },
    formFields: ["officeSize", "employees", "frequency", "afterHours"],
  },
  "carpet-cleaning": {
    name: "Carpet & Upholstery Cleaning",
    category: "Specialized Service",
    icon: <SparklesIcon className="h-8 w-8 text-blue-600" />,
    description:
      "Professional carpet and upholstery cleaning using advanced steam cleaning technology. Perfect for removing stains, odors, and allergens.",
    duration: "2-4 hours",
    image: "https://img.freepik.com/premium-photo/team-service-workers-cleaning-sofa-carpet-cuisine-table-panoramic-window_161094-21349.jpg?ga=GA1.1.620112731.1750165519&semt=ais_hybrid&w=740",
    packages: {
      carpet: {
        name: "Carpet Cleaning",
        price: 120,
        duration: "2-3 hours",
        features: [
          "Pre-treatment of stains",
          "Hot water extraction cleaning",
          "Deodorizing treatment",
          "Fast-drying process",
          "Furniture moving (light items)",
          "Post-cleaning inspection",
        ],
      },
      upholstery: {
        name: "Upholstery Cleaning",
        price: 80,
        duration: "1-2 hours",
        features: [
          "Fabric-appropriate cleaning",
          "Stain removal treatment",
          "Odor elimination",
          "Fabric protection application",
          "Quick-dry technology",
          "Color restoration",
        ],
      },
      combo: {
        name: "Carpet + Upholstery",
        price: 180,
        duration: "3-4 hours",
        features: [
          "Complete carpet cleaning",
          "All upholstery cleaning",
          "Stain and odor removal",
          "Fabric protection",
          "Pet odor elimination",
          "Allergen removal treatment",
        ],
      },
    },
    formFields: ["carpetArea", "furnitureCount", "stainType", "petOwner"],
  },
  "window-cleaning": {
    name: "Window Cleaning Service",
    category: "Specialized Service",
    icon: <SparklesIcon className="h-8 w-8 text-blue-600" />,
    description:
      "Professional interior and exterior window cleaning service. Streak-free results guaranteed with eco-friendly cleaning solutions.",
    duration: "1-4 hours",
    image: "https://img.freepik.com/free-photo/medium-shot-people-cleaning-building_23-2150454555.jpg?ga=GA1.1.620112731.1750165519&semt=ais_hybrid&w=740",
    packages: {
      interior: {
        name: "Interior Only",
        price: 80,
        duration: "1-2 hours",
        features: [
          "All interior windows",
          "Window sills cleaning",
          "Screen cleaning",
          "Mirror cleaning",
          "Glass door cleaning",
          "Streak-free guarantee",
        ],
      },
      exterior: {
        name: "Exterior Only",
        price: 120,
        duration: "2-3 hours",
        features: [
          "All exterior windows",
          "Screen removal and cleaning",
          "Window frame cleaning",
          "Sill and track cleaning",
          "High-reach equipment",
          "Weather-resistant cleaning",
        ],
      },
      complete: {
        name: "Interior + Exterior",
        price: 180,
        duration: "3-4 hours",
        features: [
          "Complete interior cleaning",
          "Complete exterior cleaning",
          "Screen cleaning both sides",
          "Frame and sill detailing",
          "Glass door cleaning",
          "Post-rain touch-up guarantee",
        ],
      },
    },
    formFields: ["windowCount", "stories", "screenType", "accessibility"],
  },
  "move-cleaning": {
    name: "Move-In/Move-Out Cleaning",
    category: "Specialized Service",
    icon: <HomeIcon className="h-8 w-8 text-blue-600" />,
    description:
      "Comprehensive cleaning service for property transitions. Perfect for getting your security deposit back or preparing your new home.",
    duration: "4-8 hours",
    image: "https://img.freepik.com/free-photo/happy-people-volunteering-special-causes_23-2148687314.jpg?ga=GA1.1.620112731.1750165519&semt=ais_hybrid&w=740",
    packages: {
      moveout: {
        name: "Move-Out Clean",
        price: 300,
        duration: "4-6 hours",
        features: [
          "Complete deep cleaning",
          "All appliance cleaning",
          "Cabinet interior cleaning",
          "Closet cleaning",
          "Bathroom deep scrub",
          "Floor deep cleaning",
          "Security deposit guarantee",
        ],
      },
      movein: {
        name: "Move-In Clean",
        price: 250,
        duration: "3-5 hours",
        features: [
          "Sanitization of all surfaces",
          "Kitchen deep clean",
          "Bathroom sanitization",
          "Floor cleaning and polishing",
          "Window cleaning",
          "Air vent cleaning",
          "Fresh start guarantee",
        ],
      },
      both: {
        name: "Move-Out + Move-In",
        price: 500,
        duration: "6-8 hours",
        features: [
          "Complete move-out service",
          "Complete move-in service",
          "Coordination between properties",
          "Flexible scheduling",
          "Double guarantee",
          "Priority booking",
        ],
      },
    },
    formFields: ["moveType", "propertySize", "moveDate", "keyAccess"],
  },
}
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) return {};

  return {
    title: `SparkleClean Pro ${service.name.toUpperCase()} | ${service.category}`,
    description: `Book ${service.name}.`,
  };
}

const Page = async ({ params }) => {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) return notFound();

  return (
    <div>
      <ServiceDetails service={service} />
    </div>
  );
};

export default Page;
