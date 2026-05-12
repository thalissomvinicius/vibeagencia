import React from 'react';
import {
  Instagram,
  Smartphone,
  Layers,
  Video,
  ChevronRight,
  Check,
  Zap,
  Star,
  MessageSquare,
  ArrowRight,
  Monitor,
  Layout,
  Globe
} from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-black tracking-tighter flex items-center gap-3">
        <img src="logo_white.png" alt="Agência Vibe Logo" className="w-12 h-12" />
        <span className="text-white">AGÊNCIA</span><span className="text-brand-primary">VIBE</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
        <a href="#inicio" className="hover:text-brand-primary transition-colors">Início</a>
        <a href="#servicos" className="hover:text-brand-primary transition-colors">Serviços</a>
        <a href="#planos" className="hover:text-brand-primary transition-colors">Planos</a>
      </div>
      <a href="https://wa.me/5591991697664" target="_blank" className="btn-primary text-xs !py-3 !px-6 bg-white/5 border border-white/10 hover:bg-white/10 !shadow-none">
        Falar Agora
      </a>
    </div>
  </nav>
);

const PriceCard = ({ title, price, highlighted, features }) => (
  <Motion.div
    whileHover={{ y: -10 }}
    className={`card-vibrant relative overflow-hidden flex flex-col h-full ${highlighted ? 'border-brand-primary/50 ring-2 ring-brand-primary/20' : ''}`}
  >
    {highlighted && (
      <div className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-bl-xl z-20">
        Mais Popular
      </div>
    )}
    {!highlighted && title === "Premium" && (
      <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl z-20">
        Apenas 2 Vagas
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter text-white">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-slate-500 text-sm font-bold uppercase">R$</span>
        <span className="text-4xl font-black text-white tracking-tighter">{price}</span>
        <span className="text-slate-500 text-sm font-bold uppercase">/mês</span>
      </div>
    </div>
    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-medium">
          <div className="mt-0.5 rounded-full p-1 bg-white/5 border border-white/10 shrink-0">
            <Check className="w-3 h-3 text-brand-primary" />
          </div>
          {feature}
        </li>
      ))}
    </ul>
    <a
      href={`https://wa.me/5591991697664?text=Olá! Tenho interesse no plano ${title}.`}
      target="_blank"
      className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all text-center ${highlighted ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-xl shadow-brand-primary/20' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
    >
      Assinar Agora
    </a>
  </Motion.div>
);

const App = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-slate-200 selection:bg-brand-primary/30 overflow-x-hidden selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-52 md:pb-40 px-6 overflow-hidden">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-brand-primary/30 blur-[150px] rounded-full animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-brand-secondary/30 blur-[150px] rounded-full animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass mb-8 text-brand-accent text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
              Estratégia Visual de Alto Impacto
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] text-white italic">
              ELEVE O NÍVEL DO SEU <br />
              <span className="text-gradient">INSTAGRAM ATÉ O TOPO.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Transformamos perfis comuns em máquinas de vendas através de design estratégico e gestão profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#planos" className="btn-primary w-full sm:w-auto text-lg group">
                Ver Planos <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => window.open('https://wa.me/5591991697664?text=Olá! Gostaria de solicitar uma Análise de Perfil gratuita.', '_blank')}
                className="w-full sm:w-auto px-8 py-4 glass rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2 border-brand-accent/30 text-brand-accent"
              >
                <Star className="w-5 h-5" /> Análise de Perfil Grátis
              </button>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-6 relative bg-[#0c0c0f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary mb-4 block italic">O que entregamos</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">DOMINE CADA PIXEL DA SUA PRESENÇA DIGITAL.</h2>
            </div>
            <div className="glass p-6 rounded-3xl border-l-4 border-brand-accent max-w-xs">
              <p className="text-sm text-slate-400 font-bold leading-relaxed italic">
                Cuidamos desde a foto de perfil até o roteiro dos seus Reels mais virais.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Instagram,
                title: "Gestão Social",
                desc: "Análise de perfil, cronograma estratégico, legendas persuasivas e análise de métricas para crescimento real."
              },
              {
                icon: Layers,
                title: "Identidade Visual",
                desc: "Desenvolvimento de Logotipo, manual da marca, paleta de cores e tipografia exclusiva para seu posicionamento."
              },
              {
                icon: Video,
                title: "Edição de Reels",
                desc: "Vídeos dinâmicos no estilo 'Viral', com legendas animadas, cortes precisos e trilhas que retêm o público."
              }
            ].map((service, i) => (
              <Motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="card-vibrant border-none bg-gradient-to-b from-white/[0.03] to-transparent"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/20">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{service.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary mb-4 block italic">Nosso Método</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">COMO TRANSFORMAMOS SEU PERFIL</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Imersão", desc: "Entendemos seu nicho, seu público e seus objetivos de venda." },
              { step: "02", title: "Estratégia", desc: "Criamos a linha editorial e o plano de ação visual." },
              { step: "03", title: "Design", desc: "Executamos artes e vídeos com foco em autoridade." },
              { step: "04", title: "Entrega", desc: "Lançamos seu novo posicionamento e monitoramos resultados." }
            ].map((item, i) => (
              <Motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative p-8 glass rounded-[2.5rem] border-brand-primary/20 bg-gradient-to-br from-white/[0.05] to-transparent group overflow-hidden shadow-2xl shadow-brand-primary/5"
              >
                <div className="text-6xl font-black text-brand-primary/10 absolute top-4 right-8 group-hover:text-brand-primary/20 transition-colors">{item.step}</div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20">
                  <Zap className="w-6 h-6 text-brand-primary" />
                </div>
                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent mb-4 block italic">Invista no seu Crescimento</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">PLANOS QUE CABEM NO SEU NEGÓCIO</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">Escolha o nível de acompanhamento que você precisa hoje.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <PriceCard
              title="Starter"
              price="249,99"
              features={[
                "Perfil Profissional + Link na Bio",
                "3 Artes de Feed por semana",
                "Gestão de 5 Stories por semana",
                "Suporte via WhatsApp",
                "Relatório Mensal de Crescimento"
              ]}
            />
            <PriceCard
              title="Business"
              price="349,99"
              highlighted={true}
              features={[
                "Tudo do plano Starter",
                "Vínculo com WhatsApp Business",
                "5 Artes de Feed por semana",
                "Gestão de 10 Stories por semana",
                "2 Edições de Reels por mês",
                "Roteiros Estratégicos"
              ]}
            />
            <PriceCard
              title="Premium"
              price="649,99"
              features={[
                "Gestão Total + Site Grátis",
                "Site grátis no mínimo de 3 meses",
                "Postagens (Feed + Stories) Ilimitadas",
                "4 Edições de Reels por mês",
                "Identidade Visual Completa",
                "Configuração de Catálogo/Produtos",
                "WhatsApp Business organizado como brinde",
                "Suporte Prioritário 24/7"
              ]}
            />
          </div>

          <div className="mt-12 glass p-8 rounded-[2rem] border-brand-primary/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-primary mb-3 block">Adicional de Site</span>
              <h4 className="font-black text-3xl text-white tracking-tighter mb-3">SITE PROFISSIONAL POR R$ 499,99</h4>
              <p className="text-slate-400 font-medium max-w-3xl">Ao contratar o site, você ganha como brinde o vínculo com WhatsApp Business e a organização do perfil: descrição, foto, catálogo/serviços e mensagem inicial.</p>
            </div>
            <div className="shrink-0 text-left lg:text-right">
              <p className="text-brand-accent font-black uppercase tracking-widest text-xs mb-2">Premium</p>
              <p className="text-white font-bold max-w-xs">Site grátis no plano Premium com contratação mínima de 3 meses.</p>
            </div>
          </div>

          <div className="mt-20 glass p-10 rounded-[3rem] border-brand-accent/20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex gap-6 items-start max-w-xl">
              <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                <Star className="w-8 h-8 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-black text-2xl mb-2 text-white italic">PROJETOS ESPECIAIS & ANÚNCIOS</h4>
                <p className="text-slate-400 font-medium">Precisa de tráfego pago (Ads), e-commerce ou um volume personalizado? Fazemos orçamentos sob medida para veicular seus anúncios.</p>
              </div>
            </div>
            <a href="https://wa.me/5591991697664?text=Olá! Gostaria de um orçamento personalizado." target="_blank" className="btn-primary !bg-white !text-brand-dark px-10 shadow-none border border-transparent hover:!bg-brand-accent">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#0c0c0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter text-white italic">DÚVIDAS FREQUENTES</h2>
          <div className="space-y-4">
            {[
              { q: "Qual o prazo de entrega das artes?", a: "Para planos mensais, trabalhamos com cronograma semanal. As artes da semana são entregues com pelo menos 48h de antecedência para sua aprovação." },
              { q: "Como funciona o pagamento?", a: "O pagamento é recorrente via Cartão de Crédito ou Pix, realizado no início de cada mês de serviço para garantir sua vaga no cronograma." },
              { q: "Posso cancelar a qualquer momento?", a: "Sim, não trabalhamos com fidelidade obrigatória. Pedimos apenas um aviso prévio de 15 dias para encerramento do cronograma." },
              { q: "Vocês respondem os comentários e DMs?", a: "No plano Premium, oferecemos o suporte básico de triagem de comentários. Para respostas complexas de vendas, treinamos sua equipe ou fornecemos roteiros." }
            ].map((faq, i) => (
              <details key={i} className="glass rounded-2xl border-white/5 group overflow-hidden">
                <summary className="p-6 cursor-pointer font-bold text-slate-200 uppercase tracking-tighter flex justify-between items-center list-none hover:bg-white/5 transition-all">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform text-brand-primary" />
                </summary>
                <div className="p-6 pt-0 text-slate-400 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <img src="logo_white.png" alt="Agência Vibe Icon" className="w-10 h-10" />
                <div className="text-3xl font-black flex items-center gap-2 tracking-tighter italic">
                  <span className="text-white">AGÊNCIA</span><span className="text-brand-primary">VIBE</span>
                </div>
              </div>
              <p className="text-slate-500 max-w-md font-medium leading-relaxed">
                Elevando o padrão visual de empreendedores e empresas que buscam autoridade e vendas reais através do Design Estratégico.
              </p>
            </div>
            <div>
              <h5 className="text-white font-black mb-6 uppercase text-sm tracking-widest italic">Links Úteis</h5>
              <ul className="space-y-4 text-slate-500 font-bold text-sm uppercase tracking-wider">
                <li><a href="#inicio" className="hover:text-brand-primary transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-brand-primary transition-colors">Serviços</a></li>
                <li><a href="#planos" className="hover:text-brand-primary transition-colors">Planos</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-black mb-6 uppercase text-sm tracking-widest italic">Contato</h5>
              <p className="text-slate-500 font-bold text-sm mb-4">vinicius.devcode.br@gmail.com</p>
              <p className="text-slate-500 font-bold text-sm">(91) 99169-7664</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">© 2026 AGÊNCIA VIBE. DESENVOLVIDO POR <span className="text-blue-500">VINICIUS DEV</span></p>
            <div className="flex gap-6">
              <a href="https://wa.me/5591991697664" target="_blank" className="text-slate-600 hover:text-brand-primary transition-colors"><MessageSquare className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
