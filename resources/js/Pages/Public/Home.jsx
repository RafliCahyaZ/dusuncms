import PublicLayout from "@/Layouts/PublicLayout";

import Navbar from "@/Components/Public/Navbar";
import Hero from "@/Components/Public/Hero";
import Footer from "@/Components/Public/Footer";
import HighlightStats from "@/Components/Public/HighlightStats";
import AboutSection from "@/Components/Public/AboutSection";
import NewsSection from "@/Components/Public/NewsSection";
import GallerySection from "@/Components/Public/GallerySection";

export default function Home() {
    return (
        <PublicLayout>
            <Navbar />

            <main>
                <Hero />

                <HighlightStats />

                <AboutSection />

                <NewsSection />

                <GallerySection />
            </main>

            <Footer />
        </PublicLayout>
    );
}