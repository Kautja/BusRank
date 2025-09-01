'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CityCard from '@/components/common/CityCard';

// Featured country/city data (replace images with your own)
const countries = [
  {
    id: 1,
    name: 'Gaborone',
    country: 'Botswana (HQ)',
    population: '270,000+',
    rating: 4.6,
    image: '/images/cities/botswana.jpg',
  },
  {
    id: 2,
    name: 'Windhoek',
    country: 'Namibia',
    population: '430,000+',
    rating: 4.5,
    image: '/images/cities/namibia.jpg',
  },
  {
    id: 3,
    name: 'Nairobi',
    country: 'Kenya',
    population: '4.4M',
    rating: 4.8,
    image: '/images/cities/kenya.jpg',
  },
  {
    id: 4,
    name: 'Lusaka',
    country: 'Zambia',
    population: '3.3M',
    rating: 4.4,
    image: '/images/cities/zambia.jpg',
  },
  {
    id: 5,
    name: 'Karachi',
    country: 'Pakistan',
    population: '16M+',
    rating: 4.7,
    image: '/images/cities/pakistan.jpg',
  },
  {
    id: 6,
    name: 'Cape Town',
    country: 'South Africa',
    population: '4.6M',
    rating: 4.9,
    image: '/images/cities/south-africa.jpg',
  },
  // 👉 Continue adding Ghana, Uganda, Rwanda, Malawi, Zimbabwe, Tanzania, Côte d’Ivoire, USA, UK, Zanzibar, UAE...
];

const FeaturedCountries = () => {
  const [loading] = useState(false);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Countries
            </h2>
          </div>
          <div className="flex justify-center">
            <p>Loading featured countries...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Countries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to operate in multiple countries worldwide. Explore some of our featured cities and discover where our services are available — from our headquarters in Botswana to the USA, UK, and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CityCard city={city} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/countries"
            className="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCountries;
