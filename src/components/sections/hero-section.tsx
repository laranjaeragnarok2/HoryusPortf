import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex flex-col items-center justify-center text-left p-6 md:p-12 overflow-hidden bg-[#081208]"
        >
            {/* Background com tom mais orgânico/profundo - Remete a crescimento e raízes */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 animate-[ken-burns_30s_ease-in-out_infinite_alternate]"
                style={{ backgroundImage: 'url(/background-hero.jpeg)' }}
            />
            {/* Overlay verde sutil para reforçar o tom "verdinho" */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-0" />

            <div className="relative z-10 max-w-5xl w-full mx-auto">
                <div className="mb-8 overflow-hidden">
                    <h2 className="text-sm font-medium text-primary tracking-[0.3em] uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Horyu Arthur — Estrategista & Desenvolvedor
                    </h2>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 font-headline leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Tecnologia com alma.
                    <br />
                    <span className="text-muted-foreground/50 italic font-light">Estratégia com raízes.</span>
                </h1>

                <div className="max-w-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light">
                        Construindo ecossistemas digitais que respiram, evoluem e geram impacto autêntico para o seu negócio.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                        <Button asChild size="lg" className="rounded-none px-10 py-7 text-lg bg-primary hover:bg-primary/90 transition-all font-bold tracking-tight">
                            <Link href="#diagnostico">Cultivar meu Projeto →</Link>
                        </Button>
                        <Link
                            href="#portfolio"
                            className="text-sm uppercase tracking-[0.2em] font-bold hover:text-primary transition-colors border-b border-muted-foreground/30 pb-1"
                        >
                            Ver Portfólio
                        </Link>
                    </div>
                </div>
            </div>

            {/* Redes Sociais Minimalistas na Lateral */}
            <div className="absolute right-6 bottom-12 hidden md:flex flex-col gap-6 z-20">
                <Link href="https://github.com/laranjaeragnarok2" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                </Link>
                <Link href="https://www.linkedin.com/in/arthur-horyu-128933363/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={18} />
                </Link>
                <Link href="mailto:1horyuarthur@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={18} />
                </Link>
            </div>

            <div className="absolute left-6 bottom-12 hidden md:block z-20">
                <p className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground/40 [writing-mode:vertical-rl] rotate-180 font-medium">
                    EST. 2026 — ORGANIC DIGITAL DESIGN
                </p>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-30">
                <ArrowDown className="h-5 w-5 text-muted-foreground" />
            </div>
        </section>
    );
}
