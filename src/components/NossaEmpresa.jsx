import Image from "next/image";
import Empresa from '../assets/nossaEmpresa.jpg'

export function NossaEmpresa(){
  return(
    <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 py-12">
      <div className="space-y-4">
        <h2 className="text-5xl">Conheça <span className="font-medium text-azul">Nossa Empresa</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, suscipit molestias nulla possimus sint porro quae quos itaque nobis autem voluptatibus accusantium! Obcaecati animi, tempora at possimus iste qui eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur qui asperiores eveniet consequatur quod a, minus omnis explicabo dolorum quidem non cumque iure culpa veniam odit eum officia eaque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum laboriosam et ea iste. Hic dolor maxime laboriosam, nesciunt sequi reiciendis eveniet similique quia fugiat ut quod animi sunt blanditiis modi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, illum. Sed ea placeat illo nam consequuntur vitae praesentium cumque blanditiis reiciendis, et, animi cupiditate quis similique maxime, maiores vero a.</p>
      </div>
      <Image src={Empresa} className="rounded-xl"/>
    </div>
  )
}