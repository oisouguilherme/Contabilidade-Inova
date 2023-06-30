import { IconFAcebook, IconInstagram, IconLinkedIn, IconWhatsApp } from "@/assets/Icons";
import Image from "next/image";
import Logo from '../assets/logo.png'
export function Footer(){
  return(
    <div className="bg-gradient-to-tl from-blue-500 to-[#081D56]">
      <div className="max-w-6xl mx-auto text-white text-sm flex gap-4 flex-wrap justify-between items-center py-4 px-4">
        <div>
          <Image src={Logo} className="w-28 pb-4"/>
          <p>© 2023 - Inova Contabilidade</p>
          <p>Todos os direitos reservados</p>
        </div>
        <div className="space-y-2">
          <div className="flex gap-4">
            <IconInstagram/>
            <IconLinkedIn/>
            <IconFAcebook/>
            <IconWhatsApp/>
          </div>
          <p>contato@gmai.com</p>
        </div>
      </div>
    </div>
  )
}