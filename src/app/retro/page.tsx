"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import "./retro.css";
import {
  resumeAudio,
  playBootSound,
  playHoverSound,
  playClickSound,
  playKeystroke,
  playSectionSound,
  playGlitchSound,
  toggleAmbient,
  getAmbientState,
  playCounterTick,
} from "./sfx";

// =============================
// MATRIX RAIN CANVAS
// =============================
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]=/\\";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="matrix-rain">
      <canvas ref={canvasRef} />
    </div>
  );
}

// =============================
// TYPING TEXT EFFECT
// =============================
function TypingText({ text, speed = 50, withSound = true }: { text: string; speed?: number; withSound?: boolean }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      if (withSound && i % 2 === 0) {
        try { playKeystroke(); } catch { }
      }
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, withSound]);

  return (
    <span>
      {displayed}
      {!done && <span style={{ animation: "blink-cursor 0.8s step-end infinite", borderRight: "2px solid #00ff41" }}>&nbsp;</span>}
    </span>
  );
}

// =============================
// VISITOR COUNTER COMPONENT
// =============================
function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate a growing counter from localStorage (SSR-safe)
    let visits = Math.floor(Math.random() * 1300) + 420;
    if (typeof window !== "undefined") {
      try {
        const stored = window.localStorage.getItem("retro-visits");
        visits = stored ? parseInt(stored) + 1 : visits;
        window.localStorage.setItem("retro-visits", visits.toString());
      } catch {
        // localStorage may be unavailable
      }
    }
    // Animate counting up
    let current = 0;
    const target = visits;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visitor-counter">
      <div className="label">[ VISITOR COUNT ]</div>
      <div className="count">{String(count).padStart(6, "0")}</div>
    </div>
  );
}

// =============================
// DATA: ALL PROJECTS
// =============================

type RetroProject = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  liveUrl?: string;
  priority: "high" | "mid" | "low";
};

const projectsMain: RetroProject[] = [
  {
    title: "Legado da Ponte de Pedra",
    description: "Plataforma de conscientização para a preservação do patrimônio geológico e cultural de Goiás. Site + curta-metragem documental.",
    tags: ["Next.js", "TypeScript", "Vercel", "Documentário"],
    link: "https://github.com/laranjaeragnarok2/ponte-de-pedra",
    liveUrl: "https://ponte-de-pedra.vercel.app/",
    priority: "high",
  },
  {
    title: "Agência Métrica",
    description: "Landing page de alta conversão para agência de tráfego pago. Design premium com foco em UX/UI para negócios locais.",
    tags: ["Vite", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/laranjaeragnarok2/agencia-metrica",
    priority: "high",
  },
  {
    title: "Ferdinan-MSP",
    description: "Plataforma completa de Growth & Automação. Landing page + blog + painel admin + captura de leads + automações com Discord e email.",
    tags: ["Next.js", "Firebase", "NextAuth", "Blog CMS"],
    link: "https://github.com/laranjaeragnarok2/Ferdinan",
    priority: "high",
  },
  {
    title: "Formatto Sovereign Hub",
    description: "Ecossistema digital de elite para a Formatto Comunicação Visual. HUB completo da empresa.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/laranjaeragnarok2/formatto-sovereign-hub",
    priority: "high",
  },
  {
    title: "Vidromorfismo (Liquid Glass)",
    description: "Demonstração interativa do efeito 'liquid glass' da Apple iOS 26. Parâmetros visuais ajustáveis em tempo real. 3 stars ⭐",
    tags: ["Next.js", "React", "ShadCN UI", "Tailwind CSS"],
    link: "https://github.com/laranjaeragnarok2/Vidromorfismo",
    liveUrl: "https://vidromorfismo.vercel.app/",
    priority: "high",
  },
  {
    title: "Republika Bar (RPBK)",
    description: "Site oficial do Republika Bar. Eventos, galeria, cardápio, regras da casa. Tema escuro com detalhes em verde neon.",
    tags: ["Next.js", "Tailwind CSS", "ShadCN/UI"],
    link: "https://github.com/laranjaeragnarok2/RPBK",
    liveUrl: "https://rpbk-bar.vercel.app",
    priority: "mid",
  },
  {
    title: "Geradores Rio Verde",
    description: "Auditoria do site antigo + desenvolvimento do novo site para empresa de geradores em Rio Verde.",
    tags: ["React", "Vite", "Auditoria UX"],
    link: "https://github.com/laranjaeragnarok2/geradores-rioverde",
    priority: "mid",
  },
  {
    title: "JDE Pacheco — Engineering & Tech Portal",
    description: "Portal B2B de engenharia e infraestrutura. Design industrial focado na soberania de marca, apresentando licitações e Investor Hub.",
    tags: ["Next.js", "B2B", "Industrial Design", "Investor Hub"],
    link: "https://github.com/laranjaeragnarok2/jde-sovereign-portal",
    priority: "mid",
  },
  {
    title: "HoryuAI",
    description: "Bot para Discord com integração à API Gemini. Recomendações de filmes, geração de imagens, comandos admin e news automatizado.",
    tags: ["Python", "Discord.py", "Gemini API"],
    link: "https://github.com/laranjaeragnarok2/HoryuAI",
    priority: "mid",
  },
  {
    title: "Mercado Pago Gateway — Integração",
    description: "Sistema robusto de mensageria e processamento de pagamentos integrado ao Mercado Pago. Inclui dashboard para monitoramento e webhooks.",
    tags: ["Mercado Pago", "PostgreSQL", "API", "Idempotency"],
    link: "",
    priority: "mid",
  },
  {
    title: "Skarner — Assistente de IA de Elite",
    description: "Protocolo Battlecast baseado na arquitetura OpenClaw e Google Gemini 2.0. Um assistente focado em engenharia tática e automação.",
    tags: ["AI Assistant", "Gemini 2.0", "OpenClaw", "Automação"],
    link: "https://github.com/laranjaeragnarok2/Skarner",
    priority: "mid",
  },
  {
    title: "Medusa Store",
    description: "Landing page e-commerce headless com lista de espera via Formspree, notificações por email, design responsivo dark mode.",
    tags: ["Medusa.js", "Next.js", "PostgreSQL"],
    link: "https://github.com/laranjaeragnarok2/medusa-store",
    priority: "low",
  },
  {
    title: "JWildfire (Generative Art)",
    description: "Software multi-plataforma para criação de imagens fractais e arte generativa. Baseado em Java.",
    tags: ["Java", "Arte Generativa", "Fractais"],
    link: "https://github.com/laranjaeragnarok2/j-wildfire-8.50",
    priority: "low",
  },
];

const videoProjects = [
  {
    title: "CI.DA.DE",
    description: "1. aglomeração humana localizada numa área geográfica. Beat: Aquino, Fotografia/Shot: Horyu, Edição: Aquino. SENTINELAS",
    youtubeId: "eMHWmiX3nFo",
  },
  {
    title: "PAS.SA.DO",
    description: "1- Tempo Precedente. Beat: HORYU, shot: HORYU, edição: AQUINO, produção: AQUINO. sentinelas 2024",
    youtubeId: "Yu-46-_aAZ0",
  },
];

// =============================
// GUESTBOOK DATA
// =============================
const guestbookEntries = [
  { author: "v1s1t0r_2024", date: "12/03/2025", message: "site mt brabo mano, essa vibe hacker é insana" },
  { author: "d3v_g01@n14", date: "28/01/2025", message: "caraca, quanto projeto... tu eh maquina" },
  { author: "xX_matrix_Xx", date: "15/12/2024", message: "melhor portfolio q ja vi... a chuva de matrix é um toque genial" },
  { author: "anon1337", date: "02/11/2024", message: "follow the white rabbit..." },
];

// =============================
// SFX-AWARE LINK COMPONENT
// =============================
function SfxLink({ children, href, className, style, target, rel, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a
      href={href}
      className={className}
      style={style}
      target={target}
      rel={rel}
      onMouseEnter={() => { try { playHoverSound(); } catch { } }}
      onClick={() => { try { playClickSound(); } catch { } }}
      {...props}
    >
      {children}
    </a>
  );
}

// =============================
// SECTION OBSERVER HOOK (plays sound when section enters viewport)
// =============================
function useSectionSound(ref: React.RefObject<HTMLElement | null>) {
  const hasPlayed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          try { playSectionSound(); } catch { }
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function ObservedSection({ id, children }: { id: string; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useSectionSound(ref);
  return <section id={id} ref={ref}>{children}</section>;
}

// =============================
// MAIN PAGE COMPONENT
// =============================
export default function RetroPage() {
  const [currentTime, setCurrentTime] = useState("");
  const [sfxEnabled, setSfxEnabled] = useState(false);
  const [ambientOn, setAmbientOn] = useState(false);
  const [booted, setBooted] = useState(false);

  // Clock
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Enable SFX on first click anywhere
  const handleFirstInteraction = useCallback(() => {
    if (!sfxEnabled) {
      resumeAudio();
      setSfxEnabled(true);
      if (!booted) {
        playBootSound();
        setBooted(true);
      }
    }
  }, [sfxEnabled, booted]);

  const handleToggleAmbient = () => {
    resumeAudio();
    const state = toggleAmbient();
    setAmbientOn(state);
  };

  return (
    <div className="retro-page" onClick={handleFirstInteraction}>
      <MatrixRain />
      <div className="crt-overlay" />

      <div className="retro-container">
        {/* === ASCII ART HEADER === */}
        <div className="ascii-art">
          {`
██╗  ██╗ ██████╗ ██████╗ ██╗   ██╗██╗   ██╗
██║  ██║██╔═══██╗██╔══██╗╚██╗ ██╔╝██║   ██║
███████║██║   ██║██████╔╝ ╚████╔╝ ██║   ██║
██╔══██║██║   ██║██╔══██╗  ╚██╔╝  ██║   ██║
██║  ██║╚██████╔╝██║  ██║   ██║   ╚██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ 
`}
        </div>

        {/* === HEADER === */}
        <div className="retro-header">
          <h1>~ HORYU ARTHUR ~</h1>
          <div className="subtitle">
            <TypingText text="[ DESENVOLVEDOR & DESIGNER CRIATIVO // GOIÁS, BRASIL ]" speed={40} />
          </div>
        </div>

        {/* === STATUS LINE === */}
        <div className="status-line">
          <span><span className="online-dot" /> SYSTEM ONLINE</span>
          <span>{currentTime}</span>
          <span>v2.0_retro</span>
        </div>

        {/* === MARQUEE === */}
        <div className="retro-marquee">
          <div className="marquee-content">
            ★ WELCOME TO THE RETRO ZONE ★ Construindo pontes entre tecnologia e arte ★ Experiências digitais de impacto ★ dev + design + cultura ★ Rio Verde - GO ★ A evolução é inevitável ★ Next.js • React • Python • TypeScript • Tailwind ★
          </div>
        </div>

        {/* === NAV === */}
        {/* === SFX CONTROLS === */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
          <button
            onClick={handleToggleAmbient}
            style={{
              background: ambientOn ? "#00ff4120" : "#0a0a0a",
              border: `1px solid ${ambientOn ? "#00ff41" : "#003300"}`,
              color: ambientOn ? "#00ff41" : "#006622",
              padding: "4px 12px",
              fontFamily: "'Courier New', monospace",
              fontSize: "0.7rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {ambientOn ? "🔊 AMBIENT: ON" : "🔇 AMBIENT: OFF"}
          </button>
          {!sfxEnabled && (
            <span style={{ color: "#004400", fontSize: "0.6rem", alignSelf: "center" }}>
              [ clique em qualquer lugar para ativar SFX ]
            </span>
          )}
        </div>

        <nav className="retro-nav">
          <SfxLink href="#sobre">[SOBRE]</SfxLink>
          <span className="separator">|</span>
          <SfxLink href="#projetos">[PROJETOS]</SfxLink>
          <span className="separator">|</span>
          <SfxLink href="#videos">[VÍDEOS]</SfxLink>
          <span className="separator">|</span>
          <SfxLink href="#skills">[SKILLS]</SfxLink>
          <span className="separator">|</span>
          <SfxLink href="#guestbook">[GUESTBOOK]</SfxLink>
          <span className="separator">|</span>
          <Link href="/" style={{ color: "#ffcc00" }} onMouseEnter={() => { try { playHoverSound(); } catch { } }} onClick={() => { try { playClickSound(); } catch { } }}>[VERSÃO MODERNA →]</Link>
        </nav>

        <VisitorCounter />

        {/* ======================= */}
        {/* ABOUT SECTION           */}
        {/* ======================= */}
        <ObservedSection id="sobre">
          <div className="retro-section">
            <div className="retro-section-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <h2>// ABOUT.exe</h2>
            </div>
            <div className="retro-section-body">
              <div className="retro-about">
                <div className="retro-about-avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.ibb.co/DSMjdWF/image.jpg" alt="Horyu Arthur" />
                </div>
                <div className="retro-about-text">
                  <p>
                    {"> "}Sou um profissional <span className="highlight">multidisciplinar</span> com uma jornada que conecta os universos da <span className="highlight">tecnologia</span>, do <span className="highlight">design</span> e da <span className="highlight">cultura</span>.
                  </p>
                  <p>
                    {"> "}Com background que vai do <span className="highlight">desenvolvimento full-stack</span> à produção de <span className="highlight">eventos culturais</span>, carrego uma visão holística em cada projeto.
                  </p>
                  <p>
                    {"> "}Seja codificando uma aplicação, liderando uma equipe de design ou produzindo um videoclipe, meu objetivo é sempre: <span className="highlight">construir pontes, contar histórias e gerar impacto</span>.
                  </p>
                  <p style={{ marginTop: "15px", fontSize: "0.7rem", color: "#006622" }}>
                    // localização: Rio Verde, Goiás, Brasil<br />
                    // contato: horyu.arthur@gmail.com<br />
                    // ig: <a href="https://www.instagram.com/horyu.multimedia/" target="_blank" rel="noopener noreferrer" className="retro-link">@horyu.multimedia</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ObservedSection>

        {/* ======================= */}
        {/* PROJECTS SECTION        */}
        {/* ======================= */}
        <ObservedSection id="projetos">
          <div className="retro-section">
            <div className="retro-section-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <h2>// PROJECTS.dir — {projectsMain.length} entries</h2>
            </div>
            <div className="retro-section-body">
              <p style={{ color: "#006622", fontSize: "0.7rem", marginBottom: "15px" }}>
                {"> "}Classificados por prioridade: <span style={{ color: "#00ff41" }}>██ ALTA</span>{" · "}
                <span style={{ color: "#008833" }}>██ MÉDIA</span>{" · "}
                <span style={{ color: "#003300" }}>██ BAIXA</span>
              </p>

              <div className="retro-projects-grid">
                {projectsMain.map((project, i) => (
                  <div
                    key={i}
                    className={`retro-project-card ${project.priority === "high" ? "priority-high" : project.priority === "mid" ? "priority-mid" : "priority-low"
                      }`}
                  >
                    <div className="card-header">
                      <h3>&gt; {project.title}</h3>
                      <span className="status">[ONLINE]</span>
                    </div>
                    <div className="card-body">
                      <p>{project.description}</p>
                      <div className="card-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        <SfxLink href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
                          [CÓDIGO]
                        </SfxLink>
                        {project.liveUrl && (
                          <SfxLink href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="card-link" style={{ borderColor: "#00cc33" }}>
                            [LIVE DEMO]
                          </SfxLink>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ObservedSection>

        {/* ======================= */}
        {/* VIDEO SECTION           */}
        {/* ======================= */}
        <ObservedSection id="videos">
          <div className="retro-section">
            <div className="retro-section-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <h2>// MULTIMEDIA.avi — Produções Audiovisuais</h2>
            </div>
            <div className="retro-section-body">
              <p style={{ color: "#006622", fontSize: "0.7rem", marginBottom: "15px" }}>
                {"> "}Clipes musicais produzidos com o coletivo SENTINELAS
              </p>
              <div className="retro-videos-grid">
                {videoProjects.map((video, i) => (
                  <div key={i}>
                    <div className="retro-video-title">&gt; {video.title}</div>
                    <div className="retro-video-embed">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="retro-video-desc">{video.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ObservedSection>

        {/* ======================= */}
        {/* SKILLS TABLE            */}
        {/* ======================= */}
        <ObservedSection id="skills">
          <div className="retro-section">
            <div className="retro-section-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <h2>// SKILLS.dat — Tecnologias & Ferramentas</h2>
            </div>
            <div className="retro-section-body">
              <table className="retro-table">
                <thead>
                  <tr>
                    <th>SKILL</th>
                    <th>CATEGORY</th>
                    <th>LEVEL</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { skill: "Next.js / React", cat: "Frontend", pct: 90 },
                    { skill: "TypeScript", cat: "Language", pct: 85 },
                    { skill: "Tailwind CSS", cat: "Styling", pct: 92 },
                    { skill: "Python", cat: "Backend/AI", pct: 75 },
                    { skill: "Node.js", cat: "Backend", pct: 78 },
                    { skill: "Firebase", cat: "Cloud/DB", pct: 70 },
                    { skill: "PostgreSQL", cat: "Database", pct: 65 },
                    { skill: "Vite", cat: "Build Tool", pct: 80 },
                    { skill: "ShadCN/UI", cat: "Components", pct: 88 },
                    { skill: "Figma", cat: "Design", pct: 82 },
                    { skill: "Premiere Pro", cat: "Video", pct: 85 },
                    { skill: "Lightroom", cat: "Photo", pct: 88 },
                    { skill: "Produção Cultural", cat: "Eventos", pct: 80 },
                    { skill: "Discord.py / Bots", cat: "Automation", pct: 72 },
                    { skill: "Gemini API", cat: "AI", pct: 70 },
                  ].map((s, i) => (
                    <tr key={i}>
                      <td>{s.skill}</td>
                      <td>{s.cat}</td>
                      <td>
                        <span className="bar" style={{ width: `${s.pct}%`, maxWidth: "120px" }} />
                        <span style={{ marginLeft: "8px", color: "#004400", fontSize: "0.65rem" }}>{s.pct}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ObservedSection>

        {/* ======================= */}
        {/* GUESTBOOK               */}
        {/* ======================= */}
        <ObservedSection id="guestbook">
          <div className="retro-section">
            <div className="retro-section-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <h2>// GUESTBOOK.log — Livro de Visitas</h2>
            </div>
            <div className="retro-section-body">
              <div className="retro-guestbook">
                {guestbookEntries.map((entry, i) => (
                  <div key={i} className="retro-guestbook-entry">
                    <span className="author">{entry.author}</span>
                    <span className="date">{entry.date}</span>
                    <div className="message">{`> ${entry.message}`}</div>
                  </div>
                ))}
              </div>
              <div className="under-construction" style={{ marginTop: "12px" }}>
                ⚠ GUESTBOOK INTERATIVO EM CONSTRUÇÃO ⚠
              </div>
            </div>
          </div>
        </ObservedSection>

        {/* ======================= */}
        {/* WEB RING                */}
        {/* ======================= */}
        <div className="retro-webring">
          <div className="title">[ W E B R I N G ]</div>
          <SfxLink href="https://github.com/laranjaeragnarok2" target="_blank" rel="noopener noreferrer">
            ← GitHub
          </SfxLink>
          <span style={{ color: "#003300" }}>|</span>
          <SfxLink href="https://www.instagram.com/horyu.multimedia/" target="_blank" rel="noopener noreferrer">
            Instagram →
          </SfxLink>
          <span style={{ color: "#003300" }}>|</span>
          <SfxLink href="https://www.linkedin.com/in/arthur-horyu-128933363/" target="_blank" rel="noopener noreferrer">
            LinkedIn →
          </SfxLink>
          <span style={{ color: "#003300" }}>|</span>
          <SfxLink href="https://www.youtube.com/@ArthurHoryu" target="_blank" rel="noopener noreferrer">
            YouTube →
          </SfxLink>
        </div>

        {/* ======================= */}
        {/* FOOTER                  */}
        {/* ======================= */}
        <footer className="retro-footer">
          <p>© {new Date().getFullYear()} Horyu Arthur — Todos os direitos reservados</p>
          <p>Feito com {'<3'} e muito café ☕ em Goiás, Brasil</p>
          <div className="best-viewed">
            Melhor visualizado em 1024x768 ou superior — Netscape Navigator 4.0+ / Internet Explorer 5.0+
          </div>
          <div className="badges">
            <a href="/" className="badge-btn">[HTML5]</a>
            <a href="/" className="badge-btn">[CSS3]</a>
            <a href="/" className="badge-btn">[JAVASCRIPT]</a>
            <a href="/" className="badge-btn">[MADE WITH NEXT.JS]</a>
            <a href="/" className="badge-btn">[POWERED BY COFFEE]</a>
            <Link href="/" className="badge-btn" style={{ color: "#ffcc00", borderColor: "#ffcc00" }}>
              [VER VERSÃO MODERNA]
            </Link>
          </div>
          <p style={{ marginTop: "15px", fontSize: "0.6rem" }}>
            {`>>`} <a href="mailto:horyu.arthur@gmail.com" className="retro-link">horyu.arthur@gmail.com</a> {`<<`}
          </p>
        </footer>
      </div>
    </div>
  );
}
