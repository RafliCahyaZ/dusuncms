import PublicLayout from "@/Layouts/PublicLayout";

import Navbar from "@/Components/Public/Navbar";
import Hero from "@/Components/Public/Hero";
import Footer from "@/Components/Public/Footer";
import AboutSection from "@/Components/Public/AboutSection";
import ServicesSection from "@/Components/Public/ServicesSection";
import NewsSection from "@/Components/Public/NewsSection";
import GallerySection from "@/Components/Public/GallerySection";
import ContactSection from "@/Components/Public/ContactSection";
import VillageOfficialsSection from "@/Components/Public/VillageOfficialsSection";

export default function Home({
    news,
    galleries,
    officials
}) {
    return (
        <PublicLayout>
            <Navbar />

            <main>
                <Hero />

                <AboutSection />

                <VillageOfficialsSection
                    officials={officials}
                />

                <ServicesSection />

                <NewsSection
                    news={news}
                />

                <GallerySection
                    galleries={galleries}
                />

                <ContactSection />
            </main>

            <Footer />
        </PublicLayout>
    );
}