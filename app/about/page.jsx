'use client';

import { useState, useEffect } from 'react';
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
    Car,
    ArrowRight,
    Play,
    Quote,
    Instagram,
    Twitter,
    Linkedin,
    Facebook,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('story');
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    const stats = [
        { label: 'Happy Customers', value: '50,000+', icon: Users },
        { label: 'Years Experience', value: '15+', icon: Award },
        { label: 'Cities Covered', value: '25+', icon: Globe },
        { label: 'Cars Available', value: '500+', icon: Car },
    ];

    const values = [
        {
            icon: Heart,
            title: 'Customer First',
            description:
                'Every decision we make is centered around providing exceptional customer experience.',
            color: 'from-red-500 to-pink-500',
        },
        {
            icon: Shield,
            title: 'Trust & Safety',
            description:
                'Your safety and security are our top priorities with comprehensive insurance coverage.',
            color: 'from-red-500 to-rose-500',
        },
        {
            icon: Zap,
            title: 'Innovation',
            description:
                'Constantly evolving with cutting-edge technology to enhance your rental experience.',
            color: 'from-yellow-500 to-orange-500',
        },
        {
            icon: Target,
            title: 'Excellence',
            description:
                'Striving for excellence in every aspect of our service and vehicle maintenance.',
            color: 'from-green-500 to-emerald-500',
        },
    ];

    const achievements = [
        {
            year: '2023',
            title: 'Best Car Rental Service',
            description: 'Awarded by Travel & Leisure Magazine',
            icon: Award,
        },
        {
            year: '2022',
            title: 'Customer Choice Award',
            description: 'Highest rated car rental platform',
            icon: Star,
        },
        {
            year: '2021',
            title: 'Innovation Excellence',
            description: 'Digital transformation leadership',
            icon: TrendingUp,
        },
        {
            year: '2020',
            title: 'Safety First Award',
            description: 'Industry-leading safety standards',
            icon: Shield,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-purple-900">
                    <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-white/10 text-4xl md:text-6xl"
                            style={{
                                left: `${10 + i * 15}%`,
                                top: `${20 + i * 15}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 10, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 6 + i,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}>
                            {['🚌', '🏆', '⭐', '💎', '🌟', '🎯'][i]}
                        </motion.div>
                    ))}
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white">
                        <h1 className="text-4xl md:text-7xl font-bold mb-6">
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 block">
                                BusRank
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                            We're not just a bus tracking company. We're your
                            partner in creating seamless journeys and
                            empowering your freedom to explore.
                        </p>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl">
                                    <Icon className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                    <div className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Story
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From a simple idea to a revolutionary bus tracking
                            platform that's changing how people move.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    A Vision Born from Experience
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Founded in 2025, BusRank began with a simple
                                    mission: to make bus tracking accessible,
                                    transparent, and reliable for everyone. Our
                                    founder experienced the frustrations of
                                    traditional tracking services firsthand.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    What started as a small fleet tracking system
                                    has grown into one of the most trusted
                                    platforms, serving thousands of users across
                                    multiple cities.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Founded', value: '2025' },
                                    { label: 'First City', value: 'Gaborone' },
                                    { label: 'First Fleet', value: '10 Buses' },
                                    { label: 'Today', value: '500+ Buses' },
                                ].map((milestone, index) => (
                                    <motion.div
                                        key={milestone.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.2 + index * 0.1,
                                        }}
                                        className="text-center p-4 bg-gray-50 rounded-lg">
                                        <div className="text-2xl font-bold text-red-500">
                                            {milestone.value}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {milestone.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative">
                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
                                <div className="relative">
                                    <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                                        <button
                                            onClick={() =>
                                                setIsVideoPlaying(
                                                    !isVideoPlaying,
                                                )
                                            }
                                            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                            <Play className="w-8 h-8 text-white ml-1" />
                                        </button>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                                        <div className="text-2xl font-bold text-red-500">
                                            1+
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Years of Excellence
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do and every
                            decision we make.
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
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ y: -10 }}
                                    className="group">
                                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                        <div
                                            className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-gradient-to-br from-red-500 to-red-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Awards & Recognition
                        </h2>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            Celebrating our achievements and the trust our
                            customers place in us.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <motion.div
                                    key={achievement.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-2">
                                        {achievement.year}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {achievement.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Experience BusRank?
                            </h2>
                            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                Join thousands of satisfied customers who trust
                                us for their bus tracking needs. Start your
                                journey today!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-white text-red-500 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
                                    Browse Our Fleet
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-red-500 px-8 py-3 text-lg font-medium">
                                    Contact Us
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
