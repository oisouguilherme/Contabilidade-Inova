import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ContatoServico } from "@/components/PageServico/ContatoServico";
import { ServicosOferecidos } from "@/components/PageServico/ServicosOferecidos";

export default function Servicos() {
  return (
    <div>
      <Header />
      <ServicosOferecidos />
      <ContatoServico />
      <Footer />
    </div>
  );
}
