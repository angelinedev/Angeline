
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import data from "@/lib/portfolio-data.json";
import Cubes from "./cubes";
import './cubes.css';

type HeroProps = {
  name: string;
};

export function Hero({ name }: HeroProps) {
  const subtitle = "Web Developer, DevOps Engineer, and Game Developer. I create beautiful, high-performance digital experiences.";
  return (
    <section className="relative w-full h-[50svh] min-h-[400px] md:h-[60svh] lg:h-[70svh] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Cubes 
                gridSize={12}
                maxAngle={45}
                radius={3.5}
                borderStyle="1px solid hsl(var(--primary) / 0.2)"
                faceColor="hsl(var(--background))"
                rippleColor="hsl(var(--primary))"
                rippleSpeed={1.2}
                autoAnimate={true}
                rippleOnClick={true}
            />
            <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
        </div>
        
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-8xl">
              {name}
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
              {subtitle}
            </p>
            <div className="mt-8 flex gap-4">
                <Button asChild>
                <a href={data.personal.linkedin_url} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
                </Button>
                <Button variant="secondary" asChild>
                <a href={`mailto:${data.personal.email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
                </Button>
            </div>
        </div>
    </section>
  );
}
