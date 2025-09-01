//components/common/CarCard.jsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Users, MapPin, Heart } from 'lucide-react';

const CityCard = ({ city, viewMode = 'grid' }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    if (viewMode === 'list') {
        return (
            <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
                <div className="flex flex-col md:flex-row">
                    {/* Image Container */}
                    <div className="relative md:w-80 h-48 md:h-auto bg-gray-200 flex-shrink-0">
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                <div className="text-gray-400">Loading...</div>
                            </div>
                        )}
                        <img
                            src={city.image}
                            alt={city.name}
                            className={`w-full h-full object-cover transition-opacity duration-300 ${
                                imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() => setImageLoaded(true)}
                        />

                        {/* Like Button */}
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors duration-200"
                        >
                            <Heart
                                className={`w-5 h-5 ${
                                    isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
                                }`}
                            />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {city.name}
                                </h3>
                                <p className="text-gray-600 mb-3">{city.country}</p>

                                <div className="flex items-center space-x-1 mb-4">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {city.rating}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        ({city.reviews} reviews)
                                    </span>
                                </div>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <Users className="w-4 h-4" />
                                        <span>{city.population} people</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <MapPin className="w-4 h-4" />
                                        <span>{city.region}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right side with stats */}
                            <div className="text-right ml-6">
                                <div className="text-2xl font-bold text-red-500 mb-1">
                                    {city.popularity}+
                                </div>
                                <div className="text-sm text-gray-600 mb-4">visits</div>

                                <Link href={`/cities/${city.id}`}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-full"
                                    >
                                        View Details
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Grid view (default)
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
        >
            {/* Image */}
            <div className="relative h-48 bg-gray-200 flex-shrink-0">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="text-gray-400">Loading...</div>
                    </div>
                )}
                <img
                    src={city.image}
                    alt={city.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                />

                {/* Like */}
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors duration-200"
                >
                    <Heart
                        className={`w-5 h-5 ${
                            isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
                        }`}
                    />
                </button>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{city.name}</h3>
                        <p className="text-sm text-gray-600">{city.country}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{city.rating}</span>
                        <span className="text-sm text-gray-500">({city.reviews})</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{city.population} people</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{city.region}</span>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-center pt-2 mt-auto">
                    <div className="flex flex-col">
                        <div className="text-2xl font-bold text-red-500">{city.popularity}+</div>
                        <span className="text-sm text-gray-600">visits</span>
                    </div>
                    <Link href={`/cities/${city.id}`} className="flex-shrink-0">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm whitespace-nowrap"
                        >
                            View Details
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default CityCard;
