import Image from "next/image";
import ImagemMulher from '../assets/woman.png'
export function Main(){
  return(
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center pt-12 px-4">
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-xl text-gray-500">BEM-VINDO A INOVA</h2>
        <h1 className="text-4xl sm:text-5xl font-bold">A <span className="text-[#081D56]">contabilidade</span> que facilita o seu dia a dia.</h1>
        <p>Veja como colocar um ponto final nas suas <br /> preocupações com contabilidade!</p>
        <a href="#" className="sm:text-lg bg-azul hover:bg-opacity-95 duration-300 text-white px-12 py-3 font-medium rounded-xl">Conheça nossos serviços</a>
      </div>
      <div className="w-full flex justify-end">
        <Image src={ImagemMulher} alt="Mulher com computador na mão" className="w-96"/>
      </div>
    </div>
  )
}