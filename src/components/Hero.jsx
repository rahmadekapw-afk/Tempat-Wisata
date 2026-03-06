import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MousePointer2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900/10 backdrop-blur-md text-zinc-800 text-sm font-bold tracking-widest uppercase mb-6 border border-zinc-900/10">
                            Temukan Keajaiban Jember
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl tracking-tighter">
                            Jelajahi <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">Pesona Jember</span> di Jawa Timur.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200/90 mb-10 leading-relaxed max-w-2xl font-light">
                            Nikmati pengalaman tak terlupakan di destinasi wisata terbaik dengan pelayanan premium dan pemandangan yang memukau. Dari puncak gunung hingga kedalaman laut.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/30 text-lg"
                            >
                                Lihat Destinasi
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <a
                                href="#activities"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all text-lg"
                            >
                                Rencanakan Trip
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll untuk detail</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
