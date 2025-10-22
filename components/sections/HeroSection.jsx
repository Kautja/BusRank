'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const calculateTimeLeft = () => {
    // ✅ updated to 30 October 2025
    const targetDate = new Date('2025-10-30T23:59:59');
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff > 0) {
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    } else {
      // When time runs out
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWaitlist = (e) => {
    e.preventDefault();
    router.push(`/contact?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-red-900 to-black overflow-hidden py-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full px-6">
        {/* ---------- LEFT ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left text-white max-w-lg"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Your <span className="text-red-500">Commute</span>, Reimagined
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            BusRank is launching soon 🚀. Join the movement and be among the first to experience smarter, faster, and more reliable mobility.
          </p>

          {/* Countdown */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-6 shadow-xl mb-6">
            <h2 className="text-2xl font-bold mb-2">⏳ Launching Soon</h2>
            <p className="mb-4">
              Mark your calendars: <b>30 October 2025</b>
            </p>

            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="text-2xl font-bold bg-white text-red-600 rounded-xl w-14 h-14 flex items-center justify-center">
                    {String(timeLeft[unit] ?? 0).padStart(2, '0')}
                  </div>
                  <span className="uppercase text-xs mt-1">{unit}</span>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleWaitlist}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-xl text-gray-800 w-full sm:w-64"
              />
              <button
                type="submit"
                className="bg-white text-red-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition"
              >
                Register With Us
              </button>
            </form>
          </div>
        </motion.div>

        {/* ---------- RIGHT: ONBOARDING IMAGES ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 md:mt-0"
        >
          <img
            src="/images/Onboarding1.png"
            alt="Onboarding Screen 1"
            className="w-48 md:w-56 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-300"
            style={{ aspectRatio: '9/19.5', objectFit: 'cover' }}
          />
          <img
            src="/images/Onboarding2.png"
            alt="Onboarding Screen 2"
            className="w-48 md:w-56 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-300"
            style={{ aspectRatio: '9/19.5', objectFit: 'cover' }}
          />
          <img
            src="/images/Onboarding3.png"
            alt="Onboarding Screen 3"
            className="w-48 md:w-56 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-300"
            style={{ aspectRatio: '9/19.5', objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
