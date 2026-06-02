export default function StructuredData() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Lex Saarthi",
        url: "https://lex-saarthi.vercel.app",
        description:
            "AI-powered legal assistant for legal research and guidance.",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
            }}
        />
    );
}