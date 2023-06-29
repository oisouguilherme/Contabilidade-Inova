import { Contato } from "@/components/Contato";
import { FitaExperiencia } from "@/components/FitaExperiencia";
import Header from "@/components/Header";
import { InformacaoExtra } from "@/components/InformacaoExtra";
import { Main } from "@/components/Main";
import { NossaEmpresa } from "@/components/NossaEmpresa";
import { Servicos } from "@/components/Servicos";

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
    </div>
  )
}
