import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sunrise, Compass, Wind } from 'lucide-react';

const activities = [
    {
        icon: <Sunrise className="w-8 h-8" />,
        title: 'Sunrise Trekking',
        description: 'Nikmati keindahan matahari terbit dari puncak gunung dengan jalur pendakian yang menantang.'
    },
    {
        icon: <Camera className="w-8 h-8" />,
        title: 'Photography',
        description: 'Abadikan setiap momen berharga di spot-spot paling estetik yang tersebar di seluruh destinasi.'
    },
    {
        icon: <Compass className="w-8 h-8" />,
        title: 'Cultural Tour',
        description: 'Pelajari sejarah dan budaya lokal melalui tur edukasi yang mendalam dan interaktif.'
    },
    {
        icon: <Wind className="w-8 h-8" />,
        title: 'Paragliding',
        description: 'Rasakan adrenalin terbang di atas pemandangan alam yang hijau dan luas.'
    }
];

const Activities = () => {
    return (
        <section id="activities" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Pengalaman Unik
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight"
                    >
                        Aktivitas Yang Bisa Anda Nikmati
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg"
                    >
                        Bersiaplah untuk petualangan yang tidak akan pernah Anda lupakan. Kami menyediakan berbagai pilihan aktivitas menarik.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all group"
                        >
                            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                {activity.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{activity.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {activity.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;
