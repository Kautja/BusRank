'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Rocket,
  Wallet,
  ArrowRight,
  Play,
  Upload,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const DreamsArchitecture = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

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
            The <span className="text-red-600 font-semibold">Earn & Share Program</span> by BusRank is a movement empowering dreamers across Africa to build mobility, opportunity, and freedom.
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

      {/* Register With Us Section */}
      <section className="py-24 bg-black text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Register With Us
          </motion.h2>
          <p className="text-lg text-gray-400 mb-12">
            Tell us about you and your mission. This is your chance to join our network and be part of a movement transforming Africa’s mobility landscape.
          </p>

          <form className="space-y-6 text-left bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-semibold">First Name *</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">Email Address *</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">Phone Number *</label>
                <div className="flex items-center">
                  <span className="px-3 py-3 bg-gray-800 border border-gray-700 rounded-l-xl text-gray-400">+27</span>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-r-xl text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">Upload ID Copy *</label>
                <input
                  type="file"
                  accept=".jpg,.png,.pdf"
                  className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-red-800 file:text-white hover:file:bg-red-700"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">
                Upload Supporting Docs (if applicable)
              </label>
              <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-red-600 transition">
                <Upload className="w-10 h-10 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-400 mb-2">
                  Drag and Drop (or) Choose Files
                </p>
                <input type="file" multiple accept=".jpg,.png,.pdf" className="hidden" />
                <p className="text-xs text-gray-500">
                  JPG, PNG & PDF files only. Max 3MB each.
                </p>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">Message</label>
              <textarea
                maxLength={500}
                placeholder="Tell us about your mission or goal..."
                className="w-full h-32 px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none resize-none"
              />
              <p className="text-sm text-gray-500 text-right mt-1">0 / 500</p>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-red-900 via-red-800 to-red-600 text-white font-semibold hover:opacity-90 px-8 py-4"
              >
                Apply Now
              </Button>
            </div>
          </form>
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
