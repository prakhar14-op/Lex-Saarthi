export default function StructuredData() {
    const orgData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Lex Saarthi",
        url: "https://lex-saarthi.vercel.app",
        description:
            "AI-powered legal assistant for legal research and guidance.",
    };

    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Lex Saarthi",
        url: "https://lex-saarthi.vercel.app",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(orgData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteData),
                }}
            />
        </>
    );
}