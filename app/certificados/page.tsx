import Header from "@/app/_components/Header";
import CarouselCerts from "@/app/_components/certificados/CarouselCerts";
import Certificados from "@/app/_components/certificados/Certificados"
import ContactSection from "@/app/_components/ContactSection";
import Footer from "@/app/_components/Footer";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'TH Tecnologia - Certificados Digitais',
    description: 'Aquisição ou renovação de certificado digital.',
}

export default function certificados() {
    return (
        <div className="min-h-screen">
            <Header />
            <CarouselCerts />
            <Certificados />
            <ContactSection />
            <Footer />
        </div>
    ) ;
}