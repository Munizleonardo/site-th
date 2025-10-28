import Header from "@/app/_components/Header";
import HealthPlans from "@/app/_components/plans/HealthPlans";
import Planos from "@/app/_components/plans/Planos"
import ContactSection from "@/app/_components/ContactSection";
import Footer from "@/app/_components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'TH Tecnologia - Planos e Seguros',
    description: 'Aquisição de Planos e Seguros.',
}

export default function healthplans() {
    return (
        <div className="min-h-screen">
            <Header />
            <HealthPlans />
            <Planos />
            <ContactSection />
            <Footer />
        </div>
    ) ;
}