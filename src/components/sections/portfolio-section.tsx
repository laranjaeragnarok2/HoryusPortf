
"use client"
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, Code, Github, X, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// This is now a type definition, the actual data is in page.tsx
export type Project = {
    title: string;
    description: string;
    image: string;
    hint: string;
    link: string;
    specialLink?: string;
    specialLinkText?: string;
    tags: string[];
    className: string;
};

type AudiovisualProject = {
    title: string;
    images: { src: string; hint: string }[];
    span: string;
};

const audiovisualProjects: AudiovisualProject[] = [
    {
        title: "Stance Stickers Design",
        images: [
            { src: "https://raw.githubusercontent.com/laranjaeragnarok2/meu-portfolio-assets/refs/heads/main/Colab%20com%20a%20%40antinpc_clubObrigado%20pela%20confian%C3%A7a%20irm%C3%A3o%20%40hugoosousa%23carsticker%20%23customstickers%20%23.webp", hint: "car sticker" },
            { src: "/assets/projects/sticker1.jpg", hint: "street art" },
            { src: "/assets/projects/sticker2.jpg", hint: "car sticker night" }
        ], span: ""
    },
    {
        title: "Ensaio Streetwear 064 Camisetas",
        images: [
            { src: "/assets/projects/ensaio1.jpg", hint: "photo shoot" },
            { src: "/assets/projects/ensaio2.jpg", hint: "fashion model" },
            { src: "/assets/projects/ensaio3.jpg", hint: "fashion model outdoor" }
        ],
        span: "col-span-1"
    },
    {
        title: "Custom DarkLettering Vinil",
        images: [
            { src: "/assets/projects/dark1.jpg", hint: "custom lettering" },
            { src: "/assets/projects/dark2.jpg", hint: "vinyl sticker" }
        ],
        span: "col-span-1"
    },
    {
        title: "Clipe Musical - Passado",
        images: [
            { src: "https://raw.githubusercontent.com/laranjaeragnarok2/meu-portfolio-assets/main/Contemplem%20a%20fotografia%20por%20tr%C3%A1s%20de%20'%20P%20A%20S%20S%20A%20D%20O%20'%20um%20videoclipe%20do%20single%20do%20meu%20consagrado%20%20(1).jpg", hint: "music video" },
            { src: "https://raw.githubusercontent.com/laranjaeragnarok2/meu-portfolio-assets/main/Contemplem%20a%20fotografia%20por%20tr%C3%A1s%20de%20'%20P%20A%20S%20S%20A%20D%20O%20'%20um%20videoclipe%20do%20single%20do%20meu%20consagrado%20%20(2).jpg", hint: "singer" },
            { src: "https://raw.githubusercontent.com/laranjaeragnarok2/meu-portfolio-assets/main/Contemplem%20a%20fotografia%20por%20tr%C3%A1s%20de%20'%20P%20A%20S%20S%20A%20D%20O%20'%20um%20videoclipe%20do%20single%20do%20meu%20consagrado%20.jpg", hint: "music video set" }
        ],
        span: "col-span-1"
    },
    {
        title: "Bosque da Cultura",
        images: [
            { src: "https://i.postimg.cc/KYJLNkvj/IMG-1034-2.jpg", hint: "culture event" },
            { src: "https://i.postimg.cc/tTJ6mqY5/IMG-1028-2.jpg", hint: "outdoor concert" },
            { src: "https://i.postimg.cc/MKQ7Spt3/IMG-1018-2.jpg", hint: "people gathering" }
        ],
        span: "col-span-1"
    },
    {
        title: "Apresentações Musicais",
        images: [
            { src: "/assets/projects/apresen1.jpg", hint: "live music" },
            { src: "/assets/projects/apresen2.jpg", hint: "singer stage" },
            { src: "/assets/projects/apresen3.jpg", hint: "musician crowd" }
        ],
        span: "col-span-1"
    },
    {
        title: "Space Psicodelico",
        images: [
            { src: "https://i.postimg.cc/fR5jHg8M/IMG-9586.jpg", hint: "psychedelic space" },
            { src: "https://i.postimg.cc/WbLntZDc/IMG-9405.jpg", hint: "abstract art" },
            { src: "https://i.postimg.cc/fR5jHg8M/IMG-9586.jpg", hint: "colorful nebula" }
        ],
        span: "col-span-1"
    },
    {
        title: "Moon Effect",
        images: [
            { src: "https://i.postimg.cc/52tFt9mM/IMG-6140.jpg", hint: "moon effect" },
            { src: "https://i.postimg.cc/nc2DZ9Bk/IMG-6010-2.jpg", hint: "light flare" },
            { src: "https://i.postimg.cc/h49my5GN/IMG-5944.jpg", hint: "abstract light" }
        ],
        span: "col-span-1"
    },
];


const SectionTitle = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="text-center mb-12">
        <Icon className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{description}</p>
    </div>
);

const ProjectGrid = ({ projects }: { projects: Project[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
        {projects.map((item, index) => (
            <Card key={index} className={`bg-card group overflow-hidden flex flex-col border-2 border-transparent hover:border-primary/80 transition-all duration-300 ${item.className}`}>
                <div className="relative overflow-hidden aspect-video">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        data-ai-hint={item.hint}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                        <CardTitle className="mb-2">{item.title}</CardTitle>
                        <CardDescription>
                            <p className="text-muted-foreground prose-sm">{item.description}</p>
                        </CardDescription>
                    </div>
                    <CardFooter className="p-0 pt-4 flex justify-between items-center mt-auto">
                        <div className="flex flex-wrap gap-2 items-center">
                            {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            {item.specialLink && item.specialLinkText && (
                                <Link href={item.specialLink} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden text-xs bg-primary/20 text-primary-foreground/80 px-2 py-1 rounded transition-all duration-300 reflection hover:reflection hover:bg-primary/80 hover:text-primary-foreground hover:-translate-y-px cursor-pointer">
                                    {item.specialLinkText}
                                </Link>
                            )}
                        </div>
                        {item.link && (
                            <Button asChild variant="ghost" size="sm">
                                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                    Ver <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                    </CardFooter>
                </div>
            </Card>
        ))}
    </div>
);

const MosaicCellContent = ({ project, onMouseEnter, onMouseLeave }: { project: AudiovisualProject; onMouseEnter?: () => void; onMouseLeave?: () => void; }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        stopInterval();
        if (project.images.length > 1) {
            const randomDelay = Math.random() * 4000 + 3000;
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % project.images.length);
            }, randomDelay);
        }

        return () => stopInterval();
    }, [project.images]);

    return (
        <div
            className="relative overflow-hidden group h-full w-full cursor-pointer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {project.images.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    alt={project.title}
                    fill
                    data-ai-hint={image.hint}
                    className={cn(
                        "object-cover w-full h-full transition-opacity duration-700 ease-in-out",
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    )}
                />
            ))}

            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/50"></div>
            <div className="absolute bottom-0 left-0 p-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="font-bold text-white text-lg">{project.title}</h3>
            </div>
        </div>
    );
};


const MosaicCell = ({ project, onSelect }: { project: AudiovisualProject, onSelect: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={cn(project.span, 'h-full')} onClick={onSelect}>
            <MosaicCellContent
                project={project}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </div>
    )
}

const AudiovisualMosaic = ({ projects, onProjectSelect }: { projects: AudiovisualProject[], onProjectSelect: (project: AudiovisualProject) => void }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-1">
        {projects.map((project, index) => (
            <MosaicCell key={index} project={project} onSelect={() => onProjectSelect(project)} />
        ))}
    </div>
);

const Lightbox = ({ project, open, onOpenChange }: { project: AudiovisualProject | null; open: boolean; onOpenChange: (open: boolean) => void }) => {
    if (!project) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                <Carousel className="w-full">
                    <CarouselContent>
                        {project.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative aspect-video">
                                    <Image src={image.src} alt={`${project.title} - ${index + 1}`} fill className="object-contain" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </Carousel>
                <DialogClose className="absolute -top-2 -right-2 rounded-full bg-background/50 p-1 text-foreground opacity-100 hover:bg-background/80">
                    <X className="h-4 w-4" />
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};


interface PortfolioSectionProps {
    techProjects: Project[];
}

const INITIAL_VISIBLE_PROJECTS = 3;
const DESKTOP_BREAKPOINT = 1024;

export default function PortfolioSection({ techProjects }: PortfolioSectionProps) {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<AudiovisualProject | null>(null);

    const handleProjectSelect = (project: AudiovisualProject) => {
        setSelectedProject(project);
        setLightboxOpen(true);
    };

    useEffect(() => {
        const checkScreenSize = () => {
            const isDesktopQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
            setIsDesktop(isDesktopQuery.matches);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleShowMore = () => {
        setVisibleCount(techProjects.length);
        setIsExpanded(true);
    };

    const projectsToShow = isDesktop ? techProjects : techProjects.slice(0, visibleCount);
    const showMoreButtonIsVisible = !isDesktop && !isExpanded && techProjects.length > INITIAL_VISIBLE_PROJECTS;

    return (
        <>
            <section id="portfolio" className="py-16 sm:py-24 space-y-24">
                <div className="bg-background">
                    <div className="container mx-auto px-4">
                        <SectionTitle
                            icon={Code}
                            title="Projetos em Destaque"
                            description="Uma seleção de meus trabalhos mais recentes e relevantes em desenvolvimento e tecnologia."
                        />
                        <ProjectGrid projects={projectsToShow} />
                        <div className="text-center mt-12">
                            {showMoreButtonIsVisible ? (
                                <Button onClick={handleShowMore} size="lg">
                                    Ver Mais Projetos
                                </Button>
                            ) : (
                                <Button asChild size="lg">
                                    <Link href="https://github.com/laranjaeragnarok2" target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2" />
                                        Ver Todos no GitHub
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="bg-card">
                    <div className="container mx-auto px-4 py-16 sm:py-24">
                        <SectionTitle
                            icon={Film}
                            title="Olhar Criativo"
                            description="explorações do mundo de maneira visual, com foto video e produção de experiências"
                        />
                        <AudiovisualMosaic projects={audiovisualProjects} onProjectSelect={handleProjectSelect} />
                    </div>
                </div>
            </section>
            <Lightbox project={selectedProject} open={lightboxOpen} onOpenChange={setLightboxOpen} />
        </>
    );
}
