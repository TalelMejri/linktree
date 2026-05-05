import { motion } from "framer-motion";
import { useState } from "react";
import {
    Globe,
    ExternalLink,
    Sparkles,
    Trophy,
    Bike,
    Rocket,
    Brain,
    Zap,
    Users,
} from "lucide-react";
import wie_logo from "@/assets/carthabot.png";
import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";

export default function App() {
    const [hoveredLink, setHoveredLink] = useState<number | null>(null);
    const [hoveredComp, setHoveredComp] = useState<number | null>(null);
    const [rippleEffect, setRippleEffect] = useState({ active: false, x: 0, y: 0 });
    console.log(rippleEffect);
    
    const socialLinks = [
        {
            name: "Facebook",
            description: "Follow our latest updates and events",
            icon: FacebookLogoIcon,
            url: "https://www.facebook.com/profile.php?id=61586318403762",
            color: "from-blue-600 to-blue-500",
            gradient: "from-blue-500/20 to-blue-600/20",
            iconColor: "text-blue-500",
            id: "CarthaBot"
        },
        {
            name: "Instagram",
            description: "Behind the scenes & highlights",
            icon: InstagramLogoIcon,
            url: "https://www.instagram.com/carthabot1.0/",
            color: "from-pink-600 to-purple-600",
            gradient: "from-pink-500/20 to-purple-600/20",
            iconColor: "text-pink-500",
            id: "CarthaBot"
        },
        {
            name: "Official Website",
            description: "Learn more about Carthabot 1.0",
            icon: Globe,
            url: "https://carthabot-ieee.vercel.app/",
            color: "from-emerald-600 to-teal-600",
            gradient: "from-emerald-500/20 to-teal-600/20",
            iconColor: "text-emerald-500",
            id: "https://carthabot-ieee.vercel.app/"
        }
    ];

    const competitions = [
        {
            name: "Galactic Cup",
            category: "Junior Soccer",
            description: "An exciting soccer challenge for junior participants",
            icon: Trophy,
            url: "https://docs.google.com/forms/d/e/1FAIpQLScHlVW7l7wec7HYkIna_yNl6C1er7EJggpzJJXK3bcs5cl3sA/viewform",
            color: "from-yellow-500 to-orange-500",
            gradient: "from-yellow-500/20 to-orange-500/20",
            iconColor: "text-yellow-400",
            ageGroup: "Junior"
        },
        {
            name: "Meteor Ball",
            category: "Senior Soccer",
            description: "High-intensity soccer competition for senior teams",
            icon: Zap,
            url: "https://docs.google.com/forms/d/e/1FAIpQLSf67U5D5atDLt_R-r2Q5RSuhhG99J3KusCIjuBJpw1wRtlYWg/viewform",
            color: "from-red-600 to-orange-600",
            gradient: "from-red-500/20 to-orange-500/20",
            iconColor: "text-red-400",
            ageGroup: "Senior"
        },
        {
            name: "Galactic Drift",
            category: "Line Follower",
            description: "Precision line following robotics challenge",
            icon: Bike,
            url: "https://docs.google.com/forms/d/e/1FAIpQLSe0Uin0pRM1pv712v3DFVvepA-Y-Nflk2wDVW4j8XOrmrxJDg/viewform",
            color: "from-cyan-600 to-blue-600",
            gradient: "from-cyan-500/20 to-blue-500/20",
            iconColor: "text-cyan-400",
            ageGroup: "Open"
        },
        {
            name: "Alien Quest",
            category: "Junior Challenge",
            description: "Problem-solving adventure for young innovators",
            icon: Brain,
            url: "https://docs.google.com/forms/d/e/1FAIpQLSe3Nzm4BzVw8XwuEnDJbHl7YHB603sxprfMZ8ymP2TmgBkfLw/viewform",
            color: "from-purple-600 to-pink-600",
            gradient: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-400",
            ageGroup: "Junior"
        },
        {
            name: "Nova Escape",
            category: "All-Terrain Challenge",
            description: "Navigate through challenging terrain obstacles",
            icon: Rocket,
            url: "https://docs.google.com/forms/d/e/1FAIpQLSeNNRZ2U2qUqmn2P_VDjG0cP1G70E1En8jDYIg1s01GYRrKug/viewform",
            color: "from-indigo-600 to-purple-600",
            gradient: "from-indigo-500/20 to-purple-500/20",
            iconColor: "text-indigo-400",
            ageGroup: "Open"
        }
    ];

    const organizedTeams = [
        {
            name: "IEEE ENICarthage SB",
            icon: Users,
            color: "from-blue-600 to-cyan-600"
        },
        {
            name: "IEEE RAS ENICarthage SBC",
            icon: Zap,
            color: "from-red-600 to-orange-600"
        }
    ];

    const handleRipple = (e: any, url: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log(url);
        setRippleEffect({ active: true, x, y });

        setTimeout(() => {
            setRippleEffect({ active: false, x: 0, y: 0 });
        }, 600);
    };

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000" />
                <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000" />
            </div>

            {/* Floating particles */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-pink-400 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, -100],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-4 py-4 md:py-2">
                {/* Profile Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className="relative inline-block group"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full opacity-50"
                            style={{ transform: 'scale(1.1)' }}
                        />
                        <div className="relative w-25 h-25 mx-auto mb-4 rounded-full bg-linear-to-r from-pink-500 to-purple-600 p-0.5 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                            <div className="w-full h-full rounded-full pt-3 bg-gray-800 flex items-center justify-center overflow-hidden">
                                <img src={wie_logo} alt="WIE ACT Logo" className="w-24 h-24 object-cover rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-2"
                    >
                        Carthabot <span className="font-black bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                            1.0
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                        </motion.div>
                        <span className="text-sm text-gray-300 font-medium">1st Edition | 06 May 2026</span>
                    </motion.div>
                </motion.div>

                {/* Competitions Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-400" />
                            Competitions
                        </h2>
                        <div className="h-px flex-1 ml-4 bg-linear-to-r from-yellow-500/20 to-transparent" />
                    </div>

                    <div className="space-y-3">
                        {competitions.map((comp, index) => (
                            <motion.a
                                key={comp.name}
                                href={comp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onMouseEnter={() => setHoveredComp(index)}
                                onMouseLeave={() => setHoveredComp(null)}
                                onClick={(e) => handleRipple(e, comp.url)}
                                className={`group relative flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border transition-all duration-300 overflow-hidden cursor-pointer
                                    ${hoveredComp === index
                                        ? 'border-yellow-500/50 shadow-xl'
                                        : 'border-gray-700 hover:border-gray-600'
                                    }`}
                            >
                                {/* Animated gradient background */}
                                <motion.div
                                    className={`absolute inset-0 bg-linear-to-r ${comp.gradient} opacity-0 transition-opacity duration-500`}
                                    animate={{ opacity: hoveredComp === index ? 1 : 0 }}
                                />

                                {/* Icon */}
                                <motion.div
                                    className={`p-2.5 rounded-lg bg-linear-to-br ${comp.color} transition-all duration-300 shadow-md`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <comp.icon className="w-5 h-5 text-white" />
                                </motion.div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-bold text-white text-base">
                                            {comp.name}
                                        </h3>
                                        <span className={`text-xs px-2 py-0.5 rounded-full bg-gray-700 text-${comp.iconColor.split('-')[1]}-300`}>
                                            {comp.category}
                                        </span>
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-300">
                                            {comp.ageGroup}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1">
                                        {comp.description}
                                    </p>
                                </div>

                                <ExternalLink className={`w-4 h-4 transition-all duration-300 
                                    ${hoveredComp === index ? 'text-yellow-400' : 'text-gray-500'}`}
                                />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Social Media Section */}
                <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-px flex-1 bg-linear-to-r from-transparent to-gray-700" />
                        <h2 className="text-sm font-medium text-gray-400">Connect With Us</h2>
                        <div className="h-px flex-1 bg-linear-to-r from-gray-700 to-transparent" />
                    </div>
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            id={link.id || undefined}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{
                                scale: 1.02,
                                x: 8,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                            whileTap={{ scale: 0.98 }}
                            onMouseEnter={() => setHoveredLink(index)}
                            onMouseLeave={() => setHoveredLink(null)}
                            onClick={(e) => handleRipple(e, link.url)}
                            className={`group relative flex items-center gap-4 p-3 rounded-xl bg-gray-800/60 backdrop-blur-sm border transition-all duration-500 overflow-hidden cursor-pointer
                                ${hoveredLink === index
                                    ? 'border-transparent shadow-xl'
                                    : 'border-gray-700/50 shadow-lg hover:shadow-xl'
                                }`}
                        >
                            <motion.div
                                className={`absolute inset-0 bg-linear-to-r ${link.gradient} opacity-0 transition-opacity duration-500`}
                                animate={{ opacity: hoveredLink === index ? 1 : 0 }}
                            />

                            <motion.div
                                className={`p-2 rounded-lg bg-linear-to-br ${link.color} transition-all duration-300 shadow-md relative overflow-hidden`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <link.icon className={`w-5 h-5 text-white`} />
                            </motion.div>

                            <div className="flex-1">
                                <h3 className="font-semibold text-white text-sm">
                                    {link.name}
                                </h3>
                                <p className="text-xs text-gray-400">
                                    {link.description}
                                </p>
                            </div>

                            <ExternalLink className={`w-4 h-4 transition-all duration-300 
                                ${hoveredLink === index ? 'text-pink-400' : 'text-gray-500'}`}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Organized By Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="mb-6"
                >
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-400" />
                            Organized By
                        </h2>
                        <div className="h-px flex-1 ml-3 bg-linear-to-r from-purple-500/20 to-transparent" />
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        {organizedTeams.map((team, index) => (
                            <motion.div
                                key={team.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.1 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="px-4 py-2 rounded-full bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 flex items-center gap-2"
                            >
                                <div className={`p-1 rounded-full bg-linear-to-r ${team.color}`}>
                                    <team.icon className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-xs text-gray-300">{team.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-center pt-4 pb-6"
                >
                    <p className="text-xs text-gray-600">
                        © 2026 Carthabot 1.0 | All Rights Reserved
                    </p>
                </motion.div>
            </div>

            <style>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animation-delay-6000 {
                    animation-delay: 6s;
                }
                .animation-delay-3000 {
                    animation-delay: 3s;
                }
            `}</style>
        </div>
    );
}