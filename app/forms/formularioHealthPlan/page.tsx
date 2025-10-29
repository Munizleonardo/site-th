
import PlanodeSaude from "@/app/_components/healthplan/PlanodeSaude"
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Formulário Plano de Saúde',
    description: 'Formulário Plano de Saúde',
}

export default function FormularioHealthPlan() {
    return (
        <div className="min-h-screen">
            <Header />
            <PlanodeSaude />
            <Footer />
        </div>
    ) ;
}