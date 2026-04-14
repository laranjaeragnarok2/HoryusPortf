import { Button } from '@/components/ui/button';
import { Check, Zap, Layers, Crown } from 'lucide-react';
import Link from 'next/link';

const packages = [
    {
        icon: Zap,
        name: 'Semente',
        subtitle: 'Clareza e Tração',
        description: 'Para quem está invisível no digital. Plantamos a bandeira da sua autoridade com ativos de alta conversão, removendo o ruído entre você e seu cliente.',
        price: 'A partir de R$ 2.500',
        timeline: 'Entrega em até 10 dias',
        items: [
            'Design focado em psicologia de vendas',
            'Infraestrutura técnica invisível e veloz',
            'Configuração de rastreamento de dados',
            'Integração de checkout e pagamentos',
            'Otimização extrema para dispositivos móveis',
        ],
        cta: 'Garantir meu lugar no mapa',
        highlight: false,
    },
    {
        icon: Layers,
        name: 'Ecossistema',
        subtitle: 'Escala e Liberdade',
        description: 'Para negócios escravos de processos manuais. Construímos a infraestrutura inteligente que permite escalar sem que você perca sua alma (ou seu tempo).',
        price: 'A partir de R$ 7.500',
        timeline: 'Entrega em 3 a 5 semanas',
        items: [
            'Tudo do Semente +',
            'Sistemas de CRM e Automação Customizados',
            'Nutrição inteligente de relacionamento',
            'Dashboards de decisão estratégica',
            'Portais de autoridade e hubs de conteúdo',
            'Assistentes de IA integrados ao seu fluxo',
        ],
        cta: 'Automatizar meu crescimento',
        highlight: true,
    },
    {
        icon: Crown,
        name: 'Essência',
        subtitle: 'Atenção ao Detalhe',
        description: 'Para marcas que valorizam a alma e o pormenor. Criamos experiências digitais vivas, onde a tecnologia desaparece para dar lugar a uma conexão humana e autêntica.',
        price: 'Sob Consulta (R$ 15k+)',
        timeline: 'Entrega em 2 a 3 meses',
        items: [
            'Tudo do Ecossistema +',
            'Ecossistema Digital Orgânico',
            'Plataformas proprietárias sem taxas de SaaS',
            'E-commerce de alto volume (Headless Architecture)',
            'Identidade visual e Direção de Arte Premium',
            'Produção audiovisual cinematográfica',
        ],
        cta: 'Cultivar minha essência',
        highlight: false,
    },
];

const quickWins = [
    { service: 'Landing Page Estratégica', proof: 'Agência Métrica, MSP Group', time: '5 dias', price: 'A partir de R$ 2.500' },
    { service: 'Portal B2B de Autoridade', proof: 'JDE Pacheco, Formatto', time: '3 sem', price: 'A partir de R$ 8.000' },
    { service: 'Assistente IA (Discord/WhatsApp)', proof: 'HoryuAI, Skarner', time: '2 sem', price: 'A partir de R$ 3.500' },
    { service: 'Sistema de Checkout Seguro', proof: 'Gateway MP', time: '5 dias', price: 'A partir de R$ 2.500' },
    { service: 'Automação de Fluxos (n8n)', proof: 'n8n + OpenClaw', time: '1 sem', price: 'A partir de R$ 3.000' },
    { service: 'Direção de Arte + Site', proof: 'CI.DA.DE, PAS.SA.DO', time: '3 sem', price: 'A partir de R$ 6.000' },
    { service: 'Consultoria de Design Orgânico', proof: 'Estratégia & Diagnóstico', time: '1 dia', price: 'R$ 800/h' },
];

export default function ServicesSection() {
    return (
        <section id="servicos" className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-6 font-headline">
                    Estruturas de Crescimento
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Não criamos apenas interfaces. Tecemos as experiências que celebram a identidade e o detalhe do seu negócio.
                </p>
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                {packages.map((pkg) => {
                    const Icon = pkg.icon;
                    return (
                        <div
                            key={pkg.name}
                            className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${pkg.highlight
                                ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10 scale-[1.02]'
                                : 'border-border bg-card hover:border-primary/50 hover:shadow-md hover:-translate-y-1'
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Mais Popular
                                    </span>
                                </div>
                            )}
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2 rounded-lg ${pkg.highlight ? 'bg-primary text-primary-foreground' : 'bg-secondary text-primary'}`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">{pkg.name}</h3>
                                    <p className="text-xs text-muted-foreground">{pkg.subtitle}</p>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm mb-6 flex-grow">{pkg.description}</p>

                            <div className="mb-6">
                                <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                                <p className="text-xs text-muted-foreground mt-1">{pkg.timeline}</p>
                            </div>

                            <ul className="space-y-2 mb-8">
                                {pkg.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm">
                                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                asChild
                                className="w-full mt-auto"
                                variant={pkg.highlight ? 'default' : 'outline'}
                            >
                                <Link href="#diagnostico">{pkg.cta}</Link>
                            </Button>
                        </div>
                    );
                })}
            </div>

            {/* Tactical Actions table */}
            <div>
                <h3 className="text-2xl font-bold text-center mb-8 italic">⚡ Ações Táticas — Tração Imediata para o seu Negócio</h3>
                <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border bg-secondary/50">
                                <th className="text-left p-4 font-semibold">Serviço</th>
                                <th className="text-left p-4 font-semibold hidden md:table-cell">Prova no Portfólio</th>
                                <th className="text-left p-4 font-semibold">Prazo</th>
                                <th className="text-left p-4 font-semibold">Ticket</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quickWins.map((qw, i) => (
                                <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                                    <td className="p-4 font-medium">{qw.service}</td>
                                    <td className="p-4 text-muted-foreground hidden md:table-cell">{qw.proof}</td>
                                    <td className="p-4 text-muted-foreground">{qw.time}</td>
                                    <td className="p-4 font-semibold text-primary">{qw.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-center mt-8">
                    <Button asChild size="lg" className="rounded-none font-bold">
                        <Link href="#diagnostico">Solicitar intervenção estratégica →</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
