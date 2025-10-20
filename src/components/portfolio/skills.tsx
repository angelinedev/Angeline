
"use client";

import * as React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type SkillsData = {
  [key: string]: {
    items: string[];
    proficiency_score: number;
  };
};

type SkillsProps = {
  skills: SkillsData;
};

export function Skills({ skills }: SkillsProps) {
  const chartData = Object.entries(skills).map(([key, value]) => ({
    subject: key.replace(/_/g, " & "),
    score: value.proficiency_score,
    fullMark: 100,
  }));

  const allSkills = Object.values(skills).flatMap(skill => skill.items);

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-3 max-w-[700px] text-foreground/80 md:text-lg">
            A visualization of my proficiency across different domains.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
            <Card className="md:col-span-3">
                <CardHeader>
                    <CardTitle className="font-headline">Proficiency Radar</CardTitle>
                    <CardDescription>A score out of 100 for each category.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                        <PolarGrid stroke="hsl(var(--border))" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar 
                            name="Proficiency" 
                            dataKey="score" 
                            stroke="hsl(var(--primary))" 
                            fill="hsl(var(--primary))" 
                            fillOpacity={0.4} 
                        />
                    </RadarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card className="md:col-span-2">
                 <CardHeader>
                    <CardTitle className="font-headline">Technologies</CardTitle>
                    <CardDescription>A tag cloud of all technologies I work with.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {allSkills.map((item, index) => (
                        <Badge key={index} variant="secondary">{item}</Badge>
                    ))}
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}
