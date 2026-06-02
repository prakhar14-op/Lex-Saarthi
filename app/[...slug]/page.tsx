"use client";

import dynamic from 'next/dynamic';

const Header04 = dynamic(() => import('@/components/Header04').then(mod => mod.Header04), { 
    ssr: false,
    loading: () => <div className="min-h-screen bg-black flex items-center justify-center text-[#D4AF37]">Loading Application...</div>
});

export default function CatchAllPage() {
    return (
        <main>
            <Header04 />
        </main>
    );
}
