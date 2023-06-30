import Image from "next/image";
import Empresa from '../assets/nossaEmpresa.jpg'

export function Contato(){
  return(
    <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center py-12 px-4">
      <div className="flex flex-col items-start gap-6">
        <h2 className="text-4xl sm:text-5xl font-medium"><span className="font-bold text-azul">Entre em contato</span> <br /> com a gente!</h2>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>contatocontabilidade@gmail.com</p>
        </div>
        <a href="#" className="text-lg bg-azul hover:bg-opacity-95 duration-300 text-white px-12 py-3 font-medium rounded-xl">Agende sua visita</a>
      </div>
      <Image src={Empresa} alt="empresa" className="rounded-xl"/>
    </div>
  )
}