import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/hooks/useAuth';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/layout/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

// ✅ Updated metadata for BusRank branding
export const metadata: Metadata = {
    title: 'BusRank - City Cabs, Bus Booking, Courier & Car Rentals',
    description:
        'BusRank connects you with reliable city cabs, bus booking, courier services, and premium car rentals. Trusted by locals and international travelers alike.',
    keywords:
        'bus booking, car rental, courier services, city cabs, international transport, busrank',
    authors: [{ name: 'BusRank' }],
    icons: {
        icon: '/images/logo.jpg', // ✅ place logo in /public folder
    },
};

// ✅ Mobile friendly viewport
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* ✅ BusRank Logo in title/tab */}
                <link rel="icon" href="/images/logo.jpg" sizes="any" />
            </head>
            <body className={inter.className}>
                <AuthProvider>
                    <div className="min-h-screen flex flex-col">
                        <Header />
                        <main className="flex-grow pt-16">{children}</main>
                        <Footer />
                       
                    </div>
                    <Toaster
                        position="top-right"
                        toastOptions={{
                            duration: 4000,
                            style: {
                                background: '#363636',
                                color: '#fff',
                            },
                            success: {
                                style: {
                                    background: '#10B981',
                                },
                            },
                            error: {
                                style: {
                                    background: '#EF4444',
                                },
                            },
                        }}
                    />
                </AuthProvider>
            </body>
        </html>
    );
}
