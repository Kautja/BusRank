'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
    const router = useRouter();

    // -------- COUNTDOWN to Launch Day --------
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-10-10T23:59:59"); // Launch Date updated
        const diff = +targetDate - +new Date();
        let t = {};
        if (diff > 0) {
            t = {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            };
        }
        return t;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [email, setEmail] = useState('');
    const [chatOpen, setChatOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('chat'); // chat | help
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "🔥 Hey there! Got questions about BusRank? I'm here to give you the no-fluff answers." }
    ]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // -------- HANDLE WAITLIST --------
    const handleWaitlist = (e) => {
        e.preventDefault();
        router.push(`/contact?email=${encodeURIComponent(email)}`);
    };

    // -------- CHATBOT HANDLERS --------
    const handleChatSend = () => {
        if (!input.trim()) return;
        const userMsg = { sender: 'user', text: input };
        let reply = "😎 I'll get back to you on that.";
        if (input.toLowerCase().includes('price')) {
            reply = "💰 Prices will drop soon — starting from AED 89/day. Stay tuned.";
        } else if (input.toLowerCase().includes('launch')) {
            reply = "🚀 We're going live on **10 October 2025**. Get ready!";
        } else if (input.toLowerCase().includes('waitlist')) {
            reply = "✍️ Just enter your email above, and you’re in!";
        }
        setMessages([...messages, userMsg, { sender: 'bot', text: reply }]);
        setInput('');
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-black to-red-800">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                        Your <span className="text-red-500">Commute</span>, Reimagined
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                        BusRank is launching soon 🚀. Join the movement and be among the first to experience smarter, faster, and more reliable mobility.
                    </p>
                </motion.div>

                {/* Countdown */}
                <div className="mt-10 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">⏳ Launching Soon</h2>
                    <p className="text-lg mb-6">Mark your calendars: <b>10 October 2025</b></p>
                    <div className="flex justify-center gap-4 mb-6">
                        {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                            <div key={unit} className="flex flex-col items-center">
                                <div className="text-3xl font-bold bg-white text-red-600 rounded-xl w-16 h-16 flex items-center justify-center">
                                    {timeLeft[unit] ?? '00'}
                                </div>
                                <span className="uppercase text-xs mt-1">{unit}</span>
                            </div>
                        ))}
                    </div>

                    {/* Email Capture */}
                    <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 justify-center">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-3 rounded-xl text-gray-800 w-full sm:w-72"
                        />
                        <button
                            type="submit"
                            className="bg-white text-red-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition"
                        >
                            Join Waitlist
                        </button>
                    </form>
                </div>
            </div>

            {/* -------- Chatbot -------- */}
            <div className="fixed bottom-6 right-6 z-50">
                {chatOpen ? (
                    <div className="w-80 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
                        {/* Header Tabs */}
                        <div className="flex bg-red-600 text-white">
                            <button
                                onClick={() => setActiveTab('chat')}
                                className={`flex-1 p-3 font-bold ${activeTab === 'chat' ? 'bg-red-700' : ''}`}
                            >
                                💬 Chat
                            </button>
                            <button
                                onClick={() => setActiveTab('help')}
                                className={`flex-1 p-3 font-bold ${activeTab === 'help' ? 'bg-red-700' : ''}`}
                            >
                                📖 Help
                            </button>
                            <button onClick={() => setChatOpen(false)} className="px-3">✖</button>
                        </div>

                        {/* Chat Tab */}
                        {activeTab === 'chat' && (
                            <>
                                <div className="flex-1 p-3 overflow-y-auto space-y-2 h-64">
                                    {messages.map((msg, i) => (
                                        <div
                                            key={i}
                                            className={`p-2 rounded-xl max-w-[80%] ${
                                                msg.sender === 'bot'
                                                    ? 'bg-gray-200 text-black self-start'
                                                    : 'bg-red-500 text-white self-end ml-auto'
                                            }`}
                                        >
                                            {msg.text}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex p-2 border-t">
                                    <input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleChatSend()}
                                        placeholder="Type a message..."
                                        className="flex-1 px-3 py-2 rounded-xl border"
                                    />
                                    <button
                                        onClick={handleChatSend}
                                        className="ml-2 px-3 py-2 bg-red-600 text-white rounded-xl"
                                    >
                                        Send
                                    </button>
                                </div>
                            </>
                        )}

                        {/* Help Tab */}
                        {activeTab === 'help' && (
                            <div className="p-4 space-y-3">
                                <p className="text-sm text-gray-700">Need quick help? Reach us here:</p>
                                <a href="https://wa.me/1234567890" target="_blank" className="block bg-green-500 text-white px-4 py-2 rounded-xl text-center">💬 WhatsApp</a>
                                <a href="https://facebook.com" target="_blank" className="block bg-blue-600 text-white px-4 py-2 rounded-xl text-center">📘 Facebook</a>
                                <a href="https://instagram.com" target="_blank" className="block bg-pink-500 text-white px-4 py-2 rounded-xl text-center">📸 Instagram</a>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => setChatOpen(true)}
                        className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition"
                    >
                        💬
                    </button>
                )}
            </div>
        </section>
    );
};

export default HeroSection;
