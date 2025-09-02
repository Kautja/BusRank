'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    Send,
    Zap,
    CreditCard,
    Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeTab, setActiveTab] = useState('general');
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    const contactInfo = [
        {
            icon: Phone,
            title: 'Call Us',
            details: ['+267-73 677 993', '+267 - 72 336 052'],
            color: 'from-red-500 to-rose-500',
            action: 'Call Now',
        },
        {
            icon: Mail,
            title: 'Email Us',
            details: ['support@busrank.app'],
            color: 'from-red-500 to-rose-500',
            action: 'Send Email',
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            details: ['Plot 70665 Block 10 Gaborone Botswana'],
            color: 'from-red-500 to-pink-500',
            action: 'Get Directions',
        },
        {
            icon: Clock,
            title: 'Business Hours',
            details: ['Mon-Fri: 8AM-8PM', 'Sat-Sun: 9AM-6PM'],
            color: 'from-orange-500 to-red-500',
            action: 'Book Appointment',
        },
    ];

    const supportCategories = [
        { id: 'general', title: 'General Inquiry', icon: MessageCircle, description: 'General questions about our services' },
        { id: 'booking', title: 'Booking Support', icon: CreditCard, description: 'Help with reservations and payments' },
        { id: 'technical', title: 'Technical Support', icon: Zap, description: 'Website and app technical issues' },
        { id: 'fleet', title: 'Fleet Information', icon: Truck, description: 'Questions about our vehicle fleet' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

          

            toast.success('Message sent successfully! We will get back to you soon.');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (err) {
            console.error(err);
            toast.error(`Failed to send message: ${err.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleContactAction = (action, details) => {
        switch (action) {
            case 'Call Now': window.location.href = `tel:${details[0]}`; break;
            case 'Send Email': window.location.href = `mailto:${details[0]}`; break;
            case 'Get Directions': window.open('https://www.google.com/maps/search/Plot+23041.+Phase+4+Gaborone+Botswana'); break;
            case 'Book Appointment': toast.success('Redirecting to booking page...'); break;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-pink-900">
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
                        >{['📞', '💬', '📍', '⏰', '🎯', '💎'][i]}</motion.div>
                    ))}
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white">
                        <h1 className="text-4xl md:text-7xl font-bold mb-6">
                            Get in
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 block">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                            We're here to help! Reach out to us for any questions, support, or just to say hello.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }} whileHover={{ y: -5 }} className="group cursor-pointer">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                                        {info.details.map((detail, i) => <p key={i} className="text-sm text-gray-600 mb-1">{detail}</p>)}
                                        <button onClick={() => handleContactAction(info.action, info.details)} className="text-red-500 font-medium text-sm hover:text-red-600 transition-colors mt-2">
                                            {info.action} →
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Support & Form Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Support Categories */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">How can we help?</h3>
                        <div className="space-y-4">
                            {supportCategories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <button key={category.id} onClick={() => setActiveTab(category.id)}
                                        className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${activeTab === category.id ? 'bg-red-50 border-2 border-red-200' : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'}`}>
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-10 h-10 rounded-lg ${activeTab === category.id ? 'bg-red-500' : 'bg-gray-300'} flex items-center justify-center`}>
                                                <Icon className={`w-5 h-5 ${activeTab === category.id ? 'text-white' : 'text-gray-600'}`} />
                                            </div>
                                            <div>
                                                <h4 className={`font-semibold ${activeTab === category.id ? 'text-red-600' : 'text-gray-900'}`}>{category.title}</h4>
                                                <p className="text-sm text-gray-600">{category.description}</p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors" placeholder="Enter your full name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors" placeholder="Enter your email" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors" placeholder="Enter your phone number" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                        <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors" placeholder="What's this about?" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                    <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none" placeholder="Tell us how we can help you..." />
                                </div>

                                <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                                    {isSubmitting ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending Message...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </div>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
