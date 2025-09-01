//components/sections/ServicesSection.jsx
'use client';

import { motion } from 'framer-motion';
import {
    Shield,
    Clock,
    MapPin,
    Headphones,
    CreditCard,
    Users,
} from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: Shield,
            title: 'Full Insurance Coverage',
            description:
                'All trips come with comprehensive coverage for your peace of mind.',
            color: 'bg-blue-100 text-blue-600',
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description:
                'Round-the-clock assistance whenever you need us.',
            color: 'bg-green-100 text-green-600',
        },
        {
            icon: MapPin,
            title: 'Multiple Locations',
            description:
                'Convenient pick-up and drop-off points across the city.',
            color: 'bg-purple-100 text-purple-600',
        },
        {
            icon: Headphones,
            title: 'Expert Assistance',
            description:
                'Our professional team is ready to help you select the right service whether daily, weekly, or monthly.',
            color: 'bg-orange-100 text-orange-600',
        },
        {
            icon: CreditCard,
            title: 'Flexible Payment',
            description:
                'Multiple payment options including credit cards, debit cards, and digital wallets.',
            color: 'bg-pink-100 text-pink-600',
        },
        {
            icon: Users,
            title: 'Group Discounts',
            description:
                'Special rates for group bookings and long-term rentals for businesses.',
            color: 'bg-indigo-100 text-indigo-600',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We provide exceptional service and value to make your bus booking experience smooth, reliable, and enjoyable.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div
                                    className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-center mt-16"
>
  <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white shadow-xl">
    <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide">
      🚗 Your Next Adventure Starts NOW!
    </h3>
    <p className="text-lg md:text-xl mb-6 opacity-90 font-medium">
      Don’t just move yourself <span className="font-bold text-white">own the road</span>.  
      Fast, sleek, and built for unforgettable journeys.
    </p>
    <a
      href="/cars"
      className="inline-flex items-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-md"
    >
       Browse Our Fleet
    </a>
  </div>
</motion.div>

            </div>
        </section>
    );
};

export default ServicesSection;
