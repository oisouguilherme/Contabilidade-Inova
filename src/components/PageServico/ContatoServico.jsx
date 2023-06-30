import { IconData, IconEmail, IconLocaliza, IconTelefone } from "@/assets/Icons";

export function ContatoServico(){
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-12 px-4">
      <div className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-medium text-azul">Entre em contato conosco</h2>
        <p className="flex gap-2 items-center">
          <IconTelefone /> (38) 99854-2256
        </p>
        <p className="flex gap-2 items-center">
          <IconEmail /> atendimentocontabilitade@gmail.com
        </p>
        <p className="flex gap-2 items-center">
          <IconData /> 08:00 às 18:00 - Segunda-feira a Sexta-feira
        </p>
        <p className="flex gap-2 items-center">
          <IconLocaliza /> Rua teste lopes, 236 Centro Unai/MG
        </p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.0867070831139!2d-46.90315123044735!3d-16.35628539902284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9357abc2923a97cd%3A0xb27cf85a78040535!2sContabilidade%20Inova!5e0!3m2!1spt-BR!2sbr!4v1688147345043!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}