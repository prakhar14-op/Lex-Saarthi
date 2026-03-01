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
import { ExpandedPublicationOverlay } from "@/components/ExpandedPublicationOverlay";
import MagicBento from "@/components/MagicBento";
import { FileText, Search, Scale, ShieldCheck, Zap, Users, X, Linkedin, Instagram, Youtube } from "lucide-react";

export function Header04() {
    const [activePage, setActivePage] = useState('home');
    const [selectedPublication, setSelectedPublication] = useState<any>(null);

    const demoPublications = [
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
            author: "By Sudhanshu K. Bharwal",
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
                        <p className="text-[#D4AF37] italic text-lg opacity-80">This article is written by Sudhanshu Kumar.</p>
                    </div>
                </div>
            )
        },
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
            {/* Modal Overlay using standalone Expandable component using createPortal */}
            <ExpandedPublicationOverlay
                selectedPublication={selectedPublication}
                setSelectedPublication={setSelectedPublication}
            />
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
    );
}
