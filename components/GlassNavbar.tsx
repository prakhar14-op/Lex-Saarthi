"use client";

import { useState } from "react";
import GlassSurface from "./GlassSurface";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", id: "home" },
    { name: "Internships", id: "internships" },
    { name: "Publications", id: "publications" },
    { name: "Webinars", id: "webinars" },
    { name: "Contact", id: "contact" },
];

interface GlassNavbarProps {
    activePage: string;
    setActivePage: (page: string) => void;
}

export const GlassNavbar = ({ activePage, setActivePage }: GlassNavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLinkClick = (id: string) => {
        setActivePage(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <GlassSurface
                width="90%"
                height={72}
                borderRadius={36}
                backgroundOpacity={0.05}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-between px-6 md:px-8 max-w-[1200px]"
            >
                <div className="flex items-center justify-between w-full h-full">
                    {/* Left: Logo */}
                    <button
                        onClick={() => handleLinkClick('home')}
                        className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <img
                            src="/image.png"
                            alt="Lex Saarthi"
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                        <span className={`text-white font-bold text-lg md:text-xl tracking-tight block ${activePage === 'home' ? 'text-[#D4AF37]' : ''}`}>
                            Lex Saarthi
                        </span>
                    </button>

                    {/* Right: Links (Desktop) */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleLinkClick(link.id)}
                                className={`font-medium transition-all duration-300 cursor-pointer ${activePage === link.id
                                    ? 'text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]'
                                    : 'text-white hover:text-[#D4AF37]/70'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="text-[#C15B32] hover:opacity-80 transition-opacity"
                            aria-label="Open mobile menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </GlassSurface>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] backdrop-blur-xl bg-black/80 flex flex-col items-center justify-center p-6"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 text-[#C15B32] hover:opacity-80 transition-opacity"
                            aria-label="Close mobile menu"
                        >
                            <X size={40} />
                        </button>

                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleLinkClick(link.id)}
                                    className={`text-4xl font-bold transition-all duration-300 ${activePage === link.id
                                        ? 'text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]'
                                        : 'text-white hover:text-[#D4AF37]'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
