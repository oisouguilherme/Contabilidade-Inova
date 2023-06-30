import { Faq } from "./Utils/Faq";


export function PerguntasFreq() {

  return (
    <section id="Duvidas" className="max-w-2xl mx-auto space-y-8 py-12 px-4">
      <h2 className="text-center text-4xl sm:text-5xl font-medium">
        Perguntas <br /> <span className="text-azul font-bold">Frequentes</span>
      </h2>
      <p className="text-center text-sm sm:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iure
        quod culpa sequi laudantium voluptatum?
      </p>
      <div className="rounded-2xl overflow-hidden">
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
      </div>
    </section>
  );
}
