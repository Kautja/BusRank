'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Rocket,
  Users,
  Wallet,
  Heart,
  Globe,
  Zap,
  Star,
  ArrowRight,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const DreamsArchitecture = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const stats = [
    { label: 'Dream Builders', value: '10,000+', icon: Users },
    { label: 'Rewards Paid Out', value: 'P1M+', icon: Wallet },
    { label: 'Active Partners', value: '2,500+', icon: Globe },
    { label: 'Cities Connected', value: '20+', icon: Rocket },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description:
        'We believe in collective growth. The Earn & Share program turns your support into tangible rewards.',
      color: 'from-red-900 via-red-800 to-red-600',
    },
    {
      icon: Wallet,
      title: 'Empowered Earnings',
      description:
        'Invite, share, and earn. Every referral helps power Africa’s next mobility revolution.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Zap,
      title: 'Innovation Meets Impact',
      description:
        'BusRank rewards the people who fuel the movement — not just investors, but everyday dreamers.',
      color: 'from-red-900 via-red-800 to-red-600',
    },
    {
      icon: Star,
      title: 'Dream Driven',
      description:
        'Your dreams shape the architecture of our future. Together, we’re designing new realities.',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-red-900 via-black to-red-800">
        <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10 text-6xl"
              style={{ left: `${10 + i * 15}%`, top: `${20 + i * 12}%` }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
            >
              {['🚀', '💰', '🌍', '🔥', '⭐', '🚌'][i]}
            </motion.div>
          ))}
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-800 to-red-600">
              Dreams Architecture
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            The <span className="text-red-600 font-semibold">Earn & Share Program</span> by BusRank is more than rewards — it’s a blueprint for how dreams build mobility, freedom, and opportunity across Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-900 via-red-800 to-red-600 text-white font-semibold hover:opacity-90 px-8 py-4"
            >
              Join the Revolution
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-400 text-gray-200 hover:bg-gray-800 px-8 py-4"
            >
              Watch the Vision
              <Play className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black/30 backdrop-blur-lg border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Redefining Mobility, One Dream at a Time
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            BusRank’s <span className="text-red-600 font-medium">Earn & Share</span> program lets users earn rewards for helping expand Africa’s smartest mobility network.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg"
                >
                  <Icon className="w-10 h-10 text-red-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Architecture of Dreams
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every great change starts with belief — and the Earn & Share program rewards those who dare to dream and act.
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
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-900 via-red-800 to-red-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future with Us?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join the Earn & Share Program and turn your influence into income. Every share helps power Africa’s next mobility revolution.
          </p>
          <Button
            size="lg"
            className="bg-black text-red-600 hover:bg-gray-900 px-8 py-4 text-lg font-semibold"
          >
            Start Earning Now <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default DreamsArchitecture;
