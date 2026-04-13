import { Button } from '@/components/ui/button';
import { Check, Zap, Layers, Crown } from 'lucide-react';
import Link from 'next/link';

const packages = [
    {
        icon: Zap,
        name: 'Semente',
        subtitle: 'Tração Imediata',
        description: 'Ideal para validar ideias e estabelecer presença. O primeiro passo para sair da inércia com um ativo digital de alta performance.',
        price: 'R$ 1.500 – 3.500',
        timeline: 'Entrega em até 7 dias',
        items: [
            'Design focado em conversão (CRO)',
            'Infraestrutura técnica invisível e rápida',
            'Automação de processos básicos',
            'Integração de checkout simplificado',
            'Otimização de SEO e velocidade',
        ],
        cta: 'Iniciar meu plantio',
        highlight: false,
    },
    {
        icon: Layers,
        name: 'Ecossistema',
        subtitle: 'Escala e Controle',
        description: 'Uma estrutura robusta para quem já opera e precisa de ordem. Menos esforço manual, mais inteligência de dados.',
        price: 'R$ 5.000 – 10.000',
        timeline: 'Entrega em 2 a 4 semanas',
        items: [
            'Tudo do Semente +',
            'Central de Inteligência (CRM customizado)',
            'Nutrição automática de relacionamento',
            'Painéis de métricas em tempo real',
            'Portais de autoridade para o mercado',
            'Assistentes de IA treinados no seu negócio',
        ],
        cta: 'Escalar meu ecossistema',
        highlight: true,
    },
    {
        icon: Crown,
        name: 'Soberania',
        subtitle: 'Liberdade Total',
        description: 'A solução definitiva para independência digital. Pare de depender de plataformas limitadas e assuma o controle total.',
        price: 'R$ 10.000 – 25.000',
        timeline: 'Entrega em 4 a 8 semanas',
        items: [
            'Tudo do Ecossistema +',
            'Sovereign Growth Stack (Stack de Elite)',
            'Plataformas proprietárias sem taxas',
            'E-commerce de alto volume (Headless)',
            'Criação de marca e narrativa visual',
            'Produção audiovisual de alto impacto',
        ],
        cta: 'Alcançar a soberania',
        highlight: false,
    },
];

const quickWins = [
    { service: 'Landing Page CRO', proof: 'Agência Métrica, MSP Group', time: '3–5 dias', price: 'R$ 2.000' },
    { service: 'Portal B2B Soberano', proof: 'JDE Pacheco, Formatto', time: '2–3 sem', price: 'R$ 8.000' },
    { service: 'Bot IA (Discord/WhatsApp)', proof: 'HoryuAI, Skarner', time: '1–2 sem', price: 'R$ 3.000' },
    { service: 'Checkout Mercado Pago', proof: 'Gateway MP', time: '3–5 dias', price: 'R$ 2.500' },
    { service: 'Automação n8n (3 fluxos)', proof: 'n8n + OpenClaw', time: '1 sem', price: 'R$ 3.000' },
    { service: 'Vídeo Institucional + Site', proof: 'CI.DA.DE, PAS.SA.DO', time: '2–3 sem', price: 'R$ 5.000' },
    { service: 'Consultoria Liberdade Digital', proof: 'MSP.Group', time: '1 dia', price: 'R$ 500/h' },
];

export default function ServicesSection() {
    return (
        <section id="servicos" className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-2 font-headline">
                    Os Caminhos do Guia
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Cada negócio está num estágio diferente. Escolha o caminho certo para o seu momento.
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

            {/* Quick Wins table */}
            <div>
                <h3 className="text-xl font-bold text-center mb-6">⚡ Quick Wins — Entregas Rápidas com Alto Impacto</h3>
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
                    <Button asChild size="lg">
                        <Link href="#diagnostico">Quero um diagnóstico gratuito →</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
