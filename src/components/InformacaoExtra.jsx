import Image from "next/image";
import Empresa from '../assets/nossaEmpresa.jpg'

export function InformacaoExtra(){
  return(
    <div className="grid md:grid-cols-2 max-w-6xl mx-auto py-12 items-center gap-12 px-4">
      <Image src={Empresa} alt="empresa" className="rounded-xl"/>
      <div className="flex flex-col items-start gap-6">
        <h2 className="text-4xl sm:text-5xl font-medium">Lorem ipsum <span className="font-bold text-azul">dolor sit amet </span>consectetur adipisicin.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla aspernatur aliquam error consequuntur doloribus sint expedita blanditiis officiis vel sapiente! Aliquam suscipit odio aliquid quidem quas. Fugit ipsam, vero earum molestias, cumque repudiandae numquam, ipsum amet autem voluptas facere.</p>
        <a href="#" className="text-lg bg-azul hover:bg-opacity-95 duration-300 text-white px-12 py-3 font-medium rounded-xl">Conheça a comissão</a>
      </div>
    </div>
  )
}