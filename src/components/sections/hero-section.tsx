import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
                style={{ backgroundImage: 'url(https://i.ibb.co/RTBFm7Hn/envato-labs-image-edit-1.png)' }}
            />
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm z-0" />
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-primary tracking-widest uppercase">Horyu Arthur</h2>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
                    Você tem o negócio.
                    <br />
                    <span className="text-primary">Eu tenho o mapa.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                    Design, tecnologia e automação unidos para transformar presença digital em resultado real.
                </p>
                <p className="text-sm text-muted-foreground/70 mb-10 max-w-xl mx-auto italic">
                    Do diagnóstico ao deploy — sem achismo, sem retrabalho.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                    <Button asChild size="lg">
                        <Link href="#diagnostico">🔬 Quero meu Diagnóstico Gratuito</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="#portfolio">Ver Projetos</Link>
                    </Button>
                    <Button asChild variant="ghost" size="lg">
                        <Link href="mailto:1horyuarthur@gmail.com">
                            <Mail className="mr-2 h-4 w-4" /> Contato
                        </Link>
                    </Button>
                </div>
                <div className="flex justify-center gap-6">
                    <Link
                        href="https://github.com/laranjaeragnarok2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/arthur-horyu-128933363/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-10 animate-bounce z-10">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>
        </section>
    );
}
