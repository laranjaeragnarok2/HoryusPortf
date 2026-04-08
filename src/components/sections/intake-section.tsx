'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // trocar pelo ID real

export default function IntakeSection() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
            });
            if (res.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <section id="diagnostico" className="bg-card border-t border-border py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold tracking-tight font-headline mb-2">
                            🔬 Diagnóstico Gratuito
                        </h2>
                        <p className="text-muted-foreground">
                            Responda 5 perguntas e eu te mostro exatamente qual o próximo passo para o seu negócio escalar. Sem enrolação.
                        </p>
                    </div>

                    {status === 'success' ? (
                        <div className="flex flex-col items-center gap-4 py-16 text-center">
                            <CheckCircle className="h-16 w-16 text-primary" />
                            <h3 className="text-2xl font-bold">Diagnóstico recebido!</h3>
                            <p className="text-muted-foreground max-w-md">
                                Analisarei seu caso e entro em contato em até 24h com um plano personalizado. Fique de olho no e-mail.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nome + Empresa */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Seu nome *
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Arthur Horyu"
                                        className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="company" className="text-sm font-medium">
                                        Empresa / Projeto
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="Ferdinan MSP Group"
                                        className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                                    />
                                </div>
                            </div>

                            {/* Segmento */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="segment" className="text-sm font-medium">
                                    Qual melhor descreve seu negócio? *
                                </label>
                                <select
                                    id="segment"
                                    name="segment"
                                    required
                                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                                >
                                    <option value="">Selecione...</option>
                                    <option value="negocio-local">Negócio local (loja, serviço, restaurante)</option>
                                    <option value="b2b">Empresa B2B / Consultoria</option>
                                    <option value="startup">Startup / MVP</option>
                                    <option value="ecommerce">E-commerce / Loja virtual</option>
                                    <option value="produtor-cultural">Produtor cultural / Eventos</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>

                            {/* Dor principal */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="pain" className="text-sm font-medium">
                                    O que impede seu negócio de escalar hoje? *
                                </label>
                                <textarea
                                    id="pain"
                                    name="pain"
                                    required
                                    rows={4}
                                    placeholder="Ex: Não tenho presença digital, meu site não converte, gasto muito com ferramentas..."
                                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                                />
                            </div>

                            {/* Orçamento + Urgência */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="budget" className="text-sm font-medium">
                                        Orçamento estimado *
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        required
                                        className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                                    >
                                        <option value="">Selecione...</option>
                                        <option value="ate-2k">Até R$ 2.000</option>
                                        <option value="2k-5k">R$ 2.000 – 5.000</option>
                                        <option value="5k-15k">R$ 5.000 – 15.000</option>
                                        <option value="15k+">R$ 15.000+</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="urgency" className="text-sm font-medium">
                                        Urgência *
                                    </label>
                                    <select
                                        id="urgency"
                                        name="urgency"
                                        required
                                        className="rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                                    >
                                        <option value="">Selecione...</option>
                                        <option value="imediato">Preciso agora (urgente)</option>
                                        <option value="1-3-meses">Em 1 a 3 meses</option>
                                        <option value="explorando">Ainda explorando</option>
                                    </select>
                                </div>
                            </div>

                            {status === 'error' && (
                                <p className="text-sm text-destructive text-center">
                                    Algo deu errado. Tente novamente ou entre em contato por e-mail.
                                </p>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                disabled={status === 'loading'}
                                className="w-full"
                            >
                                {status === 'loading' ? (
                                    'Enviando...'
                                ) : (
                                    <>
                                        <Send className="mr-2 h-4 w-4" /> Quero meu diagnóstico gratuito
                                    </>
                                )}
                            </Button>

                            <p className="text-xs text-muted-foreground text-center">
                                Sem spam. Suas respostas são usadas apenas para personalizar o diagnóstico.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
