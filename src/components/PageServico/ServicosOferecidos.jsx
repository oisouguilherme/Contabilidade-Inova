import { CardServicoOferecido } from "./CardServicoOferecido";

export function ServicosOferecidos(){
  return(
    <div className="max-w-6xl mx-auto py-12 space-y-16 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-azul text-center">
        Serviços oferecidos
      </h1>
      <div className="flex flex-col gap-16">
        <CardServicoOferecido/>
        <CardServicoOferecido style={"order-1"}/>
        <CardServicoOferecido/>
        <CardServicoOferecido style={"order-1"}/>
        <CardServicoOferecido/>
      </div>
    </div>
  )
}