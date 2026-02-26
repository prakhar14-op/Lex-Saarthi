"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassNavbar } from "@/components/GlassNavbar";
import PixelCard from "@/components/PixelCard";
import { Button } from "@/components/ui/button";
import Folder from "@/components/Folder";
import ShapeBlur from "@/components/ShapeBlur";
import CircularGallery from "@/components/CircularGallery";
import AnimatedList from "@/components/AnimatedList";
import MagicBento from "@/components/MagicBento";
import { FileText, Search, Scale, ShieldCheck, Zap, Users, X } from "lucide-react";

export function Header04() {
    const [activePage, setActivePage] = useState('home');
    const [selectedPublication, setSelectedPublication] = useState<any>(null);

    const demoPublications = [
        {
            title: "The Admissibility of Synthetic Media: Regulating Deepfakes in Evidentiary Law",
            author: "By Dr. Vikram Desai",
            abstract: "As generative models and synthetic media advance, the threat of manipulated evidence in the courtroom grows exponentially. This paper explores the urgent need for updated evidentiary standards to authenticate digital media and combat the malicious use of deepfakes."
        },
        {
            title: "Piercing the Corporate Veil in Cross-Border Insolvency",
            author: "By Priya Sharma, Adv.",
            abstract: "Navigating multinational bankruptcies presents unique jurisdictional challenges that often leave creditors at a disadvantage. This analysis examines recent precedents in corporate litigation where courts have successfully held parent companies liable for overseas subsidiary debts."
        },
        {
            title: "Algorithmic Liability: Assessing Tort Negligence in Agentic AI Systems",
            author: "By Rohan Iyer, Legal Researcher",
            abstract: "When an autonomous, agentic AI makes a decision that causes financial or physical harm, determining liability becomes a complex legal maze. This article dissects current tort frameworks and proposes a new standard of strict liability for the deployers of autonomous digital agents."
        },
        {
            title: "Digital Privacy as a Fundamental Right in the Post-Surveillance Era",
            author: "By Meera Menon",
            abstract: "The intersection of state security and individual privacy continues to be a highly contested constitutional battleground. This comprehensive review analyzes recent landmark judgments that are redefining data protection and the boundaries of the right to privacy in the digital age."
        },
        {
            title: "Trademark Dilution in the Era of Global E-Commerce",
            author: "By Arjun Patel, LL.M.",
            abstract: "The rapid expansion of borderless online marketplaces has severely tested traditional trademark protections and enforcement mechanisms. This commentary highlights the evolving legal strategies for brands to proactively defend their intellectual property against digital infringement."
        }
    ];

    const PublicationsPage = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pt-32 pb-24 px-4 md:px-8 lg:px-24 min-h-[80vh] bg-black/50 backdrop-blur-md border-x border-white/5 mx-auto max-w-[1600px]"
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-24">
                    <span className="text-[#D4AF37] font-bold tracking-[0.6em] uppercase text-sm mb-4 block">
                        Academic Excellence
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                        The <span className="text-[#D4AF37]">Lex Saarthi</span> Journal
                    </h1>
                </div>

                {/* Why Publish Section */}
                <section className="mb-40">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Why Publish With Us?</h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Rigorous Peer Review", desc: "Every submission undergoes a double-blind peer review process to ensure academic excellence and unbiased evaluation." },
                            { title: "Global Reach", desc: "Your research will be indexed and accessible to legal practitioners, academics, and students across worldwide platforms." },
                            { title: "Mentorship", desc: "Receive detailed, constructive feedback from our editorial board to refine your research and elevate its academic impact." }
                        ].map((item, i) => (
                            <PixelCard key={i} variant="blue" className="p-8 rounded-[40px] border border-white/5 bg-black/40 h-full hover:border-blue-500/30 transition-all duration-500">
                                <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">{item.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-lg">{item.desc}</p>
                            </PixelCard>
                        ))}
                    </div>
                </section>

                {/* Guidelines Accordion */}
                <section className="max-w-4xl mx-auto mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Submission Guidelines</h2>
                        <p className="text-zinc-400 mt-4">Everything you need to know before submitting your manuscript.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "Word Count Requirements", a: "We accept three types of submissions: Research Articles (4,000–6,000 words), Case Comments (2,000–3,000 words), and Book Reviews (1,500–2,000 words). Word counts exclude footnotes." },
                            { q: "Formatting Standards", a: "Manuscripts should be in Times New Roman, 12pt, with 1.5 line spacing. All citations must strictly follow the Bluebook (21st ed.) style. Submissions should be in .doc or .docx format." },
                            { q: "Eligibility & Scope", a: "Lex Saarthi invites contributions from law students, legal scholars, and practitioners. We cover diverse legal fields including Constitutional Law, Corporate Jurisprudence, and International Human Rights." },
                            { q: "Publication Process", a: "Submissions are checked for plagiarism first. Then, they undergo a two-stage review process. Authors are informed within 3-4 weeks about the acceptance or required revisions." }
                        ].map((item, i) => (
                            <details key={i} className="group border border-white/10 rounded-3xl bg-black/30 overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/40">
                                <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                                    <span className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">{item.q}</span>
                                    <span className="text-[#D4AF37] text-2xl group-open:rotate-180 transition-transform duration-300">↓</span>
                                </summary>
                                <div className="px-8 pb-8 text-zinc-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Latest Insights Section */}
                <section className="mb-40">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Latest Insights</h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full" />
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <AnimatedList
                            items={demoPublications}
                            onItemSelect={(item) => setSelectedPublication(item)}
                            showGradients={true}
                            enableArrowNavigation={true}
                            displayScrollbar={true}
                            className="bg-transparent"
                        />
                    </div>
                </section>

                <div className="flex justify-center">
                    <Button className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold h-16 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                        Submit Your Manuscript Now
                    </Button>
                </div>
            </div>
            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedPublication && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedPublication(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-[95%] md:w-[75%] max-w-2xl bg-[#0f0f11] border border-white/10 p-6 md:p-12 rounded-[32px] shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedPublication(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 text-zinc-400 hover:text-[#D4AF37] transition-colors p-2 z-10 bg-black/50 rounded-full"
                            >
                                <X size={28} />
                            </button>
                            <div className="mt-4 md:mt-0 md:pr-8">
                                <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-4 block">
                                    Research Article
                                </span>
                                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                    {selectedPublication.title}
                                </h2>
                                <p className="text-[#D4AF37]/80 font-medium mb-8">
                                    {selectedPublication.author}
                                </p>
                                <div className="w-16 h-1 bg-[#D4AF37]/30 mb-8 rounded-full" />
                                <p className="text-zinc-300 leading-relaxed md:text-lg">
                                    {selectedPublication.abstract}
                                </p>
                                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                    <Button className="bg-[#D4AF37] text-black hover:bg-[#B8962E] font-bold h-12 px-8 rounded-full w-full sm:w-auto">
                                        Read Full Text
                                    </Button>
                                    <Button variant="outline" className="border-white/20 text-black hover:bg-white/5 h-12 px-8 rounded-full w-full sm:w-auto">
                                        Download PDF
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );

    const InternshipsPage = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen"
        >
            {/* Internship Background Styling */}
            <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
                {/* Subtle blurred shape to mimic a modern office aesthetic */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10" />
            </div>

            <section className="relative z-10 pt-48 pb-32 px-4 md:px-8 lg:px-24">
                <div className="max-w-[1400px] mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#D4AF37] font-bold tracking-[0.6em] uppercase text-sm mb-6 block"
                    >
                        Professional Excellence
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8"
                    >
                        The <span className="text-[#D4AF37]">Lex Saarthi</span> <br />
                        Internship Program
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto mb-12 font-medium"
                    >
                        Bridge the gap between academic theory and courtroom reality.
                        Work on live cases, draft real petitions, and receive direct
                        mentorship from seasoned High Court and Supreme Court advocates.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Button className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-extrabold h-16 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all hover:scale-105">
                            Apply for Summer Cohort
                        </Button>
                        <Button variant="outline" className="border-white/20 text-black hover:bg-white/5 backdrop-blur-md h-16 px-12 rounded-full text-xl transition-all hover:scale-105">
                            View Program Structure
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: What You Will Gain (The Value Proposition) */}
            <section className="relative z-10 py-32 px-4 md:px-8 lg:px-24">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-[#D4AF37] font-bold tracking-[0.6em] uppercase text-sm mb-4 block">
                            Value Proposition
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">What You Will <span className="text-[#D4AF37]">Gain</span></h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
                    </div>

                    <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={false}
                        clickEffect={true}
                        spotlightRadius={400}
                        particleCount={12}
                        glowColor="212, 175, 55"
                        cardData={[
                            {
                                label: "Drafting",
                                title: "Practical Drafting",
                                description: "Move beyond textbook theory. Learn the meticulous art of drafting plaints, written statements, writ petitions, and complex commercial contracts under expert scrutiny.",
                                icon: <FileText className="w-8 h-8" />
                            },
                            {
                                label: "Intellectual",
                                title: "Strategic Research",
                                description: "Master advanced legal research methodologies. Learn to navigate complex databases to find the exact precedents needed to build unassailable legal arguments.",
                                icon: <Search className="w-8 h-8" />
                            },
                            {
                                label: "Litigation",
                                title: "Courtroom Strategy",
                                description: "Shadow senior counsels (virtually or physically). Understand the nuances of case presentation, cross-examination strategies, and judicial reasoning.",
                                icon: <Scale className="w-8 h-8" />,
                            },
                            {
                                label: "Excellence",
                                title: "Rigorous Peer Review",
                                description: "Ensure the highest standards of legal scholarship. Every submission goes through a meticulous, blind editorial assessment by industry experts.",
                                icon: <ShieldCheck className="w-8 h-8" />
                            },
                            {
                                label: "Growth",
                                title: "Practical Application",
                                description: "Bridge the gap between theory and practice. Master real-world legal drafting and oral advocacy through guided, hands-on exercises.",
                                icon: <Zap className="w-8 h-8" />
                            },
                            {
                                label: "Community",
                                title: "Industry Connections",
                                description: "Build lasting, valuable relationships with sitting judges, senior counsels, and a nationwide network of driven law scholars.",
                                icon: <Users className="w-8 h-8" />
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Section 4: The Application Process (A UI "Stepper") */}
            <section className="relative z-10 py-32 px-4 md:px-8 lg:px-24 border-t border-white/5 bg-black/30">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-[#D4AF37] font-bold tracking-[0.6em] uppercase text-sm mb-4 block">
                            The Journey
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Application <span className="text-[#D4AF37]">Process</span></h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
                    </div>

                    <div className="relative mt-20">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -translate-y-1/2 hidden lg:block" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                            {[
                                {
                                    step: "01",
                                    title: "Submit Application",
                                    description: "Upload your updated CV and a cover letter detailing your area of legal interest.",
                                    icon: ""
                                },
                                {
                                    step: "02",
                                    title: "Assessment Task",
                                    description: "Shortlisted candidates will be given a 48-hour practical research and drafting assignment.",
                                    icon: ""
                                },
                                {
                                    step: "03",
                                    title: "Partner Interview",
                                    description: "A final round of discussion with our senior mentors to align your goals with our program.",
                                    icon: ""
                                },
                                {
                                    step: "04",
                                    title: "Onboarding",
                                    description: "Welcome to the team. You will be assigned your first live case file and mentor.",
                                    icon: ""
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="group relative"
                                >
                                    <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 h-full transition-all duration-500 hover:border-[#D4AF37]/50 hover:bg-zinc-900/80 group-hover:-translate-y-2">
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-[#D4AF37] text-black flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform group-hover:scale-110 group-hover:rotate-6">
                                            {item.step}
                                        </div>

                                        <div className="mt-6">
                                            <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Subtle Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </div>

                                    {/* Horizontal Line Indicator for mobile/tablet */}
                                    {index < 3 && (
                                        <div className="hidden md:block lg:hidden absolute -right-6 top-1/2 w-12 h-0.5 bg-[#D4AF37]/20 -translate-y-1/2" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37]/30">
            {/* Background Video (Fixed and Persistent) */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/Make_the_above_1080p_202602221245.mp4" type="video/mp4" />
                </video>
            </div>

            <GlassNavbar activePage={activePage} setActivePage={setActivePage} />

            <main className="flex-1 relative z-10">
                <AnimatePresence mode="wait" initial={false}>
                    {activePage === 'home' && (
                        <motion.div
                            key="home"
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <section className="min-h-screen flex items-center pt-24 pb-12 px-4 md:px-8 lg:px-24 overflow-hidden">
                                <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-4 items-center w-full max-w-[2200px] mx-auto mt-16 lg:mt-0">
                                    {/* Left: Interactive Card */}
                                    <div className="flex flex-col items-center lg:items-start z-10 translate-x-0 lg:-translate-x-24 w-full">
                                        <PixelCard
                                            variant="pink"
                                            className="w-full max-w-2xl p-4 sm:p-8 md:p-12 rounded-[40px] border border-transparent bg-transparent hover:border-white/10 hover:bg-black/20 hover:backdrop-blur-md transition-all duration-500 min-h-[auto] lg:min-h-[550px]"
                                        >
                                            <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6 md:gap-8 w-full">
                                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight text-center lg:text-left">
                                                    We Are Your <br />
                                                    <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Lex Saarthi</span>
                                                </h1>

                                                <p className="text-base md:text-xl text-zinc-300 font-medium leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0 w-full">
                                                    Nurturing future legal professionals with absolute clarity,
                                                    expert mentorship, and purpose-driven practice.
                                                    <span className="block mt-2 text-white/80 text-center lg:text-left w-full">Bridging the gap between the classroom and the courtroom.</span>
                                                </p>

                                                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mt-4">
                                                    <Button className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold h-14 px-8 md:px-10 rounded-full text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.2)] w-full sm:w-auto">
                                                        Apply for Internship
                                                    </Button>
                                                    <Button
                                                        onClick={() => setActivePage('publications')}
                                                        variant="outline"
                                                        className="bg-white border-white/20 text-black hover:bg-white/90 h-14 px-8 md:px-10 rounded-full text-lg transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
                                                    >
                                                        Read Publications
                                                    </Button>
                                                </div>
                                            </div>
                                        </PixelCard>
                                    </div>

                                    {/* Right: Scale Image */}
                                    <div className="flex justify-center lg:justify-end items-center relative h-full w-full mt-8 lg:mt-0">
                                        <div className="absolute right-[-10%] lg:right-[-10%] bg-[#D4AF37]/5 blur-[120px] rounded-full w-full h-full -z-20" />
                                        <PixelCard
                                            variant="yellow"
                                            className="w-full max-w-[300px] md:max-w-[450px] aspect-square rounded-[40px] border border-white/5 bg-transparent hover:bg-black/10 transition-all duration-500 translate-x-0 lg:translate-x-12 flex items-center justify-center"
                                        >
                                            <img
                                                src="/image.png"
                                                alt="Lex Saarthi Logo"
                                                className="relative z-0 w-3/4 h-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.1)] mx-auto"
                                            />
                                        </PixelCard>
                                    </div>
                                </div>
                            </section>

                            <div className="bg-black/60 backdrop-blur-2xl border-y border-white/10 py-16 relative z-10">
                                <div className="max-w-[1400px] mx-auto px-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                                        {[
                                            { value: "500+", label: "Legal Minds Mentored" },
                                            { value: "50+", label: "Expert Advocates & Mentors" },
                                            { value: "100+", label: "Research Papers Published" },
                                            { value: "20+", label: "Masterclass Webinars" },
                                        ].map((stat, i) => (
                                            <div key={i} className="flex flex-col items-center text-center group">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-5xl md:text-6xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-500">
                                                        {stat.value}
                                                    </span>
                                                </div>
                                                <div className="h-1 w-12 bg-[#D4AF37] mb-4 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
                                                <span className="text-zinc-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <section className="py-32 px-4 md:px-8 lg:px-24 bg-black/40 backdrop-blur-md relative z-10 border-y border-white/5">
                                <div className="max-w-[1400px] mx-auto">
                                    <div className="text-center mb-24 max-w-3xl mx-auto">
                                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                            Empowering the <span className="text-[#D4AF37]">Legal Minds</span> of Tomorrow
                                        </h2>
                                        <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                                            Comprehensive platforms designed to elevate your legal acumen through
                                            practical exposure and scholarly excellence.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-32">
                                        {[
                                            {
                                                title: "Certified Internships",
                                                headline: "Real-World Practice",
                                                body: "Gain hands-on experience drafting petitions, researching case laws, and working on live cases under the direct guidance of seasoned High Court advocates.",
                                                button: "Join the Next Cohort →",
                                                color: "#D4AF37",
                                                page: "internships"
                                            },
                                            {
                                                title: "Scholarly Publications",
                                                headline: "Academic Excellence",
                                                body: "Contribute to the global discourse of justice. Publish your meticulously researched articles and case comments in our peer-reviewed legal journals.",
                                                button: "Submit Your Paper →",
                                                color: "#D4AF37",
                                                page: "publications"
                                            },
                                            {
                                                title: "Expert Webinars",
                                                headline: "Masterclass Sessions",
                                                body: "Learn directly from the masters. Engage in interactive, high-level discussions with sitting judges, senior counsels, and industry leaders.",
                                                button: "View Upcoming Sessions →",
                                                color: "#D4AF37",
                                                page: "webinars"
                                            }
                                        ].map((service, index) => (
                                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                                                <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                                    <PixelCard variant="pink" className="w-full min-h-[450px] p-10 rounded-[40px] border border-white/5 bg-black/30 backdrop-blur-md hover:border-[#D4AF37]/30 transition-all duration-700">
                                                        <div className="flex flex-col items-start gap-6 text-left w-full h-full justify-center">
                                                            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">
                                                                {service.title}
                                                            </span>
                                                            <h3 className="text-4xl font-bold text-white">
                                                                {service.headline}
                                                            </h3>
                                                            <p className="text-lg text-zinc-300 leading-relaxed">
                                                                {service.body}
                                                            </p>
                                                            <Button
                                                                onClick={() => setActivePage(service.page)}
                                                                className="mt-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold h-14 px-8 rounded-full transition-all duration-300"
                                                            >
                                                                {service.button}
                                                            </Button>
                                                        </div>
                                                    </PixelCard>
                                                </div>

                                                <div className={`flex justify-center order-1 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                                    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
                                                        <div className="absolute inset-0 bg-[#D4AF37]/5 blur-[100px] rounded-full" />
                                                        <Folder color={service.color} size={2.5} className="relative z-10" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="py-32 px-4 md:px-8 lg:px-24 bg-black/20 backdrop-blur-sm relative z-10 border-b border-white/5 overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1400px] mx-auto">
                                    <div className="relative aspect-square max-w-[600px] w-full mx-auto lg:mx-0 order-2 lg:order-1">
                                        <div className="absolute inset-0 z-0 opacity-40">
                                            <ShapeBlur variation={0} shapeSize={1.5} roundness={0.5} circleSize={0.4} circleEdge={0.6} />
                                        </div>
                                        <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                                            <div className="absolute inset-0 bg-[#D4AF37]/5 blur-[80px] rounded-full" />
                                            <img
                                                src="/image.png"
                                                alt="Lex Saarthi Mission"
                                                className="w-4/5 h-auto object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-8 z-10 order-1 lg:order-2">
                                        <div className="flex flex-col gap-4">
                                            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-sm">Our Mission</span>
                                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">More Than a Platform. <br /><span className="text-[#D4AF37]">A True Guide.</span></h2>
                                        </div>
                                        <div className="space-y-6">
                                            <p className="text-xl text-zinc-300 leading-relaxed font-medium">In the complex and highly competitive battlefield of law, every student needs a guide a <span className="text-white italic">Saarthi</span>. Lex Saarthi was founded on the fundamental principle that the next generation of lawyers requires more than just textbook knowledge.</p>
                                            <p className="text-lg text-zinc-400 leading-relaxed">They need direction, ethical grounding, and practical wisdom. We provide the mentorship and resources necessary to transform passionate law students into exceptional legal practitioners.</p>
                                        </div>
                                        <Button className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold h-14 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-105 transition-all">Discover Our Story</Button>
                                    </div>
                                </div>
                            </section>

                            <section className="py-32 bg-transparent relative z-10 overflow-hidden">
                                <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center">
                                    <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-sm mb-4 block">Our Impact</span>
                                    <h2 className="text-4xl md:text-6xl font-bold text-white">Voices of <span className="text-[#D4AF37]">Our Scholars</span></h2>
                                </div>
                                <div className="relative w-full" style={{ height: '600px' }}>
                                    <CircularGallery bend={1} scrollSpeed={2} scrollEase={0.05} borderRadius={0.05} items={[
                                        { quote: "The internship program at Lex Saarthi gave me the practical drafting skills that law school missed. Working on actual case files under expert mentorship changed my entire perspective.", name: "Ananya R., Law Student" },
                                        { quote: "Publishing my first research paper here was a seamless experience. The peer-review feedback was incredibly rigorous and elevated the quality of my writing.", name: "Rahul V., Legal Researcher" },
                                        { quote: "The expert webinars hosted by Lex Saarthi are phenomenal. Gaining first-hand perspectives from senior counsels and industry leaders gave me a profound understanding of contemporary legal challenges that you simply cannot get from a textbook.", name: "Karthik M., Law Undergraduate" },
                                        { quote: "True to their name, they act as a real 'Saarthi' for aspiring lawyers. The mentorship I received during my internship bridged the daunting gap between academic theory and actual courtroom practice. It completely rebuilt my confidence.", name: "Neha T., Junior Associate" },
                                        { quote: "Submitting my case comment to their journal was a pivotal moment in my academic career. The editorial board is meticulous and highly supportive, ensuring that every published piece meets the absolute highest standards of legal scholarship.", name: "Siddharth P., Legal Scholar" }
                                    ]} />
                                </div>
                            </section>

                            <section className="py-32 px-4 md:px-8 lg:px-24 bg-transparent relative z-10">
                                <div className="max-w-[1200px] mx-auto">
                                    <PixelCard variant="blue" className="w-full min-h-[400px] p-12 md:p-20 rounded-[40px] border border-white/5 bg-black/40 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-700">
                                        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
                                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Ready to Step into the <span className="text-[#D4AF37]">Courtroom?</span></h2>
                                            <p className="text-xl text-zinc-300 leading-relaxed font-medium">Join a growing community of dedicated legal scholars, interns, and practitioners today.</p>
                                            <Button className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-extrabold h-16 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all transition-transform">Contact Us Now</Button>
                                        </div>
                                    </PixelCard>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {activePage === 'publications' && <PublicationsPage key="publications" />}
                    {activePage === 'internships' && <InternshipsPage key="internships" />}

                    {['webinars', 'blog', 'aboutus', 'contact'].includes(activePage) && (
                        <motion.div
                            key={activePage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="min-h-[80vh] flex items-center justify-center pt-32"
                        >
                            <h2 className="text-4xl font-bold text-white">
                                {activePage.charAt(0).toUpperCase() + activePage.slice(1)} Page <span className="text-[#D4AF37]">Coming Soon</span>
                            </h2>
                        </motion.div>
                    )}
                </AnimatePresence>

                <footer className="bg-black/90 pt-12 pb-8 px-4 md:px-8 lg:px-24 border-t border-white/5 relative z-20">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-8">
                            <div className="flex flex-col items-start gap-4">
                                <button onClick={() => setActivePage('home')} className="relative h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity">
                                    <img src="/image.png" alt="Lex Saarthi Logo" className="h-full w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
                                </button>
                                <p className="text-xl font-bold text-white tracking-widest">Lex <span className="text-[#D4AF37]">Saarthi</span></p>
                                <p className="text-zinc-400 text-base italic">"Law with Purpose."</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase opacity-70">Quick Links</h4>
                                <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                                    {['Home', 'About Us', 'Internships', 'Publications', 'Webinars', 'Blog'].map((link) => (
                                        <li key={link}>
                                            <button
                                                onClick={() => setActivePage(link.toLowerCase().replace(' ', ''))}
                                                className="text-zinc-500 hover:text-[#D4AF37] transition-colors duration-300 text-sm cursor-pointer"
                                            >
                                                {link}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase opacity-70">Contact Us</h4>
                                <div className="space-y-2">
                                    <p className="flex items-center gap-3 text-zinc-500 text-sm"><span className="text-[#D4AF37]/80">Email:</span> lexsaarthi@gmail.com</p>
                                    <p className="flex items-center gap-3 text-zinc-500 text-sm"><span className="text-[#D4AF37]/80">Phone:</span> +91 XXXXX XXXXX</p>
                                </div>
                                <div className="flex gap-4 mt-2">
                                    {['linkedin', 'instagram', 'twitter'].map((social) => (
                                        <a key={social} href="#" className="w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]/80 hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                                            <span className="capitalize text-[10px] font-bold">{social[0]}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
                            <p>© 2026 Lex Saarthi. All Rights Reserved.</p>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
