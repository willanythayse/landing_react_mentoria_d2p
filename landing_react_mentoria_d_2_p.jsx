import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, BarChart3, ShieldCheck, Gauge, TrendingUp, LayoutGrid, MessageCircle, Layers } from "lucide-react";

// Landing Page: Mentoria Data to Profit (D2P)
// - Stack: React + Tailwind
// - Brand palette from logo: Purple #7E2EEB, White #FFFFFF, Dark #1A1A1A
// - Clean SaaS-like aesthetic with rounded-2xl, soft shadows, generous spacing

const benefits = [
  "Planejar o crescimento sem achismos.",
  "Se sentir seguro ao decidir sobre seu negócio.",
  "Eliminar o caos das planilhas confusas.",
  "Ter dashboards automáticos prontos para uso.",
  "Escalar com clareza e confiança.",
];

const deliverables = [
  {
    title: "7 módulos práticos",
    desc: "Passo a passo do Método Data to Profit.",
    Icon: Layers,
  },
  {
    title: "Encontros semanais em grupo",
    desc: "Acompanhamento direto para tirar dúvidas e ajustar rotas.",
    Icon: MessageCircle,
  },
  {
    title: "Ferramentas exclusivas",
    desc: "Dashboard Turbo, Radar de Variáveis e Roteiro Decisório.",
    Icon: LayoutGrid,
  },
  {
    title: "Suporte em grupo fechado",
    desc: "Comunidade no WhatsApp/Telegram para networking e ajuda.",
    Icon: ShieldCheck,
  },
];

export default function MentoriaD2P() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b0c] text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b0c]/60">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#7E2EEB] to-[#5c15c7]" />
            <span className="font-semibold tracking-wide">GESTYSE</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#beneficios" className="hover:text-white">Benefícios</a>
            <a href="#como-funciona" className="hover:text-white">Como funciona</a>
            <a href="#investimento" className="hover:text-white">Investimento</a>
            <a href="#cta" className="ml-2 inline-flex items-center rounded-xl bg-[#7E2EEB] px-4 py-2 font-medium text-white hover:bg-[#6b1fe6] transition">Quero participar</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#7E2EEB]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#7E2EEB]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-10 md:grid-cols-2"
          >
            <div>
              <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                Saia do caos das planilhas e conquiste <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7E2EEB]">clareza nos seus números</span> para tomar decisões financeiras seguras e escalar seu negócio com confiança.
              </h1>
              <p className="mt-5 text-white/70 md:text-lg">
                Mentoria prática e exclusiva para empreendedores que querem transformar dados em lucro real.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#7E2EEB] px-6 py-3 font-semibold shadow-lg shadow-[#7E2EEB]/30 transition hover:bg-[#6b1fe6]"
                >
                  Quero Participar da Mentoria D2P
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/5"
                >
                  Ver benefícios
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/70 md:max-w-lg">
                <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5"/><span>Decisões seguras</span></div>
                <div className="flex items-center gap-3"><BarChart3 className="h-5 w-5"/><span>Dashboards prontos</span></div>
                <div className="flex items-center gap-3"><Gauge className="h-5 w-5"/><span>Previsibilidade</span></div>
                <div className="flex items-center gap-3"><TrendingUp className="h-5 w-5"/><span>Escala com confiança</span></div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-2xl"
            >
              {/* Dashboard mockup */}
              <div className="rounded-2xl bg-[#121215] p-6">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-white/10 p-4">
                    <p className="text-sm text-white/60">Receita (últimos 30 dias)</p>
                    <p className="mt-2 text-2xl font-semibold">R$ 128.940</p>
                    <div className="mt-4 h-24 w-full rounded-md bg-gradient-to-tr from-[#7E2EEB]/40 to-transparent" />
                  </div>
                  <div className="rounded-xl border border-white/10 p-4">
                    <p className="text-sm text-white/60">Margem de Lucro</p>
                    <p className="mt-2 text-2xl font-semibold">27,4%</p>
                    <div className="mt-4 h-24 w-full rounded-md bg-gradient-to-tr from-[#7E2EEB]/40 to-transparent" />
                  </div>
                  <div className="rounded-xl border border-white/10 p-4">
                    <p className="text-sm text-white/60">CAC</p>
                    <p className="mt-2 text-2xl font-semibold">R$ 38,20</p>
                    <div className="mt-4 h-24 w-full rounded-md bg-gradient-to-tr from-[#7E2EEB]/40 to-transparent" />
                  </div>
                  <div className="rounded-xl border border-white/10 p-4">
                    <p className="text-sm text-white/60">LTV</p>
                    <p className="mt-2 text-2xl font-semibold">R$ 1.245</p>
                    <div className="mt-4 h-24 w-full rounded-md bg-gradient-to-tr from-[#7E2EEB]/40 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Para quem é */}
      <section id="beneficios" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-2xl font-semibold md:text-4xl">Essa mentoria é para você se…</h2>
              <p className="mt-3 text-white/70 md:text-lg">Você quer previsibilidade, segurança financeira e crescimento sem depender de achismos.</p>
              <ul className="mt-8 space-y-4 text-white/85">
                {[
                  "Está perdido nos números do seu negócio.",
                  "Quer previsibilidade e segurança financeira.",
                  "Deseja escalar sem depender de achismos.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-[#7E2EEB]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              {benefits.map((b) => (
                <div key={b} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#7E2EEB]" />
                    <p className="text-white/90">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <h2 className="text-center text-2xl font-semibold md:text-4xl">Como funciona a Mentoria D2P</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-white/70 md:text-lg">
            7 módulos práticos, encontros semanais e ferramentas exclusivas para transformar dados em lucro real.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map(({ title, desc, Icon }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
                <Icon className="h-6 w-6 text-[#7E2EEB]" />
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section id="investimento" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl">
            <h2 className="text-2xl font-semibold md:text-4xl">Seu próximo passo para clareza e lucro</h2>
            <p className="mt-3 text-white/70 md:text-lg">Mentoria em grupo com condições especiais no primeiro lote.</p>
            <div className="mt-6 text-4xl font-bold tracking-tight">R$ 2.497 a R$ 2.997</div>
            <a
              id="cta"
              href="#form"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#7E2EEB] px-8 py-4 font-semibold text-white shadow-xl shadow-[#7E2EEB]/30 transition hover:bg-[#6b1fe6]"
            >
              Quero Fazer Parte da Mentoria D2P
            </a>
            <p className="mt-3 text-sm text-white/60">Versão VIP 1:1 sob consulta.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/60">Sobre</p>
              <p className="mt-2 max-w-xl text-white/70">
                Sou especialista em dados há mais de 7 anos, atuando em grandes empresas nacionais e multinacionais. Agora, criei a Mentoria Data to Profit (D2P) para ajudar empreendedores a conquistar clareza nos números e escalar seus negócios com segurança.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-sm uppercase tracking-widest text-white/60">Contato</p>
              <p className="mt-2 text-white/70">contato@seudominio.com</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <ShieldCheck className="h-4 w-4 text-[#7E2EEB]" />
                Mentoria segura e prática
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
            © {new Date().getFullYear()} GESTYSE • Mentoria Data to Profit (D2P)
          </div>
        </div>
      </footer>
    </div>
  );
}
