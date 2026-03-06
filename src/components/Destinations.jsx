import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const destinations = [
    {
        id: 1,
        title: 'Gunung Bromo',
        location: 'Jawa Timur',
        image: '/bromo.png',
        rating: 4.9,
        price: 'IDR 750k',
        description: 'Saksikan matahari terbit yang ikonik di atas lautan pasir vulkanik yang megah.'
    },
    {
        id: 2,
        title: 'Pantai Bali',
        location: 'Bali',
        image: '/bali.png',
        rating: 4.8,
        price: 'IDR 1.2M',
        description: 'Relaksasi di tepi pantai dengan pasir putih dan air laut biru yang jernih.'
    },
    {
        id: 3,
        title: 'Sawah Terasering',
        location: 'Ubud, Bali',
        image: '/hero.png',
        rating: 4.7,
        price: 'IDR 500k',
        description: 'Keindahan hijau yang menenangkan di tengah pedesaan Indonesia yang asri.'
    }
];

const Destinations = () => {
    return (
        <section id="destinations" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter"
                        >
                            Destinasi Populer
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 text-lg leading-relaxed"
                        >
                            Pilihan terbaik bagi Anda yang mencari ketenangan dan petualangan di alam terbuka. Temukan keindahan Nusantara.
                        </motion.p>
                    </div>
                    <button className="flex items-center gap-2 text-zinc-900 font-bold hover:gap-4 transition-all whitespace-nowrap">
                        Lihat Semua Destinasi <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-[32px] overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all h-full flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <div className="px-3 py-1 bg-white/90 backdrop-blur text-gray-900 rounded-full text-xs font-bold flex items-center gap-1">
                                        <Star size={12} className="fill-yellow-500 text-yellow-500" />
                                        {destination.rating}
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl text-white text-sm font-medium flex items-center gap-2 w-fit">
                                        <MapPin size={16} className="text-zinc-300" />
                                        {destination.location}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-zinc-600 transition-colors">
                                        {destination.title}
                                    </h3>
                                    <span className="text-zinc-900 font-black text-lg">{destination.price}</span>
                                </div>
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    {destination.description}
                                </p>
                                <div className="mt-auto border-t border-gray-50 pt-6">
                                    <button className="w-full py-4 bg-zinc-900 group-hover:bg-black text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                                        Booking Tiket Sekarang
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
