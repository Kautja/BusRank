'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  TrendingUp,
  Rocket,
  Calendar,
  Mic,
  Award,
  ArrowRight,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Newspaper,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsroomPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      title: 'BusRank Named One of Africa’s Fastest-Growing Mobility Startups',
      source: 'TechAfrica Today',
      date: 'September 2025',
      quote:
        'BusRank is reshaping public mobility across Southern Africa with its smart, real-time bus and taxi tracking technology.',
      icon: TrendingUp,
      fullContent:
        'BusRank is reshaping public mobility across Southern Africa with its smart, real-time bus and taxi tracking technology. Full article content goes here...',
    },
    {
      title: 'How BusRank is Digitizing Africa’s Transport System',
      source: 'Startup Digest Africa',
      date: 'August 2025',
      quote:
        'From Gaborone to Lusaka, the platform has transformed how commuters plan, book, and experience daily travel.',
      icon: Rocket,
      fullContent:
        'From Gaborone to Lusaka, the platform has transformed how commuters plan, book, and experience daily travel. Full article content goes here...',
    },
    {
      title: 'Dumba Motor Group Expands BusRank to Botswana’s North Region',
      source: 'The Business Weekly',
      date: 'June 2025',
      quote:
        'BusRank’s latest expansion marks a milestone in digital mobility coverage — connecting rural communities like never before.',
      icon: Calendar,
      fullContent:
        'BusRank’s latest expansion marks a milestone in digital mobility coverage — connecting rural communities like never before. Full article content goes here...',
    },
  ];

  const pressReleases = [
    {
      title:
        'Dumba Motor Group (Pty) LTD Launches Busrank App: Revolutionizing Mobility and Delivery Across Africa',
      date: 'October 8, 2025',
      summary:
        'Dumba Motor Group officially launches the Busrank App — a comprehensive platform redefining transport, courier, and car rental services across the African continent.',
      icon: Newspaper,
      fullContent: `Dumba Motor Group (Pty) LTD, a leading Car rental services provider in Botswana, today announced the official launch of the Busrank App, a comprehensive mobility platform designed to redefine urban commuting, bus bookings, courier services, and car rentals. 

Building on Dumba Motor Group's successful expansion into digital transportation since 2023, the Busrank App integrates seamless features including city cab hailing, private car rentals, bus reservations, social ride-sharing, and instant courier deliveries. Users can enjoy real-time tracking, affordable rates, and a user-friendly interface that prioritizes safety and reliability. The app is now available for download on iOS and Android devices in key markets such as Botswana, Burkina Faso, Côte d'Ivoire, Democratic Republic of Congo, Eswatini, Ethiopia, Ghana, Kenya, and more, with plans for further expansion.

"Our vision with Busrank is to empower Africans with innovative solutions that address everyday mobility challenges," said Solly KM Nthomang, Founder and CEO of Dumba Motor Group. "From bustling city streets to remote deliveries, Busrank connects people and goods efficiently, fostering economic growth and convenience. We're excited to launch this game-changing app and invite everyone to join the movement toward a more connected Africa."

Key features of the Busrank App include:
• Multi-Modal Transportation: Book cabs, buses, or rental cars in one place.
• Instant Delivery Services: Reliable courier options for packages and goods.
• Social Ride-Sharing: Connect with others for cost-effective and eco-friendly travel.
• Advanced Safety Measures: Real-time GPS, driver verification, and emergency support.
• Affordable Pricing: Competitive rates with no hidden fees, making it accessible to all.

For more information or to download the app, visit www.busrank.app.
      `,
    },
    {
      title:
        'DUMBA Motor Group Launches BusRank App in Gaborone, Botswana: Revolutionizing Mobility and Delivery Across Africa',
      date: 'October 9, 2025',
      summary:
        'BusRank is now available in Gaborone with real-time booking, bus tracking, courier services, and commuter-focused features for safer, smarter travel.',
      icon: Newspaper,
      fullContent: `Inspired by Botswana's cultural "bus rank" as a bustling public transport hub, BusRank brings this concept to the digital age. The app, now available on Android and iOS, integrates directly with DUMBA's extensive fleet of over 200 vehicles, offering real-time booking, bus tracking, instant deliveries, and commuter-focused features for safer, faster, and smarter travel. 

Since its inception in 2020 with an initial fleet of 10 cars, BusRank has grown rapidly to serve happy customers across 25+ cities in Africa. Backed by DUMBA's 6 years of transportation expertise, the app emphasizes innovation, trust, safety, and excellence—core values that have earned the group accolades and awards.

"Launching BusRank in our home city of Gaborone is a proud moment for DUMBA Motor Group," said Solly KM Nthomang, Group CEO and Founder of DUMBA Motor Group.

The app is available for free download on the Google Play Store and Apple App Store. For more information, visit www.busrank.app or follow @busrankapp on social media.
      `,
    },
  ];

  const announcements = [
    {
      title: 'BusRank v2.0 Launches This November',
      description:
        'The new version includes real-time driver ratings, in-app wallet top-ups, and AI-powered route suggestions.',
      date: 'October 2025',
      icon: Rocket,
    },
    {
      title: 'Partnership with Botswana Tourism Board',
      description:
        'We’re joining forces to support sustainable tourism transport routes across Botswana’s national parks.',
      date: 'September 2025',
      icon: Award,
    },
    {
      title: 'BusRank Featured at the Africa Mobility Summit 2025',
      description:
        'Our team presented regional mobility data insights and our future roadmap for intercity logistics.',
      date: 'July 2025',
      icon: Mic,
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-purple-900">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Floating Elements */}
        <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
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
              }}
            >
              {['📰', '🚍', '🎤', '📣', '✨', '🏆'][i]}
            </motion.div>
          ))}
        </motion.div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6"
          >
            BusRank{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Newsroom
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Stay updated with the latest BusRank announcements, press releases,
            and what the world is saying about our journey.
          </motion.p>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Press Releases
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Official updates and media statements from Dumba Motor Group and
              BusRank.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => {
              const Icon = release.icon;
              return (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-8 border border-gray-100 transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-red-500" />
                    <span className="text-sm text-gray-500">{release.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{release.summary}</p>
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-red-700 hover:translate-x-1 transition flex items-center gap-2"
                    onClick={() => setSelectedArticle(release)}
                  >
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Mentions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              In The Headlines
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here’s what the media and public are saying about BusRank’s impact
              on African mobility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 border border-gray-100 transition"
                >
                  <Icon className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 italic mb-4">
                    “{article.quote}”
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{article.source}</span>
                    <span>{article.date}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-red-700 hover:translate-x-1 transition flex items-center gap-2"
                    onClick={() => setSelectedArticle(article)}
                  >
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal for full article */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] p-6 flex flex-col relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Top Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedArticle(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Article Content */}
            <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
            <div className="overflow-y-auto flex-1 pr-2 mb-4">
              <p className="text-gray-700 whitespace-pre-line">
                {selectedArticle.fullContent || selectedArticle.summary}
              </p>
            </div>

            {/* Bottom Close Button */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="text-red-600 hover:text-red-700"
                onClick={() => setSelectedArticle(null)}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NewsroomPage;
