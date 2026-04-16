"use client"
import React from 'react';
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import PortfolioSection, { type Project } from "@/components/sections/portfolio-section";
import VideoSection, { type VideoProject } from "@/components/sections/video-section";
import ServicesSection from "@/components/sections/services-section";
import IntakeSection from "@/components/sections/intake-section";
import FooterSection from './sections/footer-section';

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
            <ServicesSection />
            <PortfolioSection techProjects={techProjects} />
            <VideoSection projects={videoProjects} />
            <IntakeSection />
            <FooterSection />
        </main>
    );
}
