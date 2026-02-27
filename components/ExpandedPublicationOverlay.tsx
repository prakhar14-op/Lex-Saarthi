"use client";

import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface Publication {
    title: string;
    author: string;
    abstract: string;
    fullText?: React.ReactNode;
}

export function ExpandedPublicationOverlay({
    selectedPublication,
    setSelectedPublication,
}: {
    selectedPublication: Publication | null;
    setSelectedPublication: (pub: Publication | null) => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const [isFullTextOpen, setIsFullTextOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!selectedPublication) {
            setIsFullTextOpen(false); // Reset when closed
        }
    }, [selectedPublication]);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setSelectedPublication(null);
            }
        }

        if (selectedPublication) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [selectedPublication, setSelectedPublication]);

    useOutsideClick(ref, () => setSelectedPublication(null));

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {selectedPublication && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md h-full w-full"
                    />

                    <div className="fixed inset-0 grid place-items-center p-4">
                        <motion.button
                            key={`button-close`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-4 right-4 md:top-8 md:right-8 items-center justify-center bg-black/50 hover:bg-[#D4AF37] hover:text-black transition-colors rounded-full p-2 z-[100]"
                            onClick={() => setSelectedPublication(null)}
                        >
                            <X size={28} />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${selectedPublication.title}`}
                            ref={ref}
                            className={`relative z-10 w-full transition-all duration-500 ease-in-out ${isFullTextOpen ? "max-w-[1000px] h-[90vh]" : "max-w-[800px] h-fit max-h-[90vh]"} flex flex-col bg-[#0f0f11] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl`}
                        >
                            <div className="p-8 md:p-12 overflow-y-auto w-full relative">
                                <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4 block">
                                    Research Article
                                </span>

                                <motion.h3
                                    layoutId={`title-${selectedPublication.title}`}
                                    className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight"
                                >
                                    {selectedPublication.title}
                                </motion.h3>

                                <motion.p
                                    layoutId={`author-${selectedPublication.title}`}
                                    className="text-[#D4AF37]/80 font-medium mb-8"
                                >
                                    {selectedPublication.author}
                                </motion.p>

                                <div className="w-16 h-1 bg-[#D4AF37]/30 mb-8 rounded-full" />

                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-zinc-300 leading-relaxed md:text-lg"
                                >
                                    {isFullTextOpen && selectedPublication.fullText ? (
                                        <div className="mb-12 animate-in fade-in duration-500">
                                            {selectedPublication.fullText}
                                        </div>
                                    ) : (
                                        <div className="mb-12">
                                            {selectedPublication.abstract}
                                        </div>
                                    )}

                                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                        {!isFullTextOpen && selectedPublication.fullText && (
                                            <Button
                                                onClick={() => setIsFullTextOpen(true)}
                                                className="bg-[#D4AF37] text-black hover:bg-[#B8962E] font-bold h-12 px-8 rounded-full w-full sm:w-auto"
                                            >
                                                Read Full Text
                                            </Button>
                                        )}
                                        <Button
                                            variant="outline"
                                            className="border-white/20 text-black hover:text-black hover:bg-[#D4AF37] h-12 px-8 rounded-full w-full sm:w-auto transition-colors"
                                        >
                                            Download PDF
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
