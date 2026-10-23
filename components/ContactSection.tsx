"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    User,
    Send,
    CheckCircle2,
    AlertCircle,
    Copy,
    Check,
    Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
    className?: string;
    isStandalonePage?: boolean;
}

export default function ContactSection({ className = "", isStandalonePage = false }: ContactSectionProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "Law Student",
        subject: "Internship Application & Inquiries",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [submissionResult, setSubmissionResult] = useState<{
        success: boolean;
        needsActivation?: boolean;
        delivered?: boolean;
        method?: string;
        message?: string;
    } | null>(null);

    const roles = [
        "Law Student",
        "Practicing Advocate",
        "Legal Scholar / Researcher",
        "Prospective Intern",
        "Other"
    ];

    const subjects = [
        "Internship Application & Inquiries",
        "Manuscript / Research Publication",
        "Expert Webinars & Masterclasses",
        "Advocate Mentorship & Guidance",
        "Institutional Collaboration",
        "General Legal Query"
    ];

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("lexsaarthi@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        if (!formData.email.trim() || !formData.message.trim()) {
            setErrorMessage("Please provide both your email address and message.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Attempt transmission via Next.js internal API
            let response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            // If local API fails, fallback to direct FormSubmit endpoint with token
            if (!response.ok) {
                response = await fetch("https://formsubmit.co/ajax/81add81ea524f0807f9e4913cf2852d0", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        _subject: `[Lex Saarthi Contact] ${formData.subject} from ${formData.name || formData.email}`,
                        _template: "table",
                        Name: formData.name || "Not specified",
                        Email: formData.email,
                        Phone: formData.phone || "Not provided",
                        Role: formData.role,
                        Subject: formData.subject,
                        Message: formData.message,
                        Timestamp: new Date().toLocaleString()
                    })
                });
            }

            const data = await response.json().catch(() => null);

            if (response.ok && data) {
                setSubmissionResult(data);
                setIsSubmitted(true);
            } else {
                throw new Error(data?.error || data?.message || "Unable to dispatch message at this time.");
            }
        } catch (err: any) {
            console.error("Submission error:", err);
            setErrorMessage(err?.message || "There was an issue sending your message. You can reach out directly via email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            role: "Law Student",
            subject: "Internship Application & Inquiries",
            message: ""
        });
        setIsSubmitted(false);
        setErrorMessage("");
    };

    const mailtoHref = `mailto:lexsaarthi@gmail.com?subject=${encodeURIComponent(
        `[Lex Saarthi Inquiry] ${formData.subject || 'Website Message'}`
    )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`
    )}`;

    return (
        <section className={`relative overflow-hidden ${isStandalonePage ? 'pt-40 pb-28' : 'py-28'} px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 ${className}`}>
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-[0.25em] uppercase mb-4"
                    >
                        <Sparkles size={14} /> Connect With Lex Saarthi
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
                    >
                        Get in Touch with Our <br />
                        <span className="text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                            Legal Mentors &amp; Editors
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed"
                    >
                        Whether you are seeking courtroom internship guidance, looking to publish your research paper,
                        or have legal inquiries — our team is here to assist your journey.
                    </motion.p>
                </div>

                {/* Main Content Grid: Direct Email (Left 4 cols) + Contact Form (Right 8 cols) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                    {/* Left Column: Direct Email (4 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 space-y-6 lg:sticky lg:top-32"
                    >
                        {/* Direct Email Card */}
                        <div className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-[#D4AF37]/40 p-8 rounded-[32px] transition-all duration-500 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-500 pointer-events-none" />

                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                                    <Mail size={26} />
                                </div>
                                <div>
                                    <span className="text-zinc-400 text-xs font-semibold tracking-wider uppercase block">Official Correspondence</span>
                                    <h3 className="text-white font-bold text-xl">Direct Email</h3>
                                </div>
                            </div>

                            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                                Messages sent via this form or sent directly will reach our central desk at:
                            </p>

                            <div className="bg-black/60 border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-3">
                                <a
                                    href="mailto:lexsaarthi@gmail.com"
                                    className="text-white hover:text-[#D4AF37] font-semibold text-base sm:text-lg transition-colors truncate"
                                >
                                    lexsaarthi@gmail.com
                                </a>
                                <button
                                    onClick={handleCopyEmail}
                                    title="Copy Email Address"
                                    className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 text-zinc-300 hover:text-[#D4AF37] transition-all duration-300 shrink-0"
                                    aria-label="Copy Email"
                                >
                                    {copiedEmail ? <Check size={18} className="text-[#D4AF37]" /> : <Copy size={18} />}
                                </button>
                            </div>
                            {copiedEmail && (
                                <p className="text-[#D4AF37] text-xs font-medium mt-2 pl-1 animate-pulse">
                                    ✓ Copied lexsaarthi@gmail.com to clipboard
                                </p>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column: The Interactive Contact Form (8 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-8"
                    >
                        <div className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-[36px] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
                            {/* Subtle Gold Accent border glow */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    /* Success State View */
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="py-10 px-4 text-center space-y-6"
                                    >
                                        {submissionResult?.needsActivation ? (
                                            <>
                                                <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37]/15 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                                                    <Sparkles size={40} />
                                                </div>

                                                <div className="space-y-2">
                                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Almost Done!</h3>
                                                    <p className="text-zinc-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                                                        Thank you, <strong className="text-white">{formData.name || "Scholar"}</strong>. Your message is ready for delivery.
                                                    </p>
                                                </div>

                                                {/* Notice for One-Time Activation */}
                                                <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 p-6 rounded-2xl max-w-xl mx-auto text-left space-y-3 shadow-lg">
                                                    <div className="flex items-center gap-2.5 text-[#D4AF37] font-bold text-base sm:text-lg">
                                                        <AlertCircle size={22} className="shrink-0" />
                                                        <span>One-Time Form Activation Required</span>
                                                    </div>
                                                    <p className="text-zinc-200 text-sm leading-relaxed">
                                                        A verification email with an <strong className="text-white">&ldquo;Activate Form&rdquo;</strong> button has just been sent to <strong className="text-[#D4AF37]">lexsaarthi@gmail.com</strong>.
                                                    </p>
                                                    <p className="text-zinc-400 text-xs leading-relaxed">
                                                        Please open <strong className="text-zinc-300">lexsaarthi@gmail.com</strong> (check your Inbox, Updates, or Spam folder) and click <strong className="text-[#D4AF37]">Activate Form</strong> once. After this one-time click, all future messages submitted on this website will land directly in your inbox!
                                                    </p>
                                                    <div className="pt-2">
                                                        <a
                                                            href={mailtoHref}
                                                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold text-sm transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-[1.02]"
                                                        >
                                                            <Mail size={16} /> Send This Note Directly from Your Email App Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37]/15 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                                                    <CheckCircle2 size={42} />
                                                </div>

                                                <div className="space-y-2">
                                                    <h3 className="text-3xl font-bold text-white">Message Dispatched!</h3>
                                                    <p className="text-zinc-300 text-base max-w-md mx-auto leading-relaxed">
                                                        Thank you, <strong className="text-white">{formData.name || "Scholar"}</strong>. Your query has been forwarded to{" "}
                                                        <strong className="text-[#D4AF37]">lexsaarthi@gmail.com</strong>.
                                                    </p>
                                                </div>

                                                <div className="bg-black/60 border border-white/5 p-5 rounded-2xl max-w-md mx-auto text-left text-sm text-zinc-400 space-y-2">
                                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                                        <span>Subject:</span>
                                                        <span className="text-white font-medium">{formData.subject}</span>
                                                    </div>
                                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                                        <span>Sender:</span>
                                                        <span className="text-white font-medium">{formData.email}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Expected Response:</span>
                                                        <span className="text-[#D4AF37] font-medium">Within 24-48 Hours</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                                            <Button
                                                onClick={handleReset}
                                                className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold h-12 px-8 rounded-full text-base transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105"
                                            >
                                                Send Another Inquiry
                                            </Button>
                                            <a
                                                href={mailtoHref}
                                                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm py-2 px-4 transition-colors underline"
                                            >
                                                <Mail size={16} /> Open in Email App (Gmail / Outlook)
                                            </a>
                                        </div>
                                    </motion.div>
                                ) : (
                                    /* Active Form View */
                                    <form onSubmit={handleSubmit} className="space-y-7">
                                        <div className="border-b border-white/10 pb-5 mb-7">
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white">Send Us a Message</h3>
                                            <p className="text-zinc-400 text-sm sm:text-base mt-1.5">
                                                Fill out the details below. Our mentors will receive your note at <span className="text-[#D4AF37] font-semibold">lexsaarthi@gmail.com</span>.
                                            </p>
                                        </div>

                                        {/* Error Alert if any */}
                                        {errorMessage && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40 text-red-200 text-sm flex items-start gap-3"
                                            >
                                                <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                                                <div className="flex-1">
                                                    <p>{errorMessage}</p>
                                                    <a
                                                        href={mailtoHref}
                                                        className="inline-flex items-center gap-1.5 text-[#D4AF37] font-semibold text-xs mt-2 underline hover:text-white"
                                                    >
                                                        Click here to send directly via Gmail/Mail Client →
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Role / Affiliation Pills */}
                                        <div>
                                            <label className="block text-zinc-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
                                                I am a...
                                            </label>
                                            <div className="flex flex-wrap gap-2.5">
                                                {roles.map((r) => {
                                                    const isSelected = formData.role === r;
                                                    return (
                                                        <button
                                                            key={r}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, role: r })}
                                                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${isSelected
                                                                    ? "bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                                                    : "bg-black/40 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20"
                                                                }`}
                                                        >
                                                            {r}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Row 1: Name and Email */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Full Name Box */}
                                            <div>
                                                <label className="block text-zinc-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2.5">
                                                    Full Name
                                                </label>
                                                <div className="relative">
                                                    <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                                                    <input
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        placeholder="e.g. Adv. Aryan Sharma"
                                                        className="w-full h-14 bg-black/60 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder-zinc-500 text-base focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all shadow-inner"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email Address Box (REQUIRED) */}
                                            <div>
                                                <label className="block text-zinc-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2.5">
                                                    Email Address <span className="text-[#D4AF37]">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        placeholder="name@example.com"
                                                        className="w-full h-14 bg-black/60 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder-zinc-500 text-base focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all shadow-inner"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 2: Phone Number and Subject */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Phone / WhatsApp Box */}
                                            <div>
                                                <label className="block text-zinc-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2.5">
                                                    Phone / WhatsApp
                                                </label>
                                                <div className="relative">
                                                    <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        placeholder="+91 98765 43210"
                                                        className="w-full h-14 bg-black/60 border border-white/10 rounded-2xl pl-12 pr-4 text-white placeholder-zinc-500 text-base focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all shadow-inner"
                                                    />
                                                </div>
                                            </div>

                                            {/* Subject / Purpose Box */}
                                            <div>
                                                <label className="block text-zinc-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2.5">
                                                    Subject / Purpose
                                                </label>
                                                <select
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    className="w-full h-14 bg-black/60 border border-white/10 rounded-2xl px-4 text-white text-base focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all cursor-pointer shadow-inner"
                                                >
                                                    {subjects.map((sub) => (
                                                        <option key={sub} value={sub} className="bg-zinc-900 text-white py-2">
                                                            {sub}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message Box (REQUIRED) */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2.5">
                                                <label className="block text-zinc-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                                                    Your Message / Query <span className="text-[#D4AF37]">*</span>
                                                </label>
                                                <span className="text-zinc-500 text-xs">Direct to lexsaarthi@gmail.com</span>
                                            </div>
                                            <div className="relative">
                                                <textarea
                                                    required
                                                    rows={6}
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    placeholder="Describe your inquiry, internship application query, research paper topic, or legal mentorship requirement..."
                                                    className="w-full bg-black/60 border border-white/10 rounded-2xl p-5 text-white placeholder-zinc-500 text-base focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all resize-none leading-relaxed min-h-[170px] shadow-inner"
                                                />
                                            </div>
                                        </div>

                                        {/* Submit Button & Assurance */}
                                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#B8962E] text-black font-extrabold h-14 px-10 rounded-full text-base transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:scale-105 active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                                        Transmitting to Lex Saarthi...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message to Lex Saarthi
                                                        <Send size={18} />
                                                    </>
                                                )}
                                            </Button>

                                            <div className="text-center sm:text-right">
                                                <span className="text-zinc-500 text-xs block">
                                                    Protected by Lex Saarthi Privacy Standards
                                                </span>
                                                <a
                                                    href={mailtoHref}
                                                    className="text-zinc-400 hover:text-[#D4AF37] text-xs transition-colors underline"
                                                >
                                                    Or write directly from your email app
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>



                </div>
            </div>
        </section>
    );
}
