import React from 'react';
import { Plane, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-950 pt-24 pb-12 text-white relative overflow-hidden">
            {/* Newsletter */}
            <div className="container mx-auto px-6 border-b border-gray-800 pb-20">
                <div className="bg-blue-600 rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl shadow-blue-600/20 relative overflow-hidden">
                    <div className="relative z-10 text-center lg:text-left">
                        <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Siap Untuk Perjalanan Anda?</h3>
                        <p className="text-blue-100 text-lg">Daftar untuk mendapatkan update destinasi terbaru.</p>
                    </div>
                    <div className="relative z-10 w-full lg:w-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="px-8 py-5 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-80"
                            />
                            <button className="px-8 py-5 bg-white text-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all whitespace-nowrap">
                                Berlangganan <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="text-2xl font-black flex items-center gap-2 mb-8">
                            <Plane className="w-8 h-8 text-blue-500" />
                            <span className="tracking-tighter uppercase">Wisata.</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 font-light">
                            Menyediakan pengalaman perjalanan terbaik di Indonesia dengan standar premium dan pelayanan kelas dunia.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-gray-800">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-gray-800">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-gray-800">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Pintasan</h4>
                        <ul className="space-y-4">
                            {['Beranda', 'Destinasi', 'Aktivitas', 'Tentang Kami'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-all flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Bantuan</h4>
                        <ul className="space-y-4">
                            {['Pusat Bantuan', 'Syarat & Ketentuan', 'Kebijakan Privasi', 'Refund Trip'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-all">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-8">Hubungi Kami</h4>
                        <p className="text-gray-400 mb-4 font-light leading-relaxed">
                            Jl. Merdeka No. 123<br />
                            Jakarta Pusat, Indonesia<br />
                            info@wisata.co.id<br />
                            +62 123 4567 890
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-10 border-t border-gray-900 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-light">
                        © 2026 Wisata. All rights reserved. Dibuat dengan cinta untuk Indonesia.
                    </p>
                    <div className="flex items-center gap-8 text-sm text-gray-500 font-light">
                        <a href="#" className="hover:text-blue-500 transition-all">Support Center</a>
                        <a href="#" className="hover:text-blue-500 transition-all">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
