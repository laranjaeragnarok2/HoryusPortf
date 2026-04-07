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
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <PortfolioSection techProjects={techProjects} />
            <VideoSection projects={videoProjects} />
            <FooterSection />
        </main>
    );
}
