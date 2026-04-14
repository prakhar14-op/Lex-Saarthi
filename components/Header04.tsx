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
