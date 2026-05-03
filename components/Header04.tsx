"use client";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GlassNavbar } from "@/components/GlassNavbar";
import PixelCard from "@/components/PixelCard";
import { Button } from "@/components/ui/button";
import Folder from "@/components/Folder";
import ShapeBlur from "@/components/ShapeBlur";
import CircularGallery from "@/components/CircularGallery";
import AnimatedList from "@/components/AnimatedList";
import MagicBento from "@/components/MagicBento";
import { FileText, Search, Scale, ShieldCheck, Zap, Users, X, Linkedin, Instagram, Youtube } from "lucide-react";

export function Header04() {
    const [activePage, setActivePage] = useState('home');

    const rawPublications = [
        {
            title: "Divorce under Hindu Marriage Act 1955",
            author: "By Aanchal Tiwari",
            abstract: "According to Hindu law, marriage is not just a civil contract but a sacrament, a holy and unbreakable bond. In ancient Hindu writings, divorce was socially and religiously criticized upon, and the importance of marriage was emphasized. However, as social realities changed and ideas of personal liberty, gender equality, and individual dignity evolved, the law acknowledged that a marriage may ultimately breakdown, making its continuation unreasonable. A major change was brought about by the Hindu Marriage Act of 1955, which first introduced the idea of divorce into Hindu personal law.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Definition / Relevant Section</li>
                            <li>Illustration / Example</li>
                            <li>Case Law</li>
                            <li>Practical Application</li>
                            <li>Conclusion / Summary</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>According to Hindu law, marriage is not just a civil contract but a sacrament, a holy and unbreakable bond. In ancient Hindu writings, divorce was socially and religiously criticized upon, and the importance of marriage was emphasized. However, as social realities changed and ideas of personal liberty, gender equality, and individual dignity evolved, the law acknowledged that a marriage may ultimately breakdown, making its continuation unreasonable. A major change was brought about by the Hindu Marriage Act of 1955, which first introduced the idea of divorce into Hindu personal law. This article examines divorce under Hindu law by analyzing its statutory framework, judicial interpretation, practical application, and evolving trends, with reference to landmark judicial pronouncements.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">DEFINITION / RELEVANT SECTION</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Meaning of Divorce</h5>
                        <p>It puts the marriage to an end in other words, it is termination of marriage & parties are no longer considered as spouse. Section 13 of Hindu Marriage Act, 1955 describes the condition which extence the right of divorce while section 14 of the act put bar on early divorce, no petition for divorce can be presented within in one year of marriage unless it becomes the case of exceptional hardship or depravity.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Grounds available to both husband and wife</h5>
                        <p className="mb-4">There are 8 grounds as provided by sec 13(1) of Hindu Marriage Act, 1955 to both husband and wife to dissolve the marriage:</p>
                        <ul className="space-y-4">
                            <li><strong className="text-white">1. Adultery sec 13(1)(i):</strong> It is defined as voluntarily involving in sexual activity outside the wedlock. It is on the petitioner to prove that there was a valid marriage & the respondent had sexual relationship outside the wedlock.</li>
                            <li><strong className="text-white">2. Cruelty sec 13(1)(i)(a):</strong> Physical or mental cruelty of such level that such mental pain and suffering would make it difficult to live with the other.</li>
                            <li><strong className="text-white">3. Desertion sec 13 (1)(i)(b):</strong> It is defined as abandonment of one spouse by the other for a continuous period of not less than two years. It may be actual, constructive or by willful neglect.</li>
                            <li><strong className="text-white">4. Conversion sec 13(1)(ii):</strong> One of the spouse ceased to be a hindu by converting to other religion. The conversion of the respondent to a non hindu doesn't automatically dissolve the marriage. The petitioner has to file a petition in order to dissolve the marriage but if he/she chooses to live with the spouses who had converted to another religion, there is nothing to debar him from doing so.</li>
                            <li><strong className="text-white">5. Incurability of unsound mind sec 13(1)(iii):</strong> Under Section 13(1)(iii) of the Hindu Marriage Act, 1955, a marriage may be dissolved if one spouse is incurably of unsound mind or suffers from a mental disorder of such kind and extent that the petitioner cannot reasonably be expected to live with them.</li>
                            <li><strong className="text-white">6. Venereal disease sec 13(1)(v):</strong> A marriage may be dissolved if any of the spouse is suffering from such disease which are communicated by sexual intercourse like HIV AIDs. It must be in a communicable form.</li>
                            <li><strong className="text-white">7. Renunciation of the world sec 13(1)(vi):</strong> It becomes ground for divorce under section 13(1)(vi) for Hindu Marriage Act 1955, when one spouse voluntarily renounces the world by entering a religious order.</li>
                            <li><strong className="text-white">8. Presumption of death sec 13(1)(vii):</strong> When a spouse has not been heard of as alive for a continuous period of seven years by those who would naturally have heard from them, the law presumes such person to be dead. This becomes a ground for the surviving spouse to dissolve the marriage.</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Grounds available to wife only</h5>
                        <p className="mb-4">There are four grounds available to any wife under section 13 (2) of the Hindu Marriage Act of 1955:</p>
                        <ul className="space-y-4">
                            <li><strong className="text-white">1. Bigamy sec 13 (2)(i):</strong> A wife may file for divorce if her spouse enters into another marriage while the original marriage is still in effect. The second marriage must be valid and solemnized according to Hindu traditions, and this requirement shields the woman from the husband's polygamous behavior.</li>
                            <li><strong className="text-white">2. Guilty of Rape or Sodomy sec 13 (2)(ii):</strong> The wife has the right to file for divorce if the husband commits rape, sodomy, or bestiality after the solemnization of marriage.</li>
                            <li><strong className="text-white">3. Decree or Order of Maintenance sec 13 (2)(iii):</strong> If a maintenance order or decree has been granted in the wife's favor and the wife was not lived together, she and the spouse haven't cohabitated for a year or longer, she may file for divorce.</li>
                            <li><strong className="text-white">4. Option of Puberty sec 13(2)(iv):</strong> If a wife was married before turning fifteen, she has the option to repudiate the marriage after turning fifteen but before turning eighteen. This clause protects children from the negative effects of forced and early marriages.</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Divorce by Mutual Consent</h5>
                        <p>Section 13B of the Hindu Marriage Act, 1955 permits divorce by mutual consent in cases where the husband and wife jointly decide that the marriage has irretrievably broken down. The parties must agree that they cannot cohabitate after living apart for at least a year. The court may issue a divorce decree after these requirements are met and the required process is finished, guaranteeing a quick and peaceful end to the marriage.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">ILLUSTRATION / EXAMPLE</h4>
                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-4">
                            <div>
                                <strong className="text-[#D4AF37] block mb-1">Illustration 1:</strong>
                                <p>A and B are married under Hindu rites. Over time, B subjects A to continuous verbal abuse, humiliation in front of family members, false allegations of infidelity, and constant threats of suicide. A develops severe anxiety and depression due to this behavior.</p>
                                <p className="mt-2 text-white/90"><em>Here, A can seek divorce under Section 13(1)(ia) on the ground of mental cruelty, as the conduct of B makes it unreasonable to expect A to continue the marital relationship.</em></p>
                            </div>

                            <hr className="border-white/10" />

                            <div>
                                <strong className="text-[#D4AF37] block mb-1">Illustration 2:</strong>
                                <p>C and D have been married for five years. Due to irreconcilable differences, they have been living separately for more than one year. They mutually agree that there is no possibility of reconciliation and decide to dissolve the marriage amicably.</p>
                                <p className="mt-2 text-white/90"><em>They may file a joint petition under Section 13B for divorce by mutual consent, subject to the statutory cooling off period.</em></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CASE LAW</h4>
                        <p className="mb-4">Hindu divorce law has been significantly shaped by judicial interpretation. Below is a discussion of a few significant rulings:</p>
                        <ul className="space-y-6">
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">1. Naveen Kohli v. Neelu Kohli (2006) 4 SCC 558</strong>
                                <p><span className="text-[#D4AF37]">Issue:</span> Whether irretrievable breakdown of marriage can be a ground for divorce.</p>
                                <p className="mt-1"><span className="text-[#D4AF37]">Held:</span> The Supreme Court noted that forcing parties to remain together would result in further suffering when a marriage is emotionally dead and irreparable. Although irretrievable breakdown is not a statutory ground, the Court emphasized the need for legislative reform.</p>
                                <p className="mt-1"><span className="text-[#D4AF37]">Significance:</span> The ruling affected later judicial reasoning by highlighting the shortcomings of the current basis.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">2. Samar Ghosh v. Jaya Ghosh (2007) 4 SCC 511</strong>
                                <p><span className="text-[#D4AF37]">Issue:</span> What constitutes mental cruelty?</p>
                                <p className="mt-1"><span className="text-[#D4AF37]">Held:</span> The Supreme Court established examples of what constitutes mental cruelty, such as persistent abuse, humiliation, apathy, and false accusations.</p>
                                <p className="mt-1"><span className="text-[#D4AF37]">Significance:</span> Under Hindu law, this case continues to be the most authoritative precedent regarding mental cruelty.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">3. Shilpa Sailesh v. Varun Sreenivasan (2023) 6 SCC 1</strong>
                                <p><span className="text-[#D4AF37]">Issue:</span> Power of the Supreme Court to grant divorce on the ground of irretrievable breakdown.</p>
                                <p className="mt-1"><span className="text-[#D4AF37]">Held:</span> The Constitution Bench held that the Supreme Court may exercise its powers under Article 142 to grant divorce even in the absence of statutory grounds, where the marriage is completely unworkable.</p>
                                <p className="mt-1"><span className="text-[#D4AF37]">Significance:</span> This judgment marks a progressive step towards recognizing individual autonomy and dignity.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">4. Sureshta Devi v. Om Prakash (1991) 2 SCC 25</strong>
                                <p><span className="text-[#D4AF37]">Issue:</span> Whether consent in mutual divorce must continue till the final decree.</p>
                                <p className="mt-1"><span className="text-[#D4AF37]">Held:</span> The Consent must be there till the decree is passed; withdrawal of consent by either party results in the nullification the petition.</p>
                                <p className="mt-1"><span className="text-[#D4AF37]">Significance:</span> The case clarified procedural aspects of divorce by mutual consent.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">PRACTICAL APPLICATION</h4>
                        <p>In Hindu law, a divorce is actually started by submitting a petition to the relevant Family Court that has jurisdiction. The court considers the stated grounds, assesses the evidence, and, whenever feasible, promotes reconciliation through mediation. The court issues a divorce judgment together with ancillary reliefs like maintenance, child custody, and permanent alimony when it is satisfied that the statutory conditions are met and the marriage has irretrievably broken down.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Legal and Social Challenges</h5>
                        <p>In India, divorce is still socially stigmatized despite legal provisions, especially for women. Economic dependency, emotional distress, and protracted litigation are still major issues. Nonetheless, access to justice has increased due to growing awareness, mediation, and judicial sensitivity.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>From the traditional idea of marriage as an irreversible sacrament to a rights based legal institution that acknowledges individual liberty and dignity, divorce under Hindu law reflects a substantial shift. A thorough legal framework for divorce is provided by the Hindu Marriage Act of 1955, which strikes a balance between societal norms and personal autonomy.</p>
                        <p className="mt-4">The range of legislative grounds has been broadened by judicial interpretation, especially in situations involving irretrievable marital breakup and mental cruelty. A progressive and compassionate approach is seen in recent court tendencies, which put the welfare of individuals ahead of the simple maintenance of a shattered marital relationship. Divorce in Hindu law continues to change in response to shifting society standards and constitutional goals, despite obstacles like social stigma and procedural delays. In the end, the law seeks to give a fair and just solution in cases where marriage no longer serves its fundamental purpose, rather than to promote separation.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Hindu Marriage Act, 1955</li>
                            <li>Naveen Kohli v. Neelu Kohli, (2006) 4 SCC 558</li>
                            <li>Samar Ghosh v. Jaya Ghosh, (2007) 4 SCC 511</li>
                            <li>Shilpa Sailesh v. Varun Sreenivasan, (2023) 6 SCC 1</li>
                            <li>Sureshta Devi v. Om Prakash, (1991) 2 SCC 25</li>
                            <li>Law Commission of India, 71st & 217th Reports on Divorce and Irretrievable Breakdown</li>
                            <li>Manupatra & SCC Online Commentaries on Family Law</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Aanchal Tiwari.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Pre-Litigation Mediation: Will It Reduce Court Burden or Delay Justice?",
            author: "By Sudhanshu K. Baranwal",
            abstract: "India’s judicial backlog continues to pose a structural challenge to effective justice delivery. In response to this systemic concern, Parliament enacted the Mediation Act, 2023, providing statutory recognition to mediation and formalising pre-litigation mediation as a structured mechanism of dispute resolution.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Understanding Pre-Litigation Mediation</li>
                            <li>Arguments in Favour: How It May Reduce Court Burden</li>
                            <li>Concerns: Risk of Delay and Procedural Complications</li>
                            <li>Balancing Efficiency with Access to Justice</li>
                            <li>Conclusion</li>
                            <li>References</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">I. INTRODUCTION</h4>
                        <p>India’s judicial backlog continues to pose a structural challenge to effective justice delivery. Civil courts in particular face mounting pendency, resulting in prolonged litigation and increased costs for litigants. In response to this systemic concern, Parliament enacted the Mediation Act, 2023, providing statutory recognition to mediation and formalising pre-litigation mediation as a structured mechanism of dispute resolution.</p>
                        <p className="mt-4">The central issue, however, remains:<br />Will pre-litigation mediation meaningfully reduce court burden, or will it operate as an additional procedural layer that delays access to justice?</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">II. UNDERSTANDING PRE-LITIGATION MEDIATION</h4>
                        <p>Pre-litigation mediation refers to the process whereby parties attempt to resolve disputes amicably before instituting formal court proceedings. Unlike court-annexed mediation under Section 89 of the Code of Civil Procedure, 1908, this mechanism operates prior to filing a suit.</p>
                        <p className="mt-4">Section 5 of the Mediation Act, 2023 encourages parties to attempt mediation before approaching courts, subject to specified exceptions. The Act also grants enforceability to mediated settlement agreements, strengthening the institutional credibility of mediation in India.</p>
                        <p className="mt-4">This reform must also be understood in light of earlier judicial encouragement of ADR mechanisms.</p>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li>In Salem Advocate Bar Association v. Union of India, the Supreme Court emphasised the importance of alternative dispute resolution mechanisms and upheld procedural reforms aimed at reducing judicial backlog.</li>
                            <li>Similarly, in Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co., the Court clarified the scope of Section 89 CPC and encouraged structured reference to ADR processes, including mediation.</li>
                        </ul>
                        <p className="mt-4">The Mediation Act builds upon these judicial foundations.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">III. ARGUMENTS IN FAVOUR: HOW IT MAY REDUCE COURT BURDEN</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">1. Early Settlement of Disputes</h5>
                        <p>Many civil disputes do not necessarily require adjudication of complex legal questions. Commercial misunderstandings, contractual disagreements, and relational disputes may often be resolved through dialogue.</p>
                        <p className="mt-2">Internationally, mediation has demonstrated success in filtering disputes at early stages. By institutionalising pre-litigation mediation, India seeks to prevent unnecessary filings, thereby reducing inflow into courts.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">2. Cost and Time Efficiency</h5>
                        <p>Litigation in India frequently involves prolonged timelines due to procedural formalities and adjournments. Mediation, being less formal and more flexible, can provide quicker resolution.</p>
                        <p className="mt-2">The Supreme Court has repeatedly emphasised the need for speedy justice as part of Article 21 of the Constitution. If mediation shortens dispute resolution time, it aligns with this constitutional objective.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">3. Enforceability of Settlement Agreements</h5>
                        <p>A key development under the Mediation Act is the recognition of mediated settlement agreements as enforceable instruments. This addresses earlier concerns regarding enforceability and increases confidence in the process.</p>
                        <p className="mt-2">In commercial disputes, enforceability is crucial. A credible settlement mechanism reduces incentives for prolonged adversarial litigation.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">4. Support from Commercial Jurisprudence</h5>
                        <p>The idea of pre-litigation mediation is not entirely new. Section 12A of the Commercial Courts Act, 2015 introduced mandatory pre-institution mediation in commercial disputes (unless urgent interim relief is sought).</p>
                        <p className="mt-2">In Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd., the Supreme Court held that pre-institution mediation under Section 12A is mandatory and that non-compliance would result in rejection of the plaint. This judgment reflects judicial confidence in structured pre-litigation mediation as a filtering mechanism.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IV. CONCERNS: RISK OF DELAY AND PROCEDURAL COMPLICATIONS</h4>
                        <p className="mb-4">Despite its potential benefits, certain concerns must be carefully examined.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">1. Urgent Matters and Interim Relief</h5>
                        <p>One practical difficulty arises in cases requiring immediate judicial intervention — such as injunctions against property transfer or intellectual property infringement.</p>
                        <p className="mt-2">Although the Commercial Courts Act provides an exception where urgent interim relief is sought, rigid application of mediation requirements in other contexts could delay access to justice. The balance between efficiency and urgency must be maintained.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">2. Inequality of Bargaining Power</h5>
                        <p>Mediation operates on negotiation and compromise. In disputes involving unequal economic or social power, weaker parties may feel compelled to settle unfavourably.</p>
                        <p className="mt-2">Unlike court proceedings, mediation does not involve strict evidentiary standards. The fairness of outcomes largely depends on mediator competence and procedural safeguards.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">3. Infrastructure and Institutional Readiness</h5>
                        <p>For pre-litigation mediation to genuinely reduce court burden, there must be:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Adequate institutional mediation centres</li>
                            <li>Trained and neutral mediators</li>
                            <li>Strict timelines</li>
                            <li>Awareness among members of the Bar</li>
                        </ul>
                        <p className="mt-2">If infrastructure is inadequate, mediation may become a procedural formality rather than a meaningful dispute resolution attempt.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">4. Strategic Delays</h5>
                        <p>There is also a possibility of tactical misuse. A defendant unwilling to settle may participate merely to delay proceedings. In recovery suits, delay often advantages the defaulting party.</p>
                        <p className="mt-2">Unless statutory timelines are strictly implemented, mediation may inadvertently encourage postponement rather than resolution.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">V. BALANCING EFFICIENCY WITH ACCESS TO JUSTICE</h4>
                        <p>The effectiveness of pre-litigation mediation will depend on careful implementation.</p>
                        <p className="mt-4">Judicial guidance, similar to that provided in Afcons Infrastructure, may be required to clarify categories of disputes suitable for mediation. Clear exemptions for urgent matters must be preserved to prevent procedural rigidity.</p>
                        <p className="mt-4">Most importantly, the legal community must shift its mindset. If lawyers approach mediation as a genuine opportunity for resolution rather than a procedural obstacle, its success rate will increase significantly.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VI. CONCLUSION</h4>
                        <p>Pre-litigation mediation represents a progressive development in India’s dispute resolution framework. Judicial precedents such as Salem Advocate Bar Association, Afcons Infrastructure, and Patil Automation demonstrate a consistent movement toward encouraging ADR mechanisms.</p>
                        <p className="mt-4">Whether it reduces court burden or delays justice depends not merely on statutory design but on practical implementation. If supported by infrastructure, trained professionals, and flexible interpretation, pre-litigation mediation can significantly filter disputes before they enter the judicial pipeline.</p>
                        <p className="mt-4">If applied mechanically or without safeguards, it risks becoming an additional procedural stage that delays justice.</p>
                        <p className="mt-4">Ultimately, pre-litigation mediation is a tool — its impact will depend on how responsibly the legal system chooses to utilise it.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">VII. REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Mediation Act, 2023</li>
                            <li>Commercial Courts Act, 2015</li>
                            <li>Salem Advocate Bar Association v. Union of India</li>
                            <li>Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co.</li>
                            <li>Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Sudhanshu K. Baranwal.</p>
                    </div>
                </div>
            )
        },
        // {
        //     title: "Pre-Litigation Mediation: Will It Reduce Court Burden or Delay Justice?",
        //     author: "By Sudhanshu K. Baranwal",
        //     abstract: "India’s judicial backlog continues to pose a structural challenge to effective justice delivery. In response to this systemic concern, Parliament enacted the Mediation Act, 2023, providing statutory recognition to mediation and formalising pre-litigation mediation as a structured mechanism of dispute resolution.",
        //     fullText: (
        //         <div className="space-y-8 text-zinc-300">
        //             <div>
        //                 <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
        //                 <ol className="list-decimal pl-5 space-y-2">
        //                     <li>Introduction</li>
        //                     <li>Understanding Pre-Litigation Mediation</li>
        //                     <li>Arguments in Favour: How It May Reduce Court Burden</li>
        //                     <li>Concerns: Risk of Delay and Procedural Complications</li>
        //                     <li>Balancing Efficiency with Access to Justice</li>
        //                     <li>Conclusion</li>
        //                     <li>References</li>
        //                 </ol>
        //             </div>

        //             <div>
        //                 <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">I. INTRODUCTION</h4>
        //                 <p>India’s judicial backlog continues to pose a structural challenge to effective justice delivery. Civil courts in particular face mounting pendency, resulting in prolonged litigation and increased costs for litigants. In response to this systemic concern, Parliament enacted the Mediation Act, 2023, providing statutory recognition to mediation and formalising pre-litigation mediation as a structured mechanism of dispute resolution.</p>
        //                 <p className="mt-4">The central issue, however, remains:<br />Will pre-litigation mediation meaningfully reduce court burden, or will it operate as an additional procedural layer that delays access to justice?</p>
        //             </div>

        //             <div>
        //                 <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">II. UNDERSTANDING PRE-LITIGATION MEDIATION</h4>
        //                 <p>Pre-litigation mediation refers to the process whereby parties attempt to resolve disputes amicably before instituting formal court proceedings. Unlike court-annexed mediation under Section 89 of the Code of Civil Procedure, 1908, this mechanism operates prior to filing a suit.</p>
        //                 <p className="mt-4">Section 5 of the Mediation Act, 2023 encourages parties to attempt mediation before approaching courts, subject to specified exceptions. The Act also grants enforceability to mediated settlement agreements, strengthening the institutional credibility of mediation in India.</p>
        //                 <p className="mt-4">This reform must also be understood in light of earlier judicial encouragement of ADR mechanisms.</p>
        //                 <ul className="list-disc pl-5 mt-4 space-y-2">
        //                     <li>In Salem Advocate Bar Association v. Union of India, the Supreme Court emphasised the importance of alternative dispute resolution mechanisms and upheld procedural reforms aimed at reducing judicial backlog.</li>
        //                     <li>Similarly, in Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co., the Court clarified the scope of Section 89 CPC and encouraged structured reference to ADR processes, including mediation.</li>
        //                 </ul>
        //                 <p className="mt-4">The Mediation Act builds upon these judicial foundations.</p>
        //             </div>

        //             <div>
        //                 <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">III. ARGUMENTS IN FAVOUR: HOW IT MAY REDUCE COURT BURDEN</h4>

        //                 <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">1. Early Settlement of Disputes</h5>
        //                 <p>Many civil disputes do not necessarily require adjudication of complex legal questions. Commercial misunderstandings, contractual disagreements, and relational disputes may often be resolved through dialogue.</p>
        //                 <p className="mt-2">Internationally, mediation has demonstrated success in filtering disputes at early stages. By institutionalising pre-litigation mediation, India seeks to prevent unnecessary filings, thereby reducing inflow into courts.</p>

        //                 <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">2. Cost and Time Efficiency</h5>
        //                 <p>Litigation in India frequently involves prolonged timelines due to procedural formalities and adjournments. Mediation, being less formal and more flexible, can provide quicker resolution.</p>
        //                 <p className="mt-2">The Supreme Court has repeatedly emphasised the need for speedy justice as part of Article 21 of the Constitution. If mediation shortens dispute resolution time, it aligns with this constitutional objective.</p>

        //                 <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">3. Enforceability of Settlement Agreements</h5>
        //                 <p>A key development under the Mediation Act is the recognition of mediated settlement agreements as enforceable instruments. This addresses earlier concerns regarding enforceability and increases confidence in the process.</p>
        //                 <p className="mt-2">In commercial disputes, enforceability is crucial. A credible settlement mechanism reduces incentives for prolonged adversarial litigation.</p>

        //                 <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">4. Support from Commercial Jurisprudence</h5>
        //                 <p>The idea of pre-litigation mediation is not entirely new. Section 12A of the Commercial Courts Act, 2015 introduced mandatory pre-institution mediation in commercial disputes (unless urgent interim relief is sought).</p>
        //                 <p className="mt-2">In Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd., the Supreme Court held that pre-institution mediation under Section 12A is mandatory and that non-compliance would result in rejection of the plaint. This judgment reflects judicial confidence in structured pre-litigation mediation as a filtering mechanism.</p>
        //             </div>

        //             <div>
        //                 <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IV. CONCERNS: RISK OF DELAY AND PROCEDURAL COMPLICATIONS</h4>
        //                 <p className="mb-4">Despite its potential benefits, certain concerns must be carefully examined.</p>

        //                 <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">1. Urgent Matters and Interim Relief</h5>
        //                 <p>One practical difficulty arises in cases requiring immediate judicial intervention — such as injunctions against property transfer or intellectual property infringement.</p>
        //                 <p className="mt-2">Although the Commercial Courts Act provides an exception where urgent interim relief is sought, rigid application of mediation requirements in other contexts could delay access to justice. The balance between efficiency and urgency must be maintained.</p>

        //                 <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">2. Inequality of Bargaining Power</h5>
        //                 <p>Mediation operates on negotiation and compromise. In disputes involving unequal economic or social power, weaker parties may feel compelled to settle unfavourably.</p>
        //                 <p className="mt-2">Unlike court proceedings, mediation does not involve strict evidentiary standards. The fairness of outcomes largely depends on mediator competence and procedural safeguards.</p>

        //                 <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">3. Infrastructure and Institutional Readiness</h5>
        //                 <p>For pre-litigation mediation to genuinely reduce court burden, there must be:</p>
        //                 <ul className="list-disc pl-5 mt-2 space-y-2">
        //                     <li>Adequate institutional mediation centres</li>
        //                     <li>Trained and neutral mediators</li>
        //                     <li>Strict timelines</li>
        //                     <li>Awareness among members of the Bar</li>
        //                 </ul>
        //                 <p className="mt-2">If infrastructure is inadequate, mediation may become a procedural formality rather than a meaningful dispute resolution attempt.</p>

        //                 <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">4. Strategic Delays</h5>
        //                 <p>There is also a possibility of tactical misuse. A defendant unwilling to settle may participate merely to delay proceedings. In recovery suits, delay often advantages the defaulting party.</p>
        //                 <p className="mt-2">Unless statutory timelines are strictly implemented, mediation may inadvertently encourage postponement rather than resolution.</p>
        //             </div>

        //             <div>
        //                 <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">V. BALANCING EFFICIENCY WITH ACCESS TO JUSTICE</h4>
        //                 <p>The effectiveness of pre-litigation mediation will depend on careful implementation.</p>
        //                 <p className="mt-4">Judicial guidance, similar to that provided in Afcons Infrastructure, may be required to clarify categories of disputes suitable for mediation. Clear exemptions for urgent matters must be preserved to prevent procedural rigidity.</p>
        //                 <p className="mt-4">Most importantly, the legal community must shift its mindset. If lawyers approach mediation as a genuine opportunity for resolution rather than a procedural obstacle, its success rate will increase significantly.</p>
        //             </div>

        //             <div>
        //                 <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VI. CONCLUSION</h4>
        //                 <p>Pre-litigation mediation represents a progressive development in India’s dispute resolution framework. Judicial precedents such as Salem Advocate Bar Association, Afcons Infrastructure, and Patil Automation demonstrate a consistent movement toward encouraging ADR mechanisms.</p>
        //                 <p className="mt-4">Whether it reduces court burden or delays justice depends not merely on statutory design but on practical implementation. If supported by infrastructure, trained professionals, and flexible interpretation, pre-litigation mediation can significantly filter disputes before they enter the judicial pipeline.</p>
        //                 <p className="mt-4">If applied mechanically or without safeguards, it risks becoming an additional procedural stage that delays justice.</p>
        //                 <p className="mt-4">Ultimately, pre-litigation mediation is a tool — its impact will depend on how responsibly the legal system chooses to utilise it.</p>
        //             </div>

        //             <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
        //                 <h4 className="font-bold text-white text-xl mb-3">VII. REFERENCES</h4>
        //                 <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
        //                     <li>Mediation Act, 2023</li>
        //                     <li>Commercial Courts Act, 2015</li>
        //                     <li>Salem Advocate Bar Association v. Union of India</li>
        //                     <li>Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co.</li>
        //                     <li>Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.</li>
        //                 </ol>
        //             </div>

        //             <div className="pt-8 border-t border-white/10 mt-12 text-center">
        //                 <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Sudhanshu K. Baranwal.</p>
        //             </div>
        //         </div>
        //     )
        // },
        {
            title: "The Rise of Alternative Dispute Resolution in India: Recent Developments and the Future of Justice",
            author: "By Abhishak Kumar",
            abstract: "India's courts have been bogged down for years by endless delays, sky-high costs, and an overwhelming backlog of millions of cases. Alternative Dispute Resolution (ADR) offers a necessary solution to relieve court strain and deliver faster justice through flexible, private methods like arbitration and mediation. This article examines the vital role of ADR, its supporting legal framework—including recent updates like the Mediation Act 2023—and the emerging trends and challenges shaping the future of justice in India.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Concept and Importance of ADR</li>
                            <li>Legal Framework Governing ADR in India</li>
                            <li>The Mediation Act 2023: A Major Legal Development</li>
                            <li>Judicial Support for ADR</li>
                            <li>Emerging Trends in ADR</li>
                            <li>Challenges in the Implementation of ADR</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>India's courts have been bogged down for years — endless delays, sky-high costs, and a backlog that's honestly overwhelming. Millions of cases just keep piling up, so it's clear the system seriously needs improvement. That's where Alternative Dispute Resolution, or ADR, comes in to take some of the strain off the courts and help people get justice faster.</p>
                        <p className="mt-4">ADR covers all sorts of methods outside the usual court route — like arbitration, mediation, negotiation, conciliation, and even Lok Adalats. Instead of stiff formal procedures, ADR is about flexibility, privacy, and parties actually working together to solve their problems.</p>
                        <p className="mt-4">Lately, ADR has started getting real attention. Laws are changing, judges are recommending it, and new policies are popping up to make settling disputes smoother. For instance, the Mediation Act 2023, updates to the Arbitration and Conciliation Act 1996, and a push for more formal arbitration centers all show India is serious about embracing ADR.</p>
                        <p className="mt-4">So, this article dives into what ADR is all about, how the legal system supports it, the latest changes in the law, some key court decisions, and what challenges and opportunities lie ahead for ADR in India.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCEPT AND IMPORTANCE OF ADR</h4>
                        <p>Alternative Dispute Resolution, or ADR, is all about settling arguments without dragging everyone to court. The main tools? Arbitration, mediation, conciliation, negotiation, and Lok Adalat.</p>
                        <p className="mt-4">The whole point of ADR is to solve disagreements faster, without as much hostility. You skip all the formal procedures and mountains of paperwork you'd usually get with a lawsuit. It's set up to be straightforward, quick, and not nearly as uptight as going to court.</p>
                        <p className="mt-4">Why do people pick ADR over a lawsuit? First, it usually costs less and doesn't take forever. You actually get to participate in finding a solution, instead of just letting lawyers duke it out while you wait. And, maybe most important, ADR can help keep business or family relationships from falling apart—that matters a lot when you're likely to keep dealing with the same people.</p>
                        <p className="mt-4">Take business disputes, for example. Arbitration and mediation are catching on because you can pick someone who actually knows your field to run the show. That makes everything run smoother, and you end up with answers that make sense for your situation.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">LEGAL FRAMEWORK GOVERNING ADR IN INDIA</h4>
                        <p>The ADR framework in India is supported by several statutes and procedural provisions that encourage the use of alternative dispute resolution mechanisms.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">1. Arbitration and Conciliation Act 1996</h5>
                        <p>The Arbitration and Conciliation Act, 1996, is at the heart of how India handles arbitration and conciliation. Lawmakers shaped it around the UNCITRAL Model Law on International Commercial Arbitration, aiming to bring India's rules in line with global standards. The Act lays out the groundwork for both local and international commercial arbitration, and it doesn't stop there—it covers conciliation as another way to sort out disputes.</p>
                        <p className="mt-2">Lawmakers didn't just set it and forget it. They've updated the Act a few times, especially with the amendments in 2015, 2019, and 2021. Each change pushed arbitration in India toward being faster, more reliable, and, honestly, more attractive to the international business world.</p>
                        <p className="mt-2">The Act really stands out for a few reasons: it keeps courts from interfering too much in arbitration, makes sure arbitral awards actually count and can be enforced, sets deadlines to prevent cases from dragging on forever, and pushes parties toward using established arbitration institutions. It all adds up to a law that wants to make arbitration straightforward, fair, and efficient.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">2. Code of Civil Procedure 1908</h5>
                        <p>Section 89 of the Code of Civil Procedure, 1908, is pretty important when it comes to encouraging alternative dispute resolution in India. Basically, it lets courts send cases to other ways of settling disputes if the judge thinks there's a chance the parties might work things out.</p>
                        <p className="mt-2">The options under Section 89 include:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Arbitration</li>
                            <li>Conciliation</li>
                            <li>Judicial settlement</li>
                            <li>Lok Adalat</li>
                            <li>Mediation</li>
                        </ul>
                        <p className="mt-4">You can see the lawmakers really wanted ADR to become part of the regular court process, not just something extra. It's also a practical move—it helps take some pressure off the courts.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">3. Legal Services Authorities Act 1987</h5>
                        <p>The Legal Services Authorities Act of 1987 brought Lok Adalats into the picture as a key way to settle disputes outside the usual court system in India. These forums are pretty relaxed compared to regular courts, with parties working out compromises with the help of conciliators. Once Lok Adalats hand down an award, that's it—it's final and binding, just like a civil court decree. There's no option to appeal, so the matter gets wrapped up for good.</p>
                        <p className="mt-2">Lok Adalats have really shown their worth when it comes to motor accident claims, issues with public utility services, and smaller civil disputes. They've made dispute resolution quicker and easier, especially for cases that need a practical solution, not endless litigation.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE MEDIATION ACT 2023: A MAJOR LEGAL DEVELOPMENT</h4>
                        <p>India's ADR scene got a big boost with the Mediation Act 2023. Before this, mediation was really just patchwork—court rules here and there and a few legal provisions. Now, the Mediation Act pulls it all together and puts mediation front and centre as the go-to for resolving disputes.</p>
                        <p className="mt-4">Let's break down what's new:</p>

                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-[#D4AF37] block mb-1">Pre-litigation mediation</strong>First, there's mandatory pre-litigation mediation for certain civil and commercial cases. Basically, now you can't rush straight to court—you have to try mediation first. That should cut down on unnecessary lawsuits and push people to settle things earlier.</li>
                            <li><strong className="text-[#D4AF37] block mb-1">Enforceability of settlement agreements</strong>Another major shift is how settlement agreements are treated. If your dispute gets settled through mediation, the agreement now has the same power as a court judgment. That makes these settlements much more credible and enforceable.</li>
                            <li><strong className="text-[#D4AF37] block mb-1">Mediation Council of India</strong>The Act also sets up the Mediation Council of India. This body will keep mediation services in check, recognize official mediation organizations, and make sure mediators actually stick to professional standards.</li>
                            <li><strong className="text-[#D4AF37] block mb-1">Online Mediation</strong>Plus, online mediation is officially recognized. That's a nod to our digital age and helps make dispute resolution more flexible.</li>
                        </ul>
                        <p className="mt-4">All in all, the Mediation Act 2023 is a big move toward making mediation a real institution in India and giving ADR some serious strength.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">JUDICIAL SUPPORT FOR ADR</h4>
                        <p>Indian courts have played a crucial role in promoting ADR and encouraging parties to resolve disputes outside traditional litigation.</p>

                        <ul className="space-y-6 mt-4">
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">1. Afcons Infrastructure Ltd v Cherian Varkey Construction Co (P) Ltd</strong>
                                <p>In Afcons Infrastructure Ltd v Cherian Varkey Construction Co (P) Ltd, the Supreme Court spelled out what Section 89 of the Code of Civil Procedure really covers and highlighted why ADR methods matter so much. The judges also sorted out which kinds of disputes work well for mediation or arbitration, making it easier for courts to decide when to send cases to these alternative routes.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">2. Salem Advocate Bar Association v Union of India</strong>
                                <p>In Salem Advocate Bar Association v Union of India, the Supreme Court stressed how vital ADR mechanisms are and told courts to actually put Section 89 CPC into practice. That move really pushed Indian courts to set up mediation centres.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">3. M R Krishna Murthi v New India Assurance Co Ltd</strong>
                                <p>Then, in M R Krishna Murthi v New India Assurance Co Ltd, the Supreme Court called for a thorough mediation law and suggested that mediation centres should be available everywhere in India. This decision had a big impact and helped pave the way for the Mediation Act 2023.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">EMERGING TRENDS IN ADR</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Institutional Arbitration</h5>
                        <p>India's shifting gears — now leaning toward institutional arbitration instead of ad hoc arbitration. That means disputes get handled by organizations like the Mumbai Centre for International Arbitration (MCIA) or the Delhi International Arbitration Centre (DIAC), not just by parties sorting things out on their own.</p>
                        <p className="mt-2">These institutions bring their own rules and support, and honestly, it's a smoother ride. Professional arbitration services make everything more efficient and transparent, and people trust the process a lot more.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Online Dispute Resolution</h5>
                        <p>Online Dispute Resolution (ODR) really started making waves in the world of alternative dispute resolution (ADR). These platforms let people settle arguments using things like video calls, online negotiation tools, and electronic paperwork. During the COVID-19 pandemic, ODR became essential — courts couldn't hold in-person hearings, so everyone needed a digital solution. In India, ODR is finding its place, especially in handling consumer issues, e-commerce battles, and small commercial claims.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CHALLENGES IN THE IMPLEMENTATION OF ADR</h4>
                        <p>ADR in India has a lot going for it, but it's not without problems. Plenty of people, including lawyers, don't really know how these methods work, so most folks stick to regular courtroom battles because it's what they're used to. Finding good mediators and arbitrators is tough, too. You need professionals who really know their stuff if you want ADR to work well, but there aren't enough around.</p>
                        <p className="mt-4">Even though the law tries to keep courts from jumping into arbitration too much, judges still tend to get involved more often than anyone would like, which ends up dragging things out. And let's not forget, actually enforcing a settlement or an arbitration award can be a headache. If someone challenges it, you're right back in court and dealing with a whole bunch of legal steps all over again.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>Alternative Dispute Resolution has become an essential component of modern legal systems. In India, ADR mechanisms such as arbitration, mediation, conciliation and Lok Adalats play an important role in improving access to justice and reducing court congestion.</p>
                        <p className="mt-4">Recent legislative developments, particularly the Mediation Act 2023, demonstrate India's commitment to strengthening ADR frameworks and promoting amicable settlement of disputes.</p>
                        <p className="mt-4">However, the success of ADR depends not only on legislative reforms but also on institutional support, professional training and greater public awareness.</p>
                        <p className="mt-4">If effectively implemented, ADR mechanisms have the potential to transform India's dispute resolution system by providing faster, cost-effective and accessible justice.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Mediation Act 2023</li>
                            <li>Avtar Singh, Law of Arbitration and Conciliation (11th edn, Eastern Book Company 2018)</li>
                            <li>Nandan Nilekani and others, 'Online Dispute Resolution for India' (NITI Aayog Report 2021)</li>
                            <li>UNCITRAL Model Law on International Commercial Arbitration 1985 (amended 2006)</li>
                            <li>Arbitration and Conciliation (Amendment) Acts 2015, 2019 and 2021</li>
                            <li>Code of Civil Procedure 1908, s 89</li>
                            <li>Legal Services Authorities Act 1987</li>
                            <li>Afcons Infrastructure Ltd v Cherian Varkey Construction Co (P) Ltd (2010) 8 SCC 24</li>
                            <li>Salem Advocate Bar Association v Union of India (2005) 6 SCC 344</li>
                            <li>M R Krishna Murthi v New India Assurance Co Ltd (2019) 4 SCC 177</li>
                            <li>Ministry of Law and Justice, Report on Institutional Arbitration in India (2017)</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Abhishak Kumar, Lucknow University.</p>
                    </div>
                </div>
            )
        },
        {
            title: "International Law & Climate Change: Treaties, Environmental Governance, and State Responsibilities",
            author: "By Sudhir Mehta",
            abstract: "Climate change has become one of the most serious global challenges, requiring collective action by all nations. International law plays a vital role in regulating environmental protection through treaties, conventions, and legal principles that guide state behaviour. This research paper examines international climate treaties, environmental governance mechanisms, and the legal responsibilities of states in addressing climate change. The study focuses on major agreements such as the United Nations Framework Convention on Climate Change, the Kyoto Protocol, and the Paris Agreement, along with key legal principles including common but differentiated responsibilities, precautionary principle, and sustainable development.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Abstract</li>
                            <li>Introduction</li>
                            <li>Evolution of International Climate Law</li>
                            <li>Major International Climate Treaties</li>
                            <li>Principles of International Environmental Law</li>
                            <li>Environmental Governance in the International System</li>
                            <li>State Responsibilities Under International Law</li>
                            <li>Enforcement Challenges in International Climate Law</li>
                            <li>Critical Analysis</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">1. ABSTRACT</h4>
                        <p>Climate change has become one of the most serious global challenges, requiring collective action by all nations. International law plays a vital role in regulating environmental protection through treaties, conventions, and legal principles that guide state behaviour. This research paper examines international climate treaties, environmental governance mechanisms, and the legal responsibilities of states in addressing climate change. The study focuses on major agreements such as the United Nations Framework Convention on Climate Change, the Kyoto Protocol, and the Paris Agreement, along with key legal principles including common but differentiated responsibilities, precautionary principle, and sustainable development.</p>
                        <p className="mt-4">The 13th Cambridge International Law Journal Conference, where this article was originally presented as a keynote speech, was dedicated to 'The Intersection of Peace and Sustainability in International Law'. This article addresses the conference's theme by analysing the role of international law in the burgeoning practice of climate change litigation. Specifically, it considers how international law has been used in litigation brought against States before national and international bodies. In so doing, the article provides an international law perspective on a topic that is immensely popular in current legal scholarship. It demonstrates that international law obligations and adjudication are playing an increasingly important role in this dynamic area of legal practice and reflects on possible future developments.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">2. INTRODUCTION</h4>
                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Background on Climate Change as a Global Challenge</h5>
                        <p>Climate change represents one of the most pressing and complex challenges facing the world today. Rising global temperatures, increasing frequency of extreme weather events, sea-level rise, and disruptions to ecosystems threaten human health, food security, and economic development. Scientific consensus, as outlined by the Intergovernmental Panel on Climate Change (IPCC), affirms that anthropogenic greenhouse gas emissions are the primary driver of recent climate change trends. Given the transboundary nature of climate impacts, no single country can address these issues independently, making climate change a quintessential global problem.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Importance of International Cooperation</h5>
                        <p>Effective responses to climate change necessitate coordinated international efforts. Because greenhouse gas emissions and their consequences do not respect national borders, collective action among states is crucial. International cooperation enables the pooling of resources, sharing of technology, and establishment of common goals and standards. It also ensures that vulnerable and developing countries receive financial and technical support to adapt and mitigate climate risks. Without such cooperation, fragmented national efforts are unlikely to achieve the scale and speed of action required.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Overview of International Law's Relevance</h5>
                        <p>International law provides the legal frameworks and mechanisms through which countries negotiate, commit to, and enforce climate actions. Treaties, customary international law, and soft law instruments serve as platforms for setting emission reduction targets, reporting obligations, dispute resolution, and capacity building. Over the past three decades, international climate law has evolved significantly, culminating in landmark agreements such as the Kyoto Protocol and the Paris Agreement. These legal instruments shape the global governance landscape for climate policy, although their effectiveness is often constrained by political will, enforcement challenges, and differing national interests.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Research Problem/Question</h5>
                        <p>Despite numerous international agreements, global greenhouse gas emissions continue to rise, raising questions about the effectiveness of international law in driving meaningful climate action. This research seeks to investigate: How effective is international law in addressing climate change, and what are the key challenges and opportunities for strengthening its role in global climate governance?</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Objectives of the Study</h5>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>To analyze major international legal frameworks addressing climate change and their mechanisms.</li>
                            <li>To assess the challenges in implementation and enforcement of international climate law.</li>
                            <li>To identify gaps and propose recommendations for enhancing the efficacy of international law in climate change mitigation and adaptation.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">3. EVOLUTION OF INTERNATIONAL CLIMATE LAW</h4>
                        <p>International environmental law developed gradually during the twentieth century as environmental problems became global in nature. Early agreements focused on pollution control, wildlife protection, and conservation of natural resources. However, climate change later emerged as the most serious environmental challenge.</p>
                        <p className="mt-4">A major step in international climate law was taken in 1992 with the adoption of the UNFCCC. This convention recognized climate change as a common concern of humanity and established a legal framework for cooperation among states. The Convention required countries to collect data, share information, and adopt policies to reduce greenhouse gas emissions.</p>
                        <p className="mt-4">After the UNFCCC, several agreements were adopted to strengthen climate obligations. The Kyoto Protocol introduced legally binding emission targets for developed countries, while the Paris Agreement created a flexible system where each country sets its own commitments. The evolution of climate law shows that international cooperation has increased over time, but it also shows that states often disagree on responsibility, economic burden, and enforcement. As a result, international climate law continues to develop through negotiations, court decisions, and new treaties.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">4. MAJOR INTERNATIONAL CLIMATE TREATIES</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">4.1 United Nations Framework Convention on Climate Change (UNFCCC)</h5>
                        <p>The UNFCCC is the foundation of international climate law. Its main objective is to stabilize greenhouse gas concentrations to prevent dangerous climate change. The Convention introduced the principle of common but differentiated responsibilities, which means all countries must protect the environment but developed countries have greater obligations because they have contributed more to pollution in the past. The UNFCCC does not impose strict emission limits but provides a framework for future agreements and Conferences of Parties (COP) are held regularly to review progress and negotiate new rules.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">4.2 Kyoto Protocol</h5>
                        <p>The Kyoto Protocol was adopted in 1997 to strengthen the UNFCCC. It required developed countries to reduce greenhouse gas emissions according to legally binding targets. The Protocol divided countries into developed and developing categories and placed greater responsibility on developed nations. Although the Kyoto Protocol was an important step, it faced several problems. Some major countries did not fully participate, and developing countries were not required to reduce emissions. This reduced the effectiveness of the agreement.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">4.3 Paris Agreement</h5>
                        <p>The Paris Agreement of 2015 is the most important climate treaty today. Its goal is to limit global temperature rise to below 2°C and try to keep it below 1.5°C. Unlike the Kyoto Protocol, the Paris Agreement allows each country to decide its own climate targets through nationally determined contributions. The Agreement encourages cooperation and participation from all countries, but it relies mainly on voluntary compliance. Because there are no strict penalties for non-compliance, critics argue that the Agreement may not be strong enough to stop climate change.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">5. PRINCIPLES OF INTERNATIONAL ENVIRONMENTAL LAW</h4>
                        <p>International climate law is based on several important legal principles that guide state behaviour.</p>

                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">Common but Differentiated Responsibilities:</strong> This principle recognizes that all countries share responsibility for environmental protection, but developed countries must take the lead because of their historical emissions and greater resources.</li>
                            <li><strong className="text-white">Precautionary Principle:</strong> States must take preventive action even if scientific certainty is not complete. Climate damage may be irreversible, so early action is necessary.</li>
                            <li><strong className="text-white">Sustainable Development:</strong> Environmental protection must be balanced with economic growth. Developing countries argue that strict climate rules should not stop their development.</li>
                            <li><strong className="text-white">Duty to Cooperate:</strong> States must work together to solve global environmental problems because climate change affects the whole world.</li>
                        </ul>
                        <p className="mt-4">These principles form the legal and moral foundation of international climate law.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">6. ENVIRONMENTAL GOVERNANCE IN THE INTERNATIONAL SYSTEM</h4>
                        <p>Environmental governance refers to the system of treaties, institutions, and decision-making processes used to manage environmental issues at the global level. The United Nations plays the central role in climate governance through conferences, negotiations, and international organizations.</p>
                        <p className="mt-4">Global governance faces many challenges. Different countries have different economic interests, which makes it difficult to agree on strict rules. Developed countries often have more influence in negotiations, while developing countries demand financial and technological support. Another problem is that international organizations do not have strong enforcement power. They can recommend policies, but they cannot force countries to follow them. As a result, many climate agreements depend on voluntary cooperation.</p>
                        <p className="mt-4">Despite these problems, global environmental governance has helped create awareness and cooperation among nations. It has also encouraged scientific research, technology transfer, and international funding for climate action.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">7. STATE RESPONSIBILITIES UNDER INTERNATIONAL LAW</h4>
                        <p>States have several legal responsibilities under international environmental law:</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Duty to Prevent Environmental Harm</h5>
                        <p>One of the fundamental principles of international law is that a state must ensure that activities within its jurisdiction do not cause damage to the environment of other states or to areas beyond national jurisdiction. This principle was recognized in the Trail Smelter Arbitration, where it was held that no state has the right to use its territory in a way that causes harm to another state.</p>
                        <p className="mt-2">This rule has become part of customary international law and is reflected in many environmental treaties. In the context of climate change, this means that states must regulate industries, energy production, and other activities that contribute to greenhouse gas emissions. Failure to control such activities may amount to a breach of international obligations.</p>
                        <p className="mt-2">The duty to prevent environmental harm also applies to global commons such as the atmosphere and oceans, which are shared by all nations. Therefore, climate protection is considered a collective legal responsibility.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Duty to Reduce Emissions</h5>
                        <p>International climate treaties impose obligations on states to reduce greenhouse gas emissions and adopt sustainable environmental policies. Under the United Nations Framework Convention on Climate Change, states agreed to stabilize greenhouse gas concentrations to prevent dangerous interference with the climate system.</p>
                        <p className="mt-2">Later agreements such as the Kyoto Protocol and the Paris Agreement strengthened these obligations by requiring states to set emission reduction targets and regularly report their progress. Although the Paris Agreement allows flexibility through nationally determined contributions, it still creates a legal expectation that states will take meaningful action.</p>
                        <p className="mt-2">The obligation to reduce emissions reflects the broader principle of sustainable development, which requires states to balance economic growth with environmental protection. However, disputes often arise because developing countries argue that strict emission limits may restrict their development, while developed countries emphasize the urgency of climate action.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Duty to Cooperate and Assist</h5>
                        <p>International environmental law also recognizes the duty of states to cooperate in solving global environmental problems. Climate change cannot be addressed by individual countries acting alone; therefore, cooperation is essential.</p>
                        <p className="mt-2">The principle of common but differentiated responsibilities requires developed countries to take the lead in reducing emissions and to assist developing countries through financial aid, technology transfer, and capacity building. This principle is included in the UNFCCC and has been reaffirmed in later climate agreements.</p>
                        <p className="mt-2">Developing countries often lack the resources needed to adopt clean technologies or implement climate policies. Without international support, global climate goals cannot be achieved. For this reason, climate treaties establish funds and mechanisms to help developing nations adapt to climate change and reduce emissions.</p>
                        <p className="mt-2">However, disagreements over financial contributions and responsibility-sharing remain one of the biggest challenges in international climate negotiations.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Human Rights and Climate Change</h5>
                        <p>In recent years, climate change has increasingly been linked with human rights law. Environmental damage caused by climate change can affect fundamental rights such as the right to life, health, food, water, and livelihood. As a result, courts and international bodies have begun to recognize that states may be legally responsible if they fail to take adequate measures to prevent climate harm.</p>
                        <p className="mt-2">A significant development in this area is the <em>Urgenda Foundation v. State of the Netherlands</em>, where the court held that the government had a legal duty to reduce greenhouse gas emissions in order to protect human rights. The decision established that climate protection is not only a policy choice but also a legal obligation.</p>
                        <p className="mt-2">Similarly, international human rights bodies have stated that environmental protection is necessary for the enjoyment of basic human rights. This approach strengthens international climate law by providing individuals and communities the ability to challenge government inaction before courts.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">8. ENFORCEMENT CHALLENGES IN INTERNATIONAL CLIMATE LAW</h4>
                        <p>One of the biggest weaknesses of international climate law is the lack of strong enforcement. Unlike national law, there is no world government to punish countries that break environmental agreements.</p>
                        <p className="mt-4">Many treaties depend on voluntary compliance, which means countries may ignore their commitments without serious consequences. Economic interests often prevent governments from adopting strict environmental policies.</p>
                        <p className="mt-4">Another challenge is the conflict between developed and developing countries. Developing nations argue that they should not bear the same burden as developed countries because they need economic growth.</p>
                        <p className="mt-4">However, new trends such as climate litigation, advisory opinions of international courts, and human rights claims are increasing pressure on governments to follow their obligations. These developments may strengthen enforcement in the future.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">9. CRITICAL ANALYSIS</h4>
                        <p>International climate law has made significant progress, but it is still not strong enough to fully control climate change. The legal framework is well developed, but enforcement remains weak.</p>
                        <p className="mt-4">The UNFCCC, Kyoto Protocol, and Paris Agreement show that countries are willing to cooperate, but political and economic interests often limit their commitments. The principle of common but differentiated responsibilities promotes fairness, but it also creates disagreements about who should do more.</p>
                        <p className="mt-4">Recent developments in international courts and human rights law suggest that climate obligations may become legally binding in the future. If courts continue to recognize environmental protection as a legal duty, states may face greater accountability.</p>
                        <p className="mt-4">Therefore, the future of international climate law depends on stronger enforcement, clearer obligations, and better cooperation between developed and developing countries.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">10. CONCLUSION</h4>
                        <p>International law has established a crucial foundation for global cooperation in addressing the complex and urgent challenge of climate change. Treaties such as the UNFCCC, Kyoto Protocol, and Paris Agreement have created important frameworks for emission reduction commitments, transparency, financial support, and technology transfer.</p>
                        <p className="mt-4">However, the analysis reveals persistent gaps between legal commitments and actual climate outcomes, largely due to enforcement challenges, sovereignty concerns, uneven capacities, and financing constraints. The evolving landscape of international climate law highlights both its strengths—such as inclusive participation, flexible mechanisms, and growing transparency—and its limitations, including voluntary targets under the Paris Agreement and weak dispute resolution options.</p>
                        <p className="mt-4">The increasing role of climate litigation and regional cooperation further illustrates the multi-dimensional nature of global climate governance, extending beyond traditional treaty mechanisms.</p>
                        <p className="mt-4">To enhance the effectiveness of international law in combating climate change, there is a critical need to strengthen compliance mechanisms, scale up financial and technical support to developing countries, and promote greater ambition in national commitments. Moreover, fostering robust dispute resolution and enhancing cooperation among state and non-state actors will be essential in bridging the ambition-implementation gap. Ultimately, international law remains a vital tool in mobilizing collective action against climate change, but its success depends on dynamic adaptation, political will, and a shared commitment to equity and sustainability. Only through strengthened legal frameworks and cooperative efforts can the global community hope to meet the goals of limiting temperature rise and safeguarding the planet for future generations.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">11. REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>UNFCCC Official Documents</li>
                            <li>Kyoto Protocol, 1997</li>
                            <li>Paris Agreement, 2015</li>
                            <li>Principles of International Environmental Law – Philippe Sands</li>
                            <li>International Law and the Environment – Patricia Birnie</li>
                            <li>United Nations Climate Reports</li>
                            <li>IPCC Climate Change Reports</li>
                            <li>Articles on International Environmental Governance</li>
                            <li>Research Journals on Climate Law</li>
                            <li>United Nations General Assembly Resolutions on Environment</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Sudhir Mehta, Usha Martin University.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Alternate Dispute Resolution: Development and its Impact on Efficacy of Judiciary",
            author: "By Khushi Bhatnagar",
            abstract: "The judicial system undergoes serious circumstances that slows down the effective mechanism of judiciary. Delays in litigation process, high cost, procedural complexities and extensive backlog of cases, currently amounting to more than five crore pending cases, are major causes that contribute to inefficiency of traditional courts. To divide the work load and pressure, provide efficient results in judiciary and to foster flexibility both in monetary and time terms, Alternate Dispute Resolution (ADR) which is institutionalized through legislative framework such as Arbitration and Conciliation Act, 1996 is a pre-eminent approach that is used to resolve disputes without resorting to the traditional court litigation.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Development of Alternate Dispute Resolution</li>
                            <li>Impact of ADR on Judiciary and its Efficiency</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>The judicial system undergoes serious circumstances that slows down the effective mechanism of judiciary. Delays in litigation process, high cost, procedural complexities and extensive backlog of cases, currently amounting to more than five crore pending cases, are major causes that contribute to inefficiency of traditional courts. To divide the work load and pressure, provide efficient results in judiciary and to foster flexibility both in monetary and time terms, Alternate Dispute Resolution (ADR) which is institutionalized through legislative framework such as Arbitration and Conciliation Act, 1996 is a pre-eminent approach that is used to resolve disputes without resorting to the traditional court litigation.</p>
                        <p className="mt-4">ADR includes informal procedures, flexibility and inclusivity, confidentiality in proceedings, comparatively faster resolution of disputes and reduced monetary investment compared to traditional court litigation. The perk of opting for ADR is the Award, which is the final, legally binding decision made by an arbitrator that holds the same value as a court decree under Section 36 of Arbitration and Conciliation Act 1996. Alternate Dispute Resolution is practiced via various methods such as Negotiation, Mediation, Conciliation and Arbitration with each mechanism having its own distinct feature and procedures.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Forms of ADR respectively are:</h5>
                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">NEGOTIATION:</strong> It involves mutual direct communication between two parties with the aim to reach an acceptable agreement to their dispute. Negotiation is an informal, simple and flexible procedure that is directly in control of both the parties without third-party involvement. It is usually the initial resort in resolving disputes, especially the ones transactional and contractual in nature. However, it may not be productive due to lack of cooperation, power imbalances between the parties to the contract or majorly because of absence of a neutral moderator.</li>
                            <li><strong className="text-white">MEDIATION:</strong> It involves direct communication between the disputed parties in presence of a neutral third party known as a mediator to facilitate a voluntary settlement on a contested matter. The procedure of mediation is basic as it encompasses appointment of a mediator followed by statements by both the parties, identification of issues, negotiations and discussions and then eventually leading to a settlement Agreement. Mediation is commonly used in disputes involving family matters, employment concerns and commercial conflicts, where maintaining the status of the relationship is crucial.</li>
                            <li><strong className="text-white">CONCILIATION:</strong> It involves direct communication between the disputed parties to a matter in presence of neutral conciliator playing a proactive role in resolving the dispute by suggesting solutions and settlement terms for desired outcome. It is considered a informal procedure of settlement and the conciliator acts as an advisor to the parties. It is promptly used in corporate conflicts, industrial disputes and commercial matters.</li>
                            <li><strong className="text-white">ARBITRATION:</strong> It is a formal ADR mechanism, where disputes are governed by an arbitrator or a panel of arbitrators who render a binding decision knows as an award. Awards are of 3 kinds, Final, Interim and Consent award, each being enforceable in the court of law as a court decree under Section 36 of Arbitration and Conciliation Act 1996. Arbitration can be Domestic Arbitration, International Commercial Arbitration, Institutional Arbitration and Ad-hoc Arbitration, all sharing the same fundamental concept of agreement, appointment, submission, hearing and arbitral award.</li>
                        </ul>

                        <p className="mt-4">Alternate Dispute Resolution facilitates speedy resolution, reduces legal expenses by reducing the procedural formalities as compared to the working of the traditional courts, provides party autonomy and flexibility in decisions, ensures confidentiality by protecting sensitive information and reputational concerns, promotes cooperation and mutual understanding, render mutually beneficial solutions and largely helps in preserving valuable relationships.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">DEVELOPMENT OF ALTERNATE DISPUTE RESOLUTION</h4>
                        <p>Initially, Alternate Dispute Resolution was informally observed in traditional justice systems like village panchayats, community elders and village sabhas exhibiting informal procedures without strict legal framework. Since pre-independence, Arbitration Act, 1899 and Civil Procedure Code marked a formal recognition of ADR apart from established legal system to enacting Arbitration and Conciliation Act, 1996 providing solid procedures of justice governing domestic and International Arbitration aligning with international standards and keeping judicial intervention to minimum.</p>
                        <p className="mt-4">One of the most significant legal developments of ADR is its inclusion in the system of Court of law through Section 89 of the Code of Civil Procedure, 1908 which enabled courts to refer disputes to ADR mechanisms on discretion and encouraged legally enforceable settlements outside courts. In 2023, Mediation gained importance as an effective ADR mechanism by establishing mediation centers in courts, training mediators to be skilled and efficient and diverting appropriate cases to be solved through mediation, thereby resulting in promotion of pre-litigation mediation, its enforceability and recognition of mediation as a formal dispute resolution mechanism.</p>
                        <p className="mt-4">Furthermore, In 1987 Lok Adalats were established by the Legal Services Authorities Act demonstrating informal and speedy resolutions, focusing on settlements and mutual compromises avoiding the court fees leading to disposal of large number of cases and increased access to justice, popularizing the method of Alternate Dispute Resolution. The progress of ADR is a shift towards more efficient, flexible, and accessible system of justice, making the Indian judiciary vital part of reform and modern jurisprudence.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IMPACT OF ADR ON JUDICIARY AND ITS EFFICIENCY</h4>
                        <p>According to National Judicial Data Grid (NJDG), Indian judiciary is in heavy debt of cases, reporting with over 55.8 million pending across all levels of the Indian judiciary. The district and subordinate courts mark the majority with over 49 million pending cases. The highest judicial authority of India itself reports over 92,000 pending cases. ADR plays an important role in diverting a notable number of cases away from the courts, thereby reducing the burden on traditional court system. It improves efficiency and productivity of the courts by settling certain cases outside courts, so that they can focus on constitutional, complex and serious matters.</p>
                        <p className="mt-4">Pre-litigation ADR and court referring cases to mediation centers contributes to a faster dispute resolution system. This ensures the justice is delivered duly within a reasonable time frame and facilitates better allocation of judicial resources to prevent frustration and loss of trust in the judicial system. Paramount of all the benefits, ADR is cost effective as it consists of simplified procedures as compared the traditional courts. It encourages amicable settlements, reduces adversarial conflict and promotes fair and equitable outcomes without biasness. This ensures that quality and effectiveness of justice is upheld.</p>
                        <p className="mt-4">ADR can be proved more efficient in certain cases if dimensions such as lack of awareness and public confidence, misconception that ADR lacks legal enforceability, reluctance from lawyers and other legal practitioners, scarcity of skilled ADR professionals, inconsistent quality of mediators and arbitrators, lack of basic ADR training, Lack of institutional framework running and supporting solely ADR, insufficient mediation centers and necessary facilities, inconsistent referral practices that lack a clear guidance, enforcement misconceptions and issues in Arbitration, power imbalance in parties, inequality leading to risk of unfair settlements, limited scope for public scrutiny, possibility of biasness from third party, limited scope in terms of cultural and social barriers, lack of uniform standards and regulations, are expunged.</p>
                        <p className="mt-4">Arbitration may be costlier than traditional courts sometimes due to high fees of arbitrators, administrative costs or even general legal expenses involved in commencement of the procedure.</p>
                        <p className="mt-4">Despite its disadvantages, Alternate Dispute Resolution has become requisite tool for strengthening the judicial pillars by reducing the evident judicial backlog, improved disposal of cases, optimal use of judicial resources and services, lower expenditure on court procedures, reduced need for building infrastructure, promotion of justice for marginal communities, decreased hostile litigation, reducing appeals and legal disputes. ADR is against exorbitant nature of traditional legal system which makes justice accessible to every class or said sections of the Indian society.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>Alternate Dispute Resolution has significantly emerged as a groundbreaking and radical development in legal landscape which has fostered judicial trust and enhance efficacy of the judiciary to an extent which is meritorious. The evolution from its roots in informal, community based legal practices to its current structured legal framework with proper enforceability, ADR reflects a progressive shift, allowing judiciary to be responsive and accessible to every person irrespective of their backgrounds.</p>
                        <p className="mt-4">The Arbitration and Conciliation Act, 1996, the incorporation of Section 89 of the Code of Civil Procedure, followed by Mediation Act, 2023, demonstrates methodical integration of Alternate Dispute Resolution mechanism to handle disputes outside traditional courts but within the formal judicial system. The institutionalization of ADR has made the mechanism reliable, simultaneously aligning with international standards.</p>
                        <p className="mt-4">ADR is proved to be cost-effective, time-effective, flexible, confidential and a system providing user-friendly solutions while granting complete party autonomy, thereby strengthening public confidence in the legal system. This has also enabled courts to focus on complex, constitutional and more significant cases that require formal adjudication and has reduced the burden on traditional courts, addressing long-standing issue of judicial backlog, enhancing productivity and efficiency of judicial system.</p>
                        <p className="mt-4">The true potential of ADR can only flourish when drawbacks such as lack of awareness, inadequate infrastructure and need for trained professionals is adequately addressed. In conclusion, ADR is an essential augmentation in the field of justice which has significantly enhanced the efficacy by providing faster solutions and better accessibility. As the judiciary proceeds Alternate Dispute Resolution will indisputably play an essential role in serving justice and molding the future of dispute resolution.</p>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Khushi Bhatnagar, University of Mumbai Law Academy / BBA LLB.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Role of Online Dispute Resolution in the Modern Digital Era",
            author: "By Gowri P S",
            abstract: "Overcoming litigation issues in our society has led to the introduction of the Alternate Dispute Resolution (ADR). Despite this innovation, ADR has also been said to have the advancement in technology and also Digitalization. As a result of the problems inherent in ADR, Online Dispute Resolution (ODR) emerged in order to resolve the challenges in the current Adjudicative Process. Online Dispute Resolution therefore, in essence, refers to the use of web or electronic systems that resolves disputes expeditiously by the employment of highly technological tools with utmost care and precaution, with the aim of settling disputes amicably.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Abstract</li>
                            <li>Introduction</li>
                            <li>Online Dispute Resolution (ODR)</li>
                            <li>Concept and Scope of ODR</li>
                            <li>Evolution of ODR</li>
                            <li>Opportunities and Advantages of ODR in India</li>
                            <li>Challenges in Implementation</li>
                            <li>Legal and Regulatory Framework of ODR in India</li>
                            <li>Role of Judiciary and Bar Councils</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">1. ABSTRACT</h4>
                        <p>Overcoming litigation issues in our society has led to the introduction of the Alternate Dispute Resolution (ADR). Despite this innovation, ADR has also been said to have the advancement in technology and also Digitalization. As a result of the problems inherent in ADR, Online Dispute Resolution (ODR) emerged in order to resolve the the challenges in the current Adjudicative Process. Online Dispute Resolution therefore, in essence, refers to the use of web or electronic systems that resolves disputes expeditiously by the employment of highly technological tools with utmost care and precaution, with the aim of settling disputes amicably. This has become necessary and relevant because, nowadays commercial transactions has increased, thereby, making the e-commerce, online payments and technology-based services much prevailing in our economy. Although these online services provides high precision and ease of access, it is, however, also characterized with a lot of issues such as recurring payment failures, consumer complaints, as well as failure to meet the stipulated terms and conditions in the contracts. Therefore, the study finds out that ODR is not just an alternate dispute resolution system, but a necessary tool in the era of the digital economy.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">2. INTRODUCTION</h4>
                        <p>The common saying "Justice delayed is justice denied" holds equally good in our case, with respect to India, which stands out as the largest practicing democracy and has got approximately 5 Crore cases which are pending in different courts. The general practice in the Indian Judicial system is litigation and in general the legal process is full of complexities and it is long lasting and at times very expensive which deprives common man of seeking Justice from the courts.</p>
                        <p className="mt-4">With the increasing rate at which individuals communicate online and the amount of information they share, online altercations are becoming inevitable. Online Dispute Resolution (ODR) is one of the ways of addressing and resolving these quarrels. It is the electronic version of Alternative Dispute Resolution (ADR). This involves the use of technological tools like video conferencing, e-filing and also the use of artificial intelligence.</p>
                        <p className="mt-4">It is common knowledge that several countries like UK and Singapore have effectively implemented Online Dispute Resolution (ODR) for consumer and commercial redress. India too is starting to make strides towards achieving this objective by various judicial and policy reforms. ODR is not a separate legal category from ADR, but a development of ADR, an extension of the alternative dispute resolution processes and principles.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">3. ONLINE DISPUTE RESOLUTION (ODR)</h4>
                        <p>Online Dispute Resolution (ODR) refers to the use of Information and Communication Technology (ICT) to assist in dispute resolution process. ODR is an extension of traditional Alternative Dispute Resolution (ADR) including mediation, arbitration, negotiation and other dispute resolution processes. With the help of technology, parties can engage in dispute resolution via electronic means such as video conferencing, secure messaging, e-filing etc.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">The essential components of ODR include:</h5>
                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">1. Online Mediation:</strong> Online mediation refers to the use of an impartial third party to facilitate the online negotiation process between the disputants to help them reach an amicable agreement.</li>
                            <li><strong className="text-white">2. Online Arbitration:</strong> In case of any disagreement, the dispute would be settled through online Arbitration. The arbitrator would give his binding decision upon going through the whole evidence and after hearing the parties.</li>
                            <li><strong className="text-white">3. Online Negotiation:</strong> In this scenario, negotiation occurs between the parties, either via computer interfaces or via mediated communication channels, which can include aids and tools that assist in the negotiation.</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">In terms of technology application degree, ODR can be divided into three models:</h5>
                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">1. Synchronous ODR:</strong> Real-time communication between parties and neutrals (e.g., live video mediation).</li>
                            <li><strong className="text-white">2. Asynchronous ODR:</strong> The communication in this model occurs over time using media such as email, secure chat or platform dashboards.</li>
                            <li><strong className="text-white">3. Automated ODR:</strong> ADR systems incorporating artificial intelligence (AI) and decision-support systems (DSS) which offer or suggest instances in relation to fines for parking infractions or online for consumer disputes.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">4. CONCEPT AND SCOPE OF ODR</h4>
                        <p>ODR (Online Dispute Resolution) refers to the process of resolving disputes online by using Alternative Dispute Resolution (ADR) tools and techniques such as arbitration, mediation and conciliation and includes e-arbitration and e-mediation.</p>
                        <p className="mt-4">In the significant judgment of <em>State of Maharashtra v. Praful B. Desai</em>, the Supreme Court held that it is permissible to use video conferencing for judicial proceedings, paving the way for dispute resolution through virtual modes.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">5. EVOLUTION OF ODR</h4>
                        <p>Online Dispute Resolution (ODR) is a term that was coined in the late 1990s as electronic commerce was expanding beyond belief. eBay, which was one of the early adopters of Online Dispute Resolution, has a very efficient and successful system which resolves millions of disputes on an annual basis.</p>
                        <p className="mt-4">Online Dispute Resolution (ODR) has taken root globally with many institutions taking notice to its potential and practices. The United Nations Commission on International Trade Law (UNCITRAL) published a technical note in 2016 on ODR as a set of non-binding recommendations for improving ODR practices, focusing on the key principles of ensuring accessibility, fairness and efficiency in the online dispute resolution process.</p>
                        <p className="mt-4">The European Union implemented an EU-wide Consumer Online Dispute Resolution (ODR) platform as part of the Alternative Dispute Resolution (ADR) Directive Regulation (EU) No 524/2013 that is administered by the European Commission to build trust in cross-border e-commerce transactions. In parallel, several countries have incorporated ODR into their civil justice systems. In Singapore, an experimental Community Justice and Tribunals System (CJTS) has been established with online tribunals to process small civil money claims within an expanded Alternative Dispute Resolution (ADR) centre. Similarly, in the United Kingdom, the Money Claim Online (MCOL) is an online process for claimants to bring civil money claims before the courts at a relatively low cost to all parties involved.</p>
                        <p className="mt-4">In India, the COVID-19 pandemic appears to have acted as a catalyst for developments in digital justice. So, the use of virtual courts and e-Lok Adalats in connection with online dispute resolution appears to be working.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">6. OPPORTUNITIES AND ADVANTAGES OF ODR IN INDIA</h4>
                        <p>Online Dispute Resolution (ODR) is a new concept in India's justice delivery system keeping in view India's large population, vast geography and large number of pending cases. ODR technology makes the dispute resolution process faster, economical and more streamlined. It helps in increasing access to justice and in doing so, it brings in several changes in the way disputes are settled.</p>

                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">1. Cost and Time Efficiency:</strong> Mediation, Arbitration and other forms of Alternative Dispute Resolution and Court Proceedings are generally long lasting and costly. ODR, facilitates a quick and cost effective solution to a dispute. The high costs of legal representation and the long-drawn-out litigation process in the Courts are sufficient to deter many potential litigants to seek redress of their grievances. Similarly, even where efforts are made to resolve disputes through mediation or arbitration, the formal process involved can prove to be long-drawn-out and costly.</li>
                            <li><strong className="text-white">2. Greater Access to Justice:</strong> Online Dispute Resolution (ODR) facilitates easier access to justice for marginalized, rural and remote communities. India's justice system is heavily biased towards cities and urban areas; this severely impacts rural plaintiffs due to geographical and economic constraints.</li>
                            <li><strong className="text-white">3. Barrier Removal:</strong> ODR removes barriers such as long-distance travel to courts, physical presence of the parties, and limited local legal infrastructure.</li>
                            <li><strong className="text-white">4. Designing the Future of Dispute Resolution:</strong> As physical courthouses had to be shut down or operate with greatly reduced capacity, virtual hearings, e-filing and online mediation had to become the new norm. From the thousands of virtual hearings conducted by the Supreme Court and High Courts, to large number of cases settled through the online mediation platforms such as e-Lok Adalat.</li>
                            <li><strong className="text-white">5. Ease of Documentation, Evidence Sharing, Scheduling:</strong> ODR facilitates the entire process of dispute resolution with more efficient documentation and evidence management. A party's documentation such as photographs, videos, court documents, or witness statements amongst others may be easily and quickly uploaded electronically. This therefore reduces the delay associated with communication in a court of law.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">7. CHALLENGES IN IMPLEMENTATION</h4>
                        <p>In recent times, India has taken several proactive steps towards leveraging the potential of technology to enhance access to justice across its length and breadth. Online Dispute Resolution (ODR) in India has shown tremendous promise across civil, commercial and consumer disputes at all levels of adjudication. Although there are several gains of applying ODR for dispute resolution in India, its adoption on a wider scale is likely to encounter several problems which are legal, technological, social, and infrastructure related.</p>

                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">1. Data Privacy and Security Issues:</strong> Online Dispute Resolution (ODR) deals with a very sensitive area of personal and financial information. Unfortunately, India is not yet equipped with an effective data protection mechanism. The unavailability of an effective data protection mechanism poses serious challenges which leads to breaches, leakage of data, cyber attacks etc. and hence undermines the faith of the citizens in digitization.</li>
                            <li><strong className="text-white">2. Digital Divide and Infrastructure Problems:</strong> Not everyone has access to the Internet, to mobile phones or to digital literacy, especially in rural areas and this is a barrier to justice provided by ODR and makes it an inequitable access to justice service.</li>
                            <li><strong className="text-white">3. Issues with Enforcement:</strong> Online arbitration decisions and resolutions produced through technological platforms can be considered legally binding, however, arbitration decisions produced by using the aid of AI or automated systems, it is not clear whether they will be legally recognized and enforced.</li>
                            <li><strong className="text-white">4. Lack of Skilled Professionals:</strong> Mediators and arbitrators in the field of ODR need to be familiar with both law and technology. However legal professionals, in particular, are not always confident in the use of modern digital tools.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">8. LEGAL AND REGULATORY FRAMEWORK OF ODR IN INDIA</h4>
                        <p>Online Dispute Resolution (ODR) in India is governed by a patchwork of existing alternative dispute resolution (ADR) and Information technology (IT) laws that do not make way for a specific law to govern the ODR, it is a subsidiary to other laws which are not quite effective or sufficient.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Existing Laws Supporting ODR</h5>
                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">a. Arbitration and Conciliation Act, 1996:</strong> This is the primary legislation dealing with the Alternative Dispute Resolution (ADR) sector in India and is aligned with international best practices. It does not directly deal with ODR but the Act grants considerable discretion to the parties and the arbitrators for conducting arbitration proceedings in such a manner as the parties may agree or the arbitrator may consider fit, making online hearings, e-submissions, and virtual awards and orders viable. This Act was further made more effective and efficient by amendments.</li>
                            <li><strong className="text-white">b. Information Technology Act, 2000:</strong> The IT Act plays a crucial role in ODR by making electronic records and digital signatures legally recognizable. It makes online contracts, emails and digital communication legally valid. Hence the Online Dispute Resolution platforms can make use of technology to settle the disputes efficiently.</li>
                            <li><strong className="text-white">c. Bharatiya Sakshya Adhiniyam, 2023:</strong> The Bharatiya Sakshya Adhiniyam 2023 recognizes electronic evidence under Sections 63(2) and 63(4). This allows screenshots, emails, video records, chat transcripts, and digital documents submitted during ODR proceedings to be admissible as evidence in court. As a result, the procedural integrity of online arbitration or mediation is ensured, provided the evidence complies with admissibility conditions under the Act.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">9. ROLE OF JUDICIARY AND BAR COUNCILS</h4>
                        <p>The Indian judiciary has been a major catalyst in promoting ODR both domestically and internationally. The courts have agreed to conduct virtual hearings, facilitate online mediation, and accept electronic documents or digital evidence. They have also endorsed the use of ODR in commercial and consumer disputes.</p>
                        <p className="mt-4">Apart from this, much work is required at the front end by regulatory bodies like The Bar Council of India, in prescribing the Standard Procedures and Code of Conduct that has to be adhered to in dispute resolution by the online Legal Counsel. The issue of lawyers practicing online dispute resolution also needs prescribed procedures and codes of ethics.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">10. CONCLUSION</h4>
                        <p>Online Dispute Resolution is an emerging mechanism in India's justice delivery system. Using technology with Alternative Dispute Resolution (ADR) methods, ODR offers an effective solution to the issues of time, cost and location. While ODR will function alongside the conventional system, several challenges must be addressed to ensure its effective implementation. These include strengthening infrastructure, developing an adequate legal framework, and ensuring equitable access to justice for all stakeholders. ODR has the potential to serve as a highly effective mechanism for advancing access to justice as envisaged under Article 39A of the Constitution of India.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Ethan Katsh and Janet Rifkin, Online Dispute Resolution: Resolving Conflicts in Cyberspace (Jossey-Bass 2001)</li>
                            <li>National Judicial Data Grid (NJDG), 'Pending Cases in India'</li>
                            <li>UNCITRAL, Technical Notes on Online Dispute Resolution (2016)</li>
                            <li>State of Maharashtra v Praful B Desai (2003) 4 SCC 601 (SC)</li>
                            <li>Colin Rule, Online Dispute Resolution for Business (Jossey-Bass 2002)</li>
                            <li>NITI Aayog, ODR Policy Plan for India (2021)</li>
                            <li>Arbitration and Conciliation Act, 1996</li>
                            <li>Information Technology Act, 2000</li>
                            <li>Bharatiya Sakshya Adhiniyam, 2023</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Gowri P S, Government Law College Thiruvananthapuram, BA LLB.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Custodial Violence and Legal Safeguards: A Critical Analysis of D.K. Basu v. State of West Bengal in the Present Context",
            author: "By Daisy Kumari",
            abstract: "Custodial abuse still constitutes a significant challenge and human rights issue in India's criminal justice system. Issues of custodial violence have raised major concern regarding human rights, police accountability, rule of law, and constitutional governance. Although Articles 21 and 22 grant constitutional protections against these offenses, there is still a large discrepancy between the norms established under the law and the ongoing practice of those norms by the police.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Concept and Legal Framework of Custodial Violence</li>
                            <li>Judicial Intervention: The D.K. Basu Case</li>
                            <li>Custodial Violence as a Challenge to Criminal Justice Reform</li>
                            <li>Critical Evaluation: Law versus Reality</li>
                            <li>Reform Oriented Suggestions</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">1. INTRODUCTION</h4>
                        <p>Custodial abuse still constitutes a significant challenge and human rights issue in India's criminal justice system. Issues of custodial violence have raised major concern regarding human rights, police accountability, rule of law, and constitutional governance. Although Articles 21 and 22 grant constitutional protections against these offenses, there is still a large discrepancy between the norms established under the law and the ongoing practice of those norms by the police. Thus far, the Indian judicial system has interpreted Articles 21 and 22 in a manner that grants an individual a right to life and liberty not only based on physical survivability but also based on dignity, the value of fairness and to be protected from arbitrary state actions.</p>
                        <p className="mt-4">The judicial ruling of D.K. Basu v State of West Bengal is important to the extent that the Court used the ruling in order to create due process requirements for arresting and detaining individuals to establish accountability in policing activities. However, given that custodial violence continues, the question must be asked whether these due process protections are providing the minimums of protection as required by the Court.</p>
                        <p className="mt-4">When looking at this topic through a lens of Criminal Justice Reform, there are many aspects to consider: police reform, prisoners' rights, victims' rights, and recent legislative changes like the Bharat Nyaya Sanhit Act 2023 and Bharat Nagarik Suraksha Act 2023. Thus, a true legal analysis of the Criminal Justice System as it relates to the legitimate strength and practical limitations of current protections must also be conducted.</p>
                        <p className="mt-4 italic text-zinc-400">Keywords: Human rights violation, Rule of law, Due process, Constitutional governance, Procedural justice, Police accountability, Arbitrary state action, Criminal justice reform, Transparency & accountability</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">2. CONCEPT AND LEGAL FRAMEWORK OF CUSTODIAL VIOLENCE</h4>
                        <p>Custodial violence is the infliction of physical or mental harm to an individual in detention by enforcement (law) or judicial officials. These acts of violence occur in an investigation when a person fails to cooperate with an investigation or arrest when they do not have the ability to act freely. This can include torture, illegal detention, coercion and even the death of an individual in custody. Such acts weaken the core of a system of law governed by democratic principles and individual rights.</p>
                        <p className="mt-4">From a constitutional standpoint, the act of custodial violence directly violates Articles 21 and 22 of the Constitution of India. Article 21 provides for the right to life and the right to personal liberty and Article 22 provides that no person can be arbitrarily arrested or detained without a fair trial. The Supreme Court has consistently upheld these fundamental human rights and has ruled that these rights cannot be suspended for any circumstance, including in relation to a criminal investigation.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">3. JUDICIAL INTERVENTION: THE D.K. BASU CASE</h4>
                        <p>The D.K. Basu v. State of West Bengal case, which marked a major turning point towards addressing custodial violence throughout India, was initiated due to great concern regarding the increasing amount of custodial deaths throughout the nation. In light of these concerns, the Supreme Court considered a public interest communication as a writ petition and provided thorough consideration regarding the policies used by police.</p>
                        <p className="mt-4">The Supreme Court declared that custodial torture constitutes a violation of their most basic rights, and there are absolutely no circumstances under which these violations would be justified. Furthermore, the court provided a number of mandatories that the police must comply with when making an arrest, e.g., creating an arrest memo, providing detainees with the ability to communicate with a relative/friend, scheduling an on-going physician observation/evaluations, and requiring the police to produce detainees before the magistrate within 24 hours of the arrest.</p>
                        <p className="mt-4">Most importantly, the court held that failure on behalf of law enforcement officers to comply with these policies would result in penalties on behalf of those officers, as well as resulting in the imposition of contempt of court, thus providing these mandatories with legal binding authority.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">4. CUSTODIAL VIOLENCE AS A CHALLENGE TO CRIMINAL JUSTICE REFORM</h4>
                        <p>The problem of custodial abuse demonstrates systemic problems that are not just about individual bad behaviour, but rather reveal serious shortcomings in the criminal justice system itself. Therefore, reforming the criminal justice system requires attention to police accountability, prison conditions, victims' rights, and legislation.</p>
                        <p className="mt-4">Reform of the police should be at the centre of this discourse. Continued misuse of arrest authority and custodial abuse demonstrates that the existing protections against negative police conduct are not properly enforced, and the lack of independent mechanisms for oversight and training based on human rights create environments conducive to impunity for police officers. This means that the guidelines established in the D.K. Basu case are not, in practice, implemented as they should be.</p>
                        <p className="mt-4">The lack of proper administration in prisons exacerbates these problems. The conditions created by overcrowding, poor facility specifications, and lack of monitoring create environments conducive to inhumane treatment of people who are in custody in custodial facilities. Such treatment is not only a violation of the Constitution, but it also undermines the rehabilitative objectives of the criminal justice system.</p>
                        <p className="mt-4">As a victim, there are many barriers to seeking redress as it relates to custodial violence. Many times, the victim and their family will encounter procedural hurdles, delays, etc., or face institutional bias in seeking redress. In Nilabati Behera v. State of Orissa, the Supreme Court recognises that custodial deaths are compensated; however, the inconsistent awarding of compensation ultimately weakens the credibility of the justice system itself.</p>
                        <p className="mt-4">The Bharatiya Nyaya Sanhita (BNS), 2023 and the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, were recently introduced to modernize the criminal justice system through procedural safeguards and increased transparency; however, these new laws will only be as effective as the implementation of the laws and the institutions.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">5. CRITICAL EVALUATION: LAW VERSUS REALITY</h4>
                        <p>A thorough analysis of custodial violence shows that there is a continual disparity between the legal protections prescribed by Law and their application. Although law provided extensive and explicit protections through both judicial decisions and statutory law, those protections are often poorly enforced.</p>
                        <p className="mt-4">For India, the major constraint on the effectiveness of legal protections against custodial violence is that no specific anti-torture law exists, even though India is bound to adopt one through its international obligations. In addition, the requirement that a police officer get permission from his or her appointing authority to be prosecuted discourages accountability from law enforcement. Further, delay in the investigative and prosecutorial stages of law enforcement dilute the deterrent value of legal protection.</p>
                        <p className="mt-4">Thus, not only does the law impose an imbalance of power between the state and the individual, the individual in custody is often unaware of his or her rights and/or is unable to access free legal assistance, rendering the procedural safeguards established by law ineffective in the practical sense of the term.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">6. REFORM ORIENTED SUGGESTIONS</h4>
                        <p>A multidimensional approach to tackle custodial violence, including legal reform and institutional reform, is needed. At the core of this approach should be comprehensive anti-torture legislation that meets international standards.</p>
                        <p className="mt-4">The creation of independent oversight mechanisms can help to improve accountability and transparency in police behaviour.</p>
                        <p className="mt-4">Also, by strengthening access to legal aid, increasing the knowledge of citizens on their rights, and increasing the use of technology (CCTV footage or electronic arrest records), individual citizens can have the means to challenge unlawful detention.</p>
                        <p className="mt-4">In addition, proactive judicial oversight and strict enforcement of existing judicial standards are necessary to maintain the effectiveness of constitutional protections.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">7. CONCLUSION</h4>
                        <p>In D.K Basu vs. State of West Bengal, the Court sought to create a solid foundation for individuals' liberties against careless state behaviour. The court sought to put an end to custodial violence and create a system of accountability for people who violate the law in the Criminal Justice System.</p>
                        <p className="mt-4">The fact that custodial violence still exists points to the inability of the law to protect individuals and demonstrate the need for the courts to provide effective remedies for those harmed. This issue cannot simply be viewed as a legal compliance issue but rather it also represents a larger challenge to the integrity of the Justice Delivery System.</p>
                        <p className="mt-4">In the present climate, there must be a long-term commitment to human dignity, the Constitution, and the Rule of Law in order to ensure meaningful criminal justice reform. In order for Justice to be realized, a combination of legislative reform, institutional reform, and judicial vigilance are needed together.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>

                        <h5 className="font-bold text-[#D4AF37] text-lg mb-2 mt-4">Case Laws</h5>
                        <ol className="list-decimal pl-5 space-y-1 text-zinc-400">
                            <li>D.K. Basu v. State of West Bengal, (1997) 1 S.C.C. 416 (India).</li>
                            <li>Nilabati Behera v. State of Orissa, (1993) 2 S.C.C. 746 (India).</li>
                            <li>Joginder Kumar v. State of Uttar Pradesh, (1994) 4 S.C.C. 260 (India).</li>
                            <li>Sunil Batra v. Delhi Administration, (1978) 4 S.C.C. 494 (India).</li>
                        </ol>

                        <h5 className="font-bold text-[#D4AF37] text-lg mb-2 mt-4">Statutes</h5>
                        <ol className="list-decimal pl-5 space-y-1 text-zinc-400" start={5}>
                            <li>Constitution of India (Articles 21 & 22)</li>
                            <li>Bharatiya Nyaya Sanhita</li>
                            <li>Bharatiya Nagarik Suraksha Sanhita</li>
                            <li>Indian Evidence Act</li>
                        </ol>

                        <h5 className="font-bold text-[#D4AF37] text-lg mb-2 mt-4">International Instruments</h5>
                        <ol className="list-decimal pl-5 space-y-1 text-zinc-400" start={9}>
                            <li>Convention Against Torture and Other Cruel, Inhuman or Degrading Treatment or Punishment, Dec. 10, 1984, 1465 U.N.T.S. 85.</li>
                            <li>Universal Declaration of Human Rights, G.A. Res. 217 (III) A, U.N. Doc. A/RES/217(III) (Dec. 10, 1948).</li>
                        </ol>

                        <h5 className="font-bold text-[#D4AF37] text-lg mb-2 mt-4">Books & Reports</h5>
                        <ol className="list-decimal pl-5 space-y-1 text-zinc-400" start={11}>
                            <li>V.N. Shukla, Constitution of India (11th ed. 2008).</li>
                            <li>Law Commission of India, Report on Custodial Crimes.</li>
                            <li>National Human Rights Commission (NHRC), Annual Report on Custodial Deaths in India.</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Daisy Kumari, Amity University Jharkhand / B.A.,LL.B(H).</p>
                    </div>
                </div>
            )
        },
        {
            title: "Human Rights and Constitutional Values: Where Law Meets Humanity",
            author: "By Hanika Kataria",
            abstract: "Human rights are basically those rights which every person has because they are the citizens of the country who deserve to be respected and treated equally. These rights are not given by anyone as such, they are already there and they apply to everyone. The main reason behind this is that every person deserve be treated in a fair and respectful way. If these rights were not present then it becomes very difficult to maintain equality and dignity in society. This is why different countries have made laws to protect these rights so that people are not treated wrongly by those who are in power.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Constitutional Foundation of Human Rights in India</li>
                            <li>Role of Judiciary in Expanding Human Rights</li>
                            <li>Landmark Judgements on Human Rights in India</li>
                            <li>Human Rights and Social Justice</li>
                            <li>Role of Institutions in Human Rights Protection</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">1. INTRODUCTION</h4>
                        <p>Human rights are basically those rights which every person has because they are the citizens of the country who deserve to be respected and treated equally. These rights are not given by anyone as such, they are already there and they apply to everyone. The main reason behind this is that every person deserve be treated in a fair and respectful way. If these rights were not present then it becomes very difficult to maintain equality and dignity in society. This is why different countries have made laws to protect these rights so that people are not treated wrongly by those who are in power. Human rights are very important they play a big role in our lives.</p>
                        <p className="mt-4">In India, the Constitution plays an important role in protecting human rights. It gives a framework through Fundamental Rights and Directive Principles of State Policy. These help in making sure that people are treated properly and their dignity is maintained. Over the years, courts have also played an important role. They have not always taken a strict meaning of the Constitution, but have tried to interpret it in a wider sense. Because of this, the scope of human rights has increased slowly and it has also changed according to the needs of society.</p>
                        <p className="mt-4">Also, human rights are not taken from any one particular country. It is more like a common idea which developed over time in different parts of the world. Countries like the UK, USA and France have influenced these ideas in some way, and later it was also accepted at the international level by the United Nations.</p>
                        <p className="mt-4">This article mainly tries to explain how human rights and constitutional values are connected in India. It will also discuss how these rights are protected, what role the judiciary plays in expanding them, some important developments, and also the challenges which are still there in properly protecting these rights. Human rights are not only words written in the constitution but they are about the way we should treat each other every single day. Most of us don't even think about these rights until and unless they are violated that's where realize how important it is to simply be treated with dignity. Human rights are not complicated they are just about fairness respect and humanity.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">2. CONSTITUTIONAL FOUNDATION OF HUMAN RIGHTS IN INDIA</h4>
                        <p>The Indian Constitution came into force in 1950 which focused on human rights. The framers of the Constitution were influenced by ideals, freedom movements and international human rights principles. As a result several provisions were incorporated to ensure the protection of freedoms and social justice.</p>
                        <p className="mt-4">The significant protections are contained in Part III of the Constitution which guarantees Fundamental Rights to citizens. These rights are enforceable by courts and act as limitations on the power of the State.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">The major Fundamental Rights include:</h5>
                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">Right to Equality:</strong> It guarantees equality before the law no one is above the law. It eliminates discrimination based on religion, race, caste, sex or place of birth.</li>
                            <li><strong className="text-white">Right to Freedom:</strong> It consists of freedom of speech, expression, movement, profession and personal liberty anyone can follow or adopt any religion. Ensures freedom and secularism.</li>
                            <li><strong className="text-white">Right against Exploitation:</strong> Prohibits trafficking, forced labour and child labour.</li>
                            <li><strong className="text-white">Cultural and Educational Rights:</strong> Protects the rights of minorities to preserve culture and establish institutions encourage and promotes education for everyone.</li>
                            <li><strong className="text-white">Right to Constitutional Remedies:</strong> Allows individuals to approach courts directly when their rights are violated.</li>
                        </ul>
                        <p className="mt-4 italic text-zinc-400">Dr. B.R. Ambedkar described the Right to Constitutional Remedies as the "heart and soul of the Constitution" because it ensures the enforcement of rights through judicial remedies.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">3. ROLE OF JUDICIARY IN EXPANDING HUMAN RIGHTS</h4>
                        <p>The judiciary has played a role in expanding and strengthening human rights protections in India. Through activism and interpretation courts have broadened the scope of fundamental rights.</p>
                        <p className="mt-4">One of the important developments has been the expansion of the right to life and personal liberty. Initially interpreted narrowly the Supreme Court gradually expanded its meaning to include aspects of human dignity and quality of life.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Today the right to life includes derived rights such as:</h5>
                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>Right to livelihood</li>
                            <li>Right to privacy</li>
                            <li>Right to education</li>
                            <li>Right to clean environment</li>
                            <li>Right to health and medical care</li>
                            <li>Right to shelter</li>
                        </ul>

                        <p className="mt-6">The judiciary has played an important role in making sure that human rights are protected they do not remain limited to written provisions, and keep evolving according to the changing needs of society.</p>
                        <p className="mt-4">Another effective step taken by the judiciary is the introduction of Public Interest Litigation (PIL). Through PIL even a common person or an organization can approach the court to raise issue on behalf of those who are unable to speak for themselves especially weaker or marginalised section of society.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">4. LANDMARK JUDGEMENTS ON HUMAN RIGHTS IN INDIA</h4>
                        <p className="mb-4">Several landmark judgement have significantly shaped the development of rights in India.</p>

                        <div className="space-y-6">
                            <div className="bg-black/40 p-5 rounded-xl border border-white/5 line-clamp-none">
                                <strong className="text-[#D4AF37] text-lg block mb-1">Maneka Gandhi v. Union of India (1978)</strong>
                                <p>The Maneka Gandhi case was a turning point. The Supreme Court held that the procedure depriving a person of liberty must be "just, fair and reasonable." In this case the supreme court greatly expanded the scope of Article 21. This judgement changed the earlier narrow interpretation and made Article 21 a source of new human rights.</p>
                            </div>

                            <div className="bg-black/40 p-5 rounded-xl border border-white/5 line-clamp-none">
                                <strong className="text-[#D4AF37] text-lg block mb-1">Vishaka v. State of Rajasthan (1997)</strong>
                                <p>The Vishaka case laid down guidelines to prevent harassment at the workplace. The Court relied on conventions and constitutional principles to protect women's rights. This case is important because it recognized gender equality and dignity as a part of human rights.</p>
                            </div>

                            <div className="bg-black/40 p-5 rounded-xl border border-white/5 line-clamp-none">
                                <strong className="text-[#D4AF37] text-lg block mb-1">Justice K.S. Puttaswamy v. Union of India (2017)</strong>
                                <p>In this case the Supreme Court recognized the Right to Privacy as a fundamental right. This judgment marked a development in protecting individual autonomy and dignity. This judgment became very important in modern digital age where personal data and individual privacy are at risk.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">5. HUMAN RIGHTS AND SOCIAL JUSTICE</h4>
                        <p>Human rights protection in India is closely connected with the concept of justice. The Constitution not only protects civil and political rights but also aims to create a more equitable society.</p>
                        <p className="mt-4">The Directive Principles of State Policy guide the government in promoting welfare and reducing inequalities. Over time courts have used these principles to interpret rights in a broader manner. The recognition of the Right to Education is one example. Even though the constitution guarantees protection of rights, in reality there are still many problems that continue to affect how these rights are actually enjoyed by people.</p>
                        <p className="mt-4">One major issue is violence and police misconduct. Another concern is freedom of speech and expression. Gender inequality also remains a challenge, the rights for minority and social discrimination remain areas of concern, technological advancements have also increased the challenges in human rights.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">6. ROLE OF INSTITUTIONS IN HUMAN RIGHTS PROTECTION</h4>
                        <p>Apart from courts several institutions contribute to human rights protection in India. The National Human Rights Commission (NHRC) also plays a crucial role in protecting fundamental rights of citizens. It mainly looks into complaints and tries to ensure that such issues are not ignored they are taken into consideration every citizens who's rights are violated deserve to get justice.</p>
                        <p className="mt-4">But honestly, it is not just about one institution doing everything on its own. Civil society groups and human rights activists also contribute a lot. They raise awareness, speak up for people who often don't have a voice and help in holding authorities liable.</p>
                        <p className="mt-4">When we talk about strengthening human rights protection, it's clear that just having laws is not enough. There needs to be more awareness among people about their rights and institutions should work more actively and responsibly. At the same point it should be easier to get justice so that people don't feel helpless when their rights are violated. At the end protecting human rights and safeguarding interest of the citizens requires efforts from everyone not just the government or courts.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">To ensure human rights protection several steps can be considered:</h5>
                        <ul className="list-decimal pl-5 mt-4 space-y-2">
                            <li>First legal awareness among citizens must be increased.</li>
                            <li>Second institutional accountability must be strengthened.</li>
                            <li>Third access to justice must be improved.</li>
                            <li>Finally the protection of rights must be viewed as a shared responsibility involving the government, judiciary, civil society and citizens.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">7. CONCLUSION</h4>
                        <p>Human rights and constitutional values are the backbone of how the system in India works. The Constitution gives us a structure to protect our freedom and safeguard our rights but it is not just about what is written on paper. The judiciary has also played a big role over time in expanding these rights and making them more meaningful in real life.</p>
                        <p className="mt-4">Still, just having laws is not enough. For these rights to actually work properly, there has to be continuous efforts from the government, courts, and even people in society. At the end of the day, protecting human rights is something that everyone shares responsibility for not just the legal system. Ultimately the protection of rights is not only a legal obligation but also a moral commitment essential, for sustaining a vibrant and inclusive democracy.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Maneka Gandhi v. Union of India AIR 1978 SC 597</li>
                            <li>Vishaka v. State of Rajasthan, (1997) 6 SCC 241</li>
                            <li>Justice K.S. Puttaswamy v. Union of India (2017) 10 SCC 1</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Hanika Kataria, BBA-LLB Delhi Metropolitan Education affiliated with IP University.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Corporate Social Responsibility Towards Climate Change",
            author: "By Jeyashri R",
            abstract: "This article provides an overview of the role of corporate social responsibility and international instruments in mitigating climate change. Corporate Social Responsibility (CSR) has the potential to make innovation in areas including social, economic and environmental sectors. But increasing investment in Corporate Social Responsibility (CSR) will result in a price hike. In India, CSR is a mandatory requirement under the Companies Act, 2013. However, many countries failed to incorporate corporate social responsibility into their national legislation. This becomes a hurdle to achieving Sustainable Development Goals. The primary objective of this study is to highlight the crucial role of multinational companies in mitigating climate change.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Climate Change</li>
                            <li>Factors Responsible for Climate Change</li>
                            <li>Sustainable Development and Corporate Social Responsibility</li>
                            <li>Integrating CSR in Sustainable Development</li>
                            <li>International Instruments</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">1. INTRODUCTION</h4>
                        <p>All living creatures need a healthy environment to survive. In fact, a healthy environment means being free from pollution, including air, water, noise, and land, etc. The pollution is the main cause of climate change, which affects living creatures. This can be tackled by coordinated measures among individuals, non - governmental organisations, companies, and the government. Moreover, such measures differ in each country. This can be balanced by the corporate social responsibility of multinational companies.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">2. CLIMATE CHANGE</h4>
                        <p>The United Nations Framework Convention on Climate Change, 1992, is the global treaty for international coordination to respond to the alarming climate change issues. The UNFCCC has 198 Parties. It comprises 197 countries and the European Union. The term "Climate change" was defined under Article 1(2) of UNFCCC as a change of climate which is attributed directly or indirectly to human activity. Further, it alters the composition of the global atmosphere.</p>
                        <p className="mt-4">According to Article 1(1) of UNFCCC, "Adverse effects of climate change" is a change in the physical environment or biota resulting from climate change. It shall have significant effects on natural and managed ecosystems or on human health and welfare. Further, it shall have an impact on the operation of socio-economic systems.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">3. FACTORS RESPONSIBLE FOR CLIMATE CHANGE</h4>
                        <p className="mb-4">There are many factors responsible for climate change. Some of them are:</p>
                        <ol className="list-decimal pl-5 space-y-3">
                            <li><strong className="text-white">Human activities:</strong> The main reason for climate change is Human activities. For example, the burning of fossil fuels like coal, oil and gas.</li>
                            <li><strong className="text-white">Earth's temperature:</strong> Greenhouse gas concentration in the Earth's atmosphere. It directly affects Earth's temperature.</li>
                            <li><strong className="text-white">Industrial Revolution:</strong> The concentration of greenhouse gas has been rising steadily since the time of the Industrial Revolution.</li>
                            <li><strong className="text-white">Carbon dioxide (CO2):</strong> The most abundant GHG is carbon dioxide (CO2), which is largely the product of burning fossil fuels. It accounts for about two-thirds of GHGs.</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">4. SUSTAINABLE DEVELOPMENT AND CORPORATE SOCIAL RESPONSIBILITY</h4>
                        <p className="mb-6">Multinational companies have responsibilities to mitigate climate change by working towards sustainable development.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2">(a) SUSTAINABLE DEVELOPMENT</h5>
                        <p className="mb-6">The term "sustainable development" was defined in the Brundtland Commission in its report Our Common Future (1987). It is defined as a Development which meets the needs of the present. But it should not compromise the ability of future generations to meet their own needs.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2">(b) CORPORATE SOCIAL RESPONSIBILITY</h5>
                        <p>The United Nations Industrial Development Organisation (UNIDO) defines Corporate Social Responsibility. It is a management concept that integrates social and environmental concerns in business operations. More specifically, Corporate Social Responsibility (CSR) is a strategy to balance economic, environmental and social imperatives.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">5. INTEGRATING CSR IN SUSTAINABLE DEVELOPMENT</h4>
                        <div className="space-y-4">
                            <p>(i) The stakeholders of a company can integrate Corporate Social Responsibility (CSR) in sustainable development to tackle climate change. The term "Stakeholder" is defined in the Cambridge Dictionary. They are a person, such as an employee, customer, or citizen, who is involved with an organisation, society, etc. In addition, they have responsibilities and an interest towards it.</p>
                            <p>(ii) Profit, people, and the planet are popularly known as the three pillars of a company. These three pillars play an important role to achieve sustainable development goals. This is also known as "Triple Bottom Line." It was Coined by John Elkington in 1994. Therefore, multinational companies must follow these sustainable development goals in their course of business.</p>
                            <p>(iii) Companies should act as a CSR innovator. A Famous example is Ben & Jerry's Homemade Holdings Inc. Their mission was dedicated to a sustainable corporate concept of linked prosperity.</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">6. INTERNATIONAL INSTRUMENTS</h4>
                        <p className="mb-6">Corporate climate action plays an essential part in sending market signals for countries to enhance climate policy. There are several international instruments have been established worldwide to mitigate climate change. Some of them are:</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2">(a) UN Global Compact</h5>
                        <p className="mb-4">The UN Global Compact is based on nine principles, including human rights, labour and environment. Most particularly, some of the principles specifically dealt with the environment. They are:</p>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li><strong className="text-white">Principle 7:</strong> A precautionary approach to environmental challenges;</li>
                            <li><strong className="text-white">Principle 8:</strong> Initiatives to promote greater environmental responsibility;</li>
                            <li><strong className="text-white">Principle 9:</strong> Encourage the development and diffusion of environmentally friendly technologies.</li>
                        </ul>
                        <p className="mb-6">In Germany, an umbrella organisation for ethical and ecological investment was created for investment in German speaking countries. It was founded at the 'Green Money' Fair in Berlin. The aim is to promote and disseminate green investment, with a focus on social and ecological disclosure regulation provided by a new German law.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2">(b) The United Nations Framework Convention on Climate Change (UNFCCC)</h5>
                        <p className="mb-4">According to UNFCCC, private companies have many opportunities to implement actions towards reducing risks to their business. It includes:</p>
                        <ol className="list-decimal pl-5 mb-4 space-y-1">
                            <li>Development of climate - friendly goods and services;</li>
                            <li>Climate - proofing the supply chain;</li>
                            <li>Corporate social responsibility.</li>
                        </ol>
                        <p className="mb-6">For example, Banka BioLoo Pvt Ltd took initiatives regarding the usage of Bio-toilets. The objective is to build a climate - resilient society through environmentally friendly sanitation. In addition, Ankur Scientific Technologies Pvt. Ltd. took initiatives to protect Renewable energy by building the resilience of island communities.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2">(c) Paris Agreement</h5>
                        <p className="mb-4">The Paris Agreement is a legally binding international treaty. It specifically deals with climate change. On 12 December 2015, it was adopted by 195 Parties at the UN Climate Change Conference (COP21) in Paris, France. Its goal is to maintain the temperature between 2°C and above pre-industrial levels.</p>
                        <p className="mb-4">This Agreement sets long-term goals to guide all nations to:</p>
                        <ol className="list-decimal pl-5 mb-4 space-y-1">
                            <li>Substantially reduce global greenhouse gas emissions.</li>
                            <li>Periodically assess the collective progress.</li>
                            <li>Provide financing to developing countries to mitigate climate change.</li>
                        </ol>
                        <p className="mb-6">The Paris Agreement works on a five- year cycle of climate action carried out by countries. Each country may submit an updated national climate action plan every five years. It is known as the Nationally Determined Contribution (or NDC).</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2">(d) Other International policies and initiatives</h5>
                        <div className="space-y-6">
                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">1. Climate Ambition Accelerator</strong>
                                <p>The Climate Ambition Accelerator is a programme. It is a six-month program to train companies with the knowledge and skills. As a result, they need to work to achieve science-based emissions reduction targets. These science-based emissions reduction targets with the 1.5℃ temperature pathway. To achieve net-zero carbon emissions by 2050.</p>
                            </div>
                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">2. Ocean Stewardship Coalition</strong>
                                <p>The Ocean Stewardship Coalition plays an important role to a climate-smart ocean plan. This measure is taken to meet the Paris Agreement's 1.5°C temperature goal. On the other hand, the Water Resilience Coalition and a Race to Resilience partner aim to preserve the world's freshwater resources. This is carried out through collective action in water- stressed basins and ambitious commitments.</p>
                            </div>
                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">3. Science - Based Targets initiative</strong>
                                <p>The Science - Based Targets initiative has been one of the corporate climate action initiatives since 2015. Notably, more than 2,200 companies are taking climate action. This is also aligned with the Paris Agreement. As of December 2021, over 1000 companies have approved science-based targets.</p>
                            </div>
                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">4. Caring for Climate initiative</strong>
                                <p>In 2007, the Caring for Climate initiative was launched by world business leaders. This is an initiative undertaken by UN Global Compact, UNEP and UNFCCC. This convenes the annual high-level meetings on climate change at COP with the participation of business leaders.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">7. CONCLUSION</h4>
                        <p>This article examines climate change and the factors responsible for it. This underscores the need for sustainable development. This article is largely from a global perspective and does not fully explore corporate social responsibility in India. The primary objective was to highlight the scope of Corporate Social Responsibility towards climate change. In the final analysis, this article reveals that climate change can be effectively mitigated by the involvement of business entities. To achieve this goal, many initiatives have been taken internationally to coordinate the actions of business entities towards sustainable development.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>United Nations Framework Convention on Climate Change United Nations, 1992</li>
                            <li>United Nations, Peace, dignity and equality on a healthy planet</li>
                            <li>United Nations, Report of the World Commission on Environment and Development 'Our Common Future' 1987</li>
                            <li>Unido's Corporate Social Responsibility (CSR) Programme</li>
                            <li>Cambridge Dictionary</li>
                            <li>The Institute Of Company Secretaries Of India , CSR & Social Governance (Group 1, Elective Paper 4.1)</li>
                            <li>Official website of Ben and Jerry Homemade Holdings Inc.</li>
                            <li>Organisation for Economic Co-operation and Development, corporate social responsibility</li>
                            <li>United Nations Framework Convention on Climate Change, Private Sector Initiative (PSI) database</li>
                            <li>The United Nations climate change, The Paris agreement</li>
                            <li>The United Nations, The Paris agreement</li>
                            <li>UN Global Compact, climate change</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Jeyashri R, Student at Government Law College, Madurai.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Advocate Protection Law in India: A Constitutional Need to Preserve the Rule of Law",
            author: "By Advocate Shivani Julaha",
            abstract: "Lawyers play a key role in helping people get justice. They speak for citizens in court and protect legal rights. However, many advocates in India face threats, pressure, and even physical attacks while doing their work. There is no specific national law that protects them from such risks. This article explains why advocate safety is important, how it connects with constitutional rights, and why India needs a strong law to protect lawyers.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Position of Advocates in the Legal System</li>
                            <li>Constitutional Basis for Protection</li>
                            <li>Growing Threats to Advocates</li>
                            <li>Gaps in the Existing Legal Framework</li>
                            <li>Comparative Perspective</li>
                            <li>Critical Analysis</li>
                            <li>Conclusion and Suggestions</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">I. INTRODUCTION</h4>
                        <p>The justice system cannot function in isolation; it relies on the coordinated work of judges, lawyers, and investigative authorities. Among these, advocates play a particularly significant role because they act as the voice of the people before the courts.</p>
                        <p className="mt-4">However, a troubling reality has emerged in recent years—advocates increasingly face threats, intimidation, and even physical harm while performing their duties. When those responsible for defending rights are themselves unsafe, the very foundation of justice becomes unstable.</p>
                        <p className="mt-4">This issue raises an important question: can the rule of law truly exist if legal professionals are unable to work without fear? This article argues that ensuring the safety of advocates is not merely a matter of professional welfare but a constitutional obligation essential for maintaining justice.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">II. POSITION OF ADVOCATES IN THE LEGAL SYSTEM</h4>
                        <p>Advocates occupy a unique place within the legal framework. Unlike other professionals, their responsibilities extend beyond their clients to the justice system as a whole. They are expected to present cases honestly, assist courts in understanding the law, and ensure fairness in proceedings.</p>
                        <p className="mt-4">The Supreme Court has recognised this broader role. In <em>Ex-Capt. Harish Uppal v Union of India</em>, it was observed that the right to practise law carries with it a duty towards the court. This reflects that advocates are not merely private representatives but participants in the administration of justice.</p>
                        <p className="mt-4">Further, in <em>Bar Council of Maharashtra v MV Dabholkar</em>, the Court described the legal profession as one with a public character rather than a purely commercial activity.</p>
                        <p className="mt-4 italic">These observations show that any harm caused to advocates has consequences beyond the individual—it affects the justice system itself.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">III. CONSTITUTIONAL BASIS FOR PROTECTION</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">A. Right to Life and Security (Article 21)</h5>
                        <p>The interpretation of Article 21 has evolved significantly over time. In <em>Maneka Gandhi v Union of India</em>, the Supreme Court clarified that the right to life includes the right to live with dignity and fairness.</p>
                        <p className="mt-2">For advocates, dignity cannot exist without safety. If a lawyer is exposed to threats or violence, their ability to function effectively is directly affected. Thus, professional safety becomes an essential part of the right to life.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">B. Freedom of Profession (Article 19(1)(g))</h5>
                        <p>The Constitution guarantees the freedom to practise any profession. However, this freedom is meaningful only when it can be exercised without fear or pressure.</p>
                        <p className="mt-2">In <em>Indian Express Newspapers v Union of India</em>, the Court recognised that indirect restrictions can also limit fundamental rights. Applying this reasoning, an unsafe working environment for advocates can be seen as a restriction on their professional freedom.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">C. Access to Justice (Article 39A)</h5>
                        <p>Access to justice is a core principle of the Constitution. In <em>Hussainara Khatoon v State of Bihar</em>, the Supreme Court emphasised the importance of legal representation in ensuring fairness.</p>
                        <p className="mt-2">If advocates hesitate to take up certain cases due to safety concerns, it is not only the lawyers who are affected—the litigants also suffer. This is especially harmful for weaker sections who depend heavily on legal assistance.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IV. GROWING THREATS TO ADVOCATES</h4>
                        <p>Incidents of violence against advocates have been reported from different parts of India. These include attacks within court premises, assaults in offices, and intimidation in public spaces.</p>
                        <p className="mt-4">Such incidents create an atmosphere of fear within the legal profession. Advocates may begin to avoid cases that involve influential individuals or controversial issues.</p>
                        <p className="mt-4">This situation has wider consequences. When lawyers are unwilling to represent certain clients, the balance of the justice system is disturbed, and fairness is compromised.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">V. GAPS IN THE EXISTING LEGAL FRAMEWORK</h4>

                        <div className="space-y-6">
                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-[#D4AF37] text-lg block mb-2">A. Lack of Specific Legislation</strong>
                                <p>The current legal framework does not provide special protection to advocates. The Advocates Act, 1961 focuses on regulating professional conduct but does not address safety concerns. Similarly, criminal laws treat attacks on lawyers as ordinary offences, without recognising their impact on the justice system.</p>
                            </div>

                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-[#D4AF37] text-lg block mb-2">B. Weak Institutional Support</strong>
                                <p>Many court complexes lack proper security arrangements. Basic measures such as surveillance systems and controlled entry are not consistently implemented. This increases the risk faced by advocates even in spaces that are meant to be secure.</p>
                            </div>

                            <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-[#D4AF37] text-lg block mb-2">C. Impact on Professional Independence</strong>
                                <p>The absence of safety measures can discourage advocates from taking up sensitive cases. This creates inequality, as some individuals may struggle to find legal representation. In the long run, this weakens public trust in the justice system.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VI. COMPARATIVE PERSPECTIVE</h4>
                        <p>At the international level, the importance of protecting lawyers has been widely recognised. The UN Basic Principles on the Role of Lawyers state that legal professionals must be able to perform their duties without intimidation or interference.</p>
                        <p className="mt-4">In several countries, strong institutional mechanisms ensure lawyer safety, including secure court environments and prompt legal remedies.</p>
                        <p className="mt-4">India's current approach does not fully align with these standards, indicating the need for reform.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VII. CRITICAL ANALYSIS</h4>
                        <p>The absence of a central advocate protection law reveals a significant gap in India's legal system. While judicial decisions acknowledge the importance of advocates, legislative action has not kept pace with these developments.</p>
                        <p className="mt-4">State-level laws, such as those introduced in Rajasthan, are a step in the right direction but remain limited in scope. Without a uniform national framework, protection remains inconsistent.</p>
                        <p className="mt-4">From a broader perspective, the issue goes beyond individual safety. It concerns the effective functioning of the justice system. If advocates are unable to act independently, the rule of law itself is weakened.</p>
                        <p className="mt-4 font-bold text-white">Therefore, protecting advocates should be viewed as a constitutional necessity rather than a professional demand.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VIII. CONCLUSION AND SUGGESTIONS</h4>
                        <p className="mb-6">A strong justice system depends on fearless advocates. Ensuring their safety is essential for maintaining fairness, equality, and public confidence in the law.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-4">Suggestions</h5>
                        <ul className="space-y-4">
                            <li><strong className="text-white">1. Enact a Central Protection Law:</strong> A uniform law should recognise attacks on advocates as offences affecting the justice system.</li>
                            <li><strong className="text-white">2. Improve Security in Courts:</strong> Courts must have proper infrastructure to ensure safety.</li>
                            <li><strong className="text-white">3. Ensure Speedy Justice:</strong> Cases involving violence against advocates should be resolved quickly.</li>
                            <li><strong className="text-white">4. Provide Institutional Support:</strong> Advocates facing threats should receive legal and financial assistance.</li>
                        </ul>

                        <div className="mt-8 p-6 bg-black/40 border border-[#D4AF37]/30 rounded-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h5 className="font-bold text-[#D4AF37] text-xl mb-3 relative z-10">Final Reflection</h5>
                            <p className="italic text-zinc-300 relative z-10 leading-relaxed">"The rule of law depends not only on strong institutions but also on the people who operate them. If advocates cannot work without fear, justice itself becomes uncertain. Protecting advocates, therefore, is essential to protecting democracy."</p>
                        </div>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20 mt-12">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Ex-Capt. Harish Uppal v Union of India (2003) 2 SCC 45.</li>
                            <li>Bar Council of Maharashtra v MV Dabholkar (1975) 2 SCC 702.</li>
                            <li>Maneka Gandhi v Union of India AIR 1978 SC 597.</li>
                            <li>Indian Express Newspapers v Union of India (1985) 1 SCC 641.</li>
                            <li>Hussainara Khatoon v State of Bihar AIR 1979 SC 1369.</li>
                            <li>Advocates Act 1961.</li>
                            <li>UN Basic Principles on the Role of Lawyers (1990).</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Advocate Shivani Julaha, HLM Law.</p>
                    </div>
                </div>
            )
        },
        {
            title: "From State-Centric to Victim-Centric: An Analysis of the Bharatiya Nagarik Suraksha Sanhita, 2023",
            author: "By Charul Rathore",
            abstract: "The Indian criminal justice system has been around for a time. It is based on the Code of Criminal Procedure, 1973. This system has always focused on the state and the person who did something. The victim was not very important in this system. Now there is a law called the Bharatiya Nagarik Suraksha Sanhita, 2023. This law is supposed to help the victim. It gives the victim rights. The question is, does this new law really help the victim?. Is it just a gesture? This paper looks at the law and tries to answer this question. The paper uses a method. It compares the law with the old law. It also looks at what the courts have said about the victims rights. The paper finds that the new law does give the victim rights.. It also finds that there are some problems. The paper says that the new law is a start.. It needs to be implemented properly. The courts and the government need to work to make sure the victims rights are protected.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction and Research Problem</li>
                            <li>Research Objectives</li>
                            <li>Research Questions</li>
                            <li>Research Hypotheses</li>
                            <li>Research Methodology</li>
                            <li>Literature Review</li>
                            <li>Analysis</li>
                            <li>Suggestions and Recommendations</li>
                            <li>Conclusion</li>
                            <li>References</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">1. INTRODUCTION AND RESEARCH PROBLEM</h4>
                        <p>The Indian criminal justice system has been criticized for a time. It is based on laws. The Code of Criminal Procedure, 1973 is one of these laws. This law was made a time ago. It focuses on the state and the person who did something. The victim is not very important in this system. The victim is a witness or a source of evidence. This is not fair. The system should focus on the victim. The victim is the one who suffers the most.</p>
                        <p className="mt-4">Over the years some things have changed. The courts have started to recognize the victims rights. The Law Commission of India has also recommended changes. The Bharatiya Nagarik Suraksha Sanhita, 2023 is a law. It tries to change the system. It gives the victim rights. The question is, does this new law really help the victim?. Is it just a gesture? This paper tries to answer this question.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">2. RESEARCH OBJECTIVES</h4>
                        <ol className="list-[lower-roman] pl-5 space-y-2 mt-4">
                            <li>To look at the law and see what it says about the victims rights.</li>
                            <li>To compare the law with the old law.</li>
                            <li>To see if the new law really helps the victim.</li>
                            <li>To look at the problems with the law.</li>
                            <li>To suggest ways to improve the law.</li>
                            <li>To recommend ways to implement the law.</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">3. RESEARCH QUESTIONS</h4>
                        <ol className="list-decimal pl-5 space-y-2 mt-4">
                            <li>How does the new law change the victims role?</li>
                            <li>Does the new law give the victim rights?</li>
                            <li>Is there a conflict between the victims rights and the accuseds rights?</li>
                            <li>How does the new law fit with the ideas of victimology?</li>
                            <li>What are the problems with implementing the law?</li>
                            <li>How does the new law compare to laws in countries?</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">4. RESEARCH HYPOTHESES</h4>
                        <ol className="list-decimal pl-5 space-y-2 mt-4">
                            <li>The new law gives the victim rights.</li>
                            <li>The new law has some problems.</li>
                            <li>The victims rights conflict with the accuseds rights.</li>
                            <li>The new law is not perfect. It is a good start.</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">5. RESEARCH METHODOLOGY</h4>
                        <p>This paper uses a method. It looks at the law and the old law. It compares them. It also looks at what the courts have said about the victims rights. The paper uses the ideas of victimology to understand the law. It also looks at laws in countries to see how they compare.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">6. LITERATURE REVIEW</h4>
                        <p>The Indian criminal justice system has been criticized for a time. The victim has not been very important, in this system.. Over the years some things have changed. The courts have started to recognize the victims rights. The Law Commission of India has also recommended changes. The Bharatiya Nagarik Suraksha Sanhita, 2023 is a law. It tries to change the system. It gives the victim rights. The question is, does this new law really help the victim?. Is it just a gesture? This paper tries to answer this question.</p>
                        <p className="mt-4">The law in India, the Criminal Procedure Code has been criticized by academics like Upendra Baxi and S. S. Singh. They say that this law is based on colonial ideas and does not consider the needs of the victim. The victim is seen as a tool for the state to prosecute the accused rather than as a person with their own rights.</p>
                        <p className="mt-4">The study of victimology which was influenced by scholars like Nils Christie has helped to highlight the problems with this approach. Christies idea that the state takes away the conflict from the victim and the offender and makes it a professional matter resonated with critics of the Criminal Procedure Code in India.</p>
                        <p className="mt-4">Globally the 1985 United Nations Declaration of Basic Principles of Justice for Victims of Crime and Abuse of Power set a standard for how victims should be treated. Although India signed this declaration its own laws did not reflect these principles until the changes brought about by the BNSS.</p>
                        <p className="mt-4">Previous research has documented the need for reform and analyzed individual court decisions. It has not provided a comprehensive analysis of the new victim-centric laws introduced by the BNSS. This paper aims to fill this gap by examining the state of the law and its potential impact on the criminal justice system in India.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">7. ANALYSIS</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">7.1 The Roots of Criminal Procedure in India</h5>
                        <p>The Criminal Procedure Code of 1973 was based on laws created during the colonial period. Its main goal was to administer criminal law to serve the interests of the ruling power. This legacy is reflected in a framework that is centralized state-driven and focused on convicting the accused. The victim has no role and is only seen as part of the states prosecutorial function. Sections like 173 and 207 were designed to help the states case against the accused with no corresponding obligation to inform the victim. The entire process, from the First Information Report to the judgment is a dialogue between the state and the accused with the victim as a peripheral figure. This model prioritizes punishment over restoration. Leaves the victims needs for information, voice and restitution largely unaddressed.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">7.2 The Emergence of Victimology in India</h5>
                        <p>The judiciary played a crucial role in introducing victimological principles into the rigid structure of the Criminal Procedure Code. In the case of Rattan Singh v. State of Punjab the Supreme Court noted that it is a weakness of the procedure that the victim of the crime is not a party to the proceedings. This judicial acknowledgment laid the groundwork for interventions. The Court began to read victim rights into the ambit of Article 21. In Bodhisattwa Gautam v. Subhra Chakraborty the Court recognized the right of a rape victim to compensation linking it directly to the right to live with dignity. The concept of a Victim Impact Statement though not formally recognized in the Criminal Procedure Code was alluded to in State of M.P. V. Babulal, where the Court considered the impact of the crime on the victims family while determining the sentence. These judicial pronouncements while progressive were solutions that highlighted the Criminal Procedure Codes structural deficiencies and created a compelling case for comprehensive legislative reform setting the stage for the BNSS.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">7.3 Changes Introduced by the BNSS</h5>
                        <p className="mb-4">The BNSS represents the comprehensive attempt to restructure the criminal justice process around the victim. Key changes include:</p>
                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">i. The Right to Information:</strong> The BNSS mandates that the victim shall be given a copy of the Final Report of cost. The victim also has the right to be informed of the progress of the investigation, not its conclusion.</li>
                            <li><strong className="text-white">ii. Participation during Investigation:</strong> The BNSS requires that the information recorded by the police from a victim be read over and explained to them and that they be allowed to make any corrections.</li>
                            <li><strong className="text-white">iii. Compensation Mechanisms:</strong> The BNSS strengthens the compensation regime allowing courts to grant compensation for loss or injury caused by the offense. It establishes a Victim Compensation Fund providing a financial source for victim restitution.</li>
                            <li><strong className="text-white">iv. Protection Measures and Witness Protection Integration:</strong> The BNSS provides a framework for witness protection, which is critical for victims who are often the most important witnesses.</li>
                            <li><strong className="text-white">v. Procedural Transparency:</strong> The BNSS mandates the use of technology in processes, such as service of summons through electronic means and video-conferencing for recording evidence.</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">7.4 Comparison of the CrPC and BNSS</h5>
                        <p>A direct comparison highlights the magnitude of the shift. Under the CrPC the victims right to a copy of the chargesheet was not absolute. Often came at a cost. The BNSS makes it a free statutory entitlement. The CrPC had no provision for the victim to be informed about the investigations status; the BNSS codifies this right. The concept of a Victim Compensation Fund was absent in the statute under the CrPC; the BNSS elevates its importance.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">7.5 Does the BNSS Truly Shift the Paradigm?</h5>
                        <p>While the BNSSs provisions are undoubtedly progressive a critical examination reveals that the shift may be more foundational than fully realized. The true test lies in the enforceability of these rights. For instance the right to be informed of investigation progress lacks a remedial mechanism. What happens if the police fail to provide this information? Is it an irregularity or a violation that can trigger judicial intervention? The BNSS is largely silent on consequences risking the provision becoming a directory rather than a mandatory requirement.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">7.6 Constitutional Dimensions</h5>
                        <p>The victim-centric provisions of the BNSS find a constitutional footing in the expanded interpretation of Article 21. The Supreme Court has consistently held that the right to life and personal liberty includes the right to live with dignity, which in turn encompasses the right to access justice. For a victim of crime access to justice is not merely about the conviction of the offender but about being informed being heard and being restored. The BNSS can be seen as an attempt to give concrete form to these judicially-enunciated principles.</p>
                        <p className="mt-4">However this enhancement of the victims rights creates a potential constitutional friction with the accuseds rights under Article 21 which guarantees a fair trial. The accused is entitled to the presumption of innocence and the right to defend themselves. If a victims participation is not carefully regulated it could prejudice the trial.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">7.7 Practical and Institutional Challenges</h5>
                        <p className="mb-4">The formidable obstacle to the BNSSs vision is the state of Indias criminal justice infrastructure.</p>
                        <ol className="list-decimal pl-5 space-y-4 mt-4">
                            <li><strong className="text-white">Police Capacity and Mindset:</strong> The police force is overburdened, understaffed and largely trained in a crime-control, model. Shifting to a victim-service orientation requires retraining, a change in organizational culture and investment in support staff.</li>
                            <li><strong className="text-white">Judicial Backlog:</strong> Indian courts are already clogged with millions of pending cases. Adding procedural requirements could exacerbate the delay unless accompanied by corresponding judicial reforms and infrastructure upgrades.</li>
                            <li><strong className="text-white">Lack of Support Infrastructure:</strong> The rights to information and participation are meaningless without support. Victims, from marginalized communities need legal aid, counseling and assistance to navigate the complex system. The BNSS does not create a network of victim support services; it merely provides the legal framework, for their participation.</li>
                            <li><strong className="text-white">Risk of Populist Criminal Policy:</strong> There is a danger that these provisions that focus on the victim could be used for the reasons leading to a situation where people demand harsh punishment without considering the facts and the rules that are in place to ensure a fair trial. The law must prevent this from happening. Make sure that the focus on the victim does not become an excuse to disregard the rules.</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">8. SUGGESTIONS AND RECOMMENDATIONS</h4>
                        <p className="mb-4">To make the Bharatiya Nagarik Suraksha Sanhita a reality the following changes are necessary:</p>
                        <ol className="list-decimal pl-5 space-y-4 mt-4">
                            <li><strong className="text-white">Establish a National Victim Commission:</strong> Create an independent body, like the National Human Rights Commission to oversee the implementation of victim rights receive complaints and suggest changes to the policy. This body could also be in charge of the Victim Compensation Fund.</li>
                            <li><strong className="text-white">Mandate Victim-Centric Training:</strong> Introduce a training program on victimology, victim sensitivity and the new Bharatiya Nagarik Suraksha Sanhita provisions for all police officers, prosecutors and judges. This training should be practical. Focus on communication skills and how to deal with people who have experienced trauma.</li>
                            <li><strong className="text-white">Codify a Victim’s Right to Legal Representation:</strong> The Bharatiya Nagarik Suraksha Sanhita should be amended to explicitly provide for a right to aid for the victim at all stages of the proceedings especially when the victim’s interests may not be the same as the State’s. This would ensure that the victim is truly involved in the process.</li>
                            <li><strong className="text-white">Frame Clear Implementation Rules:</strong> The Central and State Governments must immediately create rules under the Bharatiya Nagarik Suraksha Sanhita specifying the procedure for exercising the right to information the format for victim impact statements and the consequences for non-compliance by state agencies.</li>
                            <li><strong className="text-white">Integrate Restorative Justice Principles:</strong> The framework that focuses on the victim should be expanded beyond the system. For offences courts should be required to consider mediation, dialogue between the victim and the offender and community service as part of the sentencing process following global models of restorative justice.</li>
                            <li><strong className="text-white">Develop a Robust Data Management System:</strong> A nationwide integrated technology platform is needed to track cases and automate the process of providing information to victims about court dates and investigation status reducing the burden on police and courts.</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">9. CONCLUSION</h4>
                        <p>The Bharatiya Nagarik Suraksha Sanhita, 2023 is a moment in the history of Indian criminal procedure. It moves away from the offender-centric system and tries to create a new system that is more responsive to the rights and needs of the victim. The introduction of rights to information, participation and compensation represents a fundamental shift from a focus on punishment to a more nuanced model that includes protection and restitution.</p>
                        <p className="mt-4">However this research has shown that this change is not yet complete. The Bharatiya Nagarik Suraksha Sanhita lays the foundation. Does not build the entire structure. The realization of its vision depends on a combination of factors: judicial interpretation that balances victim and accused rights, comprehensive and effective implementation by the executive and complementary policy reforms that build the necessary support infrastructure. The potential for conflict and the immense practical challenges of implementation remain significant hurdles.</p>
                        <p className="mt-4">In conclusion the Bharatiya Nagarik Suraksha Sanhita should be seen not as the destination in the journey towards victim justice but as a critical and promising first step. It has opened the door for a humane, equitable and truly just criminal justice system. Whether India walks through that door to transform the lives of millions of victims will depend on the will of its judiciary its government and its civil society in the years to come. The legislative intent is clear; the challenge now is to make it a reality.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-bold text-[#D4AF37] text-lg mb-2">Statutes</h5>
                                <ol className="list-decimal pl-5 space-y-1 text-zinc-400">
                                    <li>Code of Criminal Procedure, 1973 (India).</li>
                                    <li>Bharatiya Nagarik Suraksha Sanhita, 2023 (India).</li>
                                    <li>Constitution of India.</li>
                                </ol>
                            </div>
                            <div>
                                <h5 className="font-bold text-[#D4AF37] text-lg mb-2 mt-4">Cases</h5>
                                <ol className="list-decimal pl-5 space-y-1 text-zinc-400" start={4}>
                                    <li>Bodhisattwa Gautam v. Subhra Chakraborty (1996) 1 SCC 490.</li>
                                    <li>Delhi Domestic Working Women’s Forum v. Union of India (1995) 1 SCC 14.</li>
                                    <li>Rattan Singh v. State of Punjab (1979) 4 SCC 644.</li>
                                    <li>Sheela Barse v. State of Maharashtra (1983) 2 SCC 96.</li>
                                    <li>State of M.P. V. Babulal (2007) 12 SCC 197.</li>
                                </ol>
                            </div>
                            <div>
                                <h5 className="font-bold text-[#D4AF37] text-lg mb-2 mt-4">Reports</h5>
                                <ol className="list-decimal pl-5 space-y-1 text-zinc-400" start={9}>
                                    <li>Law Commission of India Report No. 154 On 'The Code of Criminal Procedure, 1973 (Repeal and Replacement)' (1997).</li>
                                    <li>Law Commission of India Report No. 178 On 'Trial of Offences by the Courts of Summary Jurisdiction' (2001).</li>
                                    <li>Law Commission of India Report No. 262 On 'The Victim Compensation Scheme' (2015).</li>
                                    <li>Ministry of Home Affairs Committee on Reforms of the Criminal Justice System 'Report of the Committee on Reforms of the Criminal Justice System' (2003) (Malimath Committee Report).</li>
                                </ol>
                            </div>
                            <div>
                                <h5 className="font-bold text-[#D4AF37] text-lg mb-2 mt-4">Scholarly Articles</h5>
                                <ol className="list-decimal pl-5 space-y-1 text-zinc-400" start={13}>
                                    <li>Baxi, U. 'The Crisis of the Indian Legal System' (1982) 1(3) Economic and Political Weekly 989.</li>
                                    <li>Christie, N. 'Conflicts as Property' (1977) 17(1) The British Journal of Criminology 1.</li>
                                    <li>Singh, S. S. 'Victimology in India: A New Perspective' (2005) 37(2) Journal of the Indian Law Institute 207.</li>
                                    <li>Vijayakumar, V. 'Victim's Rights, in Criminal Justice: A Human Rights Perspective' (2010) 2(1) National Law School of India Review 1.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Charul Rathore, Indore Institute of Law / B.A. LL. B.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Reimagining Criminal Justice in India: A Critical Analysis of the Bharatiya Nyaya Sanhita, 2023",
            author: "By Prashansa Gautam",
            abstract: "Indian criminal justice system relies on colonial legal framework which includes Indian Penal Code 1860 and Code of Criminal Procedure 1973 and Indian Evidence Act 1872. The legal system depends on these laws as its fundamental basis but people now abandon these laws because they have become outdated and ineffective and they cannot solve present-day problems. The Government of India established new criminal laws in 2023 which include the Bharatiya Nyaya Sanhita and the Bharatiya Nagarik Suraksha Sanhita and the Bharatiya Sakshya Adhiniyam to completely transform the criminal justice system. The article analyzes the new criminal law reforms through a critical evaluation which explores both their progressive elements and their impact on civil liberties.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Background of Indian Criminal Laws: Colonial Legacy</li>
                            <li>Overview of the New Criminal Laws (2023)</li>
                            <li>Key Reforms Introduced</li>
                            <li>Critical Analysis</li>
                            <li>Constitutional Perspective and Case Laws</li>
                            <li>Challenges in Implementation</li>
                            <li>Suggestions and Way Forward</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">1. INTRODUCTION</h4>
                        <p>British colonial laws function as the basic foundation which underpins India's criminal justice system that operates through the legal system established during British colonial rule. The Indian Penal Code of 1860 (IPC) and the Code of Criminal Procedure of 1973 (CrPC) and the Indian Evidence Act of 1872 function as the fundamental components which support India's criminal justice system.</p>
                        <p className="mt-4">The laws face criticism because they do not function properly and they cannot handle new criminal activities which arise in modern society. The Indian government has implemented a comprehensive reform of the criminal justice system throughout the year 2023. The Bharatiya Nyaya Sanhita (BNS) and Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA) have replaced the current system of criminal laws through their enactment.</p>
                        <p className="mt-4">The changes provide a positive development for the criminal justice system yet we must study their impact on constitutional rights and state power reach within criminal law enforcement operations. The article seeks to examine this and opine that although this is a welcome step in the right direction the implementation of the new criminal law regime is crucial to its success and the protection of fundamental rights.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">2. BACKGROUND OF INDIAN CRIMINAL LAWS: COLONIAL LEGACY</h4>
                        <p>The criminal laws in India have a colonial legacy and were mainly framed in the colonial era with the sole purpose of maintaining order and control rather than justice. The IPC, which was drafted in 1860, was framed keeping in mind the colonial regime rather than a democratic set-up. The same is true in the case of the Evidence Act of 1872 and the procedural mechanism as prescribed in the CrPC.</p>
                        <p className="mt-4">However, over the years, a number of problems have emerged in the criminal justice system in India, which include a huge backlog of cases due to the time taken in the criminal justice process, the need to deal with new forms of crime like cybercrime, and the problem of the possible misuse of certain provisions and the powers vested in the police, as well as the lack of adequate protection to the accused.</p>
                        <p className="mt-4">The introduction of new criminal laws in 2023 was thus presented as a move away from the colonial legacy and a move towards a more responsive and efficient criminal justice system in India.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">3. OVERVIEW OF THE NEW CRIMINAL LAWS (2023)</h4>
                        <p className="mb-4">The new criminal laws comprise three major laws, which are as follows:</p>
                        <ul className="space-y-4">
                            <li><strong className="text-white">The Bharatiya Nyaya Sanhita:</strong> This replaces the Indian Penal Code and covers all aspects of substantive criminal laws, such as definitions, punishments, etc.</li>
                            <li><strong className="text-white">The Bharatiya Nagarik Suraksha Sanhita:</strong> This replaces the Code of Criminal Procedure and covers all aspects of procedural laws, such as investigation, arrest, trial, etc.</li>
                            <li><strong className="text-white">The Bharatiya Sakshya Adhiniyam:</strong> This replaces the Indian Evidence Act and covers all aspects of laws regarding evidence, admissibility, etc.</li>
                        </ul>
                        <p className="mt-6">The new laws have been formulated to create a more streamlined and modernized system of criminal laws in India. The new laws have placed much emphasis on technology, efficiency, and a shift to a more victim-centric approach. The new laws have also been formulated to address the new challenges in society, as can be inferred from the introduction of new laws regarding new forms of crimes.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">4. KEY REFORMS INTRODUCED</h4>
                        <p>Perhaps one of the most interesting aspects of the new criminal laws is the introduction of substantive reforms to deal with the current crimes. The Bharatiya Nyaya Sanhita has provisions for organized crimes, terrorism, and mob lynching, which were absent or insufficiently provided for earlier.</p>
                        <p className="mt-4">The procedural reforms under the Bharatiya Nagarik Suraksha Sanhita have ensured the speedy delivery of justice. The emphasis on time-bound investigations and speedy trials will help to prevent delays. The use of forensic science for the investigation of crimes has also been emphasized, especially for serious offenses. This will improve the quality of investigations and the accuracy of the outcome.</p>
                        <p className="mt-4">Another reform that has been brought into the criminal justice process is the use of technology. The use of electronic records, digital evidence, and the filing of complaints online (e-FIR) is encouraged. This will make the process more efficient and accessible.</p>
                        <p className="mt-4">Additionally, the new laws have taken a more victim-centric approach. The rights of the victims have been emphasized. This is a welcome change, as the earlier laws were more inclined to provide for the rights of the accused and the state.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">5. CRITICAL ANALYSIS</h4>
                        <p>The introduction of the new criminal laws can be seen as a major move towards the modernization of the justice system of India. One of the major advantages of the new criminal laws of India is the focus on solving the problems of contemporary crimes. This is because the law is able to deal with crimes like organized crime and terrorism more clearly.</p>
                        <p className="mt-4">The focus on the efficiency of the justice system is another major advantage of the new criminal laws. This is because delays have been a major problem for the justice system of India. The introduction of the new laws will help to deal with the delays and make the justice delivery process more efficient.</p>
                        <p className="mt-4">The introduction of technology is another major advantage of the new criminal laws. This is because the introduction of technology will help to make the process more efficient</p>
                        <p className="mt-4">The focus on a victim-centric justice system is another major advantage of the new criminal laws. This is because the new laws have taken a major step towards a victim-centric justice system.</p>
                        <p className="mt-4">However, despite these advantages, there remain several issues of concern. First and foremost, there is the issue of vague and general provisions. Such provisions may cause confusion and may even lead to their abuse. In this system of law, where the enforcement agencies have enough powers to begin with, this is indeed a cause of concern.</p>
                        <p className="mt-4">The other issue is that of the expansion of police powers. While it is true that stronger enforcement agencies may be required to tackle the problem of crime, it is equally important to ensure that they are sufficiently regulated to avoid their abuse and the resulting violation of civil liberties. There is also the concern that this system may have on civil liberties.</p>
                        <p className="mt-4">The criminal justice system needs to maintain an exacting balance which protects both social order and individual freedom. The state should not exercise excessive power because it would violate democratic principles. The success of this legal system depends completely on how the system is executed. The Indian judicial system faces multiple issues which include insufficient judges and inadequate judicial training programs.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">6. CONSTITUTIONAL PERSPECTIVE AND CASE LAWS</h4>
                        <p>It is important to assess the new criminal laws in relation to the constitutional perspective. The Supreme Court of India, in the case of Maneka Gandhi v. Union of India, laid down the principle that any law that affects the personal liberty of citizens must be "just and reasonable."</p>
                        <p className="mt-4">In D.K. Basu vs State of West Bengal there were guidelines laid by the Supreme Court which aimed at protecting the individuals' rights to ensure that arrest is not abused. The above cases clearly indicate the need to protect the rights of individuals within the criminal justice system.</p>
                        <p className="mt-4">The enhanced powers vested in the criminal justice system need to be examined in relation to the constitutional principles. Deviations in this regard may lead to the violation of fundamental rights.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">7. CHALLENGES IN IMPLEMENTATION</h4>
                        <p>There are a number of challenges that may arise while implementing the new criminal laws. First and foremost, the lack of proper infrastructure can be a problem. The courts are already flooded with a large number of pending cases. The introduction of new procedures may add to the burden.</p>
                        <p className="mt-4">Another important aspect to be considered is the training of police officers, lawyers, and judicial officials. The proper use of technology and other tools requires specialized knowledge and skills, which may be lacking.</p>
                        <p className="mt-4">Another problem that may arise is the digital divide. The urban population may be able to take advantage of the technological advancements, while the rural population may be adversely affected.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">8. SUGGESTIONS AND WAY FORWARD</h4>
                        <p className="mb-4">In order to make the new criminal laws a success, it is important to adopt the following suggestions:</p>
                        <ul className="space-y-4">
                            <li><strong className="text-white">Clarify Vague Provisions:</strong> Vague provisions need to be clarified. This will help avoid the misuse of the laws.</li>
                            <li><strong className="text-white">Implement Checks and Balances:</strong> One such means involves applying checks and balances in the most stringent way.</li>
                            <li><strong className="text-white">Focus on Implementation:</strong> Implementation is key. Government intervention must allow a decent outlay for the adversities faced by the Criminal Justice System.</li>
                            <li><strong className="text-white">Invest in the System:</strong> Investment is the key. The government needs to invest in the criminal justice system. This will help the stakeholders to cope with the changes.</li>
                            <li><strong className="text-white">Continuous Review:</strong> Review and assessment of the laws will also be beneficial. Legal reforms need to be dynamic.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">9. CONCLUSION</h4>
                        <p>The introduction of the Bharatiya Nyaya Sanhita and other related legislations represents a major milestone in the development of India’s criminal justice system. It represents a move towards a system of law that is no longer rooted in colonial history.</p>
                        <p className="mt-4">Although the new system of law has many advantages, including the aspect of modernization, efficiency, and the victim-oriented approach, there are certain concerns as well. These concerns include the aspect of civil liberties, police powers, and the implementation of the new system of law. However, the real test of the effectiveness of the new system of law lies in its implementation.</p>
                        <p className="mt-4">A criminal justice system must be efficient, fair, and rights-oriented. The real test of the new system of law lies in the achievement of the delicate balance between the aspects of efficiency, fairness, and the rights-oriented approach, without compromising the freedom of the citizen.</p>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Prashansa Gautam, KPMSOL NMIMS BBALLB.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Family Mediation in India: Statutory Framework and Judicial Approach",
            author: "By Shagun Ranjan Kumar",
            abstract: "As family structure is changing and evovling with that family disputes in India, such as divorce, maintenance, alimony, child custody, and matrimonial conflicts, Property Disputes Among Family Members, Inheritance and Will Disputes, Elder Abuse & Neglect have significantly increased in modern Indian society; due to factors like more awareness about legal rights and legal literacy, urbanisation, globalisation, changing gender roles, aspects related to the financial independence of women, and a reduction in social stigma around divorce. While dealing with these disputes through traditional court litigation, especially adversarial litigation, can often worsen the relationship between family members, spouses, and, most vulnerable, the child, which gets negatively impacted, even though courts prioritise their wellbeing. It is lengthy, expensive and emotionally stressful for families. Alternative Dispute Resolution (ADR) emerged as an alternative option that promotes amicable settlement in family disputes, particularly “MEDIATION”, which has risen as an important method in resolving family disputes peacefully.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Meaning and Role of Mediation</li>
                            <li>Statutory Framework of Family Mediation in India</li>
                            <li>Key Judicial Decision on Family Mediation</li>
                            <li>Evidence</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>As family structure is changing and evovling with that family disputes in India, such as divorce, maintenance, alimony, child custody, and matrimonial conflicts, Property Disputes Among Family Members, Inheritance and Will Disputes, Elder Abuse & Neglect have significantly increased in modern Indian society; due to factors like more awareness about legal rights and legal literacy, urbanisation, globalisation, changing gender roles, aspects related to the financial independence of women, and a reduction in social stigma around divorce. While dealing with these disputes through traditional court litigation, especially adversarial litigation, can often worsen the relationship between family members, spouses, and, most vulnerable, the child, which gets negatively impacted, even though courts prioritise their wellbeing. It is lengthy, expensive and emotionally stressful for families.</p>
                        <p className="mt-4">Alternative Dispute Resolution (ADR) emerged as an alternative option that promotes amicable settlement in family disputes, particularly “MEDIATION”, which has risen as an important method in resolving family disputes peacefully. Mediation provides a process in which a third party acts as a neutral mediator, which facilitates communication between disputing parties to reach mutual acceptable solution.</p>
                        <p className="mt-4">Recognising how important mediation is, the Mediation Act 2023 was passed on September 14, 2023. This act gives a set of rules for mediation. The main goal of this act is to make mediation a normal part of how things are done to help people settle disputes before they go to court and to make mediation work better with mutual justice. Mediation emerged with its introduction in Section 89 of the Code of Civil Procedure, 1908, which empowers courts to refer disputes to Alternative Dispute Resolution mechanisms, including mediation, arbitration, conciliation, and judicial settlement. In the case of Salem Advocate Bar Association v. Union of India (2002), the Supreme Court said that mediation centres should be set up. And how to use mediation and other dispute resolution methods, under Section 89 of CPC, 1908.</p>
                        <p className="mt-4">This article is going to look at the rules that govern mediation when it comes to family disputes. It will see how courts can help make mediation happen; check if the Mediation Act 2023 can help people resolve family disputes in a friendly and amicable way.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">MEANING AND ROLE OF MEDIATION</h4>
                        <p>Mediation is a voluntary dispute resolution process in which a neutral third party, known as a mediator, assists the disputing parties in reaching a mutually acceptable settlement. The mediator does not impose a decision, but enables negotiation and communication between disputing parties, unlike a judge or arbitrator. Inshort mediation helps people solve problems peacefully by talking and agreeing, instead of fighting.</p>
                        <p className="mt-4">The major role of the mediator in mediation is to help the parties resolve their dispute on their own voluntary choice. The mediator will share what each party thinks with the other party, but only if they agree to it. The mediator will also help the parties understand the issues, clarify what is important to them and look at areas where they can make decisions about their claims.</p>
                        <p className="mt-4">And the things that a mediator should not do are to act as an arbitrator, a representative or as a counsellor of a party in any arbitration or court case that's about the same issue being mediated; or being presented by the parties as a witness, in any arbitration or court case.</p>
                        <p className="mt-4">The mediator will tell the parties clearly that their job is to help the parties make a decision, and also tell the parties that they cannot promise that mediation will result in a settlement.</p>

                        <div className="bg-black/40 p-6 rounded-2xl border border-white/5 space-y-4 mt-6">
                            <div>
                                <strong className="text-[#D4AF37] block mb-1">Simplest example:</strong>
                                <p>Two siblings argue about how to divide their parents' property. A mediator helps them talk calmly and guides them to agree on a fair division without going to court.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">STATUTORY FRAMEWORK OF FAMILY MEDIATION IN INDIA</h4>
                        <p className="mb-4">The legal framework for mediation in family disputes is governed under multiple statutes that support reconciliation and amicable settlement.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">A. Mediation Act, 2023</h5>
                        <ul className="space-y-4">
                            <li><strong className="text-white">Section 5 – Pre-Litigation Mediation:</strong> Section 5 of the Act introduces the concept of pre-litigation mediation, it let the parties to mediate before approaching the court. This section of the act encourages parties to do early settlement of disputes, and it keeps courts from getting too busy. As in family disputes, it helps in preserving relationships in the early stage before the conflict worsens.</li>
                            <li><strong className="text-white">Section 19 – Mediated Settlement Agreement:</strong> Agreement mention about refers to a written agreement of any settlement happen between the parties on a particular dispute or all disputes authenticated by a mediator, which is not void under the Indian Contract Act, 1872. This ensures clarity, certainty and voluntary choice of parties useful in maintenance, custody, and property division.</li>
                            <li><strong className="text-white">Section 27 – Enforcement of Settlement Agreement:</strong> It will be enforced according to the Code of Civil Procedure, 1908; also enforced in the way, as a court judgment or decree. This means any party or people claiming through them can use it as a defence set off or otherwise in a proceeding. Provides legal security in case of family disputes.</li>
                            <li><strong className="text-white">Section 18 – Time-Bound Mediation:</strong> The Act says that a mediator should usually finish mediation in 120 days from the first appearance for the mediation process, but it can be extended on option of the parties by 60 days only. This prevents unnecessary delays in proceeding.</li>
                            <li><strong className="text-white">Section 22 – Confidentiality:</strong> All persons involved in the mediation process, whether mediators, parties, service providers, or participants, must keep certain things confidential, which includes acknowledgements, opinions, suggestions, apologies, admissions, or willingness or refusal to accept proposals, as this promotes parties to speak freely. With that, no audiovisual recording of the mediation process is allowed, whether online or offline. Parties cannot use any argument of the mediation process as evidence in further court proceedings.</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">B. Family Courts Act, 1984</h5>
                        <p><strong className="text-white">Section 9 – Duty of Family Court to make efforts for settlement:</strong> In every court proceeding family court would make efforts and prioritize to persuade the parties to come to a settlement. And if, during proceedings at any stage of procedding if court found any reasonable cause for settlement, the family court may adjourn the case. This delay will give the parties time to try to work out their differences and come to a settlement.</p>
                        <p className="mt-4">The main goal of the family courts is to help people in a family stay together or preserve relationships and reduce adversarial litigation. Therefore, the Family Court is set up to be a more relaxed and less formal way than the other courts, in a more settlement-oriented manner that encourages negotiation and can refer the case for mediation and counselling and is an obligation to assist with settlement.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">C. Hindu Marriage Act, 1955</h5>
                        <p><strong className="text-white">Section 23 - Decree in proceedings:</strong> Section 23(2) of HMA, 1955, states that before moving to any decision or granting relief in matters of divorce petitions, judicial separation or restitution of conjugal rights, the court must first encourage the parties to bring about reconciliation between the parties. The provision intends that marriages should not dissolve before exploring any possibility of negotiation and reconciliation.</p>

                        <p className="mt-4 italic">All the above legislation very strongly supports family disputes for mediation, to reconciliation, and negotiation in a very amicable manner.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">KEY JUDICIAL DECISION ON FAMILY MEDIATION</h4>
                        <ul className="space-y-6">
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">1. Salem Advocate Bar Association v. Union of India</strong>
                                <p>The Supreme Court made it clear that they are in favour of mediation and other ways to resolve disputes outside of court, as stated in Section 89 of the Civil Procedure Code. The Court thinks that judges should do more than just decide cases; they should also try to help people resolve their disputes peacefully.</p>
                                <p className="mt-2">The Court also said that courts should have mediation centres and that there should be rules in place and people trained to mediate. This case is important because it helped make mediation a normal part of the legal system, not just something that people can choose to do if they want to.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">2. Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. Pvt. Ltd.</strong>
                                <p>In this case, the Supreme Court explained what kinds of cases are good for mediation. It said that disputes involving relationships like family problems or issues between married couples are best resolved through mediation.</p>
                                <p className="mt-2">The Court also said that judges should send these kinds of cases to mediation of going straight to trial. This decision helped clear up confusion and showed courts how to use mediation and other ways to resolve disputes effectively.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">3. K. Srinivas Rao v. D.A. Deepa</strong>
                                <p>This case was about disputes between couples, and it showed how emotional these kinds of conflicts can be. The Supreme Court said that these cases need to be handled with sensitivity. The Court thought that mediation was an idea because it can help reduce the anger and bitterness between people. The Court also noted that mediation can sometimes help couples understand each other better and even work on their relationship, rather than making things worse by fighting in court for a long time.</p>
                            </li>
                        </ul>
                        <p className="mt-4">In family disputes, Indian courts feel that mediation is the way to go because it helps in maintaining family relationships. They believe mediation is faster and less stressful than court proceedings. Mediation provides a peaceful solution to disputes.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">EVIDENCE</h4>
                        <p>Empirical evidence on Mediation has proven to be very effective in resolving family disputes. Studies show that around 50% to 70% of cases referred to mediation centres in India are successfully settled, especially in matrimonial matters, where people are more willing to compromise. A nationwide mediation drive by the National Legal Services Authority also showed positive results, solving over 1 lakh cases, many of which were family disputes.</p>
                        <p className="mt-4">Mediation is also faster than court cases and people are more likely to follow the final agreement because they have decided it themselves. Therefore, mediation is a better and more peaceful way to resolve family conflicts.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>Mediation is a good way to solve family conflicts in India. It is different from going to court because it is about understanding each other, working together, and finding a solution, which is very important when it comes to personal relationships. The Mediation Act, 2023, the Family Courts Act, 1984 and the Hindu Marriage Act, 1955 are laws that show the legal system really supports finding ways to resolve issues peacefully.</p>
                        <p className="mt-4">Mediation is good because it saves people a lot of time and money. It also helps people stay on good terms and reduces the emotional stress that comes with fighting, especially for kids. As more people learn about mediation and it becomes easier to access, it can really change the way family problems are solved in India. With proper mediation provision and Acts mediation can be made stronger for people in conflict.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>'Changing Nature of Family in India' (Carpe Diem IAS)</li>
                            <li>Gaurav Nagpal v. Sumedha Nagpal (AIR 2009 SC 557)</li>
                            <li>Mediation Act 2023</li>
                            <li>Code of Civil Procedure, 1908, s 89</li>
                            <li>Salem Advocate Bar Association v. Union of India (AIR 2005 SC 3353)</li>
                            <li>'Section 5 of Mediation Act, 2023 – Pre-Litigation Mediation' (IBC Laws)</li>
                            <li>Family Courts Act 1984 s 9</li>
                            <li>'Section 9 of Family Courts Act, 1984 – Duty of Family Court to Make Efforts for Settlement' (IPC Laws)</li>
                            <li>Hindu Marriage Act 1955 s 23(2)</li>
                            <li>Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. Pvt. Ltd. (2010) 8 SCC 24</li>
                            <li>K. Srinivas Rao v. D.A. Deepa (AIR 2013 SC 2176)</li>
                            <li>Devang R, 'Evaluating the Effectiveness of Mediation in Resolving Family Disputes in India' (IJLSSS)</li>
                            <li>Bhadra Sinha, 'SC Panel, NALSA Mediation Drive: Over 1 Lakh Cases Resolved' (The Print)</li>
                            <li>Faik Ak, 'Mediation in Family Courts: Balancing Legal Formality and Emotional Realities' (Legal Service India)</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Shagun Ranjan Kumar, Manikchand Pahade Law College, Chhatrapati Sambhajinagar/ B.A.LL.B.</p>
                    </div>
                </div>
            )
        },
        {
            title: "International Legal Framework Governing Climate Change",
            author: "By Mansi Teotia",
            abstract: "Climate change stands as one of the most intricate and pressing challenges defying the international legal order. It is a matter of great concern for the global community. It transcends national boundaries, implicates global commons, and requires coordinated action among all the nations. The United Nations Intergovernmental Panel on Climate Change (IPCC) has lately linked that the climate crisis is a 'code red' for humanity as current emissions reduction plans are not sufficient to attack the rise in global temperatures. International law has surfaced as a central tool in climate governance, defining obligations, ensuring cooperation and forming an accountability mechanism.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>The Foundation: UNFCCC and the "Common Concern"</li>
                            <li>The Evolution of Treaties: Kyoto to Paris</li>
                            <li>The Paris Agreement (2015)</li>
                            <li>The Human Face of Litigation: Rights-Based Accountability</li>
                            <li>State Responsibility and the "No-Harm" Rule</li>
                            <li>Governance Beyond Treaties: The BBNJ and Trade Law</li>
                            <li>Liability, Loss and Damage: The Final Frontier</li>
                            <li>Conclusion: The Rule of Law in the Anthropocene</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>Climate change stands as one of the most intricate and pressing challenges defying the international legal order. It is a matter of great concern for the global community. It transcends national boundaries, implicates global commons, and requires coordinated action among all the nations. The United Nations Intergovernmental Panel on Climate Change (IPCC) has lately linked that the climate crisis is a 'code red' for humanity as current emissions reduction plans are not sufficient to attack the rise in global temperatures. International law has surfaced as a central tool in climate governance, defining obligations, ensuring cooperation and forming an accountability mechanism.</p>
                        <p className="mt-4">For decades, international climate governance was viewed through the lens of diplomacy- a series of handshakes in drafty conference halls that redounded in lofty goals but little "teeth". "International climate obligations…are often treated as political commitments rather than binding legal duties". But as we move towards 2025-26, the landscape of international climate law has experienced its most profound transformation since the signing of the Paris Agreement. This period marks the definitive end of the "voluntary" age of climate governance. Through a series of historic Advisory Opinions, international judicial bodies have clarified that climate action is no longer just a policy preference, but a binding legal obligation under existing International Law. Yet indeed within these landmark rulings critics argue that the law remains dangerously vague. In his separate opinion, Judge Dalveer Bhandari advised that the Court's findings often reckoned on "general and abstract propositions rather than relating "more concrete instances of legal consequences" for breaches of climate obligations.</p>
                        <p className="mt-4">This article examines the evolution of International climate governance from the foundational United Nations Framework Convention on Climate Change (UNFCCC) to the Kyoto Protocol and the Paris Agreement. International law is no longer just about what states pledge to do at glitzy COP summits; it is increasingly about what they are needed to do under customary law and treaty obligations.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE FOUNDATION: UNFCCC AND THE "COMMON CONCERN"</h4>
                        <p>The United Nations Framework Convention on Climate Change (UNFCCC) adopted at the 1992 Earth Summit, remains the bedrock of global climate law. It established the pivotal principle of Common but Differentiated Responsibilities (CBDR), acknowledging that while climate change is a concern for all humanity, developed nations bear a greater historical responsibility and possess more capacity to act.</p>
                        <p className="mt-4">The UNFCCC did not establish hard emissions targets, but it created the institutional architecture – the annual Conference of Parties (COP) – that allowed climate law to evolve from soft obligations to hard law.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE EVOLUTION OF TREATIES: KYOTO TO PARIS</h4>
                        <p>The 1997 Kyoto Protocol was the first attempt to turn those principles into hard numbers. It was a "top-down" model, where legally binding targets were imposed on developed nations (Annex I parties). It introduced market-based flexible mechanisms:</p>
                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">Emissions trading:</strong> Allowing countries to buy and sell emission credits.</li>
                            <li><strong className="text-white">Clean Development Mechanism:</strong> Enabling developed countries to invest in emission-reduction projects in developing nations.</li>
                        </ul>
                        <p className="mt-4">However, it ultimately failed because it created a binary world- developed nations had targets, while developing giants like China and India did not. Hence, its effectiveness was limited by the absence of binding targets for major developing emitters and the Withdrawal of the United States.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE PARIS AGREEMENT (2015)</h4>
                        <p>The Paris Agreement marked a landmark shift, creating a universal, legally binding framework for all parties to curb temperature increases to well below 2° C, with a pursuit of limiting it to 1.5°C. Unlike Kyoto, Paris utilizes Nationally Determined Contributions (NDCs), allowing nations to set their own targets. It emphasises long-term planning, sustainable development, and financial support for developing nations. In 2024 and 2025, the interpretation of these NDCs has shifted; they are no longer seen as "best efforts" but as the minimum standard for fulfilling a state's due diligence obligations.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE HUMAN FACE OF LITIGATION: RIGHTS-BASED ACCOUNTABILITY</h4>
                        <p className="mb-4">The most profound development in recent years is the "human rights turn" in climate law. For years, states argued that climate change was too diffuse for individual standing. That door was kicked open by the European Court of Human Rights and the International Court of Justice (ICJ).</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">The Swiss Grandmothers Case (KlimaSeniorinnen)</h5>
                        <p>In KlimaSeniorinnen v. Switzerland, The European Courts of Human Right ruled that Switzerland's failure to implement sufficient climate legislation violated Article 8 of the European Convention on Human Rights. This case was a watershed moment. It humanised the crisis by proving that a states regulatory failure has a direct, measurable impact on the health and dignity of its citizens. The court explicitly noted that states have a positive obligation to adopt regulations capable of mitigating the effects of climate change.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Intergenerational Equity: The Rights of the Unborn</h5>
                        <p>International law is increasingly recognising "solidarity in time". The 2025 ICJ advisory opinion on climate change emphasised that state owe a duty of care not just to those living today but to future generations. This introduces the concept of intergenerational equity suggesting that the current generation holds the earth's climate in trust.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">STATE RESPONSIBILITY AND THE "NO-HARM" RULE</h4>
                        <p className="mb-4">Under the customary international law, the "no-harm" rule prohibits states from allowing their territory to be used in a way that causes significant damage to other states. Traditionally this was applied to cross-border water pollution or industrial accidents. However, the 2024 ITLOS advisory opinion change to the game.</p>

                        <ol className="list-decimal pl-5 space-y-4">
                            <li><strong className="text-white">GHG Emissions as Marine Pollution:</strong> The International Tribunal for the Law of the Sea (ITLOS) ruled that anthropogenic GHG emissions constitute "pollution of the marine environment" under the UN Convention on the Law of the Sea (UNCLOS). This means that the strict obligations of Part XII of UNCLOS – to protect and preserve the marine environment- now apply to climate change. For the first time, states can be held liable under the Law of the Sea for the acidification and warming of the oceans caused by their domestic emissions.</li>
                            <li><strong className="text-white">The Due Diligence Standard:</strong> What counts as "enough" action? The Law defines this through the concept of Due Diligence. A State is not required to prevent climate change entirely, but it must take all necessary steps within its ability. In the 2025 ICJ opinion, the Court explained that Due Diligence is an objective standard that updates as scientific understanding grows. As the IPCC reports grow more alarming, the legal limits on States become more strict.</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">GOVERNANCE BEYOND TREATIES: THE BBNJ AND TRADE LAW</h4>
                        <p>Climate governance now affects other legal areas. The 2023 BBNJ Agreement (High Seas Treaty) provides a framework for protecting biodiversity in areas beyond national jurisdiction from climate-related harm. Likewise, international trade law is dealing with Carbon Border Adjustment Mechanisms (CBAMs), Where the WTO must decide whether climate-based tariffs are legitimate environmental protections or "disguised restrictions on international trade."</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">LIABILITY, LOSS AND DAMAGE: THE FINAL FRONTIER</h4>
                        <p>The "Loss and Damage" fund set up at COP27 and made operational in later years marks the legal acknowledgement of historical responsibility. International law is moving toward a "polluter pays"model. Even though states have been reluctant to take liability in the traditional legal sense, the 2025 ICJ Opinion suggests that continuous failure to meet NDC targets could lead to an obligation to provide compensation to vulnerable countries like Vanuatu or Tuvalu.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION: THE RULE OF LAW IN THE ANTHROPOCENE</h4>
                        <p>International law in climate change is no longer a niche area; it is the central framework for global survival. From the foundational principles of the UNFCCC to the cutting edge human rights ruling of the ECtHR, the message is clear: the era of climate impunity is over. States are now bound by a "triple lock" of treaty obligations, human rights responsibilities, and the customary "no-harm" principle. As we look toward the 2030s, the success of climate governance will not be measured by the eloquence of its treaties, but by the courage of its courts to hold the powerful accountable.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>IPCC Working Group I, Sixth Assessment Report; The Physical Science Basis, 2021.</li>
                            <li>Bodansky,D. (2016) as cited in International Journal of Latest Technology in Engineering, Management & Applied Science (IJLTEMAS), Vol. XV, Issue I (January 2026)</li>
                            <li>Obligations of States in respect of climate change (Advisory Opinion)</li>
                            <li>UNFCCC, 'United Nations Framework Convention on Climate Change'</li>
                            <li>Kyoto Protocol to the United Nations Framework Convention on Climate Change (adopted 11 December 1997, entered into force 16 January 2005)</li>
                            <li>Paris Agreement (adopted 12 December 2015, entered into force 4 November 2016) 3156 UNTS 1</li>
                            <li>Paris Agreement, art 4(3)</li>
                            <li>Ibid art 4(2).</li>
                            <li>Verein KlimaSeniorinnen Schweiz and Others v. Switzerland (2024) App no 53600/20 (ECtHR).</li>
                            <li>Ibid para 548</li>
                            <li>Obligations of States in respect of Climate Change (Advisory Opinion) ICJ (23 July 2025) para 112</li>
                            <li>Edith Brown Weiss, In Fairness to Future Generations: International Law, Common Patrimony, and Intergenerational Equity (Transnational Publishers 1989) 34</li>
                            <li>Legality of the Threat or Use of Nuclear Weapons (Advisory Opinion) ICJ Rep 226, para 29</li>
                            <li>Request for an Advisory Opinion submitted by the Commission of Small Island States on Climate Change and International Law (ITLOS Case No 31, 21 May 2024) para 179</li>
                            <li>United Nations Convention on the Law of The Sea (adopted 10 December 1982, entered into force 16 November 1994) 1833 UNTS 397 (UNCLOS) art 192</li>
                            <li>Pulp Mills on the River Uruguay (Argentina v. Uruguay) (Judgment) [2010] ICJ Rep 14, para 197</li>
                            <li>Agreement under the United Nations Convention on the Law of the Sea on the Conservation and Sustainable Use of Marine Biological Diversity of Areas beyond National Jurisdiction (adopted 19 June 2023) UN Doc A/CONF.232/2023/4 (BBNJ Agreement)</li>
                            <li>United States- Standards for Reformulated and Conventional Gasoline [1996]WTO Doc WT/DS2/AB/R</li>
                            <li>Obligations of States in respect of Climate Change (Advisory Opinion) ICJ (2025) para 145</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Mansi Teotia, Meerut College/ LL.B.</p>
                    </div>
                </div>
            )
        },

        {
            title: "Legal Loophole or Dangerous Precedent? The Flaws of the Insanity Defence",
            author: "By Tanwita Banik",
            abstract: "The insanity defense is one of the most controversial doctrines in criminal law, an intersection of legal principles, mental health professional expertise, moral philosophy and concern for public safety. At the heart of the insanity defense is an age-old principle: punishment is based on blameworthiness; and therefore, when a person's mental illness prevents them from understanding their actions or controlling their behaviour, the system has to accommodate that reality.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>The Conceptual and Procedural Flaws</li>
                            <li>Neuroimaging and Mitigation</li>
                            <li>Insanity Under Indian Law (BNS)</li>
                            <li>The Call for Reform</li>
                            <li>Conclusion</li>
                            <li>References</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>The insanity defense is one of the most controversial doctrines in criminal law, an intersection of legal principles, mental health professional expertise, moral philosophy and concern for public safety. At the heart of the insanity defense is an age-old principle: punishment is based on blameworthiness; and therefore, when a person&#39;s mental illness prevents them from understanding their actions or controlling their behaviour, the system has to accommodate that reality. According to The Journal of the American Academy of Psychiatry and the Law, there is a long-standing legal precedent that due process and fundamental fairness prevent individuals who lack a rational understanding of their behaviour from being held responsible for their actions under the law.</p>
                        <p className="mt-4">However, in terms of both perception and application, there are many flaws, both conceptual and procedural, within the insanity defence that create difficulty assessing whether it is an essential protection or a potential loophole.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE CONCEPTUAL AND PROCEDURAL FLAWS</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">1. Public Misperception</h5>
                        <p>One major difficulty in creating a perception of the insanity defence as a &quot;get out of jail free card&quot; within the public is that this misconception serves to detract from the public&#39;s confidence in the administration of the criminal justice system. In fact, the insanity plea is utilized in fewer than one percent of all felony cases in the United States, and the success rate for the plea is also extremely low. Despite its rarity, high-profile cases such as John Hinckley Jr.&apos;s acquittal after the 1981 attempt on President Reagan has raised scepticism and led to reform movements and statutory tightening.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">2. The Legal and Medical Divide</h5>
                        <p>Second, the legal and medical divide poses a deep-rooted conflict. Legal standards of &quot;insanity&quot; are often at odds with psychiatric diagnoses. The law demands categorical, binary conclusions, responsible or not, while medicine operates on spectrums of mental health. Jurisdictions are in a quandary with the differing definitions of insanity including the M&apos;Naghten Rule, the Irresistible Impulse Test, as well as the broader definition of insanity found in the Model Penal Code. This disconnect, together with expert disagreement and confusion, may cause juries to be swayed by the testimony of those professionals who are offered as &quot;hired guns&quot; by each side.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">3. Jurisdictional Inconsistencies</h5>
                        <p>Third, the inconsistencies among the various jurisdictions in the way insanity is defined make matters worse. Some states, following the acquittal of Hinckley, have abolished the use of an insanity defence entirely; Idaho, Montana, Utah and Kansas to name just four. Likewise, other jurisdictions changed the burden of proof, some placing the burden on the defendant and others allowing a defendant to plead guilty, but with a mental illness. As a result, two defendants situated very similarly, can receive an entirely different outcome based solely on where their trial is held.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">4. Continued Commitment and Public Safety</h5>
                        <p>Fourth, many concerns continue to plague society regarding the continued commitment of those found not guilty by reason of insanity for public safety reasons. While individuals who have been found not guilty due to insanity are usually held in a psychiatric hospital instead of being released from custody, the average length of time that they will be confined is often much greater than the average sentence for individuals who are sentenced to prison for the same crime, causing civil rights issues. The difficulty between the line of rehabilitation and incarceration is difficult to maintain.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">5. The Moral Debate</h5>
                        <p>Finally, the moral controversy surrounding culpability and free will remains unresolved. Philosophically, do we punish someone who couldn&apos;t understand or control their actions? Yet society is reluctant to absolve individuals whose acts yield grave harm, even when mental illness is at play. The insanity defence forces courts to grapple with whether mental incapacity should negate blame, and how much leniency public justice should offer.</p>
                        <p className="mt-4">Despite these flaws, there is no broad legal consensus to eliminate the insanity defence. Many scholars argue it is constitutionally and morally requisite, else we criminalize those ethically undeserving of blame. But reform is imperative.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">NEUROIMAGING AND MITIGATION</h4>
                        <p>Scientifically speaking, it is one of the hardest tasks for a criminologist to determine the insanity of a person, as it requires a retrospective reconstruction of an individual&#39;s mental state and extracting that mental state to a specific psycho-legal context at the time of an alleged crime. In fact, the determination of such a mental state is very subjective and varies from evaluator to evaluator. These reasons include adversarial allegiance (i.e., the evaluator is more likely to side with those who have retained them), lack of forensic training in conducting criminal responsibility evaluations, or using inadequate data to make decisions.</p>
                        <p className="mt-4">A clear illustration of this is when one observes abnormal behaviour and examines explanations rooted in brain function.</p>
                        <p className="mt-4">Neuroimaging techniques such as MRI, fMRI, and PET scans have had a major impact in neurolaw, one of their uses is to argue that brain impairments should reduce the punishment imposed for criminal actions. But before going into concerns about using neuroimaging in relation to the insanity defense, it&apos;s important to recognize that these imaging tools play several essential roles in mental health assessments, both in criminal and civil legal settings. In certain circumstances, imaging can help factfinders make better decisions, for example, in arguing for mitigation.</p>
                        <p className="mt-4">An example of that are the decisions of the US Supreme Court regarding juvenile culpability in the Miller trilogy, which was based on scientific data regarding the development of the brain. The Miller trilogy (Roper v. Simmons (2005), Graham v. Florida (2010), and Miller v. Alabama (2012)), changed the way that juveniles are sentenced in the United States by being the first cases to take into account scientific data regarding developmental immaturity and largely prohibit or limit the severity of the punishment for crimes committed by juveniles, including prohibiting the death penalty and in numerous cases even eliminating the possibility of receiving a mandatory life sentence without parole. In addition, the Court acknowledged that a juvenile&apos;s underdeveloped brain created an increased risk of them behaving violently and lessened their culpability, although did not completely eliminate it, for having committed a violent crime. These examples demonstrate that mental health and brain science can assist with mitigation and that a judge or jury may consider neuroimaging or other development evidence when determining a sentence in a criminal case.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INSANITY UNDER INDIAN LAW (BNS)</h4>
                        <p>Legally, there is no clear definition of what constitutes insanity. There may be vague specifics about insanity; however, there isn&apos;t anything concrete about it. In the Bharatiya Nyaya Sanhita (BNS), the criminal substantive law of India, the concept of insanity is covered under Section 22, which states that a person is not liable for an offense if, due to unsoundness of mind at the time of the act, they were incapable of knowing the nature of their actions or that the actions were wrong or contrary to law. Here, unsoundness of mind is not really defined.</p>
                        <p className="mt-4">Legally, unsoundness of mind means a person who doesn&apos;t understand the consequences of their actions. Although the law focuses on incapability, rather than mental illness, we still see criminals like Issei Sagawa, who has walked free. He had shot his victim in the neck, raped her, then consumed parts of her body over the course of three days. He then attempted to dispose of her remains in the Bois de Boulogne park, where he was arrested. Psychiatric experts deemed Sagawa unfit to face trial, and he was initially held in a mental institution in France before being deported to Japan. There, he was ruled sane by Japanese authorities, but as the charges against him in France had been dropped, he was allowed to walk free.</p>
                        <p className="mt-4">This case brings our attention to the fact that sanity differs from state to state. To some specialists, a person may be merely disturbed, but to others, he may be coded as a threat to society, who needs to be held from society.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE CALL FOR REFORM</h4>
                        <p>The question before us is not simply one of law, but of justice itself. What does it tell us about our society that there are dangerous people who manage to escape from a system meant to protect us and who escape this protective system using insanity as their cover? The insanity defence was originally seen as a protective and humane safeguard that was supposed to be very rare; since then it has become a tool to protect the guilty from punishment, to deny justice, and to completely undermine one of the basic tenets of justice, personal accountability. Is this compassion or is this simply careless disregard for others disguised as mercy?</p>
                        <p className="mt-4">The flaws in the insanity defence are clear if we look closely enough. What is the basis for a jury finding that an accused was unable, based upon conflicting psychiatric reports, to understand the difference between right and wrong? For example, for every psychiatrist who testifies he believes the defendant could not tell the difference between right and wrong, there is a psychiatrist who testifies the defendant could differentiate between these two concepts. These contradictory statements by forensic psychiatrists are more than just insignificant intellectual debates; these contradictory statements by forensic psychiatrists are battlegrounds for your truth, confusion, distortion, and manipulation of what represents your victimization, as well as that of your family and/or the community.</p>
                        <p className="mt-4">When you consider the impact of these persons&apos; actions on the victims of their crimes, and in particular on the victims&apos; families, you must first consider how this will affect the victim&apos;s mother, and how it will impact the family of a person who has been murdered.</p>
                        <p className="mt-4">When a verdict of &quot;not guilty by reason of insanity&quot; is delivered, do they feel justice has been served? Or do they feel abandoned, left to pick up the pieces while the perpetrator retreats to an institution where release is always a possibility? Every early discharge, every motion for diminished responsibility, reopens wounds and whispers to society: justice is negotiable, accountability is optional. Can we truly allow a justice system to send that message?</p>
                        <p className="mt-4">And what of the precedent? Every time a defendant claims insanity as a defense, they not only escape from punishment; they also promote an idea/belief that there exists some way for people to avoid being punished for committing crimes if someone can simply do a good enough job of pretending to be insane/suffering from a mental illness. It encourages defendants to lie about the severity of their mental illness, or to simply fake their mental illness altogether, simply because they think they can get away with doing so. What does this mean for the system of justice if the proceedings within the courtroom do not take place in an atmosphere of honesty, but in a setting of performance art? Will we put ourselves at risk if we allow individuals who utilize an ambiguity in our laws to manipulate our system of justice?</p>
                        <p className="mt-4">By not having sympathy for the defendant(s); therefore denying that there are legitimate reasons that someone might actually be insane, and that the defendant(s) should be held accountable for their actions, as well as finding a way to hold them to a degree of accountability for their actions, creates a situation in which those individuals do not realize they have been taken advantage of by the person who used their mental illness to avoid being held accountable for what they had done. This is ultimately only going to lead to the abuse of our justice system if we allow the use of &quot;The Insanity Defense&quot; to continue.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>Consider the following question before you answer: Does the current insanity defense provide protection or opportunity for those wanting to abuse the ambiguities of clinical and legal definitions? To uphold the insanity defense as is without reforming it creates an environment of risk rather than safe retribution for crimes committed; I reiterate: there Is No Place for Risk In the Courtroom. Fairness in all aspects of our system requires definitive standards that are both understood; the insanity defense does provide an example of imprecision within our Legal System, thereby mitigating back to this aforementioned lack of firm, clear and unwavering justice.</p>
                        <p className="mt-4">Let&apos;s evaluate this information to determine how we can use this knowledge to enact a reform regarding the application of the Insanity Defense outside of simply attaching a new label; so that we may serve justice and accountability to All These Parties Arising From Our Justice Action, and thus prevent the further destruction of fair representation to those we serve due to Legal Loopholes.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Abolition of the Insanity Defense Violates Due Process by Stephen J. Morse and Richard J. Bonnie</li>
                            <li>The Insanity Defense: Legal Issues and Controversies (Legal Mantra)</li>
                            <li>Colorado Grocery Store Shooting Verdict (AP News)</li>
                            <li>John Hinckley Trial Details (Famous Trials)</li>
                            <li>M.W. Acklin, K. Fuger, W. Gowensmith: Examiner agreement and judicial consensus in forensic mental health evaluations, Journal of Forensic Psychology Practice, 15 (4) (2015), pp. 318-343</li>
                            <li>C.H. Drinan: The Miller revolution, SSRN Electronic Journal</li>
                            <li>D.W. Denno: The myth of the double-edged sword: An empirical study of neuroscience evidence in criminal cases, Boston College Law Review, 56 (2015), pp. 493-551</li>
                            <li>Japanese cannibal who walked free dies age 73 (France24)</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Tanwita Banik, SOA National Institute of Law / BALLB.</p>
                    </div>
                </div>
            )
        },

        {
            title: "Judicial Intervention vs. Arbitral Autonomy: A Critical Analysis of the 2025 Constitution Bench Ruling on Modifying Awards",
            author: "By Sarika Mallick",
            abstract: "In today's era of dispute resolution, Arbitration has emerged as the most effective modern source of dispute resolution, particularly in commercial matters and company disputes. Due to its promise of efficiency, flexibility, and finality. The principle of finality is provided in the Arbitration and Conciliation Act, 1996, which ensures that arbitral awards are binding and final with limited judicial intervention.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>The Evolution of Non-Interference of Courts</li>
                            <li>Analysis of the Gayatri Balasamy Case</li>
                            <li>Critical Legal Analysis</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">I. INTRODUCTION</h4>
                        <p>In today&apos;s era of dispute resolution, Arbitration has emerged as the most effective modern source of dispute resolution, particularly in commercial matters and company disputes. Due to its promise of efficiency, flexibility, and finality. The principle of finality is provided in the Arbitration and Conciliation Act, 1996, which ensures that arbitral awards are binding and final with limited judicial intervention. The legislative intent behind this act is to provide a method of arbitration as a viable alternative to long judicial proceedings and also to reduce the burden on the courts while respecting the autonomy of parties.</p>
                        <p className="mt-4">However, there is an ongoing debate going on between the finality of the arbitral award and the pursuit of justice. This is considered a complex issue as it involves various legal principles and conflicting views on the role of courts in the arbitration process. Arbitration is always seen as quicker and a more cost-efficient alternative to litigation. The finality of an arbitral award is a significant concern, as it limits the parties&apos; ability to appeal or seek judicial review of the decision. The particular section 34 of the Arbitration and Conciliation Act, 1996 provides the framework for parties to challenge an arbitral award in a court. The tension between Section 34 of the Arbitration and Conciliation Act, 1996, and the court&apos;s power to correct errors revolves around the extent of judicial intervention in arbitral awards.</p>
                        <p className="mt-4">The landmark ruling in Gayatri Balasamy v. ISG Novasoft Technologies Ltd. 2025 SCC OnLine SC 986, marks a significant turning point in Indian arbitration jurisprudence, indicating a shift from a traditionally rigid set-aside approach to a more modified approach. Historically, under the Arbitration and Conciliation Act, 1996, courts were confined to either upholding or setting aside arbitral awards under Section 34, with little scope for altering their substance. However, this judgment reflects an evolving judicial philosophy that prioritises substantive justice alongside procedural finality.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">II. THE EVOLUTION OF NON-INTERFERENCE OF COURTS</h4>
                        <p>The power of the Court has evolved over the years. Under the erstwhile Arbitration and Conciliation Act, 1940, the court possessed the power to modify the arbitral award. The erstwhile act provided three kinds of remedies: remission, rectification, and setting aside of an arbitral award. However, the position completely changed in the present act of the Arbitration and Conciliation Act, 1996, which is based on the UNCITRAL Model Law on International Commercial Arbitration, 1985. This international model law specifically confined the grounds of challenges and consequent remedies only to set aside the award or remit the award in limited circumstances. The aim and essence of this UNCITRAL Model Law is to limit the judicial intervention in arbitration proceedings. It is pertinent to note that the 1996 Act provision is based on this Model Law, which excludes the power to modify an arbitral award by a court as mentioned under Section 34 of the Arbitration and Conciliation Act, 1996. This change reflects the shift in the trend towards international arbitration, where the focus is on minimising judicial involvement and developing the arbitration process as a self-regulating mechanism.</p>
                        <p className="mt-4">The decision in The Project Director National Highways. vs M. Hakeem, AIR 2021 SUPREME COURT 3471, firmly reinforces the principle that the court exercises jurisdiction under section 34 of the Arbitration and Conciliation Act, 1996, does not possess the power to modify an arbitral award. In this particular case, a dispute arose out of compensation determinations on the basis of the National Highway Act, where the arbitral award was challenged before the court. The High Court, instead of setting aside the award, proceeded to modify the compensation amounts, affecting the substance of the previous award. The core issue raised in the case was whether a court, while exercising powers under Section 34, can modify an arbitral award, or is restricted only to setting aside the award on specified grounds. The Supreme Court of India held that Section 34 only provides the remedy of setting aside, not modification. The courts are not permitted to correct, vary or rewrite an arbitral award and further, the court said, allowing the court to modify will make the court act as an appellate body, which is against the scheme of arbitration law. The judgment is now often referred to as the &quot;Hakeem Doctrine&quot;, which strongly supported the finality principle and limited scope of judicial inference.</p>
                        <p className="mt-4">The rigid &quot;set aside&quot; framework under section 34 of the said Act of 1996, gave rise to what may be described as a &quot;litigation loop&quot;, whereby even minor legal and procedural defects in a sound award result in annulment of the entire award due to the strictness. Consequently, the parties were compelled to recommence the arbitration proceeding from the beginning, resulting in duplication of time, cost, and effort. This cyclical process, where disputes move from arbitration to courts, then back to arbitration again, constitutes a litigation loop.</p>
                        <p className="mt-4">As a result, instead of serving the purpose of an effective dispute resolution mechanism, arbitration became entangled in prolonged litigation, leading to delays and a burden on the judicial system. Moreover, the losing party used this delay as a strategy to avoid compliance and enforcement. This caused party fatigue and also eroded the confidence of the public in the arbitration as a reliable alternative to litigation. As we know, the framework of the act was designed to ensure finality, but it resulted in repeated proceedings, leading to uncertainty. Therefore, the litigation loop encourages the system towards a need for a more balanced approach, which preserves finality with limited judicial intervention to correct the minor errors without setting aside the entire award.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">III. ANALYSIS OF THE GAYATRI BALASAMY CASE</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Factual Matrix:</h5>
                        <p>In the case of Gayatri Balasamy v. ISG Novasoft Technologies Ltd. 2025 SCC OnLine SC 986. It is a significant legal precedent in India regarding the boundaries of judicial intervention in arbitration proceedings. The case began from a workplace grievance related to sexual harassment into complex legal battle involving criminal and civil proceedings. The Supreme Court intervened in the matter and referred the matter to an arbitrator to resolve all outstanding disputes. The arbitrator issued an award in favour of Balaswamy, granting Rs. 2 crore as compensation from the respondent company. Later, this award was challenged under Section 34 of the Arbitration and Conciliation Act, 1996. Firstly, the single bench of the Madras High Court granted an additional Rs. 1.5 crore to Balaswamy with previous compensation of Rs. 2 crore, but later this decision was reversed by the division bench of Madras High Court, reducing the amount from Rs. 1.5 crore to Rs. 50,000. This back and forth created a fundamental legal crisis, as for years the courts have been following the strict precedent laid down in The Project Director National Highways. vs M. Hakeem, AIR 2021 SUPREME COURT 3471, which firmly held the court&apos;s power under section 34 of the Arbitration and Conciliation Act, 1986, is strictly supervisory, and not an appellate one. This meant that the judges can only annul or uphold the award, but can&apos;t make any modifications to the award, which leads to a stressful litigation loop. While noticing this core legal question, this matter was referred to the five-judge constitution bench. The landmark judgement was passed on 30 April, 2025, where the Supreme Court acknowledged that the power to set aside an award must logically include the power to modify it in limited circumstances to prevent the miscarriage of justice. This decision ended the decade-long debate by ruling that the courts are not allowed to rewrite the award, but they can and should fix severable errors, and set the interest rate to ensure finality to litigation.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Majority opinion</h5>
                        <p>In its majority opinion, the court adopted a purposive approach, departing from the strict interpretation previously laid down in The Project Director National Highways. vs M. Hakeem, AIR 2021 SUPREME COURT 3471. A key aspect of the reasoning was the application of the legal maxim &quot;omne majus continent in se minus&quot;, which means greater power includes the lesser. The court reasoned that if it possesses the authority to set aside an arbitrator&apos;s award entirely, then it logically follows that it should also have the narrower power to modify or partially correct the award in order to prevent any injustice. This interpretation reflects the shift from a pure literal interpretation of Section 34 towards a more functional understanding that aligns with the broader objective of justice.</p>
                        <p className="mt-4">It is important to note that the court did not endorse unrestricted judicial intervention; instead, it carefully defined the scope of modification, ensuring that such power must be exercised sparingly and only in cases where the error is apparent, severable and does not require reappreciation of evidence. Thus, the long-term impact of this judgment depends on the courts&apos; discretion on how it is cautiously and consistently applied in upcoming cases.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">The four exceptions laid down for modification</h5>
                        <p className="mb-4">The Supreme Court identifies four specific scenarios where such intervention is justified, thereby ensuring the judicial correction remains an exception rather than a rule.</p>
                        <ul className="space-y-4">
                            <li><strong className="text-white">i. Severability:</strong> The principle of severability allows the court to modify an invalid or legally unsustainable portion of an arbitral award without disturbing the entire award, provided that the defect is clearly separable from the entire finding. The approach prevents the entire award from being set aside due to minor flaws.</li>
                            <li><strong className="text-white">ii. Clerical or arithmetical errors:</strong> The courts can intervene to correct any clerical or arithmetical errors, provided that the mistake is patent and does not require the re-evaluation of evidence or legal reasoning.</li>
                            <li><strong className="text-white">iii. Statutory Interest:</strong> The interest is often governed by statutory mandates; judicial correction in this regard ensures conformity with law, while leaving the substantive part of the award intact.</li>
                            <li><strong className="text-white">iv. Article 142 of the Indian Constitution:</strong> Article 142 empowers the Supreme Court of India to pass any order necessary to achieve justice. Therefore, in an exceptional situation, the power of article 142 can be invoked to modify an award in order to secure justice.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IV. CRITICAL LEGAL ANALYSIS</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Enhancing the &quot;Ease of Doing Business&quot;</h5>
                        <p>Under the traditional approach of set aside, if a court finds a portion of the award flawed, the entire award is annulled, leading to a litigation loop. This forces parties into expensive, time-consuming and repetitive arbitration situations. By allowing modification, the judiciary ensures finality to the litigation and restores the trust of companies. For foreign investors and companies, it provides a guarantee that legal errors can be rectified without restarting a decade-long process, which is a significant incentive.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">The dissenting view by Justice K.V. Viswanathan</h5>
                        <p>Justice K.V. Viswanathan gave caution regarding the expanding power under Section 34 of the Arbitration and Conciliation Act, 1996. He emphasised that the said act is based on the UNCITRAL, which adopts a set-aside model. He said that allowing modification will become judicial overreach beyond legislative intent and warned about the erosion of arbitration autonomy and finality. Further, feared about the gradual shift from minimal intervention to active intervention. The controlled and limited power may expand into broad discretionary power. In future, courts may regularly begin to alter awards rather than just correcting them. The future benches may liberally interpret the limited modification, leading to uncertainty and unpredictability in arbitration outcomes.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">V. CONCLUSION</h4>
                        <p>The 2025 constitution bench ruling in Gayatri Balasamy v. ISG Novasoft Technologies Ltd. 2025 SCC OnLine SC 986 marks a transformative moment in Indian arbitration jurisprudence, attempting to reconcile the long-standing tension between the role of judicial intervention and arbitral autonomy. Moving away from the rigid approach of the set aside model to introducing a framework that permits limited judicial modification of the arbitral award. By recognising tailored exception scenarios for modification, such as severability, correction of clerical errors, adjustment of statutory interest and the invocation of Article 142 of the Indian Constitution, the apex court has tried to strike a balance between finality and fairness. This development enhances the credibility of arbitration as an effective dispute resolution mechanism and aligns India&apos;s arbitration framework with the needs of commercial realities.</p>
                        <p className="mt-4">However, there is a dissenting view presented by Justice K.V. Viswanathan that cannot be overlooked. The possibility of limited modification power shifting into broader judicial intervention poses a real risk of blurring the line between supervisory jurisdiction and appellate review. Therefore, the courts must ensure that the power to modify remains an exception, invoked only in cases of severable error, without reappreciating evidence or substituting the tribunal&apos;s reasoning.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Arbitration and Conciliation Act, No. 26 of 1996, India Code (1996)</li>
                            <li>Gayatri Balasamy v. ISG Novasoft Techs. Ltd., 2025 SCC OnLine SC 986 (India)</li>
                            <li>Arbitration Act, No. 10 of 1940, India Code (1940)</li>
                            <li>U.N. Comm&apos;n on Int&apos;l Trade Law, UNCITRAL Model Law on International Commercial Arbitration, U.N. Doc. A/40/17, annex I (1985)</li>
                            <li>Project Dir. Nat&apos;l Highways v. Hakeem, AIR 2021 SC 3471 (India)</li>
                            <li>Power of the Court to Modify the Arbitral Award Under Section 34 of the Arbitration and Conciliation Act, 1996, SAIKRISHNA &amp; ASSOCS.</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Sarika Mallick, University of Calcutta, B.A.LL.B (HONS).</p>
                    </div>
                </div>
            )
        },


        {
            title: "International Law in Climate Change Governance",
            author: "By Nishika Jaiswal",
            abstract: "Climate change is not just outwardly an immaterial problem that the future will face; it is significantly stirring our present lives. This nationwide crisis which is at the global level that presents a major risk to the environment, fundamental human rights, and the economy, hindering individuals irrespective of their geographic location. As the necessity of the situation intensifies, international law has appeared as an essential resource. It gives proper frameworks for association within the nations, demonstrates necessity guidelines for the behaviour of state, and deploys pressure for significant acts.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Evolution of International Climate Law</li>
                            <li>The Major Treaties</li>
                            <li>The Ideas Behind the Laws</li>
                            <li>Courts Take the Lead</li>
                            <li>How It All Runs</li>
                            <li>Where the System Stumbles</li>
                            <li>Core Principles That Keep Things Moving</li>
                            <li>Case Laws and Judicial Developments</li>
                            <li>Global Governance Frameworks</li>
                            <li>Responsibilities of the State</li>
                            <li>Challenges in International Climate Governance</li>
                            <li>Conclusion</li>
                            <li>References</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>Climate change is not just outwardly an immaterial problem that the future will face; it is significantly stirring our present lives. This nationwide crisis which is at the global level that presents a major risk to the environment, fundamental human rights, and the economy, hindering individuals irrespective of their geographic location. As the necessity of the situation intensifies, international law has appeared as an essential resource. It gives proper frameworks for association within the nations, demonstrates necessity guidelines for the behaviour of state, and deploys pressure for significant acts.</p>
                        <p className="mt-4">Let&apos;s examine how international law plays a crucial role in battling with climate change. From landmark treaties which may restructure policies of the globe to judicial rulings which elucidate national responsibilities in direction to the planet and one another, these legal mechanisms are very decisive. Analysis of the given instruments unveals their authority on heartening action and accountability, emphasizing on which nations are actually consummating their commitments.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">EVOLUTION OF INTERNATIONAL CLIMATE LAW</h4>
                        <p>In the initial days of 1970, a hightening awareness evolved in regard to the effect of the actions of human beings on the environment. A pivotal instant in this movement was the Stockholm Conference which was held in the year 1972, where the countries reached to a concurrence that if your actions at home result in environmental degradation somewhere else, you sustain the responsibility for those consequences. This pronounced a profound alteration towards the perspective of the globe on the issues related to the environment.</p>
                        <p className="mt-4">Now, skip ahead to 1987, when the Brundtland Report, titled &quot;Our Common Future,&quot; was introduced. During this time, the concept of &quot;sustainable development&quot; gained significant adhesion. In preference to banishing environmental preservation to a second thought, the report underlined its importance as intrinsic to economic development. Consequently, the major planning initiative was influenced by this notion this notion, prompting the decision-makers to contemplate the well-being of the planet adjacent to economic progress.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE MAJOR TREATIES</h4>
                        <p>In 1992, with the United Nations Framework Convention on Climate Change (UNFCCC) things got real. This treaty brought the nations across the globe together to acknowledge: &quot;Climate change is a worldwide problem, but the nations who are richer and polluted more should accelerate now.&quot;</p>
                        <p className="mt-4">Then, in 1997, Kyoto Protocol was introduced. Here, developed countries said, &quot;Alright, we&apos;ll take on actual, legally binding cuts.&quot; For the very first time, the real legal pressure was faced by the big emitters.</p>
                        <p className="mt-4">Soon afterwards, in 2015, the total game was changed by the Paris Agreement. Abruptly, every nation had to think of its own climate action plan, which was known as a &quot;nationally determined contribution&quot; (NDC). The Paris rules say that plans should reflect each country&apos;s best effort, and everyone&apos;s progress goes on record—so nobody can just talk big and vanish when it&apos;s time to deliver.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE IDEAS BEHIND THE LAWS</h4>
                        <p>Underneath all these treaties, there are a few key ideas driving things. &quot;Common but differentiated responsibilities&quot;—it&apos;s a mouthful, but it just means: the biggest and wealthiest polluters should do more to fix the mess. There&apos;s also the precautionary principle, which is pretty straightforward—if waiting around for more proof is likely to make things worse, then act now.</p>
                        <p className="mt-4">The &quot;polluter pays&quot; rule is just as blunt: if you mess up, you clean up—and pay for it.And throughout, sustainable development keeps showing up, reminding us to build economies that don&apos;t ruin the planet for the people coming after us.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">COURTS TAKE THE LEAD</h4>
                        <p>Lately, courts around the world have started interpreting these rules and holding governments&apos; feet to the fire. Back in 2010 it was made clear by the International Court of Justice (ICJ) that before the launch of a major project, you require an impactful environmental impact assessment. And it was spelled out by its 2025 opinion that the countries must have a legal duty to perform actions upon climate change and protection of the basic rights must be kept in mind.</p>
                        <p className="mt-4">Europe&apos;s Court of Human Rights didn&apos;t pull punches in 2024, either. It ruled that weak climate action can actually violate people&apos;s rights to life and family. It was made official by the International Tribunal for the Law of the Sea that greenhouse gases polluting the ocean are now marine pollution that&apos;s why, the law that applies on the sea will be applied there too. Even the Inter-American Court of Human Rights stressed in the matter, emphasizing that the climate change corresponds to the issues of human rights, and the nations are bound by the law to do something that is significant to adapt and curtail harm.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">HOW IT ALL RUNS</h4>
                        <p>The yearly UNFCCC meetings, COPs really keep things moving, where countries follow up with their promises and discover what&apos;s next. They pay attention to scientific updates taken from the Intergovernmental Panel on Climate Change (IPCC), that helps direct their conversations and legal arguments.</p>
                        <p className="mt-4">Climate action also stays at the heart of the UN Sustainable Development Goals, mainly Goal 13, which emphasizes climate squarely on every nation&apos;s to-do list for an urgent need for action to combat climate change for making the world better.</p>
                        <p className="mt-4">On the books, every country is supposed to slash emissions with solid policies and work together. Their climate plans (NDCs) under Paris are supposed to be clear and trackable—not just &quot;we&apos;ll try our best someday.&quot; Adaptation is front and center for places most at risk, and richer countries are called on to provide funding and share technology (UNFCCC Article 4(3), Paris Article 9). Plus, there are strict transparency rules to make sure everyone&apos;s progress is visible—and nobody can coast.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">WHERE THE SYSTEM STUMBLES</h4>
                        <p>But, honestly, there are serious gaps. There&apos;s no challenging enforcement. Many a times, nations pay attention to the rules because they don&apos;t wish a bad press or to be proclaimed by their associates, not because they&apos;ll need to pay the real penalties. This results in irregular follow-through. There&apos;s also a lot of arguing over what&apos;s truly &quot;fair.&quot; Developed countries are supposed to do more, but what that means in real money and action is always up for debate—and poor countries keep pushing to close the gap.</p>
                        <p className="mt-4">Funding&apos;s another problem. The financial and technology support promised often doesn&apos;t appear, so poorer regions get stuck with fewer options to adapt or go green. And international climate law doesn&apos;t always play well with other global rules—there are clashes with trade, wildlife protection, and even human rights laws. This sometimes ties things in knots and slows everything down.</p>
                        <p className="mt-4">International law gives us the bones for fighting climate change. The treaties, court decisions, and guiding ideas add up to a real structure, but it&apos;s still unfinished business. We need clearer enforcement, real teamwork, and closer ties to other parts of international law.</p>
                        <p className="mt-4">In the end, signing treaties isn&apos;t enough. Countries have to actually step up, help each other, and make climate responsibility part of every decision. This is the only way through which the upcoming generation gets more than just promises, they will get a legitimate chance at a safe, habitable future. Framework Convention on Climate Change, or UNFCCC, was the first big treaty to say, &quot;Look, climate change is a global problem. Let&apos;s figure out what we can each do.&quot; In this, the idea of &quot;common but differentiated responsibilities&quot; was introduced where we all discuss the issues, but countries which damaged the most need to do more cleanup.</p>
                        <p className="mt-4">The Kyoto Protocol turned things up a notch in the year 1997. The actual, legally binding targets for reducing carbon emissions were agreed by the affluent nations. In 2015 the original game-changer was introduced with the Paris Agreement. At present, every country has to show up with its own plan on climate action called a &quot;nationally determined contribution&quot; or NDC—that counterparts with what it can pragmatically do. Article 4 states that the countries must need to put in their best effort. Article 13 states that everyone need to showcase their work, they must not give any fudging of the numbers with no empty promises.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CORE PRINCIPLES THAT KEEP THINGS MOVING</h4>
                        <p>Several fundamental concepts lies at the basement of these agreements which guides the global policies of the environment. One of the fundamental principles is the impression of &quot;common but differentiated responsibilities,&quot; which underscores that affluent nations, having most of the contribution to the degradation of environment, must take on a significant responsibility in handling and rectifying the situation.</p>
                        <p className="mt-4">The precautionary principle is the another most important principle, that advocates for preemptive actions instead of anticipating for complete evidence before taking action. This approach is mainly essential in the matters relating to environment, as delayed acts may exacerbate the problems that are existing.</p>
                        <p className="mt-4">Later on the &quot;polluter pays&quot; principle was introduced, it was a straightforward yet impactful concept which holds those who results in environmental harm which is accountable for the costs that are associated. This principle functions to encourage both businesses and the governments to embrace more responsible and sustainable and practices.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CASE LAWS AND JUDICIAL DEVELOPMENTS</h4>
                        <p>A significant role has been played by the International Court of Justice (ICJ) in establishing climate-related legal precedents. In the judgment of the case Pulp Mills on the River Uruguay (2010), the court asserted that it is the duty of the states to conduct assessments of environmental impact, that are essential for effective climate governance. Moreover, the Advisory Opinion of the ICJ&apos;s on Climate Change in 2025 further clears that states are bound by customary international law to alleviate climate change and protect human rights.</p>
                        <p className="mt-4">Likewise, the European Court of Human Rights (ECtHR) addressed the junction of climate policy and human rights. In the judgment of the case of KlimaSeniorinnen v. Switzerland (2024), the court found that insufficient climate policies that violated Article 2 (the right to life) and Article 8 (the right to private and family life) of the European Convention on Human Rights, that highlights the legal repercussions of ineffective climate action.</p>
                        <p className="mt-4">The International Tribunal for the Law of the Sea (ITLOS) contributed to the discourse of climate governance with its advisory opinion in 2024, which held that states have obligations under the United Nations Convention on the Law of the Sea (UNCLOS) to hinder marine pollution stemming from greenhouse gas emissions. This decision prolonged the climate obligations to embrace ocean governance, emphasizing the interrelatedness of environmental protection in various domains.</p>
                        <p className="mt-4">Finally, the Inter-American Court of Human Rights (IACtHR) an advisory opinion in 2025 was issued that linked the impacts of climate change to violations of fundamental human rights. This judgment fortified the duty of states to implement effective mitigation and adaptation measures, further also establishing the framework of law for protecting human rights in the context of climate change.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">GLOBAL GOVERNANCE FRAMEWORKS</h4>
                        <p>The core conversation and decision-making in regard to climate action that take place during the yearly meetings of the United Nations Framework Convention on Climate Change (UNFCCC), popularly known as the Conference of the Parties (COP). At these assemblage, delegates from nations across the world convoke to review the progress, leisurely on future strategies, and state new objectives related to climate. The foundation for these discussions is highly influenced by the findings and research of the Intergovernmental Panel on Climate Change (IPCC), that gives the scientific base for the agenda.</p>
                        <p className="mt-4">Furthermore, the considerations of climate change are now elaborately woven into the framework that is overarching of the United Nations Sustainable Development Goals, particularly in Goal 13, which focuses on the urgent need of taking substantial climate action.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">RESPONSIBILITIES OF THE STATE</h4>
                        <p>In an optimal situation, nations need not to only curb their own greenhouse gas emissions but also work together on a global scale. Their Nationally Determined Contributions (NDCs), that contour their strategies of climate as part of the Paris Agreement, are predestined to be clear, accountable and measurable.</p>
                        <p className="mt-4">A significant emphasis on adaptation is placed by the Paris Agreement, mainly for the countries that are mostly at risk from the impacts of climate. Moreover, there exists an expectation that affluent nations may give significant financial support and also share technology with underdeveloped nations, making sure that these nations are not abandoned in the fight in contrary to climate change. Additionally, all the nations are foreseen to produce honest and transparent reports upon their progress, where no indefinite statements or baffling updates are acceptable.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CHALLENGES IN INTERNATIONAL CLIMATE GOVERNANCE</h4>
                        <p>The situations surrounding the international climate agreements are a bit intricate. There are few stringent consequences, unlike various legal frameworks for nations that fail to maintain their obligations; there are no substantial penalties or removal from agreements. Instead, commitment primarily depends on public pressure and the desire for transparency among the countries. This approach frequently leads to unpredictable consequences.</p>
                        <p className="mt-4">Another persistent issue is fairness. There is ongoing debate regarding which countries should contribute more to climate efforts and what constitutes &quot;equitable&quot; responsibilities. This is especially contentious as developing nations strive to improve their economic conditions while acknowledging their limited resources. Another significant barrier is financial assistance. Affluent nations often pledge technology transfers and financial aid, but these promises usually don&apos;t materialize as intended. As a consequence of, less affluent nations find it difficult to cope up with the repercussions of transition and climate change on sustainable economies.</p>
                        <p className="mt-4">Moreover, the regulations of international climate don&apos;t always coordinate smoothly with other frameworks across the globe, which includes those related to trade, human rights, and environmental protection. Balancing these numerous commitments can obstruct progress and can also create a sense of disconnection between distinctive global priorities.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>A pivotal role is played by the International law in structuring the frameworks which are crucial for handling the issues that focused on climate change. However, the ruling of the courts, treaties, and core principles prepare a framework that we can utilize, but it still need work. Stronger enforcement, better links, and deeper cooperation with various other rules across the globe are the key.</p>
                        <p className="mt-4">To modernize or advance this effort, it is most important to reinforce compliance mechanisms which ensure that the countries cohere to their commitments. Moreover, if we require a safer climate and a future we can genuinely anticipate, countries are required to do more than signing the papers. They have to see through, support each other, and prepare the durability part of each and every decision. The upcoming generation justifies more than broken promises, they also deserve original, and long-lasting results. Such amalgamation may create collaborative advantages which enhance both economic growth and environmental protection, aiding to save a healthier planet for the upcoming generations.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>The 1972 Stockholm Conference marked a shift in global perspective by establishing the principle that states are responsible for environmental degradation caused by their domestic activities when those consequences affect other regions.</li>
                            <li>The 1987 Brundtland Report, &quot;Our Common Future,&quot; popularized the concept of sustainable development, moving environmental preservation from a secondary concern to an intrinsic part of economic planning.</li>
                            <li>The UNFCCC (1992) was the first major international treaty to acknowledge climate change as a global problem and established that wealthier, high-polluting nations bear more responsibility for taking action.</li>
                            <li>The Kyoto Protocol (1997) introduced the first legally binding targets for reducing carbon emissions, specifically pressuring affluent, high-emitting nations.</li>
                            <li>Under the Paris Agreement (2015), every nation must submit an NDC that reflects its best efforts to address climate change.</li>
                            <li>Article 13 of the Paris Agreement establishes transparency rules to ensure nations provide honest reports on their progress rather than making empty promises.</li>
                            <li>This principle underscores that affluent nations, having contributed the most to environmental degradation, have a significant responsibility to lead the cleanup and rectification efforts.</li>
                            <li>The ICJ&apos;s 2025 Advisory Opinion clarified that states are bound by customary international law to alleviate climate change and protect fundamental human rights.</li>
                            <li>The Conference of the Parties (COP) serves as the primary forum where nations review progress, discuss future strategies, and establish new climate objectives.</li>
                            <li>The IPCC provides the scientific research that forms the foundation for legal arguments and the global climate agenda.</li>
                            <li>Under the Paris Agreement, Nationally Determined Contributions (NDCs) must be contour-clear, accountable, and measurable strategies.</li>
                            <li>These provisions establish that affluent nations are expected to provide financial support and technology transfers to ensure underdeveloped nations can participate in the climate fight.</li>
                            <li>Article 13 of the Paris Agreement mandates honest and transparent reporting to ensure nations do not provide &quot;fudged&quot; numbers or empty promises.</li>
                            <li>The &quot;polluter pays&quot; principle is a straightforward mechanism that ensures those responsible for environmental damage are financially accountable for the costs of remediation, thereby incentivizing more sustainable practices by both governments and private entities.</li>
                            <li>Pulp Mills on the River Uruguay (Argentina v. Uruguay), Judgment, I.C.J. Reports 2010, p. 14kimas</li>
                            <li>Verein KlimaSeniorinnen Schweiz and Others v. Switzerland (Application No. 53600/20)</li>
                            <li>The IACtHR&apos;s 2025 opinion reinforced the legal framework connecting climate change to human rights, establishing that nations are legally bound to implement significant mitigation and adaptation measures to curtail harm.</li>
                            <li>The Conference of the Parties (COP) serves as the primary annual forum where nations gather to review progress, discuss future strategies, and establish new global climate objectives.</li>
                            <li>Adaptation is a priority under the Paris Agreement, ensuring that places most vulnerable to climate impacts receive necessary focus and resources.</li>
                            <li>The debate over &quot;equitable&quot; responsibilities remains a core challenge, as nations disagree on how to distribute the burden of climate action fairly between developed and developing economies.</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Nishika Jaiswal, National Law University Tripura, B.A. LLB. (Hons.).</p>
                    </div>
                </div>
            )
        },

        {
            title: "Preventive Detention and the Constitution: Protecting Security without Sacrificing Freedom",
            author: "By Sanna Vakil Shaikh",
            abstract: "The term \"preventive\" means taking steps in advance to stop an event before it actually occurs, while \"detention\" refers to the act of keeping a person in custody or confinement. When these two words are combined, the expression \"preventive detention\" signifies a situation where an individual is detained not for an offence already committed, but to prevent the possibility of a future act that may threaten public order or national security. In other words, it is a precautionary measure adopted by the State on the basis of suspicion, past conduct, or credible information indicating that the person may engage in harmful activities.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Main Body</li>
                            <li>Analysis</li>
                            <li>Conclusion</li>
                            <li>References</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>The term &quot;preventive&quot; means taking steps in advance to stop an event before it actually occurs, while &quot;detention&quot; refers to the act of keeping a person in custody or confinement. When these two words are combined, the expression &quot;preventive detention&quot; signifies a situation where an individual is detained not for an offence already committed, but to prevent the possibility of a future act that may threaten public order or national security. In other words, it is a precautionary measure adopted by the State on the basis of suspicion, past conduct, or credible information indicating that the person may engage in harmful activities.</p>
                        <p className="mt-4">According to the explanation found in Encyclopaedia Britannica, preventive detention involves keeping a person in custody even before trial, mainly because authorities believe that releasing such a person may be unsafe for society. It may also be applied where the investigating agency considers it necessary to keep the accused confined until the investigation is completed. Such detention laws are often justified on the ground that maintaining peace, stability, and public safety is essential for society to function smoothly and for citizens to enjoy their rights freely. However, the idea of preventive detention raises an important constitutional question—how can a democratic State maintain public order while also safeguarding individual liberty? The balance between social security and personal freedom is not constant; it keeps evolving with changing political conditions, social demands, and new threats. Throughout history, one of the most serious abuses of power has been the arbitrary arrest and detention of individuals without reasonable justification. Therefore, the rule of law requires that no person should be deprived of liberty without valid legal authority and procedural fairness.</p>
                        <p className="mt-4">Every State has a responsibility to protect its citizens from crime and threats to public peace. At the same time, it is equally necessary to ensure that State power is not misused to suppress liberty. In India, this delicate balance is maintained through the combined role of the Legislature, Executive, and Judiciary, where the Judiciary plays a crucial role as the guardian of fundamental rights.</p>
                        <p className="mt-4">The Indian Constitution, particularly Part III, guarantees Fundamental Rights which form the foundation of individual freedom and human dignity. Among these, Article 21 and Article 22 provide significant safeguards relating to life and personal liberty. Article 21 ensures that no person shall be deprived of life or personal liberty except according to the procedure established by law, while Article 22 offers specific protections against arbitrary arrest and detention. Together, these provisions serve as the constitutional framework that regulates the State&apos;s power to detain individuals.</p>
                        <p className="mt-4">The history of preventive detention in India can largely be traced back to colonial rule, especially during the period of the First and Second World Wars. During this time, the British government introduced several wartime laws that allowed detention without trial, such as the Defence of the Realm Consolidation Act, 1914, which empowered authorities to restrict and detain persons suspected of being hostile or dangerous. These colonial practices influenced the development of preventive detention laws even after independence.</p>
                        <p className="mt-4">The inclusion of Fundamental Rights in the Constitution was deeply influenced by India&apos;s struggle against British oppression. In 1947, a sub-committee on Fundamental Rights proposed safeguards to prevent unjust deprivation of liberty. Their draft highlighted that no person should be deprived of life, liberty, or property without lawful procedure and that individuals should not be detained for prolonged periods without charges. The framers also debated the adoption of the American concept of &quot;due process of law&quot; versus the phrase &quot;procedure established by law,&quot; which later became an important constitutional issue in interpreting Article 21.</p>
                        <p className="mt-4">Thus, preventive detention remains a controversial but significant legal concept, where the need for national security and public order must be carefully balanced with constitutional safeguards protecting personal liberty.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">MAIN BODY</h4>
                        <p>The practice of detention in India can be traced back to historical and political events even before the modern legal system developed. One of the earliest examples often cited is the confinement of Mughal Emperor Shah Jahan, who was detained by his son Aurangzeb. Similarly, Bahadur Shah Zafar, the last Mughal Emperor, was detained by the British after the Revolt of 1857. During the freedom struggle, detention became a common tool to suppress political resistance, as seen in the imprisonment of Mahatma Gandhi and several leaders during the Quit India Movement of 1942.</p>
                        <p className="mt-4">During the Second World War, the British enacted the Emergency Powers (Defence) Act, 1939, which empowered authorities to detain individuals suspected of being threats to public safety or national defence. Under Regulation 18-B, detention could occur without trial, and detainees were restricted from effectively seeking remedies such as habeas corpus. These colonial laws strongly influenced the later development of preventive detention practices in India.</p>
                        <p className="mt-4">Preventive detention is considered a controversial legal mechanism because it allows the State to restrict personal liberty even without a person committing an actual offence. While it may be justified as a preventive measure to protect national security and public order, it also carries the risk of misuse and arbitrary detention. Therefore, the Constitution attempts to balance the needs of society with the protection of individual rights.</p>
                        <p className="mt-4">Under the Indian Constitution, legislative power relating to preventive detention is not unlimited. It is controlled by the Fundamental Rights in Part III, especially Article 21 and Article 22. Article 22 provides key safeguards. It ensures that a person who is arrested must be informed of the grounds of arrest and must be allowed to consult a lawyer of their choice. It also requires that an arrested person must be produced before a magistrate within 24 hours, and no person can be detained beyond that period without judicial authority.</p>
                        <p className="mt-4">However, preventive detention is treated differently from ordinary arrest. The Constitution permits preventive detention but places strict procedural conditions. Article 22(4) provides that no person can be detained for more than three months unless an Advisory Board gives sufficient justification for extended detention. This Advisory Board must consist of persons who are qualified to be High Court judges, ensuring a level of judicial scrutiny in detention matters.</p>
                        <p className="mt-4">Further, Article 22(5) requires that the detenue must be informed of the grounds of detention as soon as possible and must be given an opportunity to make a representation against the detention order. This right is essential because it provides the detenue a chance to challenge the detention and seek release. At the same time, Article 22(6) allows the government to withhold certain facts if disclosure is considered against public interest or national security.</p>
                        <p className="mt-4">Article 22(7) grants Parliament the authority to prescribe circumstances where a person may be detained for longer periods and to lay down the procedure to be followed by the Advisory Board. This provision shows that preventive detention is constitutionally permitted, but only under a framework of legal safeguards.</p>
                        <p className="mt-4">Indian courts have played a crucial role in ensuring that preventive detention does not become arbitrary. In State of Bombay v. Atmaram Shridhar Vaidya, the Supreme Court dealt with the issue of communication of detention grounds. The Court emphasized that the grounds of detention must be communicated properly and clearly, because without this, the detenue cannot make an effective representation. Courts have consistently held that the right to representation becomes meaningless if reasons are vague or incomplete.</p>
                        <p className="mt-4">Similarly, in State of Punjab v. Jagdev Singh Talwandi, the Court held that the detenue is not entitled to know the confidential sources of information used by the government. However, the detenue must still be given enough material and explanation to understand the grounds of detention and to challenge them effectively.</p>
                        <p className="mt-4">Another important principle applied in preventive detention cases is the doctrine of severability, recognized under laws like the National Security Act (NSA), 1980 and COFEPOSA, 1974. This doctrine means that if a detention order is based on multiple grounds and one ground is invalid, the entire detention order may still survive if the remaining grounds are independent and valid.</p>
                        <p className="mt-4">Judicial review remains an important constitutional safeguard against misuse of preventive detention. Although courts generally do not question the subjective satisfaction of the detaining authority, they do examine whether constitutional requirements have been followed. The courts also ensure that the detention order is not mala fide, arbitrary, or based on irrelevant grounds.</p>
                        <p className="mt-4">The importance of judicial review was strengthened after the landmark case of Kesavananda Bharati v. State of Kerala (1973), where the Supreme Court held that judicial review forms part of the basic structure of the Constitution. Therefore, even preventive detention laws cannot escape constitutional scrutiny. The Supreme Court and High Courts protect personal liberty through writ jurisdiction under Article 32 and Article 226, making the judiciary a key defender of fundamental rights.</p>
                        <p className="mt-4">Thus, preventive detention in India operates within a constitutional framework where national security and public order are balanced with safeguards ensuring that liberty is not sacrificed unfairly.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">ANALYSIS</h4>
                        <p>This research article attempts to present a broad understanding of preventive detention in India by examining its historical development, legal evolution, and judicial interpretation. It highlights how preventive detention has remained a sensitive subject because it directly affects the relationship between the authority of the State and the liberty of individuals. The study emphasizes that preventive detention essentially reflects a conflict between two competing interests: the individual&apos;s right to personal freedom and society&apos;s need for security and public order. Since the concept is closely connected with Articles 21 and 22 of the Constitution, the article also explains how constitutional provisions regulate and limit such detention.</p>
                        <p className="mt-4">Although the Constitution permits preventive detention, its use is not unrestricted. The safeguards provided under Article 22, such as informing the detenue about the grounds of detention, providing an opportunity to make a representation, and review by an Advisory Board, act as important checks on executive power. Judicial decisions like State of Bombay v. Atmaram Shridhar Vaidya and State of Punjab v. Jagdev Singh Talwandi demonstrate how courts have interpreted these safeguards to ensure fairness. At the same time, the judiciary has also recognized that certain information, such as confidential sources, may be withheld in the interest of national security.</p>
                        <p className="mt-4">However, the research also points out a major weakness in the preventive detention framework: the heavy dependence on the subjective satisfaction of the detaining authority. This limits the scope of judicial scrutiny and reduces the level of protection available to personal liberty. As a result, even though judicial review exists, it often becomes difficult for courts to interfere unless there is a clear violation of constitutional procedure or mala fide intention.</p>
                        <p className="mt-4">The overall conclusion drawn in this paper is that preventive detention laws may be necessary for maintaining public safety and national security, but they also carry a serious risk of misuse. Therefore, stronger safeguards are required, including greater transparency in detention procedures, more effective judicial supervision, and regular legislative review of detention laws. Such reforms are essential to ensure that preventive detention is used only as an exceptional measure and not as a tool of arbitrary state power.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>The concept of detention has existed since ancient times, though its meaning and justification have continuously evolved depending upon the political, social, and cultural conditions of different societies. From early forms of forced confinement such as slavery to modern legal detention, the restriction of liberty has always remained a powerful tool in the hands of those who govern. With the emergence of international human rights standards after the World Wars, the world began to recognize that arbitrary arrest and detention are serious violations of human dignity. As a result, global instruments under the United Nations and various international covenants have strongly emphasized the protection of individuals against torture, unlawful imprisonment, and misuse of state authority.</p>
                        <p className="mt-4">Preventive detention, however, occupies a unique and controversial position in law. It is often misunderstood as punitive detention, but in reality, its purpose is preventive and regulatory rather than punishive. It does not punish a person for a past crime, but restricts liberty on the assumption that a future threat may arise. This makes preventive detention fundamentally different from ordinary criminal law, as it operates on suspicion and anticipation rather than conviction and proof.</p>
                        <p className="mt-4">In a democratic welfare State like India, the government carries the dual responsibility of maintaining public order and safeguarding individual liberty. The Constitution attempts to maintain this balance by distributing powers among the Legislature, Executive, and Judiciary, while also ensuring that personal liberty is protected through constitutional safeguards. Events such as the Emergency period in India demonstrated how preventive detention laws can be misused as instruments of political suppression, making it clear that such extraordinary powers must never be treated as routine administrative measures.</p>
                        <p className="mt-4">Although preventive detention may sometimes be necessary in exceptional situations where ordinary laws fail to protect public peace, its use must always remain limited, reasonable, and carefully supervised. The judiciary has played an essential role in interpreting preventive detention laws and has repeatedly emphasized the need to balance national security with constitutional morality. Yet, despite legal safeguards, there are still frequent instances where executive authorities overstep their limits.</p>
                        <p className="mt-4">Therefore, it can be concluded that preventive detention is a necessary but dangerous power. It must be exercised only in rare circumstances, with strict adherence to constitutional protections, transparency, and accountability. Ultimately, the true strength of a democracy lies not in how many people it can detain, but in how effectively it can protect both security and freedom without compromising the rule of law.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                            <li>Wikipedia contributors. (n.d.). Defence Regulation 18B. https://en.wikipedia.org/wiki/Defence_Regulation_18B</li>
                            <li>Rao, B. S. (1968). The framing of India&apos;s Constitution: A study. (p. 175).</li>
                            <li>Maneka Gandhi v. Union of India, AIR 1978 SC 597 (India).</li>
                            <li>R.C. Cooper v. Union of India, AIR 1957 SC 150 (India).</li>
                            <li>A.K. Roy v. Union of India, AIR 1984 SC 444 (India).</li>
                            <li>India Const. art. 13.</li>
                            <li>Britannica. (n.d.). Preventive detention. Encyclopaedia Britannica. http://www.britanica.com/EBchecked/topic/476533/preventivedetention</li>
                            <li>Dhar, P. (1986). Preventive detention under Indian Constitution. (p. 19).</li>
                        </ul>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Sanna Vakil Shaikh, A.K.K NEW LAW ACADEMY.</p>
                    </div>
                </div>
            )
        },

        {
            title: "From Public Interest to Publicity: Rethinking PIL in India",
            author: "By Adv. Akshay Devdatta Malvankar",
            abstract: "Public Interest Litigation (PIL) has significantly transformed the judicial system to create a window of opportunity for the poor and needy to get justice in the country. However, it has gradually become a subject to misuse for personal interests. The rights of the marginalized communities are increasingly means through which pressure is exerted on the innocent. Courts have criticized such petitions as \"publicity interest litigation, frivolous litigation & Luxury Litigation\". The Judiciary has over five crore pending cases and this number is been increasing with time. However, justice remains largely formalistic in the form of Law but substantive justice often appears limited to the common citizens with limited access and limited financial and institutional capacity to invoke Article 32 remedies. Reach directly to the courts for seeking justice seems a herculean task. Even though many judicial seats are vacant and lots of eligible legal professionals are available the delays in judicial appointments is a issue that warrants examination to regarding transparency in the collegium system.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Research Problems</li>
                            <li>Research Objectives</li>
                            <li>Introduction</li>
                            <li>Rise of Publicity Interest Litigation</li>
                            <li>Misuse of PIL</li>
                            <li>Judicial Response and Case Laws</li>
                            <li>Conclusion</li>
                            <li>References</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">RESEARCH PROBLEMS</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Whether misuse of PIL undermines its constitutional purpose</li>
                            <li>Whether PIL has deviated from protecting marginalized groups</li>
                            <li>How courts can balance access to justice with preventing misuse</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">RESEARCH OBJECTIVES</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>To examine the extent to which misuse of PIL affects its constitutional purpose</li>
                            <li>To analyze whether PIL continues to serve marginalized groups effectively</li>
                            <li>To explore judicial approaches in balancing access to justice with prevention of misuse</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>The &quot;Father of Public Interest Litigation (PIL)&quot; in India is Justice P. N. Bhagwati he got the concept of Public Interest Litigation (PIL) which was first recognized in the case Hussainara Khatoon v. State of Bihar (1979) for the miserable condition of undertrial prisoners in Bihar who were detained for period longer than the maximum punishment. It was a violation of there fundamental rights and here the need for speedy trial was recognised.</p>
                        <p className="mt-4">The concept of (PIL) was to help the poor, marginalized, and disadvantaged sections of society who cannot to approach courts due to poverty, illiteracy, or lack of awareness.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">RISE OF PUBLICITY INTEREST LITIGATION</h4>
                        <p>Despite its noble origins, PIL has increasingly been misused.</p>
                        <p className="mt-4">Courts have coined several terms to describe this phenomenon:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>&quot;Publicity Interest Litigation&quot;</strong> – petitions aimed at media attention</li>
                            <li><strong>&quot;Cheap Publicity&quot;</strong> – cases lacking seriousness</li>
                            <li><strong>&quot;Personal Interest Litigation&quot;</strong> – driven by private motives</li>
                            <li><strong>&quot;Mushroom Growth&quot;</strong> – rapid increase in frivolous petitions</li>
                            <li><strong>&quot;Frivolous Litigation&quot;</strong> – cases without legal merit</li>
                        </ul>
                        <p className="mt-4">This shift reflects a troubling trend where PIL is used for:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Political targeting</li>
                            <li>Business rivalry</li>
                            <li>Personal vendetta</li>
                            <li>Social media visibility</li>
                        </ul>
                        <p className="mt-4">Such misuse transforms PIL from a tool of justice into a tool of visibility.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">MISUSE OF PIL</h4>
                        <p>The introduction of PIL was to provide an access to justice for the poor who are not able to. However, Since the introduction of PIL it has become a tool for the rich to have an easy access to reach to the top court of the country and cause harassment to the victim. PIL is filed in the form of writ petition under Article 32 to the Supreme Court or Article 226 to the High Courts to enforce fundamental rights.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Five Types of Writs:</h5>
                        <ul className="list-decimal pl-5 space-y-2">
                            <li><strong>Habeas Corpus</strong> - To produce the body</li>
                            <li><strong>Mandamus</strong> - We Command</li>
                            <li><strong>Prohibition</strong> - To forbid</li>
                            <li><strong>Certiorari</strong> - To be certified/informed</li>
                            <li><strong>Quo-Warranto</strong> - By what authority</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Political Targeting – to attack opponents</h5>
                        <p>To get the political milage and favour form the voters in election some political parties deliberately file PIL&apos;s there is no denial of the western influence in these cases as the funds are collected from the west and deposited in the fund of the political party to influence the elections in India. USA has been doing this for a long time with many countries latest example is Bangladesh. The debt trap of China is not new and its influence in the Indian subcontinent to increase pressure on India has caused tremendous problems for the nation and the security forces to deal. In such cases if these PIL&apos;s are filled it can create huge challenge for the Judicial machinery of the nation which has already more than five crore cases pending and these cases are increasing day by day. For the Judges to do there work and delivery justice to the needed such Frivolous cases should be curbed.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Business Rivalry – to harm competitors</h5>
                        <p>India business has found themselves booming in the recent geopolitical turmoil. Especial the trade with Russia and other friendly countries have increased however this has become a battle ground for mergers and acquisition. The governments push for providing funding the new startups has caused problems as most of them do not work well and those who do work are acquired but foreign Companies which leads to our Data being transferred to there servers and if not transferred still they have an access to our data which they may use to do harm. India has been a victim to this and the exam are the foreign Invaders on of whom was the East India Company. When such PILs are filled instead of using the Civil route or the means of Arbitration, conciliation &amp; mediation it becomes a challenge to the Courts. Especially when there is the arbitration and conciliation act 1996 is already in place then such companies should first go to the NCLT (National Company Law Tribunal) to get their dispute cleared. However, they may reach and do PIL either due to poor legal Advice by lawyer of due to misrepresentation of facts. The apex courts do not entertain such matters as they are more focused on the Law.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Personal Vendetta – for private revenge</h5>
                        <p>Most PIL&apos;s are personal vendetta and revenge motivated by religion and create unnecessary legal battels the court has to fight to resolve. It may be put in the pretext of environment or society however when the courts diagnose this the are penalised.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Publicity Interest Litigation – for fame/social media visibility</h5>
                        <p>The greater angle is the fame the advocate gets through this case. A classic example is M.C. Metha who has filled many PIL&apos;s and is famous for being an environmentalist. But this has become a means to get fame for the person winning this case.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">JUDICIAL RESPONSE AND CASE LAWS</h4>
                        <p>Several steps have been taken by the Supreme Court of India to prevent the misuse of PIL. Like imposing costs and penalties that the petitioners have to pay for filing false and unnecessary PIL&apos;s. The courts also check whether the case was filed in good faith with genuine intentions or not. This includes not filing for personal, political &amp; publicity reason. In case of frivolous PILs the courts dismiss it with the reason of being baseless, unnecessary or lack of real public interest.</p>

                        <ul className="space-y-6 mt-6">
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">Janata Dal v. H.S. Chowdhary</strong>
                                <p>This case was filled in the pretext of the Bofors scandal where the allegations of corruption were made. Supreme court refused to entertain such PIL&apos;s stating that it was politically motivated as the third party attempted to intervene through a PIL seeking investigation and prosecution.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">Subhash Kumar v. State of Bihar</strong>
                                <p>The petitioner had filled the PIL stating that the West Bokaro Collieries and Tata Iron and Steel Company (TISCO) had polluted Bokaro River. The had discharging slurry and sludge in the river body and made it hazardous for drinking. However the courts found it to be filled for private interest rather then genuine good faith and dismissed the case.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">Ashok Kumar Pandey v. State of West Bengal</strong>
                                <p>Here the petitioner filled the writ under Article 32 to convert the death sentence of Dhananjay Chatterjee who was convicted of rape and murder. The demand was to convert it to life imprisonment. The court dismissed it with cost when found it to be busybody.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">Dattaraj Nathuji Thaware v. State of Maharashtra</strong>
                                <p>The PIL was filled for certain concerns regarding the administrative actions but was found politically motivated. The court held that PIL should not be a tool or weapon for harassment or vendetta.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>The Supreme court of India is not trying to ban Public Interest Litigation but trying to curb its misuse. There is definitely huge burden on the judiciary and it is impossible to regulate and identify such cases. Because of this the true victims and those who need justice have to wait and there hearing is delayed. This raises question on the judiciary weather the judiciary is in the direction to resolved the cases or keep the cases pending. Also, the question of judicial accountability is to be asked that weather such cases are rejected due to political pressure and stating that it is a publicity interest litigation to make some politically party in the favour of the judges since they may be having some vested interest into these matters. If such is thecase then there should be proper investigation to be done. Also, there is the growing need of judges which has not been satisfied and many seated of the judges are vacant hence the judiciary may often feel overwhelmed. Can this be the reason for dismissing the PIL&apos;s is a dawning question to be asked.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>S P Sathe, Judicial Activism in India (2nd edn, Oxford University Press 2002).</li>
                            <li>Hussainara Khatoon v State of Bihar AIR 1979 SC 1369.</li>
                            <li>M P Jain, Indian Constitutional Law (8th edn, LexisNexis 2018).</li>
                            <li>Upendra Baxi, &apos;Taking Suffering Seriously: Social Action Litigation in the Supreme Court of India&apos; (1985) 4 Third World Legal Studies 107.</li>
                            <li>H M Seervai, Constitutional Law of India (4th edn, Universal Law Publishing 1996).</li>
                            <li>Constitution of India 1950, art 226.</li>
                            <li>S P Sathe, &apos;Judicial Activism: The Indian Experience&apos; (2001) 6 Washington University Journal of Law and Policy 29.</li>
                            <li>National Judicial Data Grid, &apos;Pending Cases Dashboard&apos; https://njdg.ecourts.gov.in accessed 14 April 2026.</li>
                            <li>Law Commission of India, Arrears and Backlog: Creating Additional Judicial (Wo)manpower (Law Com No 245, 2014).</li>
                            <li>Arbitration and Conciliation Act 1996.</li>
                            <li>Companies Act 2013.</li>
                            <li>M C Mehta v Union of India (1987) 1 SCC 395.</li>
                            <li>Janata Dal v H S Chowdhary (1992) 4 SCC 305.</li>
                            <li>Subhash Kumar v State of Bihar 1991 Supp (2) SCC 598.</li>
                            <li>Ashok Kumar Pandey v State of West Bengal (2004) 3 SCC 349.</li>
                            <li>Constitution of India 1950, art 32.</li>
                            <li>Dattaraj Nathuji Thaware v State of Maharashtra (2005) 1 SCC 590.</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Adv. Akshay Devdatta Malvankar, University of Mumbai.</p>
                    </div>
                </div>
            )
        },


        {
            title: "Algorithmic Justice on Trial: Should AI-Generated Evidence be Admissible in Indian Courts",
            author: "By Susmita Chatterjee",
            abstract: "Artificial Intelligence (AI) are rapid use in investigations as well in the court decisions has raised some serious legal and ethical questions. One major issue is whether evidence generated by AI should be accepted in Indian courts. While AI tools can improve and make things in speedy, more accuracy, and fairness, but at a same time this also bring new problems such as, many AI systems work like a “black box,” so the way decisions are made by them is difficult to understand. This lack of transparency makes it difficult for judges as well lawyers to fully trust the results. In this article examines the current laws on evidence in India, the challenges of using AI-generated evidence are discussed, and careful but forward-looking approach is supported. It suggests that a proper regulatory system should be created to ensure the use of AI in Courts is fair, reliable, as well follows Constitutional principles.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Legal Framework in India</li>
                            <li>Challenges of Accepting AI-Generated Evidence in the Court</li>
                            <li>Comparative Perspective</li>
                            <li>Safeguards and Regulatory Mechanisms for AI-Generated Evidence</li>
                            <li>Analysis</li>
                            <li>Conclusion</li>
                            <li>References</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>Artificial Intelligence (AI) is transforming many sectors, including the legal system. In India, people are use AI tools for things such as predictive policing, facial recognition, forensic analysis, and legal research and so on. As results are produced by these technologies, and they may be used as evidence in judicial proceedings.</p>
                        <p className="mt-4">The increasing use of AI in legal processes raises serious concerns about its impact on justice delivery. Evidence plays an important role in deciding the outcomes of cases, and the credibility of such evidence are directly impact how fair a trial is. Therefore, the admissibility of AI-generated evidence should be accepted is not just a technical issue, but also as a constitutional matter, especially because to the right to a fair trial under Article 21 of the Constitution of India.</p>
                        <p className="mt-4">Even though the use of AI is increasing more and more rapidly, Indian law does not clearly state whether AI-generated evidence can be accepted. Existing laws deal with electronic records, but they generally assume that humans create them.</p>
                        <p className="mt-4">Therefore, the purpose of this article seeks to examine whether AI- generated evidence should be admissible in Indian Court. It studies the current legal system, highlight the key challenges, and examines the arguments for and against admissibility of evidence.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">LEGAL FRAMEWORK IN INDIA</h4>
                        <p>The admissibility of evidence in India is governed by the Indian Evidence Act, 1872. The &quot;Evidence&quot; is defined under Section 3 to include electronic records, while under Section 65B laid down conditions for their admissibility. However, AI-generated evidence, particularly where minimal or no human intervention exists, is not explicitly addressed by these provisions.</p>
                        <p className="mt-4">The Hon&apos;ble Supreme Court has state that how electronic evidence can be accepted in Indian Courts through several important cases. For example, in the case of Anvar P.V. v. P.K. Basheer (2014), the Hon&apos;ble Court said it clear that electronic evidence must need an authorized certificate, as well as it is mandatory under Section 65B of the Indian Evidence Act, 1872. Therefore, the certificate serves as proof that the electronic record is true and has not been tampered with. The Hon&apos;ble Court reaffirmed this requirement was confirmed again in the case of Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020).</p>
                        <p className="mt-4">However, these decisions only focus on electronic records that are created nor controlled by humans, and they do not address evidence which is generated by AI systems.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CHALLENGES OF ACCEPTING AI-GENERATED EVIDENCE IN THE COURT</h4>
                        <ul className="space-y-4">
                            <li><strong className="text-white">I. Lack of Transparency (Black Box Problem):</strong> AI systems often use highly very complicated algorithms that are difficult to understand. This &quot;black box&quot; nature makes it challenging for Courts to judge the reliability of AI-generated evidence. When the way a decision is made and cannot be clearly understood nor explained, thus, it becomes difficult for judges as well lawyers to trust the results.</li>
                            <li><strong className="text-white">II. Algorithmic Bias:</strong> AI systems learn from data that may have hidden biases. Because of this, they can sometimes give an unfair nor discriminatory result, its often effect on marginalized communities the most.</li>
                            <li><strong className="text-white">III. Absence of Accountability:</strong> When AI systems give incorrect results, it can be very difficult to decide that who is responsible behind it. It is often unclear whether the developers who created the AI, the users who operate it, or the institutions that rely on it should be held accountable for this.</li>
                            <li><strong className="text-white">IV. Violation of Fair Trial Rights:</strong> If an accused person unable to understand nor challenge of AI-generated evidence, thus, it may violate the basic principles of natural justice and this could also affect the right to a fair trial, which protected under Article 21 of the Constitution of India.</li>
                            <li><strong className="text-white">V. Reliability and Standardization Issues:</strong> at the present time, India does not have any standard rules for checking or validating AI tools used in legal proceedings. Because of this, there are raises concerns about how accurate these tools are and whether the evidence they produce can be trusted in court.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">COMPARATIVE PERSPECTIVE</h4>
                        <p>In the United States, Courts use the Daubert standard to cheek whether evidence is scientifically reliable or not. They consider things based on the factors such as peer review, testing, and error rates. Similarly, in the European Union has proposed the AI Act, which classifies certain AI systems as &quot;high-risk&quot; and put them under strict rules and supervision.</p>
                        <p className="mt-4">In India, however, there are no clear laws yet have a comprehensive legal framework to regulate how this AI is used in judicial processes.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">SAFEGUARDS AND REGULATORY MECHANISMS FOR AI-GENERATED EVIDENCE</h4>
                        <p>After rapidly increasing of Artificial Intelligence in the legal system makes it important to establish clear rules and protection which are needed for how to be used AI-generated evidence in the Indian Courts. Without proper laws, AI can create major problems such as bias, lack of transparency, and unreliable results, which could cause more harm than potential benefits. Therefore, a structured legal framework is most important to ensure that AI is used responsibly, carefully and in a fair way which alignment with constitutional principles.</p>
                        <p className="mt-4">Firstly, there should be mandatory standards for testing and validating AI systems before they are used in legal proceedings. These rules must evaluate how accurate and dependable AI tools are, as well as how often they make errors, similar to how scientific evidence is checked methods followed in other countries. Independent certification bodies also be created to verify whether such systems meet the necessary legal and technical standards.</p>
                        <p className="mt-4">Secondly, it is important to ensure transparency through making AI system explain how they work. The Hon&apos;ble Courts should accept AI-generated evidence only if the process behind it can be explained in a manner which is clearly understandable to judges as well as lawyers. This will help to address the &quot;black box&quot; problem and allow proper examination in court.</p>
                        <p className="mt-4">Thirdly, clear rules for mechanisms responsibility must be needed. Legal responsibility should be assigned to developers, service providers, or users depending on the situation. This will make sure there is no confusion about liability in cases where AI-generated evidence leads to wrongful decisions.</p>
                        <p className="mt-4">Further, proper legal safeguards should be introduced to protect the rights of the accused. Both sides of parties must be given the opportunity to question and challenge about AI-generated evidence, including access to important technical information when needed.</p>
                        <p className="mt-4">Lastly, A comprehensive law or existing statutes, such as the Indian Evidence Act, 1872, are necessary. These laws should explain that how AI generated evidences can be used in the Court. Such a framework would promote fairness, consistency and trust in the legal system, while also allowing the use of new advancement technological.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">ANALYSIS</h4>
                        <p>The use of AI-generated evidence in Indian Courts which has both positive and negative side of opportunities and challenges. On the positive side, AI can process a large amount of data very quickly, as well as reduce human mistakes, and also help judges to make more informed decisions. However, there are some serious concerns about fairness, transparency, and accountability. Issues like the &quot;black box&quot; problem, bias in algorithms, lack of proper standards, and unclear liability make it difficult to fully trust AI evidence.</p>
                        <p className="mt-4">In comparison, other countries like the United States and the European Union have clear rules to cheek and regulate that how AI is used in legal processes. In India, however, there are no specific laws nor standards, which creates uncertainty about how AI- generated evidence should be handled in judicial proceedings.</p>
                        <p className="mt-4">A balanced approach needed. while AI can improve legal processes faster and more accurate, proper safeguards must be put in place to make sure that its use not to violate constitutional rights, such as the right to a fair trial under Article 21 of the Constitution of India. Which making clear rules, standards, and accountability mechanisms will help Court use of AI effectively while keeping justice and fairness intact.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>The use of AI-generated evidence in Indian Courts has both come with advantages and disadvantage challenges. AI can help make legal work faster and more accurate, but it also raises some serious issues about fairness, transparency, as well as accountability. We need a careful approach which based on clear laws and respect constitutional rights as well. AI should be helping judges, not to make decisions on its own, so that justice always remains focused on people.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Constitution of India</li>
                            <li>Anvar P. V vs P.K.Basheer &amp; Ors on 18 September, 2014</li>
                            <li>The Indian Evidence Act, 1872, Section 3 &amp; 65B: https://www.indiacode.nic.in &amp; Section 65 in The Indian Evidence Act, 1872</li>
                            <li>Arjun Panditrao Khotkar vs Kailash Kushanrao Gorantyal on 14 July, 2020</li>
                            <li>AI Act: An Overview of the EU&apos;s Proposed Regulation on Artificial Intelligence - Lexology</li>
                            <li>Daubert Standard | Wex | US Law | LII / Legal Information Institute</li>
                            <li>What is Black Box AI? Definition from TechTarget</li>
                            <li>The Black Box Society — Harvard University Press</li>
                            <li>European Commission, Proposal for Artificial Intelligence Act, 2021. EUR-Lex - 52021PC0206 - EN - EUR-Lex &amp; European approach to artificial intelligence | Shaping Europe&apos;s digital future</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Susmita Chatterjee, Kolkata Police Law Institute, University of Calcutta.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Role of NCLT and NCLAT in Corporate Insolvency Resolution: Challenges and Reforms",
            author: "By Vanshita",
            abstract: "India's corporate insolvency landscape underwent a seismic shift with the enactment of the Insolvency and Bankruptcy Code, 2016 (IBC). Before this legislation, insolvency resolution was a labyrinthine affair — governed by a patchwork of laws that often worked against each other, producing endless delays, eroding asset value, and leaving creditors perpetually uncertain about their recoveries. The IBC changed that by introducing a unified, creditor-driven, and time-bound framework designed to rescue distressed companies wherever possible, and to wind them down efficiently where rescue was not viable. At the heart of this framework sit two specialized tribunals: the National Company Law Tribunal (NCLT), which functions as the primary adjudicating authority for corporate insolvency matters, and the National Company Law Appellate Tribunal (NCLAT), which hears appeals against NCLT orders. The health of the insolvency ecosystem depends, in no small measure, on how efficiently and consistently these two institutions function. This paper critically examines their statutory roles, traces the evolution of insolvency jurisprudence through their decisions, and honestly assesses the institutional challenges they face — including mounting caseloads, infrastructural gaps, and interpretational inconsistencies across benches. It concludes by proposing a set of concrete reforms to strengthen these tribunals so that the IBC can deliver on its promise in both letter and spirit.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Research Methodology</li>
                            <li>Review of Literature</li>
                            <li>Role of NCLT in Corporate Insolvency Resolution</li>
                            <li>Role of NCLAT as Appellate Authority</li>
                            <li>Challenges Faced by NCLT and NCLAT</li>
                            <li>Suggestions for Reform</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>Long before the IBC arrived, India&apos;s approach to corporate insolvency was, frankly, a mess. Creditors who wanted to recover dues had to navigate a bewildering maze of overlapping statutes — the Companies Act, 1956, the Sick Industrial Companies (Special Provisions) Act, 1985 (SICA), the Recovery of Debts Due to Banks and Financial Institutions Act, 1993, and others — each with its own forum, its own timelines, and its own logic. These laws did not speak to one another. Proceedings stretched for years, sometimes decades, while the value of the distressed company evaporated.</p>
                        <p className="mt-4">The IBC was meant to cut through this confusion. Enacted in 2016 on the recommendations of the Bankruptcy Law Reforms Committee, the Code brought all corporate insolvency matters under one roof. It tilted the balance firmly in favour of resolution over liquidation, recognising that a functioning business almost always generates more value than a fire-sale of its assets. The Code also recognised something equally important: that the success of any insolvency law depends on the quality of its adjudicatory machinery. You can design the most elegant insolvency framework on paper, but if the courts handling it are overworked, understaffed, or inconsistent in their rulings, the whole enterprise falls short.</p>
                        <p className="mt-4">This paper examines how NCLT and NCLAT have performed against that standard. Section II sets out the research methodology. Section III reviews the existing literature. Sections IV and V analyse the roles of NCLT and NCLAT respectively, drawing on key judicial decisions. Section VI identifies the principal challenges these institutions face. Section VII proposes reforms. Section VIII concludes.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">RESEARCH METHODOLOGY</h4>
                        <p>This study employs a doctrinal research methodology. It relies principally on qualitative analysis of primary legal sources — the Insolvency and Bankruptcy Code, 2016, the rules and regulations framed thereunder, and judgments of the NCLT, NCLAT, and the Supreme Court of India — supplemented by secondary sources including academic articles, expert committee reports, and practitioner commentaries. The approach is analytical and descriptive: the aim is not merely to catalogue statutory provisions but to understand how they have been interpreted in practice, where interpretation has been consistent, and where it has not. Where relevant, comparative references to international insolvency practices have been drawn upon to lend perspective to the reform proposals. All citations follow the 20th edition of the Bluebook.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">REVIEW OF LITERATURE</h4>
                        <p>The IBC has attracted considerable scholarly attention since its enactment, and the general consensus in the literature is that it has been transformative — though far from perfect. Early academic writing emphasized the structural advantages of a dedicated tribunal: concentrating jurisdiction in NCLT eliminated the forum-shopping and jurisdictional confusion that had plagued the earlier regime. Studies from the first three years of the Code&apos;s operation documented NCLT&apos;s relatively brisk pace in admitting insolvency applications, a significant improvement over what had come before.</p>
                        <p className="mt-4">As the Code matured, however, a more critical literature began to emerge. A recurring theme is the growing backlog of cases before NCLT benches and the cascading delays this produces — delays that directly undermine the IBC&apos;s time-bound objectives. Researchers and practitioners alike have pointed to the mismatch between the volume of cases being filed and the number of tribunal members available to hear them. Some studies have drawn attention to divergent decisions on similar legal questions across different NCLT benches, creating what one commentator aptly described as &quot;jurisdictional lottery&quot; for insolvency stakeholders. Valuation disputes, the treatment of related party creditors, and the rights of operational creditors have been particularly fertile grounds for inconsistent adjudication.</p>
                        <p className="mt-4">NCLAT&apos;s role in appellate oversight has received a more mixed reception in the literature. On the one hand, its judgments have developed important principles — on the primacy of commercial wisdom, on the limited scope of judicial intervention in Committee of Creditors decisions, and on the treatment of dissenting creditors. On the other hand, several scholars argue that the appellate process has itself become a tool for delay, with stakeholders using NCLAT proceedings strategically to stall resolution plans. The literature thus identifies a fundamental tension at the heart of the NCLT-NCLAT architecture: the need for appellate oversight to ensure legal consistency, versus the imperative of speed that the IBC demands.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">ROLE OF NCLT IN CORPORATE INSOLVENCY RESOLUTION</h4>
                        <p>The NCLT sits at the apex of the operational machinery of the IBC. It has exclusive jurisdiction over applications for initiation of the Corporate Insolvency Resolution Process (CIRP), filed by financial creditors under Section 7, by operational creditors under Section 9, or by the corporate debtor itself under Section 10. The tribunal&apos;s first task, upon receiving such an application, is to determine whether the conditions for admission are satisfied. For financial creditors, this requires proof of a debt and a default; for operational creditors, the additional requirement is that the debtor has failed to respond to a demand notice or repay the undisputed amount.</p>
                        <p className="mt-4">The Supreme Court settled an important jurisdictional question early in the Code&apos;s life. In Innoventive Industries Ltd. v. ICICI Bank, the Court held that once a financial creditor establishes the existence of a debt and a default, the NCLT is bound to admit the application — there is no residual discretion to refuse admission on equitable grounds. This ruling set the tone for a creditor-friendly regime and clarified that NCLT&apos;s role at the admission stage is adjudicatory, not discretionary.</p>
                        <p className="mt-4">Once an application is admitted, the NCLT triggers the statutory machinery. It declares a moratorium under Section 14, which immediately halts all legal proceedings against the corporate debtor, prevents the transfer or disposal of its assets, and suspends the rights of creditors to enforce their security interests. The moratorium is a crucial breathing space — it prevents the kind of creditor free-for-all that destroys asset value before a coherent resolution can be attempted. The NCLT also appoints an Interim Resolution Professional (IRP) who assumes control of the debtor&apos;s management and constitutes the Committee of Creditors (CoC).</p>
                        <p className="mt-4">The tribunal&apos;s supervisory role does not end at admission. It continues throughout the CIRP, adjudicating disputes over the admission or rejection of creditor claims, ruling on challenges to the conduct of the resolution professional, and resolving disagreements about the valuation of assets. Most critically, the NCLT is the final arbiter of resolution plans: under Section 31, once the CoC approves a resolution plan by the requisite majority, the plan must be placed before the NCLT for approval. The tribunal scrutinises whether the plan complies with the requirements of the Code and applicable regulations, but — and this is a point the Supreme Court has been at pains to emphasise — it does not second-guess the commercial judgment that underpins the plan. If resolution fails, the NCLT orders liquidation under Section 33 and oversees the liquidation process through a liquidator.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">ROLE OF NCLAT AS APPELLATE AUTHORITY</h4>
                        <p>The NCLAT functions as the appellate forum for orders passed by NCLT under the IBC. Appeals may be filed on questions of law or fact, or on grounds of procedural irregularity, within the prescribed limitation period. The tribunal&apos;s appellate function is not merely corrective — it is constitutive. By pronouncing on contested legal questions, NCLAT shapes the interpretive framework within which insolvency practitioners, creditors, and resolution applicants operate.</p>
                        <p className="mt-4">One of NCLAT&apos;s most significant contributions has been the elaboration of the principle of commercial wisdom. In K. Sashidhar v. Indian Overseas Bank, the Supreme Court, affirming the NCLAT&apos;s approach, held unequivocally that neither the NCLT nor the NCLAT is entitled to interfere with a commercial decision of the CoC — including a decision to reject a resolution plan — merely because it disagrees with the outcome. This principle has had far-reaching consequences: it has curtailed the scope for litigation by unsuccessful resolution applicants and by dissenting creditors who might otherwise seek to use the tribunals to override the collective decision of the creditor body.</p>
                        <p className="mt-4">The boundary of that principle was tested, and refined, in Committee of Creditors of Essar Steel India Ltd. v. Satish Kumar Gupta. There, the Supreme Court held that while the commercial wisdom of the CoC was sacrosanct on matters of business judgment, it could not override statutory rights — including the right of operational creditors to receive payments under a resolution plan that were not disproportionately less than those available in liquidation. The tribunals, the Court made clear, retain jurisdiction to ensure that resolution plans comply with the minimum statutory requirements of the IBC; what they cannot do is substitute their own view of what constitutes a &quot;fair&quot; or &quot;better&quot; plan.</p>
                        <p className="mt-4">More recently, in Vidarbha Industries Power Ltd. v. Axis Bank Ltd., the Supreme Court introduced a degree of judicial discretion at the admission stage by holding that the NCLT has the power, in appropriate cases, to decline to admit a Section 7 application even after the financial creditor establishes debt and default — taking into account the overall financial health of the corporate debtor and the interests of all stakeholders. This decision has been controversial: critics argue it introduces uncertainty at the very threshold of the insolvency process; supporters contend it prevents the Code from being weaponised against companies that are not genuinely insolvent.</p>
                        <p className="mt-4">Beyond these headline decisions, NCLAT has contributed to insolvency jurisprudence on a wide range of practical questions: the treatment of personal guarantors, the rights of homebuyers as financial creditors, the scope of avoidance applications under Chapter III of the IBC, and the circumstances in which a successful resolution applicant can be held liable for pre-CIRP dues of the corporate debtor. Not all NCLAT decisions have survived Supreme Court scrutiny, but the appellate tribunal has been an indispensable forum for the development of insolvency law.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CHALLENGES FACED BY NCLT AND NCLAT</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">A. Judicial Backlog and Timeline Overruns</h5>
                        <p>The single most widely documented challenge facing NCLT and NCLAT is the mounting backlog of cases. The IBC stipulates that CIRP should ordinarily be completed within 180 days, extendable to 330 days in exceptional circumstances — a timeline that was premised on a judicial infrastructure that has not materialised. Data from the Insolvency and Bankruptcy Board of India (IBBI) consistently show that a substantial proportion of ongoing CIRPs have exceeded the statutory deadline, in many cases by a significant margin. The reasons are structural: the number of NCLT benches and the total complement of judicial and technical members have not grown commensurately with the volume of cases being filed. Hearings are frequently adjourned — sometimes because of member vacancies, sometimes because of procedural complexity, and sometimes because of dilatory tactics by parties who have an interest in prolonging the process.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">B. Infrastructural and Capacity Constraints</h5>
                        <p>Physical infrastructure at many NCLT benches remains inadequate. Courtrooms are understaffed; technology support for document management and virtual hearings is inconsistent across benches; administrative processes are often paper-heavy and slow. The problem of vacancies is particularly acute: tribunal member posts have remained unfilled for extended periods, reducing effective hearing capacity and concentrating the caseload on a smaller number of members. The technical member positions — which are intended to bring commercial and financial expertise to insolvency adjudication — have been especially difficult to fill, partly because the compensation and service conditions for tribunal members have historically been less attractive than comparable positions in the private sector.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">C. Inconsistency in Judicial Interpretation</h5>
                        <p>The geographical spread of NCLT benches — currently sixteen across the country — has produced a degree of interpretive fragmentation that creates genuine uncertainty for insolvency practitioners. Different benches have reached different conclusions on legally identical questions: the threshold for admitting operational creditor applications, the treatment of creditors holding collateral security in the claims process, and the scope of the moratorium under Section 14 have all generated divergent lines of authority. NCLAT provides appellate correction, but the correction is retrospective — a conflicting decision at the NCLT level may stand unchallenged for months or years before it is either confirmed or overturned. In the interim, similarly situated parties in different parts of the country receive different treatment, which is fundamentally at odds with the uniformity that a national insolvency code ought to deliver.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">D. Procedural Complexity and Strategic Litigation</h5>
                        <p>The insolvency process, for all its intended simplicity, has become procedurally complex in practice. Parties — particularly corporate debtors and their erstwhile promoters — have shown considerable ingenuity in identifying procedural routes to delay or derail the process. Constitutional challenges to NCLT orders, writ petitions before High Courts, and interlocutory applications on interim issues have all been used, with varying degrees of success, to slow the process down. The lack of standardised procedural guidelines for NCLT proceedings has contributed to this problem: without clear rules on matters such as the admission and service of documents, the conduct of hearings, and the scope of cross-examination, proceedings are prone to avoidable dispute.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">SUGGESTIONS FOR REFORM</h4>
                        <p>The challenges outlined above are substantial, but none of them is beyond remedy. The following reforms are proposed, in approximate order of priority.</p>
                        <p className="mt-4">First, the appointment of judicial and technical members to NCLT and NCLAT needs to be treated as an urgent national priority. Vacancies should be filled on a fast-track basis, with transparent and merit-based selection processes. The compensation and service conditions of tribunal members should be reviewed to attract candidates of the calibre that complex insolvency adjudication demands. In the longer term, the number of NCLT benches and their regional distribution should be calibrated against actual caseload data, with dedicated circuit benches for high-volume jurisdictions where warranted.</p>
                        <p className="mt-4">Second, a comprehensive programme of digital infrastructure development should be implemented across all NCLT benches. This should include a unified case management system that enables electronic filing, digital service of process, online access to orders and cause lists, and seamless virtual hearings. A national database of NCLT orders — searchable by legal issue — would go a long way toward reducing interpretive inconsistency, by making it easier for practitioners and bench members to identify and apply precedents from other benches.</p>
                        <p className="mt-4">Third, detailed procedural regulations for NCLT proceedings in insolvency matters should be framed and notified. These regulations should address, at a minimum, the procedure for filing and responding to applications, the scope and conduct of oral hearings, the standards for admissibility of evidence, and the circumstances in which adjournments will be granted. Clear procedural rules reduce the scope for tactical delay and create a more predictable litigation environment for all parties.</p>
                        <p className="mt-4">Fourth, both NCLT and NCLAT members would benefit from structured and continuous training in insolvency and restructuring law, corporate finance, and valuation. The insolvency domain evolves rapidly — through legislative amendment, Supreme Court decisions, and shifts in market practice — and judicial education programmes need to keep pace. Mandatory induction training for new members and regular workshops on developments in insolvency law and practice should be institutionalised.</p>
                        <p className="mt-4">Fifth, the legislature should consider targeted amendments to the IBC to address the areas of greatest interpretive conflict. These include: the scope of the NCLT&apos;s discretion at the admission stage following Vidarbha Industries; the treatment of statutory dues in resolution plans; the liability of successful resolution applicants for pre-CIRP contingent liabilities; and the threshold for what constitutes a &quot;materially prejudicial&quot; change to a resolution plan requiring fresh CoC approval. Legislative clarity on these issues would reduce the volume of appellate litigation and produce more consistent outcomes at the trial level.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>The NCLT and the NCLAT are not peripheral institutions in India&apos;s insolvency framework — they are its operational core. Everything that the IBC promises: faster resolution, higher creditor recoveries, preservation of going-concern value, reduced systemic risk from corporate distress — depends on these tribunals functioning efficiently, consistently, and with sufficient expertise to handle the enormous complexity of modern corporate insolvency cases.</p>
                        <p className="mt-4">The record of the past eight years is genuinely mixed. The tribunals have accomplished a great deal. They have handled an enormous volume of cases since the IBC came into force. They have produced a substantial body of insolvency jurisprudence, some of which has been endorsed and built upon by the Supreme Court. They have, in many cases, enforced the statutory timelines of the Code and resisted attempts by parties to use the judicial process as a tool of delay. High-profile resolutions — including some of the largest corporate insolvencies in Indian history — have been concluded through this framework.</p>
                        <p className="mt-4">But the challenges are real and they are systemic. Judicial backlogs, infrastructural deficits, interpretive inconsistency, and procedural complexity are not isolated problems that will resolve themselves; they require deliberate, sustained, and adequately resourced institutional reform. The reforms proposed in this paper — more members, better infrastructure, clearer procedures, continuous training, and targeted legislative clarification — are neither novel nor radical. What they require is political will and administrative follow-through.</p>
                        <p className="mt-4">India&apos;s standing as a business destination, its attractiveness to domestic and foreign capital, and ultimately the health of its banking sector all depend in part on whether distressed businesses can be restructured or wound down quickly, predictably, and fairly. A strong NCLT and NCLAT are not merely desirable features of a well-functioning legal system — they are infrastructure in the most literal sense: the institutional foundation on which economic confidence is built. Investing in them is not a cost to be minimised; it is a return to be maximised.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">FOOTNOTES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Innoventive Indus. Ltd. v. ICICI Bank, (2018) 1 SCC 407 (India). The Court settled both the question of NCLT&apos;s exclusive jurisdiction under the IBC and the threshold for admitting a financial creditor&apos;s application under Section 7.</li>
                            <li>Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd., (2018) 1 SCC 353 (India). The Supreme Court clarified the standard for determining the existence of a &quot;dispute&quot; under Section 8(2) of the IBC for the purposes of operational creditor applications.</li>
                            <li>K. Sashidhar v. Indian Overseas Bank, (2019) 12 SCC 150 (India). The Court held that the commercial wisdom of the CoC in rejecting a resolution plan is not amenable to judicial review by the NCLT or NCLAT; the tribunals have no residual jurisdiction to examine the commercial merits of such a decision.</li>
                            <li>Comm. of Creditors of Essar Steel India Ltd. v. Satish Kumar Gupta, (2020) 8 SCC 531 (India). The Supreme Court struck down the NCLAT&apos;s attempt to equalize the treatment of financial and operational creditors in resolution plans, while confirming that operational creditors must receive at least the liquidation value due to them.</li>
                            <li>Vidarbha Indus. Power Ltd. v. Axis Bank Ltd., (2022) 8 SCC 352 (India). A controversial decision in which the Supreme Court held that the NCLT retains discretion to decline admission of a Section 7 application even after debt and default are established, taking into account the overall circumstances of the corporate debtor.</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Vanshita (B.A. LL.B., Asian Law College).</p>
                    </div>
                </div>
            )
        },
        {
            title: "Human Rights and Constitutional Values",
            author: "By Prashita Jain",
            abstract: "The question whether women should be treated equally to men and have identical rights, or whether the differences between them must be acknowledged, seems like a straightforward one. But what lies underneath this question is a much more complicated problem – of defining what is 'normal', what constitutes 'gender' and how the two interact with each other. And while the law does address this matter by adopting three main theories of feminist legal thinking – sameness, difference, and dominance – these theories themselves may be considered as distortions. This article analyzes the constitutional discourse regarding equality and gender difference, revealing how the law reflects the power structures of the society it serves, and highlights the need for the law to become a radical principle that transforms the concept of justice itself.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <p>The question whether women should be treated equally to men and have identical rights, or whether the differences between them must be acknowledged, seems like a straightforward one. But what lies underneath this question is a much more complicated problem – of defining what is &apos;normal&apos;, what constitutes &apos;gender&apos; and how the two interact with each other. And while the law does address this matter by adopting three main theories of feminist legal thinking – sameness, difference, and dominance – these theories themselves may be considered as distortions.</p>

                        <p className="mt-4">The theory of sameness represents one of the most common ideas among liberal feminists that women and men are equal intellectually and morally. Thus, the law is obliged to treat them equally, and, consequently, identical provisions should be introduced for the benefit of the two sexes. The constitutional law supports this point in various guarantees that ensure equality before the law and the prohibition of discrimination based on gender. Though the sameness approach can be effective in fighting discrimination in such areas as work, for example, it has its shortcomings. By treating women in the way they should be treated identically to men, the law makes the latter&apos;s characteristics a standard and thus implies the superiority of men over women. This assumption is known as &quot;the formal equality trap&quot;, according to which, the differences between women and men should be addressed, otherwise, it will result in the former being seen as inferior or disabled. This problem can be illustrated by such an important aspect as pregnancy which is considered an exclusively female phenomenon and, thus, cannot be compared to any activity performed by men. On the one hand, regarding it as a disability would be discriminatory, but on the other hand, viewing it as a difference would be stereotypical. In order to solve the described problems, the law must consider the different experiences of women and men and take them into account when developing new legislative solutions.</p>

                        <p className="mt-4">Therefore, the difference approach, based on the cultural feminist theory of relational reasoning, can become useful in solving the discussed problems by recognizing the need for particular considerations. According to the mentioned theory, neutrality does not mean equality, and sometimes justice means non-neutrality since some aspects that differ from one another should be recognized as valuable and protected. As a consequence, the constitutional law allows introducing specific measures for women (e.g. maternity benefits). But at the same time, the difference approach also has some risks associated with interpreting &quot;differences&quot; from the perspective of patriarchy. Thus, protecting women from entering into dangerous professions can lead to economic and job discrimination, and using such a term as &quot;vulnerability&quot; can mean depriving women of freedom.</p>

                        <p className="mt-4">One of the ways to deal with this problem is the theory of dominance in feminist jurisprudence. Unlike the previous approaches, this theory does not focus on sameness/difference but rather considers how law works and whether it contributes to the development of male dominance. It implies a hierarchical view of gender relationships between the two sexes and shows how the law supports male dominance, despite appearing to be neutral. In fact, in all spheres, starting with the workplace and ending with sexual violence laws, men have been dominating women for centuries and getting more privileges.</p>

                        <p className="mt-4">For instance, when a woman applies for work in a particular organization, and she is rejected due to her pregnancy, it is not merely a difference but rather an obstacle preventing her from working. Furthermore, the lack of provisions regulating the duration of maternity leave implies that the life of a pregnant woman does not fit into the established pattern. Over time, the development of constitutional jurisprudence in India has revealed a tendency towards transforming formal equality into substantive equality, meaning that identical treatment cannot be sufficient since it maintains the existing inequalities.</p>

                        <p className="mt-4">Consequently, in this case, the law has to act in order to eliminate them and give additional opportunities to those who need them. This approach is clearly demonstrated by such decisions as those that fight against gender stereotypes and provide women with new possibilities for self-expression. For example, by questioning the validity of assumptions concerning women&apos;s vulnerabilities, courts show that they should not be treated as inferior to men. An essential point in the gender discourse is the social construction of women&apos;s sexuality and, subsequently, the discrimination that occurs due to it.</p>

                        <p className="mt-4">As it can be seen, the law has always been reflecting this social norm by creating strict rules regarding such aspects as rape laws, marriage, and others, dividing women into &apos;worthy&apos; and &apos;unworthy&apos; depending on their character and social role. As a result of such divisions, women are discriminated against, and their right to protection is questioned depending on their status in the eyes of society. For example, earlier, rape survivors were asked about their sexual behavior, and if the answer was negative, they received some additional benefits. In turn, modern jurisprudence is trying to get rid of all the stereotypes, claiming that the woman&apos;s chastity does not have anything to do with her rights, and every person deserves to be protected.</p>

                        <p className="mt-4">Moreover, the notion of marriage has been transformed from &apos;property&apos; to a voluntary institution where women are considered as individuals and not as someone&apos;s relatives or servants. In addition, feminist jurists criticize the gender bias embedded in legal standards since, for centuries, they have been constructed by men and, thus, do not fully cover the situations that occur in people&apos;s lives. One of the examples is the so-called &apos;reasonable person&apos; used to justify the actions of defendants in criminal trials.</p>

                        <p className="mt-4">However, this concept fails to capture women&apos;s experience since the law is based on the notion of masculinity that presupposes immediate threat and the necessity to respond to it proportionally. In order to change the described situation, jurists propose developing the reasonable woman standard that reflects the realities of women&apos;s lives. Finally, one of the crucial questions arising in relation to gender equality is gender discrimination in the sphere of work, especially, regarding equal pay for equal labor. Indeed, according to current legislation, a person who performs the same work is supposed to be paid the same amount of money, but what is interesting here is undervaluing of labor performed by women.</p>

                        <p className="mt-4">For this purpose, the concept of comparable worth was introduced that implied equal pay for jobs that require the same level of responsibility and skills even if they belong to different industries, but have equal significance. In addition, a significant part of women&apos;s labor is related to the informal sector and cannot be regulated, which is caused by the difference between private and public spheres of women&apos;s life. Domestic workers, for instance, cannot take advantage of maternity leave as they are excluded from the list of those eligible for receiving such benefits.</p>

                        <p className="mt-4">The analysis of constitutional discourse regarding equality and gender difference shows that law is far more complex than being a mere system of rules. It can reveal a number of important aspects about the way the society it serves is structured in terms of relations of power.</p>

                        <p className="mt-4">The dilemma between sameness, difference, and dominance is not theoretical; on the contrary, it forms the core of many practical legal issues, ranging from judicial practice to legislative reforms. While the sameness approach can be considered more liberal due to the aspiration for neutrality, it can lead to the denial of real needs and difficulties encountered by women. Moreover, although the difference paradigm is better suited to address women&apos;s actual problems, it tends to resort to stereotypes rather than accommodation in some cases.</p>

                        <p className="mt-4">In turn, the dominance theory requires a thorough investigation as it raises a number of serious questions and leads to discussions of the essence and underlying reasons for women&apos;s inequality before the law. The gradual transition of Canadian judicial system to the notion of substantive equality signifies a considerable but far from complete change in legal practices and attitudes. On one hand, courts began to understand that equal rights cannot be secured by providing only formal protection, since the structures of power and discrimination must be dismantled as well. On the other hand, the existence of discriminatory practices proves the incompleteness of the transformations that took place in the process of constitutional interpretation.</p>

                        <p className="mt-4">Thus, the necessity to challenge stereotypical views on women&apos;s sexual role in life and eliminate gender norms of legal reasoning emerges as one of the major priorities in current judicial and legal activity. In addition, efforts should be made to address the issues connected to women&apos;s labor participation in different areas, including domestic affairs and work places.</p>

                        <p className="mt-4">Nevertheless, despite all these efforts, there is still a lot to do for securing gender equality, since the issue of discrimination cannot be regarded as completely resolved.</p>

                        <p className="mt-4">In the end, the promise of gender equality enshrined in the constitution cannot be reduced to mere proclamations and token gestures. The law needs to become a radical principle that shakes the foundations of established orders and transforms the concept of justice itself. This calls for a movement away from passivity and neutrality to a deeper engagement with the experiences of women.</p>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Prashita Jain, Incoming law student.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Trademark Protection for Influencers and Personal Brands: Navigating Intellectual Property in the Age of Social Media",
            author: "By Sapna Kumari",
            abstract: "The rapid expansion of influencer marketing has thrust trademark law into unfamiliar territory. Social media influencers (SMIs) now operate as commercial actors of considerable economic significance, yet the legal framework governing their intellectual property obligations remains underdeveloped. This article examines trademark protection as it applies to influencers and personal brands, analysing the landmark proceedings of Petunia Products, Inc. v. Rodan & Fields, LLC and FERRARI S.p.A. v. Philipp Plein International AG, the regulatory posture of the Federal Trade Commission (FTC), and equivalent European frameworks. It argues that while accountability for commercial infringement is appropriate, the current approach threatens disproportionate harm to micro-influencers, and that legislative reform modelled on the Digital Millennium Copyright Act (DMCA) is urgently needed.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Trademark Law and its Application to Influencers</li>
                            <li>Key Legal Developments</li>
                            <li>Protecting Personal Brands: Practical Strategies</li>
                            <li>Structural Inequity and the Case for Legislative Reform</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">I. INTRODUCTION</h4>
                        <p>Social media influencers occupy an increasingly central role in global commerce. With the influencer marketing industry projected to exceed USD 28 billion by 2026, and with prominent influencers earning over USD 1 million per sponsored post, it is no longer tenable to treat content creators as commercially peripheral actors. Their posts reach tens of millions of consumers, shape purchasing decisions, and generate substantial revenue from brand partnerships. Inevitably, this commercial reality has attracted the attention of trademark law.</p>
                        <p className="mt-4">The pivotal question now confronting courts and regulators is whether individual influencers can be held directly liable for trademark infringement arising from their sponsored content. In 2021, a United States federal court refused to dismiss such a claim against influencer Molly Sims, while an Italian court ordered designer Philipp Plein to pay EUR 300,000 in damages for his unauthorised use of Ferrari&apos;s trademarks on Instagram. These decisions mark a meaningful shift: influencers are no longer invisible conduits for brand messages but legally accountable commercial actors. Yet the extension of liability to individuals who may lack legal training, contractual protection, or financial resources raises serious fairness concerns that existing law has not adequately addressed.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">II. TRADEMARK LAW AND ITS APPLICATION TO INFLUENCERS</h4>
                        <p>The Lanham Act defines a trademark as any word, name, symbol, or device used to identify and distinguish a person&apos;s goods or services and to indicate their source. Trademark infringement occurs when a person uses a mark in commerce in a manner likely to cause consumer confusion as to the source or sponsorship of goods or services. The likelihood of confusion inquiry involves multiple factors, including the strength of the mark, the similarity of the marks and goods, the marketing channels used, and evidence of actual confusion. Significantly, intent is not a prerequisite for liability, though it bears on the appropriate remedy.</p>
                        <p className="mt-4">A threshold requirement is that the defendant must have used the mark &apos;in commerce.&apos; Purely personal or non-commercial uses generally fall outside the Lanham Act&apos;s scope. However, where an influencer&apos;s post constitutes paid advertising — as is increasingly common — this requirement is readily satisfied. The commercial use requirement does not protect influencers who receive compensation, free products, or other material benefits in exchange for promotion, regardless of how organically the content is presented to followers.</p>
                        <p className="mt-4">European trademark law operates on broadly similar principles. Under Article 5(1) of the EU Trademark Directive, member states must provide protection against uses likely to cause confusion, including confusion as to affiliation or sponsorship. Well-known marks enjoy enhanced protection against uses that, without due cause, take unfair advantage of or are detrimental to the mark&apos;s distinctive character or reputation — a provision directly relevant to the Ferrari-Plein litigation.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">III. KEY LEGAL DEVELOPMENTS</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">A. Petunia Products, Inc. v. Rodan &amp; Fields, LLC (United States)</h5>
                        <p>This 2021 case represents the most significant U.S. judicial engagement with influencer trademark liability to date. Petunia Products, owner of the registered mark BROW BOOST, sued both skincare company Rodan &amp; Fields and influencer Molly Sims after Sims published a sponsored blog post promoting Rodan &amp; Fields&apos; &apos;Brow Defining Boost&apos; product using the hashtag #BROWBOOST. Sims moved to dismiss, arguing that her post was non-commercial commentary and that the First Amendment shielded her from liability.</p>
                        <p className="mt-4">The court rejected both arguments. Because Sims had acknowledged Rodan &amp; Fields as a sponsor, provided product images and pricing, and included a direct purchase link, the court held that the post constituted commercial use within the meaning of the Lanham Act. The post therefore fell outside First Amendment protection for non-commercial speech. The court further found a plausible likelihood of confusion: the marks sounded similar, the products served identical functions, and they were marketed through comparable channels. The case settled before trial, leaving the law in a state of productive uncertainty — but the refusal to dismiss established that individual influencer liability is doctrinally viable under existing U.S. trademark law.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">B. FERRARI S.p.A. v. Philipp Plein International AG (Italy)</h5>
                        <p>The Italian proceedings offer a more fully resolved precedent. Fashion designer Philipp Plein posted Instagram videos featuring his shoe collection alongside Ferrari automobiles with the manufacturer&apos;s trademarks prominently displayed, creating the impression of a brand partnership. The Court of Genoa articulated a clear principle: unauthorised use of a third-party trademark by an influencer is lawful only where the images are perceived by the public as depicting authentic daily life rather than commercial promotion. Where the trademark is foregrounded in a context that consumers can only interpret as advertising, the use is unlawful. Finding that Plein&apos;s posts crossed this line, the Court of Milan ultimately imposed damages of EUR 300,000 and per-infringement penalties of EUR 10,000. This framework — centred on the public&apos;s perception of a post&apos;s commercial character — offers a workable and principled test for distinguishing lawful lifestyle content from infringing commercial promotion.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IV. PROTECTING PERSONAL BRANDS: PRACTICAL STRATEGIES</h4>
                        <p>While influencers face the risk of infringing others&apos; trademarks, the protection of their own personal brands is equally pressing. An influencer&apos;s name, channel identity, or signature format may qualify for trademark registration, conferring constructive notice, a presumption of validity, and a basis for foreign filings. Kim Kardashian&apos;s registration of her name as a trademark for advertising and endorsement services provides a well-known model. The cautionary counterexample is bridal designer Hayley Paige Gutman, who contractually licensed her own name to her employer and was subsequently enjoined from using it professionally — an outcome that illustrates the catastrophic cost of failing to assert intellectual property rights at the outset.</p>
                        <p className="mt-4">Contractual protection is equally important. Many brand-influencer arrangements are formed through informal communications that may not constitute binding contracts or adequately allocate legal risk. A well-drafted influencer marketing agreement should include brand warranties that the promoted products do not infringe third-party marks, mutual indemnification provisions, and FTC-compliant disclosure obligations. The current industry norm — exemplified by Sugarfina&apos;s standard agreement, which requires influencers to indemnify the brand rather than vice versa — is commercially imbalanced and should be reformed. Where an influencer unknowingly promotes a product with an infringing mark, as Sims appears to have done, the legal and financial exposure should rest primarily with the brand that created the infringing product.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">V. STRUCTURAL INEQUITY AND THE CASE FOR LEGISLATIVE REFORM</h4>
                        <p>The extension of direct trademark liability to influencers creates a structural inequality that the law has not adequately addressed. Micro-influencers — those with follower counts in the range of 10,000 to 50,000 — typically lack legal counsel, operate on thin margins, and have no meaningful negotiating leverage with brands. Yet because trademark infringement requires no intent, an unknowing micro-influencer faces the same theoretical liability as a sophisticated commercial actor deliberately marketing counterfeits. The risk is compounded by documented racial pay disparities in the influencer economy, with Black influencers earning approximately 35% less than white counterparts and disproportionately represented among the micro-influencer tier.</p>
                        <p className="mt-4">Powerful brands have demonstrated a willingness to deploy trademark law aggressively against small operators: Hugo Boss pursued a Welsh brewery over its use of &apos;Boss,&apos; and Chick-fil-A threatened a Vermont t-shirt maker over the phrase &apos;Eat More Kale.&apos; In the influencer context, where the power imbalance is even more pronounced, there is a genuine risk that liability expansion will harm the most economically vulnerable content creators while doing little to deter the well-resourced actors whose conduct reaches the largest audiences.</p>
                        <p className="mt-4">The solution lies in legislation. Unlike copyright, trademark law currently lacks a notice-and-takedown mechanism analogous to the DMCA. Trademark practitioners Mostert and Schwimmer have proposed an Expedited Dispute Resolution Proceeding (EDRP) under which trademark owners could file notices with internet service providers, platforms would remove infringing content in the absence of a counternotice, and disputed cases would proceed to a neutral inter partes adjudicator. Platforms that complied promptly would benefit from safe harbour protection. This framework would resolve most disputes without costly litigation, impose consistent obligations across all social media platforms — which currently take divergent and largely passive approaches to trademark complaints — and meaningfully protect micro-influencers from the disproportionate burden of full trademark litigation.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VI. CONCLUSION</h4>
                        <p>Trademark law is adapting, necessarily and imperfectly, to the realities of influencer marketing. The decisions in Petunia Products and Ferrari v. Plein confirm that individual influencers can be held liable for trademark infringement arising from commercially sponsored content. The Italian courts&apos; distinction between lifestyle content and commercial promotion offers a principled test that U.S. courts and regulators would do well to adopt.</p>
                        <p className="mt-4">Three conclusions follow. First, influencers must proactively protect their own brands through trademark registration and insist on equitable contractual arrangements that include brand warranties and mutual indemnification. Second, brands must assume greater responsibility for ensuring their products are trademark-cleared before engaging influencer partners. Third, and most urgently, Congress should enact trademark notice-and-takedown legislation modelled on the DMCA, providing a swift and proportionate mechanism for resolving disputes without exposing micro-influencers to ruinous litigation costs.</p>
                        <p className="mt-4">Trademark law has always been an evolving discipline, adapting from goods-based protection to service marks, trade dress, and domain names. The influencer economy represents its next frontier. How the law navigates this terrain — whether with blunt instruments that crush small creators or with calibrated tools that balance accountability and equity — will shape the character of the digital marketplace for years to come.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400 text-sm">
                            <li>Werner Geyser, &apos;The State of Influencer Marketing 2023: Benchmark Report,&apos; Influencer Mktg. Hub (Feb. 7, 2023); Ryan Detert, &apos;Where Influencer Marketing and the Creator Economy Are Headed,&apos; Inc. (Dec. 27, 2021).</li>
                            <li>Mark Sweney, &apos;Cristiano Ronaldo Shoots to Top of Instagram Rich List,&apos; The Guardian (June 30, 2021); Peter Kotecki, &apos;Infringing Influencers: How to Fairly Protect Brands&apos; Trademarks on Social Media,&apos; 100 Wash. U. L. Rev. 1555, 1561 (2022).</li>
                            <li>Order Granting in Part and Denying in Part Defendant&apos;s Motion to Dismiss, Petunia Prods., Inc. v. Rodan &amp; Fields, LLC, No. 8:21-CV-00630 (C.D. Cal. Aug. 6, 2021) [hereinafter Sims Order].</li>
                            <li>Trib. Genova, 2 aprile 2020, n. 15049 (It.), cited in Abigail Dagher, &apos;The Influencers and the Influenced,&apos; 37 Emory Int&apos;l L. Rev. 741, 768 (2023).</li>
                            <li>15 U.S.C. § 1127.</li>
                            <li>15 U.S.C. § 1114(1)(a); OTR Wheel Eng&apos;g, Inc. v. West Worldwide Servs., Inc., 897 F.3d 1008, 1013 (9th Cir. 2018).</li>
                            <li>AMF Inc. v. Sleekcraft Boats, 599 F.2d 341, 348–49 (9th Cir. 1979); Kotecki, supra note 2, at 1565–66.</li>
                            <li>Romag Fasteners, Inc. v. Fossil, Inc., 140 S. Ct. 1492, 1497 (2020).</li>
                            <li>Bosley Med. Inst., Inc. v. Kremer, 403 F.3d 672, 676 (9th Cir. 2005); Kotecki, supra note 2, at 1564.</li>
                            <li>Council Directive 2008/95, art. 5(1), 2008 O.J. (L 299) 25 (EC); Dagher, supra note 4, at 763.</li>
                            <li>Regulation (EU) 2017/1001, art. 9.2(c); Dagher, supra note 4, at 767.</li>
                            <li>Sims Order, supra note 3, at 2; Dagher, supra note 4, at 759.</li>
                            <li>Kotecki, supra note 2, at 1557; Dagher, supra note 4, at 760.</li>
                            <li>Sims Order, supra note 3, at 5–6; Kotecki, supra note 2, at 1564–65.</li>
                            <li>Order Granting Joint Stipulation of Dismissal with Prejudice, Petunia Prods., Inc. v. Rodan &amp; Fields, No. 8:21-CV-00630 (C.D. Cal. July 28, 2022); Dagher, supra note 4, at 742 n.6.</li>
                            <li>Fabiana Bisceglia, &apos;Influencers: To What Extent Are They Allowed to Lawfully Portray Third-Party Trademarks,&apos; Glob. Advert. Laws. All. (June 18, 2020); Dagher, supra note 4, at 766–67.</li>
                            <li>Bisceglia, supra note 16; Dagher, supra note 4, at 767.</li>
                            <li>Dagher, supra note 4, at 768.</li>
                            <li>Why Register Your Trademark?, U.S. Pat. &amp; Trademark Off., https:// www.uspto.gov/trademarks; Dagher, supra note 4, at 770.</li>
                            <li>Carey Kulp, &apos;Influencer Fails – Avoid These Three Legal Mistakes in Affiliate Marketing,&apos; Volpe Koenig (Sept. 9, 2021), cited in Dagher, supra note 4, at 770.</li>
                            <li>JLM Couture, Inc. v. Gutman, 24 F.4th 785, 790–91 (2d Cir. 2022); Kotecki, supra note 2, at 1573.</li>
                            <li>Dagher, supra note 4, at 769–70; Kotecki, supra note 2, at 1571.</li>
                            <li>Influencer Terms and Conditions, Sugarfina, cited in Kotecki, supra note 2, at 1571.</li>
                            <li>Dagher, supra note 4, at 745; Kotecki, supra note 2, at 1572.</li>
                            <li>Romag Fasteners, supra note 8; Kotecki, supra note 2, at 1572.</li>
                            <li>Kotecki, supra note 2, at 1574 (citing Kalhan Rosenblatt, &apos;Racial Pay Gaps Are an Issue in Every Industry,&apos; NBC News (Dec. 7, 2021)).</li>
                            <li>Kotecki, supra note 2, at 1575–77.</li>
                            <li>Universal City Studios, Inc. v. Corley, 273 F.3d 429, 435 (2d Cir. 2001); Kotecki, supra note 2, at 1578.</li>
                            <li>Frederick W. Mostert &amp; Martin B. Schwimmer, &apos;Notice and Takedown for Trademarks,&apos; 101 Trademark Rep. 249, 280–81 (2011), cited in Kotecki, supra note 2, at 1578–79.</li>
                            <li>Kotecki, supra note 2, at 1579–81 (discussing divergent policies of Instagram, YouTube, LinkedIn, and Tumblr).</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Sapna Kumari, Student at Amity University, Jharkhand.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Live-in Relationships and Indian Law",
            author: "By Shaurya Shree",
            abstract: "In India, marriage is considered as a sacred bond and hence is a big deal. It's tied to our culture, religion, and the law. But things are changing nowadays, especially in cities. More people are choosing to live together without getting married. This shows that people think differently about being free and what a relationship means to them. Live-in relationships raise eyebrows in many places, but courts have taken a lot of steps to protect the rights of people who choose this path by doing progressive interpretations of constitutional provisions and existing legislations.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Constitutional and Legal Recognition</li>
                            <li>Statutory Provisions Extending Protection</li>
                            <li>Landmark Judicial Pronouncements</li>
                            <li>Rights and Obligations in Live-in Relationships</li>
                            <li>Recent Developments: Registration of Live-in Relationships</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>In India, marriage is considered as a sacred bond and hence is a big deal. It&apos;s tied to our culture, religion, and the law. But things are changing nowadays, especially in cities. More people are choosing to live together without getting married. This shows that people think differently about being free and what a relationship means to them. Live-in relationships raise eyebrows in many places, but courts have taken a lot of steps to protect the rights of people who choose this path by doing progressive interpretations of constitutional provisions and existing legislations.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONSTITUTIONAL AND LEGAL RECOGNITION</h4>
                        <p>The legal recognition of live-in relationships in India has its foundation primarily in Article 21 of the Constitution, which guarantees the right to life and personal liberty to all the citizens of India. The Supreme Court through its expansive interpretation of this provision held that the right to cohabit with a partner of one&apos;s own choice, irrespective of marital status falls within the ambit of personal liberty only.</p>

                        <p className="mt-4">The landmark judgment in the case of S. Khushboo v. Kanniammal &amp; Anr. marked a watershed moment in the legal recognition of live-in relationships. In this case, the Supreme Court declared that live-in relationships are not illegal and that there are no Indian laws which prohibit such arrangements or pre-marital sexual intercourse. The Court observed that &quot;morality and criminality are not co-extensive&quot;, highlighting that adults have the freedom to choose their partner and lifestyle without any interference from society, given that it does not violate any law(s) of india.</p>

                        <p className="mt-4">The case of Badri Prasad v. Dy. Director of Consolidation was one of the first cases where the Supreme Court recognized the validity of a long-term live-in relationship. The Court held that when a man and woman have lived together as husband and wife for approximately fifty years, there is a strong presumption that they are married. The Court observed that &quot;law leans in favour of legitimacy and frowns upon bastardy&quot;, saying that the prolonged cohabitation creates a presumption of a valid marriage.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">STATUTORY PROVISIONS EXTENDING PROTECTION</h4>
                        <p>There is no dedicated legislation which governs live-in relationships, but many existing legal provisions have been interpreted judicially to provide protection to individuals in such arrangements. Some of the examples of such provisions are as follows:</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Protection of Women from Domestic Violence Act, 2005</h5>
                        <p>Section 2(f) of the Protection of Women from Domestic Violence Act, 2005 defines &quot;domestic relationship&quot; to include relationships &quot;in the nature of marriage&quot;. This provision has been utilized in extending legal protection to women in live-in relationships as well, placing them on par with married women for purposes of protection against domestic violence. Women in qualifying live-in relationships can seek remedies including protection orders, residence orders and monetary relief under this Act.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Section 125 of the Code of Criminal Procedure, 1973</h5>
                        <p>Section 125 CrPC, which provides for maintenance of wives, children and parents has been judicially interpreted to include women living in live-in relationships too. In the landmark judgement of Chanmuniya v. Virendra Kumar Singh Kushwaha (2011), the Supreme Court held that women in relationships akin to marriage are entitled to claim maintenance under Section 125 CrPC. The Court established that where partners live together for a long time as husband and wife, a presumption arises in favor of a valid marriage and the right to maintenance becomes available to women in such relationships.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Section 114 of the Indian Evidence Act, 1872</h5>
                        <p>Now courts in many cases presume the existence of marriage in cases of long-term cohabitation under section 114 of the Indian Evidence Act. This provision has been used to protect the rights of partners and children born out of live-in relationships, ensuring they are not denied legal recognition due to the informal nature of the relationship.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">LANDMARK JUDICIAL PRONOUNCEMENTS</h4>
                        <p className="mb-4">The Indian judiciary has delivered many landmark judgments which shaped the legal landscape of live-in relationships.</p>

                        <ul className="space-y-6">
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">1. D. Velusamy v. D. Patchaiammal (2010)</strong>
                                <p>This case provided crucial clarity on when a live-in relationship qualifies as a &quot;relationship in the nature of marriage&quot;. The Supreme Court laid down specific conditions that must be satisfied for a woman in a live-in relationship to claim maintenance under Section 125 CrPC. These conditions includes the following points: The couple must voluntarily cohabit (not under coercion or force) for a significant period; both parties must be of legal age to marry; they must be unmarried and legally eligible to marry; and they must present themselves to society as if they are married.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">2. Tulsa v. Durghatiya (2008)</strong>
                                <p>This case established the legitimacy of children born from live-in relationships. The Supreme Court held that children born out of such relationships are considered legitimate and are entitled to inheritance rights in their parents&apos; property (only parents&apos; self acquired property, not the ancestral ones). The Court emphasized that where partners have lived together for a long period of time as a husband and wife, there is a presumption in favor of a valid marriage, and the children if born from such union should not suffer discrimination.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">3. Vidyadhari v. Sukhrana Bai (2008)</strong>
                                <p>In this case involving succession rights, the Supreme Court granted a succession certificate to a woman who was in a long-term live-in relationship with the deceased, despite the existence of a legally wedded wife. The Court recognized that while the first wife was the only legitimate wife, equities must be balanced considering that the live-in partner was the deceased&apos;s nominee and mother of his four children.</p>
                            </li>
                            <li className="bg-black/30 p-5 rounded-xl border border-white/5">
                                <strong className="text-white text-lg block mb-2">4. Lalita Toppo v. State of Jharkhand (2018)</strong>
                                <p>The judgment in this case has significantly expanded the protective scope of the Domestic Violence Act. The Supreme Court held that women in live-in relationships are entitled to more efficacious remedies under the Domestic Violence Act, 2005 than under Section 125 CrPC. The Court emphasized that while Section 125 CrPC is limited to legally married women, the Domestic Violence Act offers more inclusive protection, especially for economically and socially vulnerable women.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">RIGHTS AND OBLIGATIONS IN LIVE-IN RELATIONSHIPS</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Maintenance Rights</h5>
                        <p>Women in live-in relationships that satisfy the criteria of being in valid live-in relationship, i.e &quot;in the nature of marriage&quot; are entitled to claim maintenance under both the Domestic Violence Act, 2005 and under section 125 CrPC.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Property Rights</h5>
                        <p>Unlike married couples, partners in live-in relationships do not enjoy automatic rights to each other&apos;s property. There is no automatic right of inheritance for live-in partners under Indian law. However, the Supreme Court in Velusamy v. D. Patchaiammal (2010) held that a live-in partner may acquire rights to property accumulated during the subsistence of the relationship if they can demonstrate significant contribution to its acquisition.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Rights of Children</h5>
                        <p>Children born from live-in relationships enjoy significant legal protection. Section 16 of the Hindu Marriage Act, 1955, provides legitimacy to children born from relationships that may not be formally valid marriages. The Supreme Court has consistently held that such children are entitled to inheritance rights in their parents&apos; property (only their self acquired property), ensuring they do not face discrimination due to the nature of their parents&apos; relationship.</p>
                        <p className="mt-4">Children are also entitled to maintenance from both parents under Section 125 CrPC, regardless of whether their parents&apos; personal laws recognize the relationship. Both parents have financial and emotional responsibilities towards children born from live-in relationships.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Protection Against Domestic Violence</h5>
                        <p>The Domestic Violence Act, 2005, extends comprehensive protection to women in live-in relationships, including the right to reside in the shared household, the right to seek protection orders, and the right to claim compensation for damages suffered. This legislation recognizes the vulnerability of women in such relationships and provides them legal remedies comparable to those available to married women.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">RECENT DEVELOPMENTS: REGISTRATION OF LIVE-IN RELATIONSHIPS</h4>
                        <p>In a recent significant development, the Uttarakhand state enacted the Uniform Civil Code (UCC) in January 2025, which mandates the registration of live-in relationships. Under Section 378 of the Uttarakhand UCC, couples entering into a live-in relationship must register themselves and their live-in relation with the district registrar within 30 days of entering into such relationship or arrangement.</p>
                        <p className="mt-4">The law requires partners to submit a statement of live-in relationship, after which the registrar is required to verify the details including the age of the parties, their marital status, and nature of consent (whether its free consent of the parties or not) before issuing a certificate of registration. Failure to which, register attracts punishment of up to three months imprisonment or a fine up to Rs. 10,000 or both.</p>
                        <p className="mt-4">The Rajasthan High Court has also directed the state government to establish a framework by March 2025 to enable couples in live-in relationships to register themselves. The court mandated that such a framework should obligate male partners to provide for non-earning female partners and children in live-in relationships.</p>
                        <p className="mt-4">These registration provisions have sparked debate about whether they represent progressive recognition or excessive state interference in personal relationships.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>Live-in relationships in India depicts the intersection of evolving social norms and traditional legal frameworks. While the judiciary, particularly the Supreme Court has recognized and protected such relationships through expansive and broad interpretations of constitutional rights and existing legislation, but there are gaps remain present in the legal architecture.</p>
                        <p className="mt-4">The journey from Badri Prasad (1978) case to recent cases like Lalita Toppo (2018) shows the judiciary&apos;s responsiveness to changing societal realities and norms, courts have ensured that women in valid live-in relationships receive protection against domestic violence, maintenance rights, and that children born from such unions are not discriminated.</p>
                        <p className="mt-4">However, there is absence of comprehensive legislation which continues to create uncertainty and vulnerability, particularly regarding property and inheritance rights. The recent move by Uttarakhand to mandate registration of live-in relationships reflects that there is a potential shift towards greater state regulation, though there are concerns about privacy and autonomy.</p>
                        <p className="mt-4">The ultimate goal should be to create a legal framework that respects personal autonomy and freedom, ensures gender justice alongwith protecting the rights of individuals and providing legal certainty, all while acknowledging that relationships no matter in what form, deserves recognition and respect when they are based on mutual consent.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>INDIA CONST. art. 21.</li>
                            <li>Is Live-In Relationship Legal in India? https://lawbhoomi.com/is-live-in-relationship-legal-in-india/</li>
                            <li>Legal Status of Live-In Relationships https://www.drishtijudiciary.com/editorial/legal-status-of-live-in-relationships</li>
                            <li>S. Khushboo v. Kanniammal &amp; Anr., AIR 2010 SC 3196</li>
                            <li>Live-in Relationships in the Eyes of Law https://www.lawskills.in/ResourceDetails/1/live-in-relationships-in-the-eyes-of-law</li>
                            <li>Badri Prasad v. Dy. Director of Consolidation, AIR 1978 SC 1557</li>
                            <li>Badri Prasad Vs Dy. Director of Consolidation and Others https://www.courtkutchehry.com/judgements/649833/badri-prasad-vs-dy-director-of-consolidation-and-others/</li>
                            <li>Chanmuniya v. Virendra Kumar Singh Kushwaha, (2011) 1 SCC 141.</li>
                            <li>D. Velusamy v. D. Patchaiammal, (2010) 10 SCC 469.</li>
                            <li>Tulsa v. Durghatiya, (2008) 4 SCC 520.</li>
                            <li>Vidyadhari v. Sukhrana Bai, AIR 2008 SC 1420.</li>
                            <li>Lalita Toppo v. State of Jharkhand, (2019) 13 SCC 796.</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Shaurya Shree, University Law College, B.A LL.B (Hons).</p>
                    </div>
                </div>
            )
        },
        {
            title: "Alternative Dispute Resolution (ADR): Transforming the Justice Delivery System in India",
            author: "By Aaryan Parekh",
            abstract: "The huge backlog of cases in the Indian court system has long caused serious delays in the administration of justice. It is crucial to look for alternatives to traditional litigation since, as the well-known adage goes, \"justice delayed is justice denied.\" One effective way to deal with these issues is through Alternative Dispute Resolution (ADR). ADR encompasses a variety of dispute resolution techniques, including as arbitration, mediation, conciliation, and negotiation, that are intended to settle disputes outside of court in a more effective, economical, and adaptable way.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Understanding ADR: Concept and Importance</li>
                            <li>Arbitration: A Formal and Binding Mechanism</li>
                            <li>Mediation: A Collaborative Approach to Dispute Resolution</li>
                            <li>Conciliation: A Guided Settlement Process</li>
                            <li>Negotiation: The Foundation of ADR</li>
                            <li>ADR and Reduction of Judicial Backlog</li>
                            <li>Recent Developments in ADR in India</li>
                            <li>Challenges in the Implementation of ADR</li>
                            <li>The Way Forward for India</li>
                            <li>Suggestions</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">I. INTRODUCTION</h4>
                        <p>The huge backlog of cases in the Indian court system has long caused serious delays in the administration of justice. It is crucial to look for alternatives to traditional litigation since, as the well-known adage goes, &quot;justice delayed is justice denied.&quot; One effective way to deal with these issues is through Alternative Dispute Resolution (ADR). ADR encompasses a variety of dispute resolution techniques, including as arbitration, mediation, conciliation, and negotiation, that are intended to settle disputes outside of court in a more effective, economical, and adaptable way.</p>
                        <p className="mt-4">ADR has become more popular in India over the last few decades as a result of judicial encouragement, legislative backing, and growing litigant knowledge. In addition to lessening the load on the courts, it fosters peaceful resolution and maintains the parties&apos; relationships. This article examines the several types of alternative dispute resolution (ADR), its importance in the Indian setting, current advancements, difficulties, and ADR&apos;s potential to improve the legal system.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">II. UNDERSTANDING ADR: CONCEPT AND IMPORTANCE</h4>
                        <p>ADR includes a number of methods intended to settle conflicts without the need for formal court proceedings. ADR procedures are more adaptable and cooperative than traditional litigation, which is frequently contentious, costly, and time-consuming. They give parties more discretion over how their disagreements are handled and resolved.</p>
                        <p className="mt-4">ADR&apos;s significance stems from its capacity to guarantee anonymity, lower litigation costs, and deliver prompt justice. ADR provides a business-friendly setting where parties to commercial disputes can settle disagreements without jeopardising their working relationships. ADR encourages understanding and reconciliation in private conflicts, such as family disputes. Additionally, ADR makes a substantial contribution to lowering court workloads, which enhances the legal system&apos;s overall effectiveness.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">III. ARBITRATION: A FORMAL AND BINDING MECHANISM</h4>
                        <p>One of the most popular forms of alternative dispute resolution (ADR), particularly in business and international issues, is arbitration. It entails the selection of a panel of arbitrators or an impartial arbitrator who hears arguments from both sides and renders a legally enforceable ruling known as an arbitral award. The Arbitration and Conciliation Act, 1996, which is based on the UNCITRAL Model Law, governs arbitration in India.</p>
                        <p className="mt-4">India has worked hard in recent years to make arbitration the preferred method of resolving disputes. The Act was amended in 2015, 2019, and 2021 with the goals of encouraging institutional arbitration, minimising court intervention, and cutting down on delays. The establishment of arbitration institutions and the push for India to become a global arbitration hub reflect the growing importance of arbitration.</p>
                        <p className="mt-4">Nonetheless, there are still some difficulties with arbitration in India. The execution of arbitral rulings, high costs, and procedural delays continue to be major concerns. Arbitration remains a vital instrument for effectively resolving complicated business disputes in spite of these obstacles.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IV. MEDIATION: A COLLABORATIVE APPROACH TO DISPUTE RESOLUTION</h4>
                        <p>A neutral third party, referred to as a mediator, fosters conversation between the conflicting parties in order to help them come to a mutually agreeable resolution. Mediation is a voluntary and non-binding process. In contrast to arbitration, the mediator helps the parties establish common ground rather than imposing a conclusion.</p>
                        <p className="mt-4">An important turning point in the evolution of mediation in India was reached with the passing of the Mediation Act, 2023. Pre-litigation mediation, confidentiality, and the enforcement of mediated settlement agreements are all covered by the Act&apos;s extensive legal framework for mediation. Additionally, it encourages the creation of mediation committees and institutional mediation.</p>
                        <p className="mt-4">When connections need to be maintained, like in family disputes, business conflicts, and community issues, mediation works very well. It saves money, saves time, and gives parties control over the result. A move toward a less combative and more cooperative approach to conflict resolution is reflected in the increased use of mediation.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">V. CONCILIATION: A GUIDED SETTLEMENT PROCESS</h4>
                        <p>Another alternative dispute resolution (ADR) method that is comparable to mediation but requires the conciliator to play a more active role is conciliation. The conciliator may make suggestions and assist the parties in reaching a settlement during conciliation. The Arbitration and Conciliation Act of 1996 also governs it.</p>
                        <p className="mt-4">When a structured yet adaptable strategy is needed in disputes involving government agencies, public sector projects, and commercial contracts, conciliation is especially helpful. Conciliation has the ability to significantly contribute to the effective resolution of disputes, although being less common than arbitration or mediation.</p>
                        <p className="mt-4">The willingness of the parties to cooperate and the conciliator&apos;s ability to facilitate a just and balanced solution are key factors in the success of conciliation. Conciliation has the potential to become a more popular alternative dispute resolution (ADR) process in India with greater institutional backing and awareness.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VI. NEGOTIATION: THE FOUNDATION OF ADR</h4>
                        <p>The most straightforward and informal type of alternative dispute resolution (ADR) is negotiation, which involves direct discussion between parties to settle disagreements without the assistance of a third party. It can stop disagreements from turning into official legal actions and is frequently the first stage of dispute settlement.</p>
                        <p className="mt-4">Parties can customise solutions to suit their unique demands and interests thanks to the great flexibility of negotiation. It saves money, time, and maintains relationships. Negotiation is frequently employed in corporate settings to settle disagreements and contractual problems.</p>
                        <p className="mt-4">Despite its benefits, negotiating necessitates mutual trust, skilful communication, and a readiness to make concessions. When it works, official legal intervention is not necessary to get prompt and satisfactory results.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VII. ADR AND REDUCTION OF JUDICIAL BACKLOG</h4>
                        <p>ADR&apos;s ability to lessen the load on the judiciary is one of its biggest benefits. The millions of pending cases that Indian courts are currently handling cause delays in the administration of justice. By offering a different means of settling conflicts, alternative dispute resolution (ADR) relieves the burden on courts. Courts have the authority to send cases to alternative dispute resolution (ADR) procedures like arbitration, mediation, conciliation, and Lok Adalats under legal provisions like Section 89 of the Civil Procedure Code. In instance, Lok Adalats have been successful in reaching amicable settlements in a significant number of cases. ADR assists in accomplishing the constitutional objective of prompt justice under Article 21 by diverting disputes away from the conventional court system. By offering prompt and efficient conflict resolution, it also increases public trust in the legal system.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VIII. RECENT DEVELOPMENTS IN ADR IN INDIA</h4>
                        <p>In recent years, India has seen a number of significant advancements in ADR. A significant step toward institutionalising mediation is the enactment of the Mediation Act, 2023. In a similar vein, the Arbitration and Conciliation Act&apos;s modifications have improved the arbitration system and decreased judicial intervention. Additionally, the government has established arbitration centers throughout the nation and made steps to encourage institutional arbitration. Accessibility and efficiency have been further improved by the use of technology in alternative dispute resolution (ADR), such as online dispute resolution (ODR). ODR platforms make alternative dispute resolution (ADR) more accessible and inclusive by enabling parties to settle issues remotely. These changes show that alternative dispute resolution (ADR) is being increasingly acknowledged as a crucial part of the contemporary legal system.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IX. CHALLENGES IN THE IMPLEMENTATION OF ADR</h4>
                        <p>In India, ADR has a number of drawbacks despite its many benefits. The general public&apos;s ignorance about ADR procedures and their advantages is one of the main problems. Due to the familiarity and perceived authority of courts, many litigants still favour traditional litigation. Inadequate institutional infrastructure for ADR is another problem, especially in rural places. The success of the procedure is also impacted by the calibre and training of mediators and arbitrators. Concerns about excessive expenses, hold-ups, and the enforceability of verdicts are still prevalent in arbitration. Furthermore, some solicitors oppose alternative dispute resolution (ADR) because they see it as a danger to established litigation procedures. For ADR to be widely adopted and successful in India, several issues must be resolved.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">X. THE WAY FORWARD FOR INDIA</h4>
                        <p>ADR in India needs to be strengthened in a number of ways. First, the general public and legal experts should be better informed about alternative dispute resolution (ADR) processes. ADR should be a fundamental part of legal education in law schools and training facilities.</p>
                        <p className="mt-4">Second, the government ought to make investments in creating the institutional framework for alternative dispute resolution (ADR), such as setting up mediation and arbitration facilities all around the nation. ADR procedures can be made more credible and of higher quality by providing mediators and arbitrators with standardised training and accreditation.</p>
                        <p className="mt-4">Third, ensuring accountability, efficiency, and transparency in ADR processes should be the main goals of legislation reforms. ADR should be made more accessible by promoting the use of technology, especially online dispute resolution. Lastly, a shift in culture toward peaceful conflict resolution is required. The need for litigation can be greatly decreased by encouraging parties to settle disagreements through communication and collaboration.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">XI. SUGGESTIONS</h4>
                        <p>A thorough and multifaceted approach is needed to increase the efficacy of Alternative Dispute Resolution (ADR) in India. First and foremost, strong institutional frameworks must be developed immediately. Despite the existence of ADR mechanisms, their accessibility is still restricted, especially in rural and semi-urban areas. Efficiency, transparency, and public confidence in the system can be greatly increased by establishing well-equipped mediation and arbitration centers across the nation and encouraging institutional arbitration over ad hoc procedures.</p>
                        <p className="mt-4">Second, it is crucial to raise public awareness and legal literacy. Many litigants continue to rely on traditional litigation because they are not aware of alternative dispute resolution (ADR) processes and their benefits. The judiciary, government agencies, and legal institutions should aggressively carry out training initiatives, workshops, and awareness campaigns. In the long run, integrating ADR instruction within academic programs—particularly in legal studies—can also promote a culture of peaceful conflict settlement.</p>
                        <p className="mt-4">Professional training and capacity building for ADR practitioners is another essential component. The proficiency, impartiality, and abilities of mediators, arbitrators, and conciliators are critical to the success of alternative dispute resolution (ADR). To guarantee professionalism and uphold high standards, standardised training programs, certification procedures, and regulatory organisations must be established. Initiatives for ongoing skill development will increase the legitimacy of ADR procedures.</p>
                        <p className="mt-4">ADR is also greatly aided by judicial support. Through the efficient application of clauses like Section 89 of the Civil Procedure Code, courts should aggressively encourage parties to choose alternative dispute resolution (ADR) mechanisms during the pre-litigation phase. In order to maintain the autonomy and effectiveness of the process, court intervention in arbitration procedures should be kept to a minimum, guaranteeing a balanced approach between independence and oversight.</p>
                        <p className="mt-4">Furthermore, increasing trust in ADR requires bolstering enforcement measures. Parties are frequently deterred from choosing alternative dispute resolution (ADR) by the delays and procedural difficulties involved in implementing arbitral rulings and mediated agreements. Simplified processes, stringent deadlines, and efficient monitoring systems can guarantee prompt enforcement and improve these mechanisms&apos; dependability.</p>
                        <p className="mt-4">Finally, the advancement of Online Dispute Resolution (ODR) has the potential to completely transform the Indian ADR scene. ODR platforms can offer accessible, economical, and timely dispute resolution as a result of growing digitalisation, particularly for low-value and international conflicts. Promoting the use of technology in ADR procedures will increase productivity and reach more people.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">XII. CONCLUSION</h4>
                        <p>With its effective, adaptable, and affordable alternatives to traditional litigation, Alternative Dispute Resolution is a revolutionary development in the Indian legal system. Diverse possibilities for settling disputes in a way that is customised to the interests of the parties are offered by mechanisms like arbitration, mediation, conciliation, and negotiation. ADR has the ability to greatly reduce judicial backlogs and enhance access to justice with growing judicial backing, legislative changes, and technical developments. However, its success depends on resolving issues with infrastructure, implementation, and awareness.</p>
                        <p className="mt-4">In summary, alternative dispute resolution (ADR) is an essential supplement to the established legal system. India can develop a more effective, adaptable, and inclusive justice delivery system that satisfies the demands of a population that is changing quickly by adopting alternative dispute resolution (ADR).</p>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Aaryan Parekh, Student of Fifth Year BBA LLB studying at MIT-World Peace University.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Women’s Rights: Into the History of Patriarchy and Women",
            author: "By Anulekha Das",
            abstract: "Pre-Independent India, that is before 1947, sought a culture which is responsible for shaping the customs and traditions we have today. However, one thing which has been stagnant throughout the continual developments of life and society is the way women were and are being treated in the Indian societies. Our history goes a long way back, so long to the period demarcated as the Stone Ages (Paleolithic Age, Mesolithic Age and Neolithic age), followed by the Indus Valley Civilization and the Vedic Periods till the kingdoms that ruled our country and subsequently following into the colonial rule, but the question stands- how were women treated back then? Is today any different than yesterday?",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Preface</li>
                            <li>Pre-Historic ‘Egalitarian’ Society</li>
                            <li>Patriarchy and India</li>
                            <li>A Rigged Developing Society</li>
                            <li>Moving Towards a Solution</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">PREFACE</h4>
                        <p>Pre-Independent India, that is before 1947, sought a culture which is responsible for shaping the customs and traditions we have today. However, one thing which has been stagnant throughout the continual developments of life and society is the way women were and are being treated in the Indian societies. Our history goes a long way back, so long to the period demarcated as the Stone Ages (Paleolithic Age, Mesolithic Age and Neolithic age), followed by the Indus Valley Civilization and the Vedic Periods till the kingdoms that ruled our country and subsequently following into the colonial rule, but the question stands- how were women treated back then? Is today any different than yesterday?</p>
                        <p className="mt-4">To understand, the lives of women we trace back to the civilization of the earliest humans. The lives which marked the genesis for the we of today, ‘Stone Ages’..</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">PRE-HISTORIC ‘EGALITARIAN’ SOCIETY</h4>
                        <p>In the Stone Ages, it is comprehensible that there were no distinctions between gender- both men and women were on the same page of life, struggling, searching for homes, hunting animals and gathering the basic amenities to survive. Studies done by Lacy and Ocobock conclude that there were little to no sources which indicated that roles were divided based on genders, emphasizing on the fact that division of roles has emerged recently in human history.</p>
                        <p className="mt-4">These societies featured shared labour, power and food resources between men and women, findings as such actively challenged the narratives of ‘men being hunters and providers for the human society’’</p>
                        <p className="mt-4">The Egalitarian nature of our ancestors were encouraged and promoted for a very long time, for instance, in the Harappan Civilization, it was observed that there were several archaeological findings that depicted women goddesses or feminine figurines, and it was also found that women played a key role in the grounds of economic, domestic and social life- implying the high status that were enjoyed by the females back then.</p>
                        <p className="mt-4">It is unlikely that as the people of the stone ages developed, there were no shifts in the duties and responsibilities of men. Accurately, the Paleolithic society envisioned a dominion of people bearing equal responsibility irrespective of their sexes, which is exemplary in the conduct of studying gender equality.</p>
                        <p className="mt-4">So, now one may even wonder- “When did Patriarchy actually begin?”</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">PATRIARCHY AND INDIA</h4>
                        <p>Before India even witnessed the advent of Aryans and the other relevant historical theories. The shift from Paleolithic to Neolithic societies, surely, made an impact. The Neolithic Age observed the transition to farming, sedentary life and land ownership that allowed men to exercise their individual capacities and rights. As chores became more segregated, men started to become warriors and soldiers while women duly started to take up more domestic responsibilities, child-rearing, a reason citing for the increased production of agricultural labourers.</p>
                        <p className="mt-4">As the Society evolved, the emergence of the Vedic or the Early-Vedic Period, popularly known as the Rig-Vedic Period occurred between 1500BC – 1000BC, which played a prolific role to understand the concerned subject matter. Women were a part of the essential activities that took place in the Vedic period. If we investigate, women received educations and were capable of composing hymns, like Gargi and Maitreyi who were renowned for their inclusion in debates and ceremonies. Apart from this, women were allowed to attend the Sabhas (assemblies) or perform rituals alongside their partners or husbands. However, this period of utmost peace and stability in the society at all divisions, along with equal division of labour came to a halt with the coming of the Later Vedic Period (1000BC – 600BC). This period saw the social status of women decline as the society increasingly grew more rigid and patriarchal. As the society was introduced to the ‘varna system’, an unequal caste division- the women, too, became subjected to the Draconian Laws imposed by the Brahmins.</p>
                        <p className="mt-4">Women were debarred from entering temples and from getting access to any sort of Vedic literature. They were deprived of education, which was once familiar to women belonging to the earlier periods. They were forbidden from reciting prayers or even reading religious books and providing sacrifices. But the fiendish rules expanded massively, stripping women of their basic rights as time grew further. The Later Vedic-Period brought the barbaric tradition of Sati, where women used to burn themselves alive on their deceased husbands’ funeral pyre (abolished by the British colonial government in the year 1829) [discontinued in modern India under The Commission of Sati (Prevention) Act, 1987], following this, Widows were subjected to utmost cruelty, as men, (or husbands in this case) were given the status of supreme power which deemed the society to nullify widow remarriage. Girls, upon reaching the age of puberty or even below that, were forced to marry men who were twice or thrice older than them [prevented in modern India by The Child Marriage Prohibition Act, 2006] Parents preferred to have male infants or sons more, which made mothers feel a sense of shame if they conceived a girl (daughter). With this sense of inferiority, a tradition of female infanticide/foeticide commenced in the country.</p>
                        <p className="mt-4">In a 2001 census, according NIH, it was claimed that there were only 933 women for every 1000 men in India. As a measure against this, the Government enacted the Pre-Conception and Pre-Natal Diagnostic Techniques Act,1994 which effectively made it illegal to reveal the sex of an unborn child except for strictly medical purposes. And while abortion up to 20 weeks remains legal in India, pre-natal sex discernment is not. However, in an unfortunate reveal States like Haryana, Rajasthan, Maharashtra and Bihar still have pre-natal sex determination clinics operating illegally, widely for the preference of sons over daughter. This largely contributes to India’s estimated 46 million missing females at birth each year, which accounts for nearly half of global missing female births.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">A RIGGED DEVELOPING SOCIETY</h4>
                        <p>Why ‘rigged’? Despite, the enactment of the Constitution in 1950 or the enactment of various laws protecting women, our leaders could not seem to find a solution that would beat this very system of patriarchy which we carried on our shoulders to what we are today. The Constitution was framed extremely delicately, considering the welfare of people belonging to all kinds of group in India. Although, it is fact unturned that the framers did their very best to tackle such difficulties, social evils like this have adopted several guises to blend into the society and be practiced in a normative view.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">So, What does Patriarchy look like in recent days?</h5>
                        <ul className="space-y-4">
                            <li><strong className="text-white">1)</strong> Indian families that belong to the rural areas still prefer their sons to receive education over their daughters or restrict their female family members to cater to the domestic tasks.</li>
                            <li><strong className="text-white">2)</strong> Women are sometimes, confined to a dark room and kept away from male family members and are restricted from entering a religious place while they are on their menstrual cycle. We are living in a society where a pack of cigarettes cost much less and are distributed openly than sanitary napkins. The lack of knowledge on Menstrual Hygiene is itself a killer- In 2019, a 28-year-old housewife was declared dead due to a rare, life-threatening infection called the ‘Toxic Shock Syndrome’ (TSS). It was reported that the woman reused pieces of clothing during her cycle. According to a survey made by National Family Health Survey (2015-16), 48.5% of women in rural areas use napkins, 77.5% of women uses the same in urban areas [Pune Times Mirror]. Women in poverty-rich areas still find it shameful to ask their own spouses for availing such a need or even talk about menstruation in front of the male members.</li>
                            <li><strong className="text-white">3)</strong> India has inbred a ‘Rape Culture’, which is run by the minds of Indian men that still view women as an object from which he can derive pleasure. It is the misfortune bestowed on the women of India where despite being a victim of such cruelty – their characters are questioned. A chain of victim blaming persists, each time a girl falls victim to it. Absurd questions such as “What was she wearing?” or “Why was she still outside at night?” succeeded by weird assumptions that on mere smiling at a man or being friendly with the same invites men to engage with the woman sexually. According to NCRB (National Criminal Records Bureau), at least 31,982 and counting Rape Cases were reported in the year 2021. Additionally, NCRB claimed that in the year 2023, the rapes cases were up by 4% in the country. An average of 84 rape cases are reported everyday with only 28% of those victims receive legal remedy or justice. The same survey report shows that out of the total victims in 2022, a total of 21,063 women belonged to the age group 18-30 years.</li>
                            <li><strong className="text-white">4)</strong> Domestic Violence, a common form of abuse experienced by the women of our country. National Family Health Survey Data reported that 32% of married women between the age group 18-49 face violence from their spouse, and among these women, 29% of them face physical and sexual violence. Sources state that in 2024, 28,811 cases of violence against women were recorded to the National Commission of Women (NCW) with 6,350 cases under domestic violence. In Manusmriti, the first book that gave early India its law, provided that a woman (married) who is virtuous must treat her husband like a god, even if he is devoid of any good qualities, or misbehaves [Manusmriti; 154:5]. In our country, even with all the other developments that progress or enhance women’s right, we still tend to fail to protect the women from the abuse that they experience at the place where one seeks solace (or home). In Manusmriti, biased quotes- derogatory to women are smeared everywhere encouraging gender inequality in the society. It normalizes the act of punishing one’s wife when she does something wrong. Violence, however, does not end here. This torture is extended to workplaces and even in at public places.</li>
                            <li><strong className="text-white">5)</strong> This brings us to our final point, Violence experienced by women at public-and-work places. In 2012, a 23-year-old woman was brutally gang-raped and beaten at a moving bus after which she met her demise in the hospital, succumbing to the grievous injuries. This was not the only case that shook the entire nation. Last year, a young trainee doctor in Kolkata, West Bengal, met with the same fate while she was working her night shift at the hospital. Even before that, in 2023, a lady doctor from Kerala was murdered in her workplace. It is now increasingly considered that the safety of women in workplaces or in public places fall under the domain of Women’s Rights. But is the nation doing enough? The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) was enacted in 2013 as a measure to prevent and address the harassment women face at their place of work and provide legal mechanisms for redressal. This Act was enforced in the light of the case of Vishakha v. State of Rajasthan (1992), where Rajasthan government employee was gang-raped for attempting to stop child marriage, following this case, the Supreme Court brought to action the Vishakha Guidelines that were ordered to be enacted at all the workplaces, till the enforcement of a formal law, i.e aforementioned POSH Act. Even after the enactment of this act, there was no decline in the cases in the following years. For example, In 2013-14, the companies altogether reported more than 160 cases with the data reaching 465 in the following year. In 2022-23, the numbers peaked at 1,160 cases across 81 companies.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">MOVING TOWARDS A SOLUTION</h4>
                        <p>If nothing can be done even with the implementations of the various acts that seek to protect the dignity of women, then how can we reach to a solution? Well, the answer is simple, it is by erasing the ingrained patriarchal norms that are taught to us at an early age. For example, rather than teaching only the daughters how chores around the house is done- it is crucial that even sons take part in the same. Or by avoiding to call boys as ‘girls’ if they cry. In Indian Law, Marital Rape is not viewed as a crime because in certain sections of our society, people take the stand that husbands have the right to engage with their wife sexually even if she does not want to. Thus, eliminating Patriarchy is a challenge and requires determination and will power, however some ways prescribed are:</p>
                        <ul className="space-y-4 mt-4">
                            <li><strong className="text-white">1)</strong> To Equip the people about patriarchy and inform them about the harm it does to the society</li>
                            <li><strong className="text-white">2)</strong> Educating oneself about the rights they possess, and the legal remedy that can be granted is also an important step.</li>
                            <li><strong className="text-white">3)</strong> Challenging the internalized biases and the assumptions that we hold regarding gendered roles.</li>
                            <li><strong className="text-white">4)</strong> Encouraging women participation in political arenas and advocating for women’s rights.</li>
                            <li><strong className="text-white">5)</strong> It is necessary that the existing laws are reviewed and rechecked to free the nation from discriminatory rules.</li>
                            <li><strong className="text-white">6)</strong> It is also important that we realise the inequality that we face and stand bravely to combat it.</li>
                        </ul>
                        <p className="mt-4">Thus, battling this social evil requires us to stand in unity against it, because if not us then who?</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Homegrown Staff (2021). Laws perpetuating patriarchy in India</li>
                            <li>Faisal C.K (2022). Curing the patriarchal mindset of the legal system</li>
                            <li>Akshi Chawla &amp; CEDA (2024). POSH Act Cases risen data in India</li>
                            <li>Department of Women and Child Development. POSH ACT, 2013. Government of NCT of Delhi</li>
                            <li>Naseera N. M &amp;. Moly Kuruvilla (2022). Sexual Politics of Manusmriti</li>
                            <li>Economic Times (2025). Domestic Violence Cases. National Commission for Women</li>
                            <li>News click Report (2023). Crime against women in India up by 4%</li>
                            <li>Awadesh K.S (2023). Position of women in Rig Vedic Societies</li>
                            <li>Angelika H (2018). Gender Stereotypes in Stone Age</li>
                            <li>Vicky P (2019). Reusing clothes during Menses. Pune Times Mirror</li>
                            <li>Hirday N. P. (2014). Status of Women as depicted in Manusmriti</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Anulekha Das, B.A LLB, Jogesh Chandra Chaudhuri Law College.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Criminal Justice Reform: Strengthening Fairness, Efficiency, and Accountability",
            author: "By Pooja",
            abstract: "Criminal justice reform has become one of the most urgent conversations in democratic societies today. People are losing faith in systems that are slow, unequal, and poorly accountable. This article examines how criminal justice institutions are evolving — across policing, courts, prisons, and victim services — while honestly acknowledging the deep structural obstacles that remain. It argues that lasting reform must place rights, accountability, and genuine public participation at its center. Only then can a justice system earn the trust it needs to function effectively.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Why Reform Is Necessary</li>
                            <li>Legislative and Police Reforms</li>
                            <li>Judicial Reforms</li>
                            <li>Prison and Correctional Reforms</li>
                            <li>Implementation Challenges</li>
                            <li>Technology&apos;s Role</li>
                            <li>Global Lessons and Recommendations</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>In any democracy, the criminal justice system carries a fundamental responsibility: maintaining social order while protecting the rights of every individual who comes into contact with it. In India, this system rests on three pillars — the police, the judiciary, and correctional institutions — each responsible for a distinct but interconnected role in preventing crime, resolving disputes, and rehabilitating offenders.</p>
                        <p className="mt-4">For decades, however, the system has struggled under the weight of outdated laws, institutional inefficiency, and weak accountability. The gap between what justice promises and what people actually receive has grown steadily wider. Rising cybercrime, financial fraud, and an increasing caseload have made things worse. In 2023, the Indian government responded by replacing several colonial-era criminal statutes with updated legislation — a significant step forward. But genuine reform goes far beyond rewriting laws. It requires rebuilding the culture, capacity, and credibility of every institution in the system.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">WHY REFORM IS NECESSARY</h4>
                        <p>The demand for reform is not abstract — it emerges directly from the experiences of people who have encountered a system that routinely fails them.</p>
                        <p className="mt-4">The most visible failure is delay. When cases take years or even decades to resolve, justice loses its meaning entirely. The Supreme Court addressed this in Hussainara Khatoon v. State of Bihar, ruling that the right to a speedy trial is protected under Article 21 of the Constitution. The case brought national attention to undertrial prisoners — individuals held in custody for years without conviction, simply because the system could not process their cases in time. Their situation exposed not just a procedural failure but a moral one: a state that detains people indefinitely without timely adjudication has broken one of its most basic obligations.</p>
                        <p className="mt-4">Unequal access is an equally serious problem. People with financial resources and social connections can navigate the legal system, however imperfectly. Those without — marginalized communities, low-income individuals, women experiencing violence — face layered barriers: limited awareness of their rights, inability to afford legal representation, geographical distance from courts, and social pressures that discourage them from pursuing formal remedies at all. For these groups, the justice system often feels less like a resource than an obstacle.</p>
                        <p className="mt-4">Crime itself is also evolving in ways the system is not yet equipped to handle. Cybercrime and financial fraud have grown rapidly, while many law enforcement agencies lack the training and tools to investigate them effectively. Organized crime operates across jurisdictions in ways that traditional frameworks were never designed to address. Updating the system to meet these new realities is not optional — it is overdue.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">LEGISLATIVE AND POLICE REFORMS</h4>
                        <p>Any serious reform agenda must begin with the legal framework itself. The Supreme Court&apos;s ruling in Maneka Gandhi v. Union of India established that laws restricting personal liberty must be not just legally authorized but genuinely fair and reasonable — a standard that places real constitutional demands on criminal legislation. Lawmakers must ask not just whether a law works but whether it respects the rights of those it affects.</p>
                        <p className="mt-4">One important area is decriminalization. Many minor, non-serious offenses remain on the books as criminal matters, clogging courts and contributing to prison overcrowding. Removing these from the criminal process — addressing them instead through civil or administrative mechanisms — can relieve significant pressure on the system without compromising public safety. At the same time, serious offenses must carry credible consequences. The two aims are complementary rather than contradictory. Any expansion of state power in criminal law must come with robust procedural safeguards. Clear limits on detention, protection against coercive interrogation, and meaningful access to legal counsel are not barriers to effective law enforcement — they are what makes enforcement legitimate and trustworthy.</p>
                        <p className="mt-4">Police reform is equally important, because for most citizens the police represent their first and most direct encounter with the justice system. Two landmark rulings have set critical standards here. In D.K. Basu v. State of West Bengal, the Supreme Court established detailed guidelines to prevent custodial abuse and protect the rights of those in police custody. In Prakash Singh v. Union of India, the Court pushed for structural reforms to reduce political interference in policing and strengthen accountability mechanisms.</p>
                        <p className="mt-4">Despite these rulings, implementation has been inconsistent. Many police forces remain under-resourced, inadequately trained, and resistant to cultural change. Technology — forensic science, digital surveillance, data analytics — has strengthened investigative capability, but without corresponding oversight frameworks, it also creates new avenues for rights violations. Genuine police reform must pursue better training, stronger community relationships, and independent oversight simultaneously. None of these alone is sufficient.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">JUDICIAL REFORMS</h4>
                        <p>Courts are the system&apos;s center of gravity, and their dysfunction radiates outward across the entire justice process. India&apos;s judicial backlog — tens of millions of pending cases across different court levels — represents one of the most serious institutional failures in the country&apos;s democratic life.</p>
                        <p className="mt-4">The Supreme Court&apos;s ruling in A.R. Antulay v. R.S. Nayak confirmed that unreasonable trial delay violates the constitutional right to a speedy trial. Addressing this requires action on multiple fronts: increasing the number of judges, establishing fast-track courts for urgent categories of cases, and implementing better case management systems. India&apos;s judge-to-population ratio remains among the lowest of any major democracy — a structural deficit that no amount of procedural innovation can fully compensate for.</p>
                        <p className="mt-4">The expansion of e-courts and virtual hearings, accelerated by the COVID-19 pandemic, has delivered real improvements in processing speed and accessibility. Digital filing, online case tracking, and remote hearings reduce friction for all parties. However, digitization must be pursued carefully. Shifting court processes online can exclude those without reliable internet access, digital literacy, or the financial means to engage with technology-dependent systems. Rural populations and lower-income communities are most at risk of being left behind. Modernization that worsens access for the most vulnerable is not genuine reform. Procedural fairness must never be traded away for speed.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">PRISON AND CORRECTIONAL REFORMS</h4>
                        <p>Prisons serve their social purpose best when they rehabilitate, not merely contain. The Supreme Court affirmed in Sunil Batra v. Delhi Administration that incarcerated individuals retain their fundamental rights and are entitled to humane treatment. The current reality in many Indian facilities — severe overcrowding, inadequate physical conditions, limited programming — falls well short of this standard.</p>
                        <p className="mt-4">Rehabilitation requires investment. Education programs, vocational training, and psychological counselling give incarcerated individuals tools to build different lives after release. Evidence from multiple contexts shows that well-designed rehabilitation programs significantly reduce reoffending rates — a direct benefit to communities and a meaningful reduction in the long-term cost of crime. Treating rehabilitation as a core function of the correctional system, rather than an optional addition, is both the ethical and the practically effective approach. Victim support deserves equal attention. For too long, victims have been treated primarily as witnesses — instruments of prosecution rather than individuals with their own rights and needs. The Supreme Court&apos;s observations in Bodhisattwa Gautam v. Subhra Chakraborty helped elevate victim welfare within the legal framework, but practical support remains inadequate, particularly outside major cities. Accessible legal aid, trauma counselling, witness protection, and fair compensation mechanisms are all essential components of a justice system that genuinely serves everyone affected by crime.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IMPLEMENTATION CHALLENGES</h4>
                        <p>Even well-designed reforms fail without the institutional capacity and political will to carry them through. The Supreme Court&apos;s ruling in Vineet Narain v. Union of India emphasized that accountability and transparency in investigation are non-negotiable, while the 2024 decision in Sita Soren v. Union of India reaffirmed that no one stands above the law. These principles matter enormously — but principles only become practice when institutions are equipped and motivated to uphold them. Corruption remains one of the most corrosive obstacles to reform. When outcomes can be influenced through payment or connection, the promise of equal justice is exposed as hollow. Institutional legitimacy crumbles, and public trust — already fragile — erodes further. Infrastructure deficits compound the problem: too few courtrooms, outdated facilities, understaffed courts, and poor administrative systems all slow case processing and reduce the quality of justice delivered.</p>
                        <p className="mt-4">The continuing detention of unconvicted undertrial prisoners is among the system&apos;s most serious ongoing failures. Many individuals spend months or years in custody for offenses whose potential sentences are shorter than their actual time in detention — a straightforward violation of constitutional rights that persists largely because the system lacks the capacity to process cases in time. Digital evidence introduces new complications. Questions around the authenticity of digital records, the privacy rights of individuals whose data is gathered and analysed, and the potential for digital materials to be fabricated or manipulated require legal frameworks and technical safeguards that are still being developed. Investigative agencies operating with powerful digital tools, without adequate oversight, pose genuine risks to civil liberties.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">TECHNOLOGY&apos;S ROLE</h4>
                        <p>Technology has made real contributions to criminal justice reform. E-filing and digital case management have reduced administrative delays. Advanced forensic tools have improved evidence quality. AI-assisted case prioritization tools show promise in helping overburdened institutions allocate their resources more effectively. These are meaningful advances. But technology is not a neutral force. Algorithmic tools trained on historical data can embed and amplify existing biases, producing recommendations that systematically disadvantage groups that have historically been over-policed. Surveillance technologies, without proper legal frameworks, threaten privacy at scale. The digital divide — the gap in access and digital literacy between urban and rural populations, and between wealthier and poorer individuals — means that technology-driven reforms can deepen inequality if equity is not treated as a design requirement from the outset. Strong data protection legislation, transparent rules governing digital evidence, independent oversight of surveillance tools, and sustained investment in digital inclusion are all prerequisites for technology to serve justice rather than distort it.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">GLOBAL LESSONS AND RECOMMENDATIONS</h4>
                        <p>International experience offers useful perspectives. Restorative justice programs — which bring offenders and victims together to acknowledge harm and work toward repair — have shown positive results in Canada, New Zealand, and parts of Europe, particularly for younger offenders and less serious offenses. Community policing models, built on sustained relationships between officers and the neighbourhoods they serve, have improved both crime prevention and public trust in multiple contexts. Alternative sentencing approaches reduce prison overcrowding while producing better outcomes for many individuals than incarceration would. The lesson is not that any foreign model should be adopted wholesale, but that the best-performing systems share common characteristics: openness to evidence, willingness to innovate, and a consistent focus on people rather than processes.</p>
                        <p className="mt-4">Translating these lessons into lasting domestic reform requires sustained effort across several areas. Judicial capacity must be significantly expanded. Law enforcement training must keep pace with evolving crime, particularly in digital domains. Independent oversight bodies must have genuine authority and resources. Legal aid must be treated as a right, not a charity. Technology adoption must be paired with strong privacy protections and real efforts to close the digital divide. And reform must be understood as a continuous process — evaluated regularly, adjusted in response to evidence, and kept responsive to the society it serves.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>India&apos;s push for criminal justice reform represents a genuine and serious attempt to modernize institutions that have long been inadequate to the demands placed on them. The 2023 legislative overhaul, supported by decades of progressive judicial precedent, creates real opportunities for improvement. But the distance between reform on paper and reform in practice remains significant. What ultimately determines whether reform succeeds is not the quality of the legislation but the quality of its implementation — the willingness of institutions to be accountable, the capacity of the system to deliver consistent and fair outcomes, and the engagement of citizens in holding the system to its promises. A justice system worthy of public trust must be built not just on better laws, but on genuine accountability, equal access, and the sustained commitment to treat every person who enters it with fairness and dignity.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Hussainara Khatoon v. State of Bihar, (1980) 1 SCC 81.</li>
                            <li>Maneka Gandhi v. Union of India, (1978) 1 SCC 248.</li>
                            <li>D.K. Basu v. State of West Bengal, (1997) 1 SCC 416.</li>
                            <li>Prakash Singh v. Union of India, (2006) 8 SCC 1.</li>
                            <li>A.R. Antulay v. R.S. Nayak, (1992) 1 SCC 225.</li>
                            <li>Sunil Batra v. Delhi Administration, (1978) 4 SCC 496.</li>
                            <li>Bodhisattwa Gautam v. Subhra Chakraborty, (1996) 1 SCC 496.</li>
                            <li>Vineet Narain v. Union of India, (1998) 1 SCC 226.</li>
                            <li>Sita Soren v. Union of India, 2024 INSC 161.</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Pooja, GLA University BALLB.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Alternate Dispute Resolution",
            author: "By Aarya Ravindra Chavan",
            abstract: "The term Alternate Dispute Resolution (ADR) means any procedure, agreed to by the parties of a dispute, in which they use the services of a neutral party to assist them in reaching agreement and avoiding litigation. Instead, the parties involved agree to use an ADR process such as mediation or arbitration. Arbitration in India is an age-old concept originating from ancient India.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction: Meaning of Alternate Dispute Resolution</li>
                            <li>How does Alternate Dispute Resolution work?</li>
                            <li>Development of Arbitration Law in India</li>
                            <li>Arbitration and Conciliation Act, 1996</li>
                            <li>Growing Role of ADR in Judiciary</li>
                            <li>Various modes of Alternate Dispute Resolution</li>
                            <li>Institutional Arbitration</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION: MEANING OF ALTERNATE DISPUTE RESOLUTION</h4>
                        <p>The term Alternate Dispute Resolution (ADR) means any procedure, agreed to by the parties of a dispute, in which they use the services of a neutral party to assist them in reaching agreement and avoiding litigation. Instead, the parties involved agree to use an ADR process such as mediation or arbitration.</p>
                        <p className="mt-4">Arbitration in India is an age-old concept originating from ancient India. The same is a grassroot level called as Panchayat (s). It is still prevalent in villages where the elderly person (s) or community of the village solve the matter of dispute among villagers.</p>
                        <p className="mt-4">Alternative dispute resolution has gained broad acceptance by the public and the legal profession. If both parties involved in a civil (non-criminal) dispute willingly sign a contract to do so, they are free to choose ADR to resolve the matter. When a lawsuit is pending, in some cases, courts encourage or require the litigants to use ADR to help settle disputes more amicably and reduce the court system’s heavy caseload.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">HOW DOES ALTERNATE DISPUTE RESOLUTION WORK?</h4>
                        <ul className="list-disc pl-5 space-y-4">
                            <li>How alternative dispute resolution works will depend on the ADR method that both parties agree to use. Many ADR attempts begin with direct negotiation between two parties, with both working together to clarify the issue and figure out a solution that works for all parties involved. If a dispute cannot be solved this way, the parties may attempt to move to mediation or arbitration.</li>
                            <li>To do so, both parties hire a neutral third party, often an attorney who is skilled in these areas. That third party will then use the discovery process to find out as much information as possible (including details the parties were unwilling to disclose to each other) and help brainstorm mutually agreeable solutions.</li>
                            <li>In mediation, the parties themselves will agree on an outcome. In arbitration, the neutral party decides the outcome.</li>
                            <li>If a case cannot be resolved with ADR, each party may decide to take it to court. In this situation, a judge will decide the outcome of the case.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">DEVELOPMENT OF ARBITRATION LAW IN INDIA</h4>
                        <ul className="list-disc pl-5 space-y-4">
                            <li>The history of ADR in India took a significant turn during British rule. As the British East India Company consolidated its political and administrative control over India, the traditional panchayat system and other indigenous dispute-resolution mechanisms began to lose prominence. The British sought to impose their legal framework, leading to the introduction of formal courts and codified laws.</li>
                            <li>However, even under British rule, ADR was not entirely abandoned. The British recognised the effectiveness of arbitration, especially in commercial disputes. Early legislative attempts to formalise ADR mechanisms can be traced back to the Bengal Regulations of 1772, 1780, and 1781. These regulations encouraged arbitration as a means of resolving disputes in the British-administered territories of Bengal, Bombay, and Madras. Arbitration was seen as a politically safe and convenient method to maintain order and manage disputes within the growing trading community.</li>
                            <li>In 1899, the Indian Arbitration Act was passed, based on the English Arbitration Act of 1889. It was the first comprehensive legislation on arbitration in India. However, its scope was limited to the presidency towns of Calcutta, Bombay, and Madras. The Act provided for arbitration in civil disputes, but it was criticised for being deficient and was subject to various judicial criticisms.</li>
                            <li>Despite these shortcomings, arbitration continued to develop, particularly in the commercial sector. Over the years, subsequent legislations were introduced to expand the scope of arbitration. For example, Act VIII of 1857 codified the procedure of civil courts, including arbitration in certain suits, and in 1940, the Arbitration Act replaced the 1899 Act, consolidating the law on arbitration across British India.</li>
                            <li>After India gained independence in 1947, the country inherited the legal framework established by the British, including the judicial system and ADR mechanisms. The post-independence era saw a renewed focus on ADR, particularly in response to the increasing backlog of cases in Indian courts.</li>
                            <li>The 1980s marked a significant period in the evolution of ADR in India. In 1982, the concept of Lok Adalat’s (people’s courts) was introduced in the state of Gujarat to promote out-of-court settlements. Lok Adalat’s were designed as informal tribunals where parties could resolve disputes without the formalities of a courtroom. The success of the first Lok Adalat held in Junagadh, Gujarat, led to the spread of this practice across the country.</li>
                            <li>In 1987, the Legal Services Authorities Act was enacted, providing statutory recognition to Lok Adalat’s and making them a permanent part of the Indian legal system. Lok Adalat’s primarily handled small civil disputes, including family matters and petty criminal cases, and their decisions were binding on the parties involved. The introduction of Lok Adalat’s was a crucial step in institutionalising ADR mechanisms in India.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">ARBITRATION AND CONCILIATION ACT, 1996: A NEW ERA FOR ADR IN INDIA</h4>
                        <p>In the context of increasing globalisation and India’s integration into the world economy, the need for a modern and effective ADR system became evident. The Arbitration and Conciliation Act of 1996 was a landmark development in the history of ADR in India. It replaced the Arbitration Act of 1940 and brought India’s arbitration laws in line with the UNCITRAL Model Law on International Commercial Arbitration.</p>
                        <p className="mt-4">The 1996 Act streamlined arbitration procedures and provided a comprehensive framework for both domestic and international arbitration. It also introduced the concept of conciliation, allowing parties to settle disputes through a neutral third party. The Act aimed to make arbitration quicker, less expensive, and more efficient, catering to the needs of both individuals and businesses.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Key features of the Arbitration and Conciliation Act, 1996, include:</h5>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Recognition of international arbitration agreements.</li>
                            <li>Binding nature of arbitral awards.</li>
                            <li>Limited judicial intervention in arbitration proceedings.</li>
                            <li>Provisions for the enforcement of foreign arbitral awards under the New York Convention.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">GROWING ROLE OF ADR IN JUDICIARY</h4>
                        <ul className="list-disc pl-5 space-y-4">
                            <li>ADR is very essential to reduce the burden of rising cases on various courts in India. The number sums into crores. It is astonishing to note that one lakh cases are pending even in lower courts for more than Thirty years up. Maharashtra, Bihar, Bengal constitute over ninety percent. These include over 67,000 criminal cases &amp; 33,000 related to civil matters.</li>
                            <li>While over one lakh cases are pending in the lower courts of India for more than thirty years, there are nearly five lakh cases pending for more than 20 to 30 years &amp; another 28.7 Lakhs that are pending for 10-20 years. This takes the total of cases pending for over a decade to 34.6 Lakhs reflected in the analysis of data compiled by National Judicial Data Grid. State wise table prepare by the said agency is provided hereunder for information &amp; reference.</li>
                            <li>ADR, with its variety of methodologies, plays a vital role in India in dealing with the problem of cases that are pending in Indian courts. Alternative Dispute Resolution mechanisms give the Indian judiciary scientifically established tools that aid in lightening the load on the courts. Arbitration, conciliation, mediation, negotiation, and Lok Adalat are just a few of the different techniques of dispute resolution offered by ADR. Negotiation in this context refers to self-counselling between the parties to settle their issue; nevertheless, there is no legal definition of negotiation in India.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">VARIOUS MODES OF ALTERNATE DISPUTE RESOLUTION</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">ARBITRATION</h5>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>It is defined under Section 2 (1)(a) of the Act. It is an alternative to litigation in courts and is advantageous as it provides flexibility and confidentiality. According to Black Law Dictionary, it means a method of resolving disputes which includes two parties and a neutral third party whose decision is binding on both parties.</li>
                            <li>Without a legally binding arbitration agreement in place before a disagreement arises, the arbitration procedure is impossible. In this method of dispute resolution, the parties designate one or more arbitrators to hear their case. The arbitrator&apos;s ruling, known as the &quot;Award,&quot; is binding on the parties. Getting a fair settlement of a dispute outside of court without needless expenditure or delay is the goal of arbitration.</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">CONCILIATION</h5>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Conciliation is an informal process in which the conciliator (the third party) tries to bring the disputants to agreement. He does this by lowering tensions, improving communications, interpreting issues, providing technical assistance, exploring potential solutions and bringing about a negotiated settlement. Mediation is a structured process in which the mediator assists the disputants to reach a negotiated settlement of their differences. Mediation is usually a voluntary process that results in a signed agreement which defines the future behaviour of the parties. The mediator uses a variety of skills and techniques to help the parties reach the settlement, but is not empowered to render a decision. Basically, these processes can be successful only if the personality of the conciliator or the mediator is such that he is able to induce the parties to come to a settlement. The Act gives a formal recognition to conciliation in India. Conciliation forces earlier and greater hold of the case. It can succeed only if the parties are willing to re-adjust. According to current thinking conciliation is not an alternative to arbitration or litigation, but rather complements arbitration or litigation.</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">MEDIATION</h5>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Conciliation is an informal process in which the conciliator (the third party) tries to bring the disputants to agreement. He does this by lowering tensions, improving communications, interpreting issues, providing technical assistance, exploring potential solutions and bringing about a negotiated settlement. Mediation is a structured process in which the mediator assists the disputants to reach a negotiated settlement of their differences. Mediation is usually a voluntary process that results in a signed agreement which defines the future behaviour of the parties. The mediator uses a variety of skills and techniques to help the parties reach the settlement, but is not empowered to render a decision. Basically, these processes can be successful only if the personality of the conciliator or the mediator is such that he is able to induce the parties to come to a settlement. The Act gives a formal recognition to conciliation in India. Conciliation forces earlier and greater hold of the case. It can succeed only if the parties are willing to re-adjust. According to current thinking conciliation is not an alternative to arbitration or litigation, but rather complements arbitration or litigation.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INSTITUTIONAL ARBITRATION</h4>
                        <p>With the growth of the economy, trade and commerce developed. This was true for the Indian market also. With the enlargement of the economy, and investment into the Indian market by the foreign investors, demand for institutional arbitration shot up suddenly. Despite the rising demand for institutional arbitration, the growth of institutional arbitration procedures has been slow.</p>
                        <p className="mt-4">But in recent times, prestigious institutional arbitration association like the London Court of International Arbitration, The Permanent Court of Arbitration and the International Chamber of Commerce have opened Centres in India. This could be seen as a very positive sign because these institutes are very well-known and prestigious and wouldn’t have opened Centres in India if they did not see a potential growth in Institutional arbitration.</p>
                        <p className="mt-4">In the case of Institutional Arbitration, the disputing parties submit their issue to an institution that has been designated to administer the arbitrational process. The institution then arbitrates the dispute according to the rules laid by them in front of the parties. Although, the dispute is not arbitrated by the institution. The institute selects a panel which administers the whole process.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Advantages of Institutional Arbitration</h5>
                        <ul className="space-y-4">
                            <li><strong className="text-white">1. Reputation:</strong> One of the biggest advantages of opting for institutional arbitration is the reputation of the institution. Decisions given under the name of any prestigious institution is easier to enforce as it is accepted by a majority of other bodies.</li>
                            <li><strong className="text-white">2. Efficient Administration:</strong> One more advantage of going for institutional arbitration is that such institutes provide trained staff to the parties for administering the whole process. The administrative staff will lay down the rules, ensure that the time limits are being complied to, and the process is going ahead as smoothly as possible. In the case of ad-hoc arbitration, when the arbitrator himself has to do all the administrative work, it may distract him from his primary objective.</li>
                            <li><strong className="text-white">3. Clear Rules:</strong> In the case of institutional arbitration, the rules of the arbitration are generally fixed by the institution. There is no further dispute between the parties regarding the rules of the procedure, which might happen in the case of ad-hoc arbitration. Also, the rules are framed keeping all eventualities in mind, as these institutions have an experience of going through various arbitration proceedings and know what eventualities may arise. Also, the rules are flexible in nature. There is a mechanism to oppose any part of the process which is not consistent.</li>
                            <li><strong className="text-white">4. Quality of Arbitral Panel:</strong> One of the major advantages of institutional arbitration is that they have an extensive panel of experts, who acts as arbitrators. These institutions also have arbitrators who specialize in different areas, so that any type of dispute can be resolved. Big institutions like ICC also have a network of national committee for appointment of arbitrators to ensure that there is no bias based on the country to which the parties belong.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>The history of ADR is a testament to its enduring relevance as a method of dispute resolution. From its ancient roots in community-based mediation and arbitration to its modern institutionalised forms, ADR has evolved in response to the changing needs of societies. In India, ADR has played a critical role in providing access to justice, reducing the burden on courts, and fostering a culture of amicable settlements.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">BIBLIOGRAPHY</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>https://www.bamboohr.com</li>
                            <li>https://www.ipleaders.in</li>
                            <li>https://www.scribd.com</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Aarya Ravindra Chavan, University of Mumbai Law Academy.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Constitutional Morality vs. Social Morality: Which should prevail in a Democratic Society?",
            author: "By Dishika Yogesh Chavan",
            abstract: "This article discusses the distinction between Constitutional Morality and Social Morality as one of the main issues in constitutional democracies, particularly in India. Social Morality is something that represents the customs, morals, values, traditions and collective conscience of society whereas Constitutional Morality talks about the values enshrined in the Constitution such as justice, equality, fraternity and dignity. This article explores the conflicts between the two and argues that Constitutional Morality should prevail when there are issues or tensions. It also focuses on key landmark judgements of the Supreme Court, including Navtej Singh Johar vs. Union of India and Indian Young Lawyers Association vs. State of Kerala.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Understanding Social Morality</li>
                            <li>Understanding Constitutional Morality</li>
                            <li>Judicial Approach</li>
                            <li>Critical Analysis</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>Morality is something which is not based on written laws rather it is about what the society believes is right and acceptable. These shared beliefs, shaped by cultures, traditions and religion, is what we call Social Morality. However, courts usually do not follow what the majority thinks. They are bound to follow the supreme law of the land (Constitution).</p>
                        <p className="mt-4">There are circumstances where what society accepts may go against the Constitution. In such situations, the judges rely on Constitutional Morality which means that they consider the constitution’s values and not the public opinion. In India, the Supreme Court has often used this approach to protect the rights of minorities even if it goes against the traditional beliefs.</p>
                        <p className="mt-4">This topic critically evaluates the true meaning of Constitutional Morality; how is it differentiates Social Morality and why it should prevail in diverse democratic society.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">BODY</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Understanding Social Morality</h5>
                        <p>Social Morality essentially means a set of values and norms that people in a society share to guide how they behave with each other. It develops overtime through culture, traditions, religion and everyday interactions. It is a dynamic, unwritten, and culturally dependent set of rules that defines “right” or “wrong” actions for maintaining community welfare, often focusing on honesty, respect, and duty. In layman’s terms Social Morality helps maintain harmony and ensures that people can live together peacefully.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Understanding Constitutional Morality</h5>
                        <p>Constitutional Morality entails the adherence to constitutional norms within a democratic system. It goes beyond the literal interpretation to encompass a commitment to values such as sovereignty, social justice and equality in constitutional adjudication. In simple terms, it is based on the principles of justice, liberty, equality, and fraternity. It is the idea that decisions should be guided by constitutional values rather than what the majority thinks is right.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">Judicial Approach: Upholding Constitutional Morality</h5>
                        <p>In a landmark judgement in Justice K.S. Putthaswamy vs. Union of India, the Supreme Court laid the foundation by recognizing privacy as a fundamental right. It connected privacy with dignity, personal choice, and individual freedom, making it clear that aspects like relationships, identity and personal decisions are protected by the Constitution and not subject to society’s changing opinions.</p>
                        <p className="mt-4">Building on this, in another popular case Navtej Singh Johar vs. Union of India, the court took a further step and decriminalized consensual same-sex relationships. This case focused on the fact that people should not be denied their dignity or rights just because the majority disapproves. The judgement highlighted that Constitutional Morality should be preferred over social prejudice and stigma.</p>
                        <p className="mt-4">Simultaneously, in Indian Young Lawyers Association vs. State of Kerala, the Court dealt with the exclusion of women from entering the Sabrimala temple. It was held in this case that the practice of excluding women from entering the temple during menstruation is considered discriminatory and did not fit into the principles of equality and freedom of religion. Even though the custom had strong public support, the court chose to uphold the constitutional values.</p>
                        <p className="mt-4">These 3 landmark judgements show how the judiciary protected individuals’ rights by relying on Constitutional Morality. These cases highlighted that when there are conflicts between the beliefs of society and the constitution’s values, the courts tend to stand with the Constitution to ensure dignity, equality, and justice for all.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CRITICAL ANALYSIS</h4>
                        <p>Even though Constitutional Morality sounds ideal, it is not easy to enforce the same in a democratic society. One common concern is that the judges may be seen overstepping their role by making decisions based on constitutional values that do not match what a large section of society believes.</p>
                        <p className="mt-4">It can be pointed out in the case of Indian Young Lawyers Association vs. State of Kerala that it can be difficult to bring a legal change when the people are not ready to accept it, which highlighted the gap between law and public opinion.</p>
                        <p className="mt-4">Another concern is that Constitutional Morality can be understood differently by different judges. Thus, leading to inconsistent decisions, representing the law as unclear or unpredictable.</p>
                        <p className="mt-4">At the same time, depending solely on Social Morality is harmful as it may allow unfair and discriminatory practices and ideas. Therefore, balance is essential. The Courts should follow constitutional values making sure that the society accepts these changes.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>The debate between Constitutional Morality and Social Morality is not merely theoretical but has real implications for democracy, rights, and justice. In circumstances of conflict, Constitutional Morality must take preferences, as it protects the fundamental rights of individuals and ensures before the law.</p>
                        <p className="mt-4">The vision of B.R. Ambedkar was clear that India’s progress depends on its commitment to constitutional values rather than outdated social norms. The judiciary, particularly the Supreme Court of India, had upheld this vision by prioritizing justice over tradition.</p>
                        <p className="mt-4">However, for Constitutional Morality to be truly effective, it must not remain confined to courtrooms. It must gradually become a part of societal consciousness. Only when Social Morality evolves in harmony with constitutional values can India achieve true justice, equality, and democratic integrity.</p>
                        <p className="mt-4">In conclusion, Constitutional Morality should prevail not as a tool to suppress society, but as a guiding force to reform and uplift it.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Navtej Singh Johar vs Union of India (2018).</li>
                            <li>Indian Young Lawyers Association vs The State of Kerala (2018).</li>
                            <li>Justice K.S. Puttaswamy (Retd.) &amp; Anr. vs. Union of India &amp; Ors. (2017)</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Dishika Yogesh Chavan, Kirit P. Mehta School of law (NMIMS).</p>
                    </div>
                </div>
            )
        },
        {
            title: "The Mediation Act, 2023: Transforming ADR to Address India's Judicial Backlog",
            author: "By Ananya Bhugra",
            abstract: "With around 4,40,81,975 cases pending in the country, 87.4 percent are in District Courts and 12.4 percent are in high courts. The Indian judicial system has been looking for an effective Alternative Dispute Resolution (ADR) method. The Mediation Act, 2023 marks an important change by making mediation a time-bound, pre-litigation requirement for certain disputes. This article examines how the Mediation Act, 2023 transforms ADR to help reduce the judicial backlog, focusing on its key provisions, successes, and ongoing challenges.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>ADR Mechanisms Overview</li>
                            <li>Landmark Cases Around Mediation</li>
                            <li>Recent Developments: Focus on Mediation Act 2023</li>
                            <li>Critical Analysis: Impact on Judicial Backlog</li>
                            <li>Challenges and Proposed Reforms</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>With around 4,40,81,975 cases pending in the country, 87.4 percent are in District Courts and 12.4 percent are in high courts. The Indian judicial system has been looking for an effective Alternative Dispute Resolution (ADR) method. The total backlog across all courts, according to NJDG data, surpassed 4.87 crore (48.7 million) cases including about 3.76 crore criminal cases and 1.1 crore civil cases. This access to justice crisis is worsened by a lack of judges, with only 22 per million people, and complicated procedures. As a result, ADR mechanisms, especially mediation, have gained attention.</p>
                        <p className="mt-4">The Mediation Act, 2023 marks an important change by making mediation a time-bound, pre-litigation requirement for certain disputes under Section 89 of the Code of Civil Procedure, 1908. This aims to ease the courts&apos; burden while allowing parties to keep their independence. Lok Adalats resolved over 8 crore cases during events in 2025-26, showing the significant impact of ADR. This article examines how the Mediation Act, 2023 transforms ADR to help reduce the judicial backlog, focusing on its key provisions, successes, and ongoing challenges.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">ADR MECHANISMS OVERVIEW</h4>
                        <p>Section 89 of the Code of Civil Procedure was introduced to encourage peaceful and mutual settlements between parties without court intervention. Section 89 states that if the court sees elements of a settlement acceptable to the parties, it will outline the terms and share them for feedback. After considering the responses, the court may revise the terms of a potential settlement and refer it accordingly. The options for settling outside of court are:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li>(a) Arbitration;</li>
                            <li>(b) Conciliation;</li>
                            <li>(c) Judicial settlement, including Lok Adalat; or</li>
                            <li>(d) Mediation.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">LANDMARK CASES AROUND MEDIATION</h4>
                        <p>In the case of Salem Advocate Bar Assn. v. Union of India (2003), the Supreme Court examined the constitutional validity of amendments to the Code of Civil Procedure made by the Amendment Acts of 1999 and 2002. Although the challenge was dismissed, the court noted that operational guidelines for Section 89 and other amendments needed to be developed. A committee led by a former judge and Chairman of the Law Commission of India was formed to create these guidelines, leading to the draft Civil Procedure Alternative Dispute Resolution Rules, 2003.</p>
                        <p className="mt-4">Alternative Dispute Resolution involves methods for resolving disputes with the help of a third party, whose decisions are typically not legally binding. Different types of ADR include Negotiation, Mediation, Arbitration, and Conciliation, but Arbitration, Conciliation, and Mediation are the most commonly accepted methods.</p>
                        <p className="mt-4">Arbitration is a process where the parties present their dispute to a third party, called an arbitrator or a panel of arbitrators, who evaluate the evidence and arguments before making a decision. In India, arbitration is governed by The Arbitration and Conciliation Act, 1996.</p>
                        <p className="mt-4">Conciliation aims to resolve disputes in a friendly and collaborative manner, with Part III of the Arbitration and Conciliation Act, 1996 covering this process.</p>
                        <p className="mt-4">Mediation is a voluntary and informal method of ADR. It resembles negotiation, as mediators help parties communicate, manage risks, and resolve their disputes amicably. The mediator acts as an unbiased third party facilitating this resolution.</p>
                        <p className="mt-4">In Afcons Infrastructure Ltd. v. Cherian Varkey Construction Co. P. Ltd. (2010) the Supreme Court stated that a civil court under Section 89 CPC cannot refer a case to arbitration unless all parties consent. Referring to ADR requires a mandatory hearing after pleadings but is at the court&apos;s discretion based on the potential for settlement.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">RECENT DEVELOPMENTS: FOCUS ON MEDIATION ACT 2023</h4>
                        <p>The Mediation Act of 2023 was passed by the Rajya Sabha on August 1, 2023, and by the Lok Sabha on August 7, 2023. The President of India signed it on September 14, 2023. The Act took effect on October 9, 2023, though only specific sections became operative on that date. Its goal is to promote, support, and facilitate mediation, particularly institutional mediation.</p>
                        <p className="mt-4 mb-4">The main features of The Mediation Act, 2023 include:</p>
                        <ul className="space-y-4">
                            <li><strong className="text-white">1. Definition of Mediation (Section 3(h)):</strong> The Act defines &quot;mediation&quot; as a process where parties work toward a harmonious resolution of their dispute with the mediator&apos;s help. The mediator cannot impose a settlement on the parties.</li>
                            <li><strong className="text-white">2. Mediation Agreement (Section 4):</strong> A mediation agreement must be documented between the parties.</li>
                            <li><strong className="text-white">3. Pre-litigation mediation (Section 5):</strong> Parties may, before starting any civil or commercial proceedings in court, agree to settle their differences through pre-litigation mediation. This could help lighten the civil case load in courts.</li>
                            <li><strong className="text-white">4. Mediated Settlement Agreement (Section 19):</strong> A mediated settlement agreement refers to a written agreement resulting from mediation between one or more parties.</li>
                            <li><strong className="text-white">5. Confidentiality (Section 22):</strong> The Act recognizes confidentiality&apos;s importance in resolving disputes.</li>
                            <li><strong className="text-white">6. Enforcement of Mediated Settlement Agreement (Section 27):</strong> A mediated settlement agreement that the parties execute and the mediator endorses is final and binding. It will be enforced according to the provisions of the Code of Civil Procedure, 1908, similar to a court&apos;s judgment or decree.</li>
                            <li><strong className="text-white">7. Online Mediation (Section 30):</strong> A notable aspect of the Act is its recognition of online dispute resolution.</li>
                            <li><strong className="text-white">8. Mediation Council of India (Chapter VIII):</strong> This establishes the Mediation Council of India (MCI) as a legal authority.</li>
                            <li><strong className="text-white">9. Community Mediation (Section 43):</strong> The Act also includes provisions for community mediation.</li>
                        </ul>
                        <p className="mt-4">Additional case laws around mediation include Moti Ram (D) Tr. LRS &amp; Anr. v. Ashok Kumar &amp; Anr. (2010), where the Supreme Court upheld the confidentiality of mediation proceedings, and Perry Kansagra v. Smriti Madan Kansagra (2020) which made exceptions for child welfare reports.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CRITICAL ANALYSIS: IMPACT ON JUDICIAL BACKLOG</h4>

                        <div className="overflow-x-auto mt-6 mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[#D4AF37]/30">
                                        <th className="p-3 text-white font-bold">Aspect</th>
                                        <th className="p-3 text-white font-bold">Litigation</th>
                                        <th className="p-3 text-white font-bold">ADR (Mediation/Lok Adalat)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/5 bg-black/20">
                                        <td className="p-3 font-semibold text-[#D4AF37]">Time</td>
                                        <td className="p-3">3–10 years</td>
                                        <td className="p-3">3–6 months</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="p-3 font-semibold text-[#D4AF37]">Cost</td>
                                        <td className="p-3">High (fees, delays)</td>
                                        <td className="p-3">Low (flat fees)</td>
                                    </tr>
                                    <tr className="border-b border-white/5 bg-black/20">
                                        <td className="p-3 font-semibold text-[#D4AF37]">Enforceability</td>
                                        <td className="p-3">Court decree</td>
                                        <td className="p-3">CPC-equivalent</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold text-[#D4AF37]">Success Rate</td>
                                        <td className="p-3">~20% disposal/year</td>
                                        <td className="p-3">65–70% settlement</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>NALSA and other Legal Services Institutions conduct Lok Adalats, which are forums for settling disputes or cases pending in court or pre-litigation. Lok Adalats have legal status under the Legal Services Authorities Act, 1987. Under this Act, the Lok Adalat&apos;s award is treated as a civil court decree and is binding on all parties without the possibility of an appeal.</p>
                        <p className="mt-4">Impact from 2025-26: The first National Lok Adalat in 2025 settled 3.09 crore cases while the first in 2026 resolved 2.84 crore cases. In total, over 23.5 crore cases were settled between 2022 and 2025.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CHALLENGES AND PROPOSED REFORMS</h4>
                        <p className="mb-4">While the Act is a crucial advancement in advocating for mediation as a key dispute resolution method, it faces several challenges:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>There is no comprehensive framework for international mediation.</li>
                            <li>The Act lacks provisions for enforcing mediated settlement agreements from cross-border mediations conducted outside India.</li>
                            <li>All mediation costs must be shared evenly by the parties.</li>
                            <li>Further challenges include the need for solid mediator training programs, public awareness initiatives, and overcoming cultural resistance to change.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>The Mediation Act represents a major step towards promoting alternative dispute resolution in India. Establishing the MCI, outlining provisions for mediated settlement agreements, and defining the roles of mediation service providers create a strong foundation for a thorough mediation framework. With over 8 crore cases resolved in 2025-26 alone, the Mediation Act is a positive move towards transforming dispute resolution in the country.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>Nat&apos;l Judicial Data Grid, Pendency Statistics (2025), https://njdg.ecourts.gov.in.</li>
                            <li>The Print, &quot;22 judges per million&quot; (21 March 2026).</li>
                            <li>India Const. art. 39A.</li>
                            <li>Mediation Act, No. 32 of 2023 (India).</li>
                            <li>Code of Civ. Pro., No. 5 of 1908, § 89 (India).</li>
                            <li>NALSA, 1st Nat&apos;l Lok Adalat 2026 Report (14 March 2026).</li>
                            <li>NALSA, 4th Nat&apos;l Lok Adalat 2025 Report (13 Dec 2025).</li>
                            <li>Salem Advocate Bar Assn. v. Union of India, (2005) 6 SCC 344 (India).</li>
                            <li>Alternative Dispute Resolution (general definition).</li>
                            <li>Arbitration &amp; Conciliation Act, No. 26 of 1996, pt. III (India).</li>
                            <li>Afcons Infrastructure Ltd. v. Cherian Varkey Constr. Co., (2010) 8 SCC 24 (India).</li>
                            <li>Moti Ram v. Ashok Kumar, (2011) 1 SCC 135 (India).</li>
                            <li>Perry Kansagra v. Smriti Madan Kansagra, (2020) 13 SCC 584 (India).</li>
                            <li>Legal Servs. Authorities Act, No. 39 of 1987, § 20 (India).</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Ananya Bhugra, NMIMS Kirit P. Mehta School of Law.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Judicial Review in India: Protector of Democracy or Overreach?",
            author: "By Praneeta Shaswat",
            abstract: "The ability of the Indian Judiciary System to determine whether a law or decision made by the executive, legislative, or administrative branches of government complies with constitutional principles is known as judicial review. This article explores the concept, its constitutional provisions, landmark cases like Kesavananda Bharati, the evolution of the basic structure doctrine, and debates whether judicial review acts as a true protector of democracy or amounts to judicial overreach.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>What is Judicial Review?</li>
                            <li>Example of Judicial Review</li>
                            <li>Constitutional Provisions for Judicial Review</li>
                            <li>Landmark Case: Keshavananda Bharati v/s State of Kerala</li>
                            <li>The Basic Structure Doctrine</li>
                            <li>Different Types of Judicial Review in India</li>
                            <li>Evolution of Judicial Review in India</li>
                            <li>Is Judicial Review a True Protector of Democracy?</li>
                            <li>Judicial Review as Overreach?</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p className="italic opacity-90">&quot;When Parliament enacts a law, who guards against the possibility that the law offends the Constitution? In India, the answer is the judiciary through the judicial review power. But is this power a protector of democracy or does it at times amount to judicial encroachment?&quot;</p>
                        <p className="mt-4">The ability of the Indian Judiciary System to determine whether a law or decision made by the executive, legislative, or administrative branches of government complies with constitutional principles is known as judicial review. The Supreme Court or High Courts reserve the authority to declare it void if it is found to be unlawful.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">WHAT IS JUDICIAL REVIEW?</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Judicial review refers to the power of the judiciary to examine the constitutionality of legislative enactments and executive orders of both the Central and State governments.</li>
                            <li>If on examination, the judiciary finds them violative of the Constitution (ultra vires), it declares them illegal, unconstitutional, and invalid (null and void).</li>
                            <li>Consequently, they cannot be enforced by the government.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">EXAMPLE OF JUDICIAL REVIEW</h4>
                        <p>Imagine a law that has passed that limits freedom of speech online. Someone might argue this law violates the right to free expression in the Indian Constitution. They could take the case to the High Court or Supreme Court. The judges would then review the law and decide if it goes against the Constitution. If they find it unconstitutional, they can strike it down.</p>
                        <p className="mt-4">This is Judicial Review in action – the Judiciary checking the power of the Legislature to make sure laws are fair and follow the Constitution.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONSTITUTIONAL PROVISIONS FOR JUDICIAL REVIEW</h4>
                        <p>Though the phrase &apos;Judicial Review&apos; has nowhere been used in the Constitution, there are many constitutional provisions that confer the power of Judicial Review on the Supreme Court and the High Courts. Some of the prominent constitutional provisions include:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>Article 13:</strong> Provides that any law that is inconsistent with or in derogation of Fundamental Rights shall be null and void.</li>
                            <li><strong>Article 32:</strong> Empowers the Supreme Court to issue writs for enforcement of the Fundamental Rights.</li>
                            <li><strong>Article 226:</strong> Empowers the High Courts to issue writs for the enforcement of Fundamental Rights as well as for any other purposes.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">LANDMARK CASE: KESHAVANANDA BHARATI V/S STATE OF KERALA</h4>
                        <p>In February 1970 Swami Keshvananda Bharti, senior pontiff and head of the Hindu monastery Edneer Matha in Edneer, Kasaragod District, Kerala, challenged the Kerala government&apos;s attempts, under two land reform acts, to impose restrictions on the management of its property. A noted Indian jurist, Nanabhoy Palkhivala, convinced Swami into filing his petition under Article 26, concerning the right to manage religiously owned property without government interference.</p>
                        <p className="mt-4">The case had been heard for 68 days, the arguments commencing on October 31, 1972, and ending on March 23, 1973, and its judgement consists of 700 pages.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Judgment</h5>
                        <p>The Supreme Court reviewed the decision in Golaknath v. State of Punjab, and considered the validity of the 24th, 25th, 26th and 29th amendments. The largest Constitution Bench heard the case of 13 Judges. The bench gave eleven separate judgments, which agreed in some points and differed on others. Nanabhoy Palkhivala, assisted by Nariman and Soli Sorabjee, presented the case against the government in both cases.</p>
                        <p className="mt-4 font-semibold text-white">This case law gave us the &apos;Basic Structure Doctrine&apos;.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">THE BASIC STRUCTURE DOCTRINE</h4>
                        <p>The Basic Structure Doctrine holds that although Parliament has the authority to amend the Constitution under Article 368, it cannot change or damage the basic structure of the Constitution.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Key Points:</h5>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>The amending powers of Parliament are broad but not unlimited.</li>
                            <li>Some basic features of the Constitution are beyond change.</li>
                            <li>The Basic Structure Doctrine safeguards the supremacy of the Constitution against the supremacy of Parliament.</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Examples of Basic Structure:</h5>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Supremacy of the Constitution</li>
                            <li>Rule of Law</li>
                            <li>Judicial Review</li>
                            <li>Separation of Powers</li>
                            <li>Democracy</li>
                            <li>Secularism</li>
                            <li>Federalism</li>
                        </ul>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Importance:</h5>
                        <p>The Basic Structure Doctrine ensures that Parliament does not use its majority to alter the character of the Constitution (for example, by abolishing elections or judicial review).</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">DIFFERENT TYPES OF JUDICIAL REVIEW IN INDIA</h4>
                        <p className="mb-4">Three categories of judicial review exist in India: judicial review of executive actions, judicial review of legislation, and judicial review of constitutional amendments. These guarantee that executive acts and legislation adhere to the Constitution.</p>
                        <ul className="space-y-4">
                            <li>
                                <strong className="text-white text-lg">1. Constitutional Amendments:</strong>
                                <p className="mt-1">The judiciary assesses whether the legislature&apos;s proposed constitutional amendments contradict the fundamental framework or any other clauses.</p>
                            </li>
                            <li>
                                <strong className="text-white text-lg">2. Executive Actions:</strong>
                                <p className="mt-1">It entails examining the government&apos;s executive branch&apos;s operations. This involves constitutionality of administrative authorities&apos; rulings, policies, and directives, and evaluating the legality.</p>
                            </li>
                            <li>
                                <strong className="text-white text-lg">3. Judicial Review of Legislation:</strong>
                                <p className="mt-1">This is the process by which legislation passed by the legislature are examined to make sure they comply with the Constitution.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">EVOLUTION OF JUDICIAL REVIEW IN INDIA</h4>
                        <p>The concept of Judicial Review evolved gradually through constitutional debates and landmark judgments. It originated from the U.S. case Marbury v. Madison (1803), which heavily influenced Indian constitutional framers.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Evolution from Marbury v. Madison to the Basic Structure Doctrine:</h5>
                        <p className="mb-4">In India, the Supreme Court expanded Judicial Review through cases such as Shankari Prasad (1951), Golaknath (1967), and the historic Kesavananda Bharati (1973) judgment.</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-white">1950s:</strong> Courts upheld Parliament’s power to amend Fundamental Rights (Shankari Prasad, 1951).</li>
                            <li><strong className="text-white">1960s:</strong> SC restricted this power, stating Parliament cannot amend Fundamental Rights (Golaknath, 1967).</li>
                            <li><strong className="text-white">1970s:</strong> Judicial Review became part of the Basic Structure (Kesavananda Bharati, 1973).</li>
                            <li><strong className="text-white">1980s-1990s:</strong> Review strengthened in areas like judicial appointments, environment, elections, and rights expansion.</li>
                            <li><strong className="text-white">2000s-2020s:</strong> Courts expanded review over ordinances, privacy, Aadhaar, electoral bonds, and constitutional amendments.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IS JUDICIAL REVIEW A TRUE PROTECTOR OF DEMOCRACY?</h4>
                        <p className="mb-4">Proponents of judicial review have argued that:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Judicial review safeguards basic rights.</li>
                            <li>Prevents abuse of legislative and executive authority.</li>
                            <li>Guarantees the supremacy of the constitution.</li>
                            <li>Safeguards the system of checks and balances.</li>
                        </ul>
                        <p className="mt-4">Without judicial review, the majority government might have the potential to challenge the supremacy of the Constitution.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">JUDICIAL REVIEW AS OVERREACH?</h4>
                        <p className="mb-4">Critics argue that:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Judges are appointed, not elected, and thus not accountable to the people.</li>
                            <li>Too much judicial interference could be violative of the separation of powers.</li>
                            <li>The judiciary may overstep into areas of policy that are the domain of the legislature or the executive.</li>
                            <li>There could be a problem of judicial activism crossing the boundary of judicial overreach.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>Judicial Review is a key part of India’s democracy that makes sure all laws and government actions follow the Constitution. It protects citizens’ Fundamental Rights, preserves the core principles of the Constitution, and keeps a balance between the legislature, executive, and judiciary. Despite challenges like case backlogs and judicial overreach, Judicial Review is essential for ensuring justice, democracy, and the rule of law in India.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                            <li><a href="https://vajiramandravi.com/current-affairs/judicial-review/" className="hover:text-[#D4AF37] transition-colors">https://vajiramandravi.com/current-affairs/judicial-review/</a></li>
                            <li><a href="https://indiankanoon.org/" className="hover:text-[#D4AF37] transition-colors">https://indiankanoon.org/</a></li>
                            <li><a href="https://www.lloydlawcollege.edu.in/blog/judicial-review-india.html" className="hover:text-[#D4AF37] transition-colors">https://www.lloydlawcollege.edu.in/blog/judicial-review-india.html</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Kesavananda_Bharati" className="hover:text-[#D4AF37] transition-colors">https://en.wikipedia.org/wiki/Kesavananda_Bharati</a></li>
                        </ul>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Praneeta Shaswat, Kirit P. Mehta school of law, NMIMS, Mumbai, BA LLB (hons).</p>
                    </div>
                </div>
            )
        },
        {
            title: "Human Rights and Constitutional Values",
            author: "By Prerna Otwal",
            abstract: "The devastation of World War II and in particular, The Holocaust, showed how even modern legal systems could enable genocide and oppression. This led to the establishment of the United Nations on October 24, 1945. For the first time, the UN Charter recognized human rights as a global priority, with Article 1(3) and Articles 55 and 56 committing member states to promote and protect the same.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Historical Evolution – From Ancient to Modern</li>
                            <li>International Bill of Human Rights</li>
                            <li>Classification of Human Rights</li>
                            <li>Enforcement Mechanisms under the UN System</li>
                            <li>Critical Analysis – Challenges and Gaps</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>The devastation of World War II and in particular, The Holocaust, showed how even modern legal systems could enable genocide and oppression. This led to the establishment of the United Nations on October 24, 1945. For the first time, the UN Charter recognized human rights as a global priority, with Article 1(3) and Articles 55 and 56 committing member states to promote and protect the same. On December 10, 1948, the UN General Assembly adopted the Universal Declaration of Human Rights (UDHR), a landmark document with 30 articles on civil, political, economic, social, and cultural rights. It was not a legal document, but it served as the basis for subsequent legally binding treaties.</p>
                        <p className="mt-4">The International Covenant on Civil and Political Rights (ICCPR) and the International Covenant on Economic, Social and Cultural Rights (ICESCR) were adopted in 1966, together with the UDHR forming the International Bill of Human Rights. This article takes a clear and structured approach to discuss historical evolution, structure, classification, enforcement, and major challenges.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">HISTORICAL EVOLUTION – FROM ANCIENT TO MODERN</h4>
                        <p>The concept of human rights is an idea that has been around for thousands of years. The ancient Babylon Code of Hammurabi (1750 BCE) inscribed 282 laws on stone pillars and introduced the eye for an eye&apos; principle to prevent arbitrary punishment, and even rulers were expected to obey the law. In ancient India, the concept of Dharma as described in Manu Smruti defined the moral obligations of various segments of society, establishing a correlation between rights and duties and setting the framework for ethical governance. The Magna Carta in 1215 was a milestone, when the English barons forced King John to curtail his powers, affirming that no freeman could be jailed without due process, and taxes could not be imposed without consent, initially for the nobles, but a first check on the state authority.</p>
                        <p className="mt-4">The English Bill of Rights (1689) banned cruel punishments and required parliamentary approval for taxes, informing the US Bill of Rights and the French Declaration of the Rights of Man (1789). The ideas of individual liberty, reason, and dignity were brought back by the Renaissance and Enlightenment eras, and natural rights to life, liberty, and property were advocated by John Locke, Jean-Jacques Rousseau proposed the social contract and free speech was championed by Voltaire. The World Wars hastened this process – World War I led to unprecedented destruction, and World War II saw the Holocaust, both of which directly led to the formation of the United Nations (UN) and the Universal Declaration of Human Rights (UDHR).</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTERNATIONAL BILL OF HUMAN RIGHTS</h4>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">1. UDHR (1948)</h5>
                        <p>Adopted in Paris under the leadership of Eleanor Roosevelt, the UDHR has a preamble and 30 articles in three broad categories. Articles 1–21 focus on safety and freedom and include equality in dignity and rights (Article 1), non-discrimination (Article 2), life and liberty (Article 3), prohibitions of slavery (Article 4) and torture (Article 5), no arbitrary arrest (Article 9), freedom of thought, religion (Article 18), expression (Article 19), and participation in government (Article 21). Articles 6–11 and 22–27 concerned with justice and equality include recognition as a person before the law (Article 6), equality before the courts (Article 7), a legal hearing (Article 10), work with adequate pay (Article 23), adequate living standards (Article 25), and education (Article 26). The last batch of articles (22-30) deal with well-being and community such as security (Article 22), rest and leisure (Article 24), social order (Article 28), duties of the community (Article 29) and protection against the destruction of other rights (Article 30). As a declaration, it has no legal binding but carries moral weight, a global covenant of human dignity.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">2. ICCPR (1966) – Civil and Political Rights</h5>
                        <p>This legally binding covenant ratified by India in 1979 has six parts. Part I (article 1) affirms the right to self-determination. Part II (Articles 2–5) sets general obligations to respect and guarantee rights to states without discrimination. Part III (Articles 6–27) spells out substantive rights including the right to life (Article 6), prohibition of torture (Article 7), prohibition of slavery (Article 8), liberty and security against arbitrary arrest (Article 9), rights of a fair trial with presumption of innocence (Article 14), freedom of religion (Article 18), freedom of expression (Article 19), right to vote (Article 25), and protection of minority groups (Article 27). Part IV (Articles 28–45) offers the monitoring body termed the Human Rights Committee. The fifth and sixth parts deal with ratification and amendments. It protects individual liberty, democracy, and due process.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-8">3. ICESCR (1966) – Economic, Social and Cultural Rights</h5>
                        <p>Also binding, this covenant puts emphasis on progressive realization under article 2 (1), which requires states parties to use maximum available resources gradually. Some of the key provisions include the right to work (Article 6), just working conditions (Article 7), social security (Article 9), adequate living standards such as food and housing (Article 11), health (Article 12), free primary education (Article 13), and cultural participation (Article 15). It is less justiciable immediately than the ICCPR.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CLASSIFICATION OF HUMAN RIGHTS</h4>
                        <p>Human rights are classified by generations. Examples of civil and political rights include life, speech, and fair trials, which are mostly justiciable through courts. Second generation of rights are economic, social and cultural right include work, health, education, are often non-justiciable as they rely on implementation of policies. There are also absolute rights which can never be derogated upon such as freedom from torture and there are also qualified rights which can be subjected to restrictions under appropriate grounds such as national security which qualify limitations on free speech. This classification is for convenience of analysis since all generations are interdependent and equal in modern schemes.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">ENFORCEMENT MECHANISMS UNDER THE UN SYSTEM</h4>
                        <p>Thus, the UN system offers a non-coercive oversight function. The Committee on Economic, Social and Cultural Rights does similar oversight for ICESCR; while the Human Rights Committee (for ICCPR) treaty body review state reports, issue observations and general comments, and receive individual complaints under the ICCPR&apos;s Optional Protocol. The UN Human Rights Council, formed in 2006, has a global monitoring power but no sanctioning powers. Based on the State report, information compiled by the UN, and inputs from NGOs, the state receives non-binding recommendations that in most cases bring reforms due to diplomatic pressure. Other supplementary instruments include UN fact-finding missions in the face of grave violations and civil society advocacy through non-governmental organizations (NGOs).</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CRITICAL ANALYSIS – CHALLENGES AND GAPS</h4>
                        <p>There are still gaps even with the progress made. The non-binding nature of UDHR offers an option to evade. Enforcement is weak, as the likes of UNHRC has no sanctions or any judicial authority. Economic rights&apos; progressive nature leaves many such rights as non-justiciable, in India, for example, health rights fall under policies, while education is guaranteed an enshrined in Right to Education Act.</p>
                        <p className="mt-4">However, courts fill gaps by associating them with constitutional provisions, as seen in Safai Karm Chari Andolan v. Union of India (2014), where the Supreme Court ruled manual scavenging as forced labour prohibited under Article 23 and a violation of dignity under Article 21 resulting in the Prohibition of Employment as Manual Scavengers and their Rehabilitation Act, 2013 which forbids the practice and imposes penalties. India ratified ICCPR with reservations and treats ICESCR through non-justiciable Directive Principles, exemplifying sovereignty tensions.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>The UDHR thus set a universal moral yardstick, while the ICCPR and ICESCR made it legally enforceable. However, for protection to be effective, states must subordinate their respect for sovereignty to respect for human rights. Civil and political rights are not mutually exclusive with economic and social rights; political freedoms without economic security are meaningless, as well as economic security without political freedom. Groups such as manual scavengers, the undertrials, the refugees continue to face problems which show that the commitment at the universal level still needs to be strengthened.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-zinc-400">
                            <li>UN Charter (1945), Arts 1(3), 55, 56.</li>
                            <li>UDHR, GA Res 217A (1948).</li>
                            <li>ICCPR (1966), 999 UNTS 171.</li>
                            <li>ICESCR (1966), 993 UNTS 3.</li>
                            <li>Manual Scavengers Act, 2013 (India).</li>
                            <li>Safai Karmchari Andolan v. Union of India, (2014) 11 SCC 224.</li>
                        </ol>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Prerna Otwal, Medicaps University B.B.A.LL.B.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Alternative Dispute Resolution in India: Evolution, Importance, and Challenges",
            author: "By SREE SAI RAM R",
            abstract: "Alternative Dispute Resolution (ADR) has become an essential part of the modern legal system, particularly in India where courts face a heavy burden of pending cases. It offers faster, cost-effective, and flexible methods such as arbitration, mediation, conciliation, negotiation, and Lok Adalat to resolve disputes outside traditional litigation.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>Historical Developments of ADR</li>
                            <li>Importance of ADR &amp; Provisions Related to ADR in India</li>
                            <li>Advantages of Alternative Dispute Resolution</li>
                            <li>Concept and Types of ADR Method</li>
                            <li>Major Challenges in ADR Mechanisms in India</li>
                            <li>Conclusion</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>Today&apos;s world has become globalised and commercial because of technology. People can now talk to each other. Solve business problems and arguments from anywhere in the world. Most people do not have time to go to court and file papers then wait a time for a hearing. We are getting close to a time when people will use dispute resolution instead of going to court because going to court can be slow and inefficient.</p>
                        <p className="mt-4">In India people still go to court. The legal system is starting to see the benefits of alternative dispute resolution. This article will help you understand what alternative dispute resolution methods are and how they can be helpful. Alternative dispute resolution methods are becoming popular because they can solve problems faster and better than going to court. The legal system in India is starting to use alternative dispute resolution methods often and this is a good thing for people who need to solve problems quickly. Alternative dispute resolution is the way of the future. It will be good, for everyone.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">HISTORICAL DEVELOPMENTS OF ADR</h4>
                        <p>Alternative Dispute Resolution (ADR) has its origins in ancient informal systems where disputes were settled through community-based methods like village panchayats in India and similar practices in ancient Greece and medieval Europe. These systems focused on consensus and amicable resolution rather than punishment.</p>
                        <p className="mt-4">In the 20th century, ADR became more formalized, especially in countries like the United States and the United Kingdom, where mediation and arbitration were legally recognized to reduce court burdens and provide faster justice.</p>
                        <p className="mt-4">In India, ADR gained significant importance in the 1990s with the introduction of the Arbitration and Conciliation Act, 1996 and Section 89 of the Civil Procedure Code, along with institutions like Lok Adalat and mediation centres. Today, ADR continues to evolve, including Online Dispute Resolution (ODR), offering efficient and flexible alternatives to traditional litigation.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">IMPORTANCE OF ADR &amp; PROVISIONS RELATED TO ADR IN INDIA</h4>
                        <p>To deal with the situation of pendency of cases in courts of India, ADR plays a significant role in India by its diverse techniques. Alternative Dispute Resolution mechanism provides scientifically developed techniques to Indian judiciary which helps in reducing the burden on the courts. ADR provides various modes of settlement including, arbitration, conciliation, mediation, negotiation and Lok Adalat. Here, negotiation means self-counselling between the parties to resolve their dispute but it doesn&apos;t have any statutory recognition in India.</p>
                        <p className="mt-4">ADR is also founded on such fundamental rights, article 14 and 21 which deals with equality before law and right to life and personal liberty respectively. ADR&apos;s motive is to provide social-economic and political justice and maintain integrity in the society enshrined in the preamble. ADR also strive to achieve equal justice and free legal aid provided under article 39-A relating to Directive Principle of State Policy (DPSP).</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Few important provisions related to ADR:</h5>
                        <ol className="list-decimal pl-5 space-y-2 mt-2">
                            <li><strong className="text-white">Section 89 of the Civil Procedure Code, 1908:</strong> Provides that opportunity to the people, if it appears to court there exist elements of settlement outside the court then formulate the terms of the possible settlement and refer the same for: Arbitration, Conciliation, Mediation or Lok Adalat.</li>
                            <li>The Acts which deal with Alternative Dispute Resolution are <strong className="text-white">Arbitration and Conciliation Act, 1996</strong> and,</li>
                            <li><strong className="text-white">The Legal Services Authority Act, 1987</strong>.</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">ADVANTAGES OF ALTERNATIVE DISPUTE RESOLUTION</h4>
                        <ul className="space-y-4">
                            <li>
                                <strong className="text-white text-lg">1. Cost-Effectiveness</strong>
                                <p className="mt-1">One of the primary advantages of ADR is that it is generally more cost-effective than traditional litigation. Court proceedings can be expensive, with costs including attorney fees, court fees and other related expenses. ADR, on the other hand, often involves fewer formalities and can be completed in a shorter timeframe, resulting in lower costs.</p>
                            </li>
                            <li>
                                <strong className="text-white text-lg">2. Time Efficiency</strong>
                                <p className="mt-1">ADR processes are typically faster than court litigation. Traditional legal proceedings can take months or even years to resolve, whereas ADR methods like mediation or arbitration can often be completed in a matter of days or weeks. This can be particularly beneficial in business disputes where a speedy resolution is desired.</p>
                            </li>
                            <li>
                                <strong className="text-white text-lg">3. Flexibility</strong>
                                <p className="mt-1">ADR offers more flexibility compared to the rigid structure of court proceedings. Parties have the freedom to choose the ADR method that best suits their needs and can tailor the process to their specific dispute. This flexibility extends to scheduling, location and even the choice of the neutral third party (mediator or arbitrator) who will oversee the process.</p>
                            </li>
                            <li>
                                <strong className="text-white text-lg">4. Confidentiality</strong>
                                <p className="mt-1">Unlike court cases, which are typically public, ADR proceedings are private and confidential. This is particularly advantageous in disputes where the parties wish to keep sensitive information out of the public domain. Confidentiality can also help preserve business relationships and reputations.</p>
                            </li>
                            <li>
                                <strong className="text-white text-lg">5. Control over the Outcome</strong>
                                <p className="mt-1">In ADR, the parties have more control over the outcome of the dispute. For example, in mediation, the parties work together to reach a mutually acceptable agreement, rather than having a decision imposed upon them by a judge. This can lead to more satisfactory and sustainable resolutions.</p>
                            </li>
                            <li>
                                <strong className="text-white text-lg">6. Preservation of Relationships</strong>
                                <p className="mt-1">ADR methods like mediation focus on collaboration and communication, which can help preserve and even improve relationships between the disputing parties. This is especially important in disputes involving ongoing business relationships or family matters.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCEPT AND TYPES OF ADR METHOD</h4>
                        <p>Alternative Dispute Resolution (ADR) refers to methods of resolving disputes outside traditional courts in a faster, cost-effective, and flexible manner. It focuses on cooperation, negotiation, and mutual agreement rather than adversarial litigation, helping preserve relationships between parties. In India, ADR is legally recognized through the Arbitration and Conciliation Act, 1996 and Section 89 of the Civil Procedure Code.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Types of ADR mechanisms:</h5>
                        <p className="mb-4">ADR mechanisms are quite prevalent in India. There are diverse types of ADR mechanisms. Each method has its character and has to be applied differently.</p>
                        <ul className="space-y-4">
                            <li><strong className="text-white">1. Arbitration:</strong> Arbitration is a way to solve disputes. In arbitration conflicting parties agree to resolve their issues outside court systems. They appoint an impartial arbitrator or a panel of arbitrators. The arbitrator reviews evidence hears arguments. Makes a final decision. This final decision is called an award. Arbitration involves a private dispute resolution process. The arbitrator or panel delivers a binding decision. The conflicting parties agree to abide by this decision. Arbitration is an alternative, to going to court. It helps resolve issues in a private and flexible way.</li>
                            <li><strong className="text-white">2. Mediation:</strong> In mediation, an impartial mediator acts as a facilitator of communication between parties in disagreement, aiding the parties to arrive at mutually acceptable ways of solving their disagreement. Unlike arbitration, mediation is non-bonding and rather focuses on cooperation and the retention of the relationship.</li>
                            <li><strong className="text-white">3. Conciliation:</strong> Conciliation is quite close to mediation but often involves a greater interventionist role for the conciliator in potentially putting forward real solutions. Different uses are encountered concerning family, business, and employment disputes.</li>
                            <li><strong className="text-white">4. Negotiation:</strong> This procedure is typically non-formal and, as the word itself indicates, consensual, wherein parties negotiate, directly communicate, and agree on terms to form the foundation of a resolution. Negotiation results in maximum influence over the resolution of the dispute and, in most cases, represents the first step in dispute resolution.</li>
                            <li><strong className="text-white">5. Lok Adalat:</strong> Lok Adalat, or &quot;People&apos;s Courts,&quot; are India-specific. The said method is used for extrajudicial peaceful and amicable redress of disputes. Lok Adalat handles cases relating to family law, labour, and other minor civil causes.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">MAJOR CHALLENGES IN ADR MECHANISMS IN INDIA</h4>
                        <ol className="list-decimal pl-5 space-y-2 mt-2">
                            <li><strong className="text-white">Lack of government support:</strong> ADR does not receive enough support and attention from the government.</li>
                            <li><strong className="text-white">Poor infrastructure:</strong> There are not enough ADR centres, especially in small towns and rural areas.</li>
                            <li><strong className="text-white">Court interference:</strong> Courts often interfere in ADR proceedings, reducing its independence.</li>
                            <li><strong className="text-white">Execution issues:</strong> Parties must go to court to enforce ADR decisions, which defeats its purpose.</li>
                            <li><strong className="text-white">Lack of skilled professionals:</strong> There are not enough trained mediators, arbitrators, and negotiators.</li>
                            <li><strong className="text-white">Setting aside awards:</strong> Courts can cancel arbitration awards, causing delays and uncertainty.</li>
                            <li><strong className="text-white">Lack of awareness:</strong> Many people are not aware of ADR methods and their benefits.</li>
                            <li><strong className="text-white">Mindset of people:</strong> People trust courts more and are reluctant to use ADR.</li>
                            <li><strong className="text-white">Influence of powerful parties:</strong> Stronger parties may pressure weaker parties during ADR.</li>
                            <li><strong className="text-white">Failure to reach agreement:</strong> If parties do not agree, ADR fails and the case goes back to court.</li>
                            <li><strong className="text-white">High cost:</strong> Fees of experienced professionals can make ADR expensive.</li>
                            <li><strong className="text-white">Not suitable for all cases:</strong> Serious criminal cases cannot be resolved through ADR.</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">CONCLUSION</h4>
                        <p>Alternative Dispute Resolution (ADR) has become an essential part of the modern legal system, particularly in India where courts face a heavy burden of pending cases. It offers faster, cost-effective, and flexible methods such as arbitration, mediation, conciliation, negotiation, and Lok Adalat to resolve disputes outside traditional litigation. Supported by legal provisions like the Arbitration and Conciliation Act, 1996 and Section 89 of the Civil Procedure Code, ADR promotes amicable settlement and access to justice. Despite challenges such as lack of awareness, inadequate infrastructure, and limited institutional support, ADR continues to grow in importance with globalization and the rise of Online Dispute Resolution (ODR). ADR is not just an alternative but a necessary complements to the judicial system, helping reduce delays, preserve relationships, and ensure efficient and fair dispute resolution in India.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                            <li>ipleaders: An Introduction to ADR</li>
                            <li>Drishti IAS: ADR Mechanisms in India</li>
                            <li>Law Faculty Delhi University: ADR Reading Materials</li>
                            <li>Scribd: Complete ADR Lecture Notes</li>
                            <li>ASPIRE IAS: Alternate Dispute Resolution (ADR)</li>
                            <li>New Law College: Notes on Alternate Dispute Resolution</li>
                            <li><a href="https://www.lawctopus.com/academike/arbitration-adr-in-india/#_edn29" className="hover:text-[#D4AF37] transition-colors">https://www.lawctopus.com/academike/arbitration-adr-in-india/#_edn29</a></li>
                            <li><a href="http://lawcommissionofindia.nic.in/reports/report222.pdf" className="hover:text-[#D4AF37] transition-colors">http://lawcommissionofindia.nic.in/reports/report222.pdf</a></li>
                            <li><a href="https://singhania.in/alternative-dispute-resolution-in-india-a-brief-overview/" className="hover:text-[#D4AF37] transition-colors">https://singhania.in/alternative-dispute-resolution-in-india-a-brief-overview/</a></li>
                            <li>Arbitration and conciliation Act, 1996</li>
                            <li>Code of civil procedure code 1908</li>
                        </ul>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by SREE SAI RAM R, Vel tech school of law.</p>
                    </div>
                </div>
            )
        },
        {
            title: "International Law and Global Climate Governance",
            author: "By Tanya Goel",
            abstract: "Climate change represents one of the most pressing and complex challenges facing the world today. Effective responses necessitate coordinated international efforts, making collective action crucial. This research evaluates the role of international law in addressing climate change, analyzing primary legal instruments such as the UNFCCC, Kyoto Protocol, and Paris Agreement to understand their effectiveness, limitations, and overall impact on global climate governance.",
            fullText: (
                <div className="space-y-8 text-zinc-300">
                    <div>
                        <h4 className="font-bold text-white text-xl mb-4 border-b border-white/10 pb-2">INDEX</h4>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Introduction</li>
                            <li>UN Framework Convention on Climate Change (UNFCCC)</li>
                            <li>Kyoto Protocol: Commitments and Shortcomings</li>
                            <li>Paris Agreement: Innovations and Mechanisms</li>
                            <li>Other International Legal Instruments</li>
                        </ol>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">INTRODUCTION</h4>
                        <p>Climate change represents one of the most pressing and complex challenges facing the world today. Rising global temperatures, increasing frequency of extreme weather events, sea-level rise, and disruptions to ecosystems threaten human health, food security, and economic development.</p>
                        <p className="mt-4">Effective responses to climate change necessitate coordinated international efforts. Because greenhouse gas emissions and their consequences do not respect national borders, collective action among states is crucial. International cooperation enables the pooling of resources, sharing of technology, and establishment of common goals and standards.</p>
                        <p className="mt-4">International law provides the legal frameworks and mechanisms through which countries negotiate, commit to, and enforce climate actions. Treaties, customary international law, and soft law instruments serve as platforms for setting emission reduction targets, reporting obligations, dispute resolution, and capacity building. Over the past three decades, international climate law has evolved significantly, culminating in landmark agreements such as the Kyoto Protocol and the Paris Agreement.</p>
                        <p className="mt-4">Despite numerous international agreements, global greenhouse gas emissions continue to rise, raising questions about the effectiveness of international law in driving meaningful climate action. This research seeks to investigate: How effective is international law in addressing climate change, and what are the key challenges and opportunities for strengthening its role in global climate governance?</p>
                        <p className="mt-4">This study employs a doctrinal legal analysis combined with comparative analysis to examine the role of international law in addressing climate change. The doctrinal approach involves a detailed examination of primary legal instruments—treaties, protocols, and related legal texts—to interpret their provisions, obligations, and enforcement mechanisms. Comparative analysis is used to evaluate differences and similarities among major international frameworks such as the UNFCCC, Kyoto Protocol, and Paris Agreement, assessing their relative effectiveness and limitations. Additionally, selected case studies are integrated to illustrate practical implementation challenges and successes in diverse legal and geopolitical contexts.</p>
                        <p className="mt-4">The primary sources of data for this research include official treaty texts, declarations, decisions, and protocols related to international climate law, obtained from authoritative databases such as the United Nations Treaty Collection and official UNFCCC repositories. Supplementary legal documents, including reports from the Intergovernmental Panel on Climate Change (IPCC), submissions by states, and records from international courts or dispute settlement bodies, are also analyzed.</p>

                        <h5 className="font-bold text-[#D4AF37] text-xl mb-2 mt-6">Evaluation Criteria</h5>
                        <p className="mb-4">The analysis evaluates the international legal frameworks based on the following criteria:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong className="text-white">Scope and coverage:</strong> Extent of obligations and parties covered under each treaty or agreement.</li>
                            <li><strong className="text-white">Legal bindingness:</strong> Whether commitments are legally enforceable or voluntary.</li>
                            <li><strong className="text-white">Enforcement mechanisms:</strong> Presence of monitoring, reporting, compliance review, and dispute resolution procedures.</li>
                            <li><strong className="text-white">Equity and differentiation:</strong> Consideration of principles such as common but differentiated responsibilities and support for developing countries.</li>
                            <li><strong className="text-white">Implementation outcomes:</strong> Evidence of real-world impact and compliance by states, including case study findings.</li>
                        </ul>
                        <p className="mt-4">This framework allows for a systematic and comprehensive assessment of how international law functions in global climate governance and identifies key challenges and opportunities for improvement.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">UN FRAMEWORK CONVENTION ON CLIMATE CHANGE (UNFCCC)</h4>
                        <p>Adopted in 1992 at the Earth Summit in Rio de Janeiro, the UN Framework Convention on Climate Change (UNFCCC) serves as the foundational international treaty addressing climate change. It establishes a broad framework for intergovernmental efforts to stabilize greenhouse gas concentrations in the atmosphere to prevent dangerous anthropogenic interference with the climate system.</p>
                        <p className="mt-4">The Convention sets out key principles such as common but differentiated responsibilities (CBDR) and equity, acknowledging differing capabilities and historical emissions among developed and developing countries. While the UNFCCC itself does not impose binding emission reduction targets, it provides the institutional basis for ongoing negotiations, reporting, and cooperation among over 190 parties.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">KYOTO PROTOCOL: COMMITMENTS AND SHORTCOMINGS</h4>
                        <p>The Kyoto Protocol, adopted in 1997 and entered into force in 2005, was the first legally binding international treaty to set quantitative emission reduction targets for developed countries (Annex I parties). It introduced market-based mechanisms such as emissions trading, the Clean Development Mechanism (CDM), and Joint Implementation (JI) to facilitate cost-effective compliance.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">PARIS AGREEMENT: INNOVATIONS AND MECHANISMS</h4>
                        <p>The Paris Agreement, adopted in 2015 under the UNFCCC, represents a landmark shift towards a more flexible and inclusive global climate regime. Unlike the Kyoto Protocol, the Paris Agreement requires all parties, developed and developing alike, to submit nationally determined contributions (NDCs) outlining their mitigation and adaptation efforts.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-2xl mb-4 border-b border-[#D4AF37]/30 pb-2">OTHER INTERNATIONAL LEGAL INSTRUMENTS</h4>
                        <p>In addition to these core frameworks, several other international legal instruments contribute indirectly to climate change governance. The Montreal Protocol on Substances that Deplete the Ozone Layer, though primarily aimed at protecting the ozone layer, has significantly contributed to climate mitigation by phasing out potent greenhouse gases such as chlorofluorocarbons (CFCs).</p>
                        <p className="mt-4">Moreover, customary international law principles, including state responsibility and no harm, provide foundational legal norms relevant to climate accountability. Regional agreements and soft law instruments, such as declarations and guidelines issued by international organizations, also play supportive roles by facilitating cooperation, capacity building, and awareness-raising.</p>
                    </div>

                    <div className="bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/20">
                        <h4 className="font-bold text-white text-xl mb-3">REFERENCES</h4>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                            <li>Bodansky, D., Brunnée, J., &amp; Hey, E. (2007). The Oxford Handbook of International Environmental Law. Oxford University Press. 2.</li>
                            <li>Rajamani, L. (2016).</li>
                            <li>Falkner, R. (2016). The Paris Agreement and the New Logic of International Climate Politics. International Affairs, 92(5), 1107–1125.</li>
                            <li>Koskenniemi, M. (2011). International Law and Global Justice: A Critical Study. Cambridge University Press.</li>
                            <li>Bodansky, D. (2010). The Art and Craft of International Environmental Law. Harvard Environmental Law Review, 31(2), 305–371.</li>
                            <li>United Nations Environment Programme (UNEP). (2022). Emissions Gap Report 2022. <a href="https://www.unep.org/resources/emissions-gap-report-2022" className="hover:text-[#D4AF37] transition-colors">https://www.unep.org/resources/emissions-gap-report-2022</a> 7</li>
                            <li>Victor, D. G., Geels, F. W., &amp; Sharpe, S. (2019). Accelerating the Low Carbon Transition: The Case for Stronger, More Targeted and Coordinated International Action. Climate Policy, 19(10), 1321–1333.</li>
                        </ul>
                    </div>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Tanya Goel, MCM, LL.B.</p>
                    </div>
                </div>
            )
        },
        // {
        //     title: "The Admissibility of Synthetic Media: Regulating Deepfakes in Evidentiary Law",
        //     author: "By Dr. Vikram Desai",
        //     abstract: "As generative models and synthetic media advance, the threat of manipulated evidence in the courtroom grows exponentially. This paper explores the urgent need for updated evidentiary standards to authenticate digital media and combat the malicious use of deepfakes."
        // },
        // {
        //     title: "Piercing the Corporate Veil in Cross-Border Insolvency",
        //     author: "By Priya Sharma, Adv.",
        //     abstract: "Navigating multinational bankruptcies presents unique jurisdictional challenges that often leave creditors at a disadvantage. This analysis examines recent precedents in corporate litigation where courts have successfully held parent companies liable for overseas subsidiary debts."
        // },
        // {
        //     title: "Algorithmic Liability: Assessing Tort Negligence in Agentic AI Systems",
        //     author: "By Rohan Iyer, Legal Researcher",
        //     abstract: "When an autonomous, agentic AI makes a decision that causes financial or physical harm, determining liability becomes a complex legal maze. This article dissects current tort frameworks and proposes a new standard of strict liability for the deployers of autonomous digital agents."
        // },
        // {
        //     title: "Digital Privacy as a Fundamental Right in the Post-Surveillance Era",
        //     author: "By Meera Menon",
        //     abstract: "The intersection of state security and individual privacy continues to be a highly contested constitutional battleground. This comprehensive review analyzes recent landmark judgments that are redefining data protection and the boundaries of the right to privacy in the digital age."
        // },
        // {
        //     title: "Trademark Dilution in the Era of Global E-Commerce",
        //     author: "By Arjun Patel, LL.M.",
        //     abstract: "The rapid expansion of borderless online marketplaces has severely tested traditional trademark protections and enforcement mechanisms. This commentary highlights the evolving legal strategies for brands to proactively defend their intellectual property against digital infringement."
        // }
    ];
    const demoPublications = rawPublications.map(p => ({ ...p, id: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') }));

    const SingleArticle = () => {
        const { articleId } = useParams();
        const [article, setArticle] = useState<any>(null);
        const [copied, setCopied] = useState(false);

        useEffect(() => {
            const fetchArticle = async () => {
                try {
                    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xyzcompany.supabase.co';
                    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'public-anon-key';
                    const { createClient } = await import("@supabase/supabase-js");
                    const supabase = createClient(supabaseUrl, supabaseKey);

                    const { data, error } = await supabase
                        .from('publications')
                        .select('*')
                        .eq('id', articleId)
                        .single();

                    if (data && !error) {
                        setArticle(data);
                        return;
                    }
                    throw new Error("Not found");
                } catch (err) {
                    const localArticle = demoPublications.find((p: any) => p.id === articleId);
                    if (localArticle) {
                        setArticle(localArticle);
                    } else {
                        setArticle(demoPublications[0]); // fallback if absolutely nothing works
                    }
                }
            };
            fetchArticle();
        }, [articleId]);

        const handleCopy = () => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        };

        if (!article) return <div className="pt-32 pb-24 text-center min-h-screen text-white flex items-center justify-center">Loading...</div>;

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="pt-32 pb-24 px-4 md:px-8 lg:px-24 min-h-[80vh] bg-black/50 backdrop-blur-md border-x border-white/5 mx-auto max-w-[1400px]"
            >
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                    <Link to="/publications" className="text-[#D4AF37] hover:bg-[#D4AF37]/10 px-4 py-2 rounded-full transition-all">← Back to Publications</Link>
                    <button onClick={handleCopy} className="bg-black/60 border border-white/20 px-6 py-2 rounded-full text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                        {copied ? "✅ Copied!" : "Copy Link"}
                    </button>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{article.title}</h1>
                <p className="text-[#D4AF37] font-medium text-xl mb-12">{article.author}</p>
                <div className="prose prose-invert max-w-none w-full">
                    {article.fullText || <p className="text-zinc-300 text-lg leading-relaxed whitespace-pre-line">{article.abstract}</p>}
                </div>
            </motion.div>
        );
    };

    const AdminDashboard = () => (
        <div className="pt-32 pb-24 text-center min-h-[80vh] text-white flex items-center justify-center">
            <h1 className="text-4xl font-bold border border-white/10 p-12 rounded-3xl bg-black/40 backdrop-blur-md">Admin Dashboard (Protected Region)</h1>
        </div>
    );



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
        <BrowserRouter>
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
                    <Routes>
                        <Route path="/" element={
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
                        } />
                        <Route path="/publications" element={<PublicationsPage />} />
                        <Route path="/internships" element={<InternshipsPage />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/publications/:articleId" element={<SingleArticle />} />
                        {['webinars', 'blog', 'aboutus', 'contact'].map(page => (
                            <Route key={page} path={`/${page}`} element={
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="min-h-[80vh] flex items-center justify-center pt-32"
                                >
                                    <h2 className="text-4xl font-bold text-white">
                                        {page.charAt(0).toUpperCase() + page.slice(1)} Page <span className="text-[#D4AF37]">Coming Soon</span>
                                    </h2>
                                </motion.div>
                            } />
                        ))}
                    </Routes>

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

                                    </div>
                                    <div className="flex gap-4 mt-2">
                                        {[
                                            { name: 'linkedin', url: 'https://www.linkedin.com/in/lex-saarthi-6896843a3/', icon: Linkedin },
                                            { name: 'instagram', url: 'https://www.instagram.com/lex_saarthi?igsh=MTlweG82cWRlYzFkag==', icon: Instagram },
                                            { name: 'youtube', url: 'https://www.youtube.com/@LexSaarthi', icon: Youtube }
                                        ].map((social) => {
                                            const Icon = social.icon;
                                            return (
                                                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]/80 hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                                                    <Icon size={14} />
                                                </a>
                                            )
                                        })}
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
        </BrowserRouter>
    );
}
