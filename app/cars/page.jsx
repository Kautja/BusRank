'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Users,
    Award,
    Target,
    Heart,
    Shield,
    Zap,
    Globe,
    Star,
    TrendingUp,
    Bus,
    Truck,
    Car,
    ArrowRight,
    Play,
    Instagram,
    Twitter,
    Linkedin,
    Facebook,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    const stats = [
        { label: 'Happy Travelers', value: '50,000+', icon: Users },
        { label: 'Cities & Routes', value: '25+', icon: Globe },
        { label: 'Buses & Cabs', value: '500+', icon: Bus },
        { label: 'Years of Service', value: '15+', icon: Award },
    ];

    const values = [
        {
            icon: Heart,
            title: 'Passenger First',
            description:
                'Every ride, parcel, or booking is designed around customer satisfaction and trust.',
            color: 'from-red-500 to-pink-500',
        },
        {
            icon: Shield,
            title: 'Trust & Safety',
            description:
                'Your safety, parcel security, and peace of mind are our top priorities.',
            color: 'from-red-600 to-red-400',
        },
        {
            icon: Zap,
            title: 'Innovation',
            description:
                'Driving digital transformation in African mobility with technology and automation.',
            color: 'from-yellow-500 to-orange-500',
        },
        {
            icon: Target,
            title: 'Excellence',
            description:
                'We aim for excellence in every journey, delivery, and service we provide.',
            color: 'from-green-500 to-emerald-500',
        },
    ];
    const faqs = [
        {
            question: 'What documents do I need to rent a car?',
            answer: "You need a valid driver's license, credit card, and proof of insurance. International drivers need an International Driving Permit.",
        },
        {
            question: 'What is your cancellation policy?',
            answer: 'Free cancellation up to 24 hours before pickup. Late cancellations may incur a fee.',
        },
        {
            question: 'Do you offer insurance coverage?',
            answer: 'Yes, we offer comprehensive insurance coverage including collision damage waiver and personal accident insurance.',
        },
        {
            question: 'Can I extend my rental period?',
            answer: 'Yes, you can extend your rental by contacting us at least 24 hours before the scheduled return time.',
        },
        {
            question: 'What happens if I return the car late?',
            answer: 'Late returns may incur additional charges. Please contact us if you need to extend your rental.',
        },
        {
            question: 'Do you have a loyalty program?',
            answer: 'Yes, our RentCar Rewards program offers points for every rental, exclusive discounts, and priority booking.',
        },
    ];


    const team = [
        {
            name: 'Solly KM Nthomang',
            role: 'Founder & CEO',
            image: '/images/solly.png',
            bio: 'Visionary leader expanding mobility solutions across Africa and beyond.',
            social: { linkedin: '#', twitter: '#', instagram: '#' },
        },
        {
            name: 'Unotjari Oats',
            role: 'Chief Developer',
            image: '/images/oats.png',
            bio: 'Leading the development of BusRank’s multi-service platform.',
            social: { linkedin: '#', twitter: '#', instagram: '#' },
        },
    ];

    const achievements = [
        {
            year: '2025',
            title: 'Best Mobility Startup',
            description: 'Recognized for innovation in transport & delivery.',
            icon: Award,
        },
        {
            year: '2024',
            title: 'Customer Choice Award',
            description: 'Top-rated bus booking and parcel delivery platform.',
            icon: Star,
        },
        {
            year: '2023',
            title: 'Innovation Excellence',
            description: 'Awarded for cross-border digital transformation.',
            icon: TrendingUp,
        },
        {
            year: '2022',
            title: 'Safety First Award',
            description: 'For industry-leading passenger & parcel security.',
            icon: Shield,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-purple-900">
                    <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-white/10 text-4xl md:text-6xl"
                            style={{ left: `${10 + i * 15}%`, top: `${20 + i * 15}%` }}
                            animate={{ y: [0, -30, 0], rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            {['🚌', '📦', '🚕', '🌍', '⭐', '🎯'][i]}
                        </motion.div>
                    ))}
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <h1 className="text-4xl md:text-7xl font-bold mb-6">
                            BusRank
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 block">
                                Services
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                            We’re not just a booking app. We’re building the world´s most trusted 
                            network for buses, cabs, car rentals, and parcel deliveries, Patnership program
                            all in one platform.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl"
                                >
                                    <Icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                                    <div className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that power Africa’s leading transport & delivery ecosystem.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
             {/* FAQ Section */}
             <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Find quick answers to common questions about our car
                            rental services.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-12 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Experience BusRank?
                            </h2>
                            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                Join thousands of happy customers moving safely, quickly, 
                                and affordably with Africa’s trusted transport & delivery app.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
                                >
                                    Book a Trip <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg font-medium"
                                >
                                    Partner With Us
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
