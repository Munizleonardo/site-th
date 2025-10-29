
import SeguroAuto from "@/app/_components/carsecurity/SeguroAuto"
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Formulário Seguro Auto',
    description: 'Formulário Seguro Auto',
}

export default function FormularioSecurityCar() {
    return (
        <div className="min-h-screen">
            <Header />
            <SeguroAuto />
            <Footer />
        </div>
    ) ;
}