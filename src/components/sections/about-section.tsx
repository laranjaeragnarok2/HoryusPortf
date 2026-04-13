import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Instagram, ArrowRight } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="sobre" className="bg-card py-16 sm:py-24 border-y border-border/50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-8 lg:gap-16 items-center">
                    <div className="md:col-span-2">
                        <div className="relative aspect-[4/5] rounded-none overflow-hidden group border border-primary/20">
                             <Image 
                                src="https://i.ibb.co/DSMjdWF/image.jpg"
                                alt="Horyu Arthur"
                                fill
                                data-ai-hint="portrait developer"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ filter: 'contrast(1.1) saturate(0.9)' }}
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-6">A Mente por trás do Guia</h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 font-headline leading-tight">
                            Não projeto apenas interfaces. <br />
                            <span className="text-muted-foreground italic font-light">Projeto liberdade.</span>
                        </h3>
                        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground/80 space-y-6 font-light leading-relaxed">
                            <p>
                                Acredito que a tecnologia deve ser invisível, orgânica e soberana. Minha missão é garantir que a visão dos líderes não seja limitada pela técnica, mas impulsionada por ela.
                            </p>
                            <p>
                                Unindo o rigor da <strong>engenharia de software</strong>, a precisão do <strong>design estratégico</strong> e a alma da <strong>produção audiovisual</strong>, eu ajudo negócios a construírem seus próprios ecossistemas. Sem dependências externas, sem taxas ocultas, apenas resultados reais.
                            </p>
                            <p className="text-primary/80 font-medium">
                                No final, meu trabalho não é sobre código. É sobre raízes que sustentam o crescimento.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-4">
                             <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold rounded-none px-8">
                                <Link href="#diagnostico">
                                    Iniciar meu diagnóstico <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                             <Button asChild variant="outline" size="lg" className="rounded-none border-muted-foreground/30 hover:bg-secondary/50 transition-all">
                                <Link href="https://www.instagram.com/horyu.multimedia/" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="mr-2 h-4 w-4" />
                                    Acompanhar Jornada
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
