'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Star, ShoppingBag, Timer, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MerchPage = () => {
  const [hovered, setHovered] = useState(false);

  const merchItems = [
    {
      name: 'BusRank Street Tee',
      description: 'Minimal, powerful, and designed for the streets of Gaborone.',
      image: '/images/merch1.jpg',
      color: 'from-red-500 to-rose-600',
    },
    {
      name: 'Rank Culture Hoodie',
      description: 'Where comfort meets mobility. A hoodie made for dream chasers.',
      image: '/images/merch2.jpg',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      name: 'Limited Edition Cap',
      description: 'Lowkey flex. Only a few drops will ever exist.',
      image: '/images/merch3.jpg',
      color: 'from-gray-900 to-gray-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            BusRank Merch
          </span>{' '}
          Drops Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
        >
          Streetwear meets movement. Our first-ever drop hits by{' '}
          <span className="text-red-400 font-semibold">End of 2025</span>. Limited runs. Infinite energy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 text-lg font-semibold px-8 py-3"
          >
            Join the Drop List
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black text-lg font-semibold px-8 py-3"
          >
            Follow on Instagram
            <Instagram className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl text-red-500/30"
        >
          <Sparkles />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-6xl text-yellow-500/30"
        >
          <Flame />
        </motion.div>
      </section>

      {/* Merch Showcase */}
      <section className="py-24 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            🔥 First Drop — “Movement is Culture”
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {merchItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(false)}
                className="relative group cursor-pointer"
              >
                <div
                  className={`overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} shadow-xl transform group-hover:scale-105 transition-all duration-500`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-gray-400 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-500 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Timer className="mx-auto w-14 h-14 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Countdown Has Begun
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Every piece will represent the movement behind BusRank — freedom,
            ambition, and African innovation. Only a limited number will drop.
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium"
          >
            Notify Me When It Drops
          </Button>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 bg-black text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
            Be part of the story. Don’t just wear it — live it.
          </h3>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-500 to-yellow-500 text-white hover:scale-105 transition-transform duration-300"
          >
            Join The Movement
            <ShoppingBag className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </footer>
    </div>
  );
};

export default MerchPage;
