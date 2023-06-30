import { IconRocket } from "@/assets/Icons";

export function CardServico(){
  return(
    <div className="bg-white sm:w-80 h-fit text-center flex flex-col items-center px-8 pt-12 pb-8 relative rounded-xl">
      <div className="bg-white rounded-full p-4 absolute -top-6">
        <IconRocket/>
      </div>
      <h2 className="text-2xl font-medium">Missão</h2>
      <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, saepe cum? At, fugiat, id nostrum aspernatur repellat maiores temporibus suscipit nulla quia minima facilis voluptatem debitis deserunt doloribus eligendi porro.</p>
    </div>
  )
}