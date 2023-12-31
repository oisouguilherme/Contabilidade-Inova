import Link from "next/link";
import { CardServico } from "./CardServico";

export function Servicos(){
  return(
    <div className="bg-gradient-to-tl from-blue-500 to-[#081D56] px-4">
      <div className="max-w-6xl mx-auto py-24 flex flex-col items-center gap-12">
        <div className="flex gap-12 flex-wrap justify-center">
          <CardServico title={"Missão"}/>
          <div className="md:pt-16">
            <CardServico title={"Visão"}/>
          </div>
            <CardServico title={"Valores"}/>
        </div>
        <Link href="/servicos" className="sm:text-lg bg-white hover:bg-[#081D56] duration-300 rounded-xl text-[#081D56] hover:text-white px-12 py-3 font-medium">Conheça nossos serviços</Link>
      </div>
    </div>
  )
}