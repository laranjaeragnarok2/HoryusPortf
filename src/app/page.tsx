
import PortfolioPage from "@/components/portfolio-page";
import type { Project } from "@/components/sections/portfolio-section";
import type { VideoProject } from "@/components/sections/video-section";

const techProjects: Project[] = [
    {
        title: "MSP.Group — The Sovereign Growth Stack",
        description: "Construção de um ecossistema digital blindado e ultrarrápido. Unindo a estética Dark/Gold com engenharia de ponta, o projeto automatiza todo o funil: desde a captura via Lead Magnets até o fechamento via CRM integrado. Uma prova de conceito de como a união entre design sofisticado e automação severa pode escalar operações de consultoria sem custos fixos de software.",
        image: "/msp.png",
        hint: "msp group sovereign stack",
        link: "https://msp.group",
        tags: ["NextAuth", "Firebase", "Automation", "Digital Sovereignty"],
        className: "md:col-span-1"
    },
    {
        title: "Agência Métrica — Landing Page de Alta Conversão",
        description: "Desenvolvimento de uma landing page ultra-focada em performance e conversão para tráfego pago. Utilizando Next.js e Tailwind CSS, a estrutura foi otimizada para carregamento instantâneo em dispositivos móveis, garantindo que nenhum lead seja perdido. Integração direta com APIs de rastreamento para mensuração precisa de ROI em campanhas de negócios locais.",
        image: "/metrica.png",
        hint: "agencia metrica conversion lp",
        link: "https://github.com/laranjaeragnarok2/agencia-metrica",
        tags: ["Next.js", "Performance Ops", "CRO", "Local Business"],
        className: "md:col-span-1"
    },
    {
        title: "Formatto — Hub de Comunicação Industrial",
        description: "Interface de alta fidelidade para o setor de comunicação visual e grandes formatos. O projeto foca na autoridade de marca e na facilidade de orçamento, transformando processos industriais complexos em uma experiência digital fluida e orientada a resultados.",
        image: "/formatto.png",
        hint: "formatto industrial visual hub",
        link: "https://github.com/laranjaeragnarok2/formatto-sovereign-hub",
        tags: ["Next.js", "Growth Design", "Industrial UI", "B2B Ops"],
        className: "md:col-span-1"
    },
    {
        title: "Legado da Ponte de Pedra (Site and Short-film)",
        description: "Este é o repositório oficial do projeto \"Legado da Ponte de Pedra\". Mais do que um site, é uma plataforma de conscientização e mobilização para a preservação de um dos mais importantes patrimônios geológicos, arqueológicos e culturais de Goiás, localizado na divisa entre Rio Verde e Paraúna.",
        image: "https://i.postimg.cc/gJrxYgyq/68747470733a2f2f692e706f7374696d672e63632f78546758784377502f3364613234653566366163346631383837376430.jpg",
        hint: "bridge stone",
        link: "https://ponte-de-pedra.vercel.app/",
        specialLink: "https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico?source_location=psf_petitions",
        specialLinkText: "Assine o Abaixo assinado",
        tags: ["Next.js", "TypeScript", "Vercel"],
        className: "md:col-span-2"
    },
    {
        title: "Medusa Store (E-commerce Headless)",
        description: "Landing page para e-commerce com lista de espera via Formspree, notificações por e-mail, painel de controle, design responsivo com tema escuro e botões flutuantes para contato direto.",
        image: "https://i.postimg.cc/PqSLsgD5/68747470733a2f2f692e706f7374696d672e63632f4a373644684a475a2f73637265656e636170747572652d6d6564757361.png",
        hint: "medusa store",
        link: "https://github.com/laranjaeragnarok2/medusa-store",
        tags: ["Medusa.js", "Next.js", "PostgreSQL"],
        className: ""
    },
    {
        title: "JWildfire (Generative Art)",
        description: "Software multi-plataforma focado na criação e processamento de imagens, possivelmente fractais ou arte generativa. O JWildfire é uma aplicação baseada em Java que pode ser executada em diversos sistemas operacionais, incluindo Windows, macOS e Linux.",
        image: "https://raw.githubusercontent.com/laranjaeragnarok2/j-wildfire-8.50/master/lib/Captura%20de%20tela%202025-05-25%20043231.png",
        hint: "generative art",
        link: "https://github.com/laranjaeragnarok2/j-wildfire-8.50",
        tags: ["Java", "Arte Generativa", "Fractais"],
        className: ""
    },
    {
        title: "HoryuAI",
        description: "HoryuAI é um bot para Discord com integração à API Gemini para gerar conteúdo dinâmico. Ele foi desenvolvido para trazer recomendações de filmes, gerar imagens a partir de prompts e auxiliar com comandos administrativos como kick e ban, além de enviar notícias semanais (news) de forma automatizada.",
        image: "https://files.realpython.com/media/How-to-Make-a-Discord-Bot-With-Python_Watermarked.23887eee3226.jpg",
        hint: "discord bot ai",
        link: "https://github.com/laranjaeragnarok2/HoryuAI",
        tags: ["Python", "Discord.py", "Gemini API"],
        className: ""
    },
    {
        title: "Liquid Glass React",
        description: "Este projeto é uma demonstração interativa do efeito \"liquid glass\" (vidro líquido/fosco) e de personalização de interface do usuário, construído com Next.js, React, ShadCN UI e Tailwind CSS. Explore como diferentes parâmetros visuais podem ser ajustados em tempo real para criar uma experiência de usuário moderna e atraente.",
        image: "https://w.wallhaven.cc/full/yq/wallhaven-yqj53x.png",
        hint: "liquid glass effect",
        link: "https://vidromorfismo.vercel.app/",
        tags: ["Next.js", "React", "ShadCN UI", "Tailwind CSS"],
        className: ""
    },
];

const videoProjects: VideoProject[] = [
    {
        title: "CI.DA.DE",
        description: "1. aglomeração humana localizada numa área geográfica. Ficha Técnica: Beat: Aquino, Mix/Master: Aquino, Fotografia/Shot: Horyu, Edição: Aquino, Produção: SENTINELAS",
        youtubeId: "eMHWmiX3nFo"
    },
    {
        title: "PAS.SA.DO",
        description: "1- Tempo Precedente: O período de tempo que ocorreu antes do presente momento. Ficha Técnica: beat: HORYU, shot: HORYU, edição: AQUINO, produção: AQUINO. sentinelas 2024",
        youtubeId: "Yu-46-_aAZ0"
    }
];

export default function Home() {
    return <PortfolioPage techProjects={techProjects} videoProjects={videoProjects} />;
}
