
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import data from "@/lib/portfolio-data.json";
import Cubes from "./cubes";
import './cubes.css';
import TextTrail from "./text-trail";

type HeroProps = {
  name: string;
};

export function Hero({ name }: HeroProps) {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
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
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute -z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
            <div className="h-24 md:h-32 lg:h-40 w-full">
               <TextTrail 
                text={name}
                textColor="hsl(var(--primary))"
                backgroundColor="transparent"
              />
            </div>
          <p className="mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Web Developer, DevOps Engineer, and Game Developer. I create
            beautiful, high-performance digital experiences.
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
      </div>
    </section>
  );
}
