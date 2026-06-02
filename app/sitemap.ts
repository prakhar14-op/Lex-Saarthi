import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://lex-saarthi.vercel.app",
            lastModified: new Date(),
        },
    ];
}