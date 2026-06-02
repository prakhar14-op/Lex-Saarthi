import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "Lex Saarthi",
  description: "Lex Saarthi is an AI-powered legal assistant that helps students, citizens, and professionals with legal research, legal awareness, document guidance, and law-related information.",
  verification: {
    google: "FLvs_8zKJDfqNLiNsQtKjte7c-2wWW_YwKxU_97rqGs",
  },
  keywords: [
    "Lex Saarthi",
    "AI Legal Assistant",
    "Legal Research",
    "Indian Law",
    "Legal Chatbot",
    "Law Student Assistant"
  ],
  openGraph: {
    title: "Lex Saarthi",
    description:
      "AI-powered legal assistant for legal research and guidance.",
    url: "https://lex-saarthi.vercel.app",
    siteName: "Lex Saarthi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-transparent`}>
        <StructuredData />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-50"
        >
          <source src="/Make_the_above_1080p_202602221245.mp4" type="video/mp4" />
        </video>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
