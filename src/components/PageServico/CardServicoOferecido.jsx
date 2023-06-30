import Image from 'next/image'
import ImageTeste from '../../assets/nossaEmpresa.jpg'

export function CardServicoOferecido({style}){
  return(
    <div className='grid gap-4 sm:gap-12 grid-cols-1 md:grid-cols-2  items-center'>
      <div className={style}>
        <Image src={ImageTeste}/>
      </div>
      <div className='sm:text-lg space-y-4 flex flex-col items-start'>
        <h2 className='text-2xl sm:text-3xl font-medium text-azul'>Acessoria Contábil</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eum, maxime ipsa saepe repellendus id vitae, dignissimos a reiciendis fuga exercitationem sapiente. Impedit incidunt tempore atque molestiae inventore, sint ullam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, asperiores aliquid. Ab consequuntur quas hic necessitatibus voluptatibus natus, voluptatum eaque harum, ipsa cum itaque ut ducimus molestias doloribus nostrum iure?</p>
        <a href="#" className='bg-green-600 hover:bg-green-500 duration-300 text-white font-medium py-2 px-8'>Tenho interesse</a>
      </div>
    </div>
  )
}