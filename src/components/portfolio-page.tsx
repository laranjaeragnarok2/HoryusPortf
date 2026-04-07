"use client"
import React from 'react';
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import PortfolioSection, { type Project } from "@/components/sections/portfolio-section";
import VideoSection, { type VideoProject } from "@/components/sections/video-section";
import FooterSection from './sections/footer-section';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


interface PortfolioPageProps {
  techProjects: Project[];
  videoProjects: VideoProject[];
}

export default function PortfolioPage({ techProjects, videoProjects }: PortfolioPageProps) {

    return (
        <main className="bg-background text-foreground">
            <HeroSection />

            {/* Seção Especial de Destaque 2026 */}
            <section className="py-20 px-6 max-w-7xl mx-auto border-y border-white/5 bg-gradient-to-r from-black via-zinc-950 to-black rounded-3xl my-12 shadow-2xl shadow-yellow-900/10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-amber-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <img src="/msp.png" alt="MSP Group" className="relative rounded-lg w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition duration-500 border border-white/10" />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <Badge className="mb-4 bg-yellow-600/20 text-yellow-500 border-yellow-500/30 font-mono tracking-widest px-4 py-1">TECHLEAD 2026</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-white">
                            (2026) TechLead & Diretor Criativo <br/>
                            <span className="text-yellow-600 font-serif italic italic font-light">' Ferdinan MSP Group '</span>
                        </h2>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl font-light">
                            Implementação de um hub de crescimento B2B focado em autoridade visual e conversão inteligente. 
                            O sistema conta com um "AI Concierge" via Google Genkit (Gemini API) para qualificação automatizada de ICP, 
                            além de um motor de geração de propostas comerciais em PDF. Design premium para retenção de leads de alto ticket.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button className="bg-white text-black hover:bg-zinc-200 px-8 py-6 rounded-none font-bold uppercase tracking-tighter">Explorar Projeto</Button>
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 px-8 py-6 rounded-none uppercase tracking-tighter">Stack Intelligence</Button>
                        </div>
                    </div>
                </div>
            </section>

            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <PortfolioSection techProjects={techProjects} />
            <VideoSection projects={videoProjects} />
            <FooterSection />
        </main>
    );
}
