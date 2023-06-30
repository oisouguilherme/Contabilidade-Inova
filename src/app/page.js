import { Contato } from "@/components/Contato";
import { FitaExperiencia } from "@/components/FitaExperiencia";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { InformacaoExtra } from "@/components/InformacaoExtra";
import { Main } from "@/components/Main";
import { NossaEmpresa } from "@/components/NossaEmpresa";
import { OqueFalam } from "@/components/OqueFalam";
import { PerguntasFreq } from "@/components/PerguntasFreq";
import { Servicos } from "@/components/Servicos";
import { ButtonWhatsApp } from "@/components/Utils/ButtonWhatsApp";

export default function Home() {
  return (
    <div className="bg-[#EBEAE8]">
      <Header/>
      <Main/>
      <Servicos/>
      <NossaEmpresa/>
      <FitaExperiencia/>
      <InformacaoExtra/>
      <Contato/>
      <OqueFalam/>
      <PerguntasFreq/>
      <ButtonWhatsApp/>
      <Footer/>
    </div>
  )
}
