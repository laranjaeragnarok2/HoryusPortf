import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function FooterSection() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card text-card-foreground border-t border-border/50">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold font-headline text-primary">Você chegou ao fim!</h2>
                    <p className="mt-2 text-lg text-muted-foreground">Obrigado pela sua atenção.</p>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-muted-foreground">Caso tenha gostado do meu trabalho, confira mais em:</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <Link href="https://www.instagram.com/horyu.multimedia/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram size={28} />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://github.com/laranjaeragnarok2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={28} />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/arthur-horyu-128933363/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={28} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="mailto:1horyuarthur@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail size={28} />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>

                <div className="mt-10 text-center max-w-2xl mx-auto">
                    <p className="text-sm text-muted-foreground/80">
                        Este portfólio apresenta uma seleção dos meus trabalhos favoritos. Se desejar ver mais exemplos ou discutir um projeto, não hesite em entrar em contato.
                    </p>
                    <Link
                        href="/retro"
                        className="inline-block mt-4 text-xs text-muted-foreground/40 hover:text-primary transition-colors font-mono tracking-wider"
                        title="Versão Web 1.0"
                    >
                        {'>'} ver versão retro_web1.0 {'<'}
                    </Link>
                </div>
            </div>

            <div className="border-t border-border/50 py-6">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground/60 space-y-2">
                    <p>Desenvolvido com muito carinho e detalhe a pedido da Jaqueline.</p>
                    <p>&copy; {currentYear} Horyu Arthur. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
