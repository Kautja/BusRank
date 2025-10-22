'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DreamsArchitecture = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const [charCount, setCharCount] = useState(0);

  const handleCharCount = (e) => {

    setCharCount(e.target.value.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-gray-100 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-500">
        <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/20 text-6xl"
              style={{ left: `${10 + i * 15}%`, top: `${20 + i * 12}%` }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
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
            className="text-5xl md:text-7xl font-extrabold mb-6 text-white"
          >
            Register With <span className="text-yellow-300">BusRank</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Join us as a <span className="font-semibold">Company</span>,{' '}
            <span className="font-semibold">Bus Operator</span>,{' '}
            <span className="font-semibold">Cab Driver</span>, or{' '}
            <span className="font-semibold">Package Deliverer</span> — and be
            part of Africa’s next mobility revolution.
          </motion.p>
        </div>
      </section>

      {/* Register With Us Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-red-700"
          >
            Become Part of the Movement
          </motion.h2>
          <p className="text-lg text-gray-600 mb-12">
            Fill in your details below and we’ll reach out to you. Let’s build a
            connected Africa together.
          </p>

          <form
            action="mailto:support@busrank.app"
            method="POST"
            encType="multipart/form-data"
            className="space-y-6 text-left bg-white/90 backdrop-blur-md border border-red-100 p-8 rounded-2xl shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Country *
                </label>
                <select
                  name="country"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                  required
                >
                  <option value="">Select your country</option>
                  <option>Botswana (+267)</option>
                  <option>South Africa (+27)</option>
                  <option>Namibia (+264)</option>
                  <option>Zambia (+260)</option>
                  <option>Zimbabwe (+263)</option>
                  <option>Kenya (+254)</option>
                  <option>Nigeria (+234)</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+267 71234567"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  I’m Joining As *
                </label>
                <select
                  name="role"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                  required
                >
                  <option value="">Select category</option>
                  <option>Company / Organization</option>
                  <option>Bus Operator</option>
                  <option>Cab Driver</option>
                  <option>Package Deliverer</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Upload ID Copy *
                </label>
                <input
                  type="file"
                  name="id"
                  accept=".jpg,.png,.pdf"
                  className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-red-600 file:text-white hover:file:bg-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Message / Mission Statement
              </label>
              <textarea
                name="message"
                maxLength={500}
                onChange={handleCharCount}
                placeholder="Tell us about your mission or how you’d like to collaborate..."
                className="w-full h-32 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none resize-none"
              />
              <p className="text-sm text-gray-500 text-right mt-1">
                {charCount} / 500
              </p>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white font-semibold hover:opacity-90 px-8 py-4"
              >
                Submit Registration <ArrowRight className="ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Together, We Move Africa</h2>
          <p className="text-lg mb-8 opacity-90">
            Join a growing network of transport innovators and partners shaping
            the next generation of mobility across Africa.
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Join Now <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default DreamsArchitecture;
