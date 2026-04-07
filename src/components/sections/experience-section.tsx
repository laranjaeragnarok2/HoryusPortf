import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        role: "TechLead & Diretor Criativo",
        company: "Ferdinan MSP Group",
        period: "2026",
        description: "Implementação de um hub de crescimento B2B focado em autoridade visual e conversão inteligente. O sistema conta com um 'AI Concierge' via Google Genkit (Gemini API) para qualificação automatizada de ICP, além de um motor de geração de propostas comerciais em PDF. Design premium para retenção de leads de alto ticket.",
        tags: ["AI Concierge", "Genkit", "Business Intelligence", "UI/UX Premium"]
    },
    {
        role: "Líder de Projeto Web e Desenvolvedor Full-Stack",
        company: "Instituto Guardião das Abelhas",
        period: "2025",
        description: "Além de desenvolver a landing page alinhada à causa, atuei como publicitário e planejei uma estratégia de comunicação digital que tem gerado excelentes resultados e engajamento para a preservação de abelhas nativas.",
        tags: ["Next.js", "TypeScript", "Vercel", "Estratégia Digital", "Publicidade"]
    },
    {
        role: "Designer Gráfico Sênior & Gerente de Projetos",
        company: "Smart Print Rio Verde",
        period: "2023",
        description: "Liderei a equipe de design, gerenciando o ciclo completo dos projetos, desde a consultoria ao cliente até a entrega final, com forte atuação em design visual, produção gráfica e gestão.",
        tags: ["Design Gráfico", "Gestão de Equipe", "Adobe Suite"]
    },
    {
        role: "Gestor Criativo & Sócio-Proprietário",
        company: "Bistrô Zen",
        period: "2022",
        description: "Como cofundador, orquestrei todas as facetas do negócio, desde a curadoria do cardápio e identidade visual até a produção de eventos e programação musical, criando uma experiência cultural única.",
        tags: ["Gestão de Negócios", "Marketing", "Produção de Eventos", "Culinária"]
    },
    {
        role: "Produtor & Agente Cultural",
        company: "Produtora Autônoma (@prod.semnome)",
        period: "2021",
        description: "Atuei como um hub criativo para a cena do rap underground, organizando eventos de grande impacto como batalhas de rima e a Feira Cultural da Meia Lua, além de gerenciar a produção musical e estratégias de publicidade.",
        tags: ["Produção Musical", "Beatmaking", "Gestão Cultural", "Direção Criativa"]
    },
    {
        role: "Desenvolvedor Front-end & Estrategista de Marketing",
        company: "Ancestral Studios",
        period: "2020",
        description: "Desenvolvi e executei estratégias de marketing 360 com foco em SEO, otimizando a presença digital de grandes clientes do agronegócio e aumentando significativamente sua visibilidade online.",
        tags: ["Marketing 360", "SEO Avançado", "Desenvolvimento Front-end"]
    },
    {
        role: "Desenvolvedor Web",
        company: "Agência América",
        period: "2019",
        description: "Executando trabalhos em lotes, na agência America pude aprender a colaborar em equipe e buscar soluções inteligentes pra clientes de alto padrão, fui um desenvolvedor apaixonado e obtive excelentes resultados",
        tags: ["Desenvolvimento Web", "Segurança Digital", "HTML/CSS", "JavaScript"]
    },
];

export default function ExperienceSection() {
    return (
        <section id="experiencia" className="container mx-auto px-4 py-16 sm:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-2 font-headline">Posições de Destaque</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Minha trajetória une tecnologia, design e gestão para entregar resultados de impacto.</p>
            
            <div className="relative max-w-4xl mx-auto">
                {/* Desktop timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50 hidden md:block" aria-hidden="true"></div>
                
                {/* Mobile container */}
                <div className="md:hidden space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={`mobile-${index}`} className="bg-card p-6 rounded-lg border-2 border-primary/20">
                            <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                            <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                            <p className="font-medium text-lg mb-3">{exp.company}</p>
                            <p className="text-card-foreground/80 leading-relaxed mb-4">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map(tag => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop container */}
                <div className="hidden md:block">
                    {experiences.map((exp, index) => (
                        <div key={`desktop-${index}`} className={`relative flex items-start mb-12 group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className="md:w-1/2 md:px-8 flex-shrink-0">
                               <div className={`sticky top-24 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                 <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                                 <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                                 <p className="font-medium text-lg">{exp.company}</p>
                               </div>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background transition-transform group-hover:scale-125" aria-hidden="true"></div>
                            <div className="md:w-1/2 md:px-8 mt-4 md:mt-0">
                                <div className="bg-card p-6 rounded-lg border-2 border-transparent group-hover:border-primary/50 transition-colors">
                                    <p className="text-card-foreground/80 leading-relaxed">{exp.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-16">
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Esta é uma seleção dos trabalhos que mais me marcaram. Ao longo dessa trajetória, também atuei em diversos projetos como freelancer, sempre em busca de novos desafios e aprendizados.
                </p>
            </div>
        </section>
    );
}