"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { education, personalInfo, skillsByCategory } from "@/lib/data";
import { SkillCategory } from "@/types";
import {
    Award,
    Brain,
    Code2,
    Database,
    Download,
    ExternalLink,
    GraduationCap,
    Settings,
    Target,
    User,
} from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const categoryIcons: Record<SkillCategory, any> = {
    "Programming Languages": Code2,
    "Frameworks & Libraries": Award,
    "AI/ML": Brain,
    Database: Database,
    "Developer Tools": Settings,
    Research: Target,
};

export function AboutSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="about" className="relative py-20 lg:py-24 bg-muted/30">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        <User className="w-3.5 h-3.5" />
                        About Me
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        AI Engineer
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Passionate about building intelligent systems using Large Language Models, semantic search, and retrieval-augmented generation pipelines
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* About Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                <span className="text-foreground font-semibold">AI Engineer</span> specializing in
                                Large Language Models and Retrieval-Augmented Generation (RAG) pipelines.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                I recently developed <span className="text-foreground font-medium">SGU-Agent</span>, a personalized
                                academic recommendation system combining semantic search with collaborative filtering, and
                                <span className="text-foreground font-medium"> Traffic SGU</span>, a Vietnamese traffic law Q&A
                                system using advanced RAG pipelines. Both projects demonstrate my expertise in building domain-specific
                                AI applications.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                I&apos;m passionate about applying AI to solve real-world problems, particularly in education,
                                information retrieval, and semantic understanding. My focus areas include LLM fine-tuning,
                                embeddings optimization, and building robust AI systems that deliver accurate, contextual results.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                onClick={() => scrollToSection("projects")}
                                className="gap-2"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View My Projects
                            </Button>
                            <Button
                                variant="outline"
                                className="gap-2"
                                asChild
                            >
                                <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                                    <Download className="w-4 h-4" />
                                    Download CV
                                </a>
                            </Button>
                        </div>

                        {/* Education */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-primary" />
                                Education
                            </h3>
                            <div className="space-y-3">
                                {education.map((edu) => (
                                    <div key={edu.id} className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
                                        <h4 className="font-semibold text-base mb-1">
                                            {edu.degree} — {edu.field}
                                        </h4>
                                        <p className="text-primary font-medium text-sm">{edu.institution}</p>
                                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {edu.startDate} – {edu.endDate}
                                        </p>
                                        {edu.thesis && (
                                            <p className="text-sm text-muted-foreground mt-2 p-3 rounded-lg bg-muted/50">
                                                <strong className="text-foreground">Thesis:</strong> {edu.thesis}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <Award className="w-5 h-5 text-primary" />
                                Recent Achievements
                            </h3>
                            <div className="space-y-3">
                                {achievements.slice(0, 3).map((achievement) => (
                                    <div key={achievement.id} className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                            <Badge variant="secondary" className="text-xs shrink-0">
                                                {achievement.date}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    */}

                    {/* Skills Section */}
                    <div className="space-y-4">
                        <div className="mb-2">
                            <h3 className="text-lg font-semibold mb-1">Technical Expertise</h3>
                            <p className="text-muted-foreground text-sm">
                                Technologies and tools I work with to build solutions.
                            </p>
                        </div>

                        {Object.entries(skillsByCategory).map(([category, skills]) => {
                            const IconComponent = categoryIcons[category as SkillCategory] || Code2;
                            return (
                                <div key={category} className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <IconComponent className="w-4 h-4 text-primary" />
                                        </div>
                                        <h4 className="font-semibold text-sm">{category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {skills.map((skill) => (
                                            <Badge
                                                key={skill.name}
                                                variant={skill.proficiency === "expert" ? "default" : "secondary"}
                                                className="text-xs"
                                            >
                                                {skill.name}
                                                {skill.yearsOfExperience && (
                                                    <span className="ml-1 opacity-70">
                                                        {skill.yearsOfExperience}y
                                                    </span>
                                                )}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
