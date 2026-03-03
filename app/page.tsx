'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle, 
  InstagramLogo, 
  WhatsappLogo, 
  Sparkle,
  PlayCircle
} from '@phosphor-icons/react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#F4EBE8]">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://picsum.photos/seed/nails/1920/1080?blur=2" 
            alt="Nails Background" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 mb-6">
              <Sparkle weight="fill" className="text-[#B5838D]" />
              <span className="text-sm font-medium tracking-wide text-[#8B5E66] uppercase">Vagas Abertas</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif text-[#3D3D3D] leading-[1.1] mb-6">
              Transforme sua paixão em uma <span className="italic text-[#B5838D]">profissão lucrativa</span>
            </h1>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              O Curso de Manicure Profissional da Nath Nails ensina do zero ao avançado as técnicas que lotam a agenda do nosso espaço em Caucaia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#matricula" className="inline-flex items-center justify-center gap-2 bg-[#B5838D] hover:bg-[#9A6A73] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-[#B5838D]/30 hover:-translate-y-1">
                Quero me inscrever agora
              </a>
              <a href="#conteudo" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-[#3D3D3D] px-8 py-4 rounded-full font-medium transition-all border border-stone-200">
                <PlayCircle size={24} weight="light" />
                Ver conteúdo
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F4EBE8] overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/woman${i}/100/100`} alt="Aluna" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} weight="fill" size={16} />)}
                </div>
                <span className="text-sm font-medium text-stone-600">5.0 (30+ avaliações no Google)</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden relative shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/manicure/800/1000" 
                alt="Trabalho de Manicure" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                <p className="font-serif italic text-lg text-[#3D3D3D] mb-2">"O melhor serviço de pé e mão que já fiz!"</p>
                <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">— Cliente Satisfeita</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E5989B] rounded-full blur-3xl opacity-40 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFB4A2] rounded-full blur-3xl opacity-40 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="bg-white py-8 border-b border-stone-100">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
          <div className="flex items-center gap-2 font-serif text-xl"><Sparkle /> Excelência</div>
          <div className="flex items-center gap-2 font-serif text-xl"><Sparkle /> Qualidade</div>
          <div className="flex items-center gap-2 font-serif text-xl"><Sparkle /> Profissionalismo</div>
          <div className="flex items-center gap-2 font-serif text-xl"><Sparkle /> Dedicação</div>
        </div>
      </div>

      {/* About the Course */}
      <section id="conteudo" className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#B5838D] uppercase mb-4">O que você vai aprender</h2>
            <h3 className="text-4xl font-serif text-[#3D3D3D]">O método completo para se destacar no mercado</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Preparação Perfeita",
                desc: "Aprenda a preparar a unha natural garantindo máxima aderência e durabilidade do alongamento ou esmaltação."
              },
              {
                title: "Cutilagem Russa e Tradicional",
                desc: "Domine as técnicas de cutilagem mais pedidas, entregando um acabamento impecável e sem machucar a cliente."
              },
              {
                title: "Esmaltação em Gel",
                desc: "O segredo da esmaltação sem manchas, com brilho intenso e que dura semanas intacta."
              },
              {
                title: "Alongamentos",
                desc: "Fibra de vidro, gel moldado e tips. Construa unhas com naturalidade, resistência e curvatura C perfeita."
              },
              {
                title: "Nail Art e Decorações",
                desc: "Francesinha reversa, encapsuladas, babyboomer e as tendências que vão agregar valor ao seu serviço."
              },
              {
                title: "Gestão e Atendimento",
                desc: "Como precificar, atrair clientes, fidelizar e transformar seu serviço em uma experiência premium."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[24px] shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#F4EBE8] rounded-full flex items-center justify-center text-[#B5838D] mb-6">
                  <CheckCircle size={24} weight="fill" />
                </div>
                <h4 className="text-xl font-serif text-[#3D3D3D] mb-3">{item.title}</h4>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#3D3D3D] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center mb-6 text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} weight="fill" size={24} />)}
            </div>
            <h2 className="text-4xl font-serif mb-6">O que dizem sobre o Espaço Nath Nails</h2>
            <p className="text-stone-300">Mais de 30 avaliações 5 estrelas no Google confirmam a qualidade do nosso trabalho.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Excelente profissional, ambiente agradável e super acolhedor.",
              "O melhor serviço de pé e mão que já fiz!",
              "Maravilhosa, atendimento nota 10 e o trabalho é de alta qualidade."
            ].map((text, i) => (
              <div key={i} className="bg-stone-800 p-8 rounded-2xl border border-stone-700">
                <p className="font-serif text-lg italic text-stone-200 mb-6">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center font-serif font-bold text-stone-400">
                    {['A', 'C', 'M'][i]}
                  </div>
                  <div>
                    <p className="font-medium text-sm">Cliente do Espaço</p>
                    <p className="text-xs text-stone-400">Avaliação do Google</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Nath Nails */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/salon/800/1000" 
                alt="Espaço Nath Nails" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#F4EBE8] rounded-full -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-4xl font-serif text-[#3D3D3D] mb-6">Conheça o Espaço Nath Nails</h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              "✨ Bem-vinda ao nosso espaço de beleza e bem-estar! ✨ Aqui você encontra tudo o que precisa para cuidar de si mesma em um só lugar, com profissionais qualificados e um atendimento personalizado."
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Nossa missão sempre foi entregar mais do que unhas bonitas, mas sim elevar a autoestima de cada mulher que passa por aqui. Agora, decidi compartilhar todo o meu conhecimento para que você também possa transformar a vida das suas clientes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-[#B5838D] shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[#3D3D3D]">Endereço</h4>
                  <p className="text-stone-500">Av. Central, 164 - Icaraí, Caucaia - CE, 61624-450</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-[#B5838D] shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[#3D3D3D]">Horário</h4>
                  <p className="text-stone-500">Aberto · Fecha às 19:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-[#B5838D] shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[#3D3D3D]">Contato</h4>
                  <p className="text-stone-500">(85) 98207-3038</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="matricula" className="py-24 bg-[#F4EBE8] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB4A2] rounded-full blur-[100px] opacity-30 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E5989B] rounded-full blur-[100px] opacity-30 -z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-[40px] p-10 md:p-16 shadow-xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#3D3D3D] mb-6">Pronta para dar o próximo passo?</h2>
            <p className="text-lg text-stone-600 mb-10">
              Junte-se a dezenas de alunas que já transformaram suas carreiras com o método Nath Nails. As vagas para a próxima turma são limitadas.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/5585982073038?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20manicure." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 text-lg"
              >
                <WhatsappLogo size={24} weight="fill" />
                Falar no WhatsApp
              </a>
            </div>
            
            <p className="mt-6 text-sm text-stone-500">
              Garantia incondicional de 7 dias. Seu risco é zero.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-stone-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl font-bold text-[#3D3D3D]">
            Nath Nails<span className="text-[#B5838D]">.</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-[#B5838D] transition-colors">
              <InstagramLogo size={24} />
            </a>
            <a href="https://wa.me/5585982073038" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-[#B5838D] transition-colors">
              <WhatsappLogo size={24} />
            </a>
          </div>
          
          <div className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Espaço Nath Nails. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
