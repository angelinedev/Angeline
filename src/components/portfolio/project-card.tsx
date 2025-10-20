import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight } from "lucide-react";

export type Project = {
  title: string;
  company_role: string;
  date: string;
  description: string;
  url: string;
  category: string;
  hero_animation_type: string;
  icon_emoji: string;
  imageId: string;
  keywords: string[];
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === project.imageId);

  return (
    <Card className="flex flex-col overflow-hidden border-border/60 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
      <CardHeader>
        {placeholder && (
          <div className="aspect-video -m-6 -mb-0 overflow-hidden rounded-t-lg">
            <Image
              src={placeholder.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
              data-ai-hint={placeholder.imageHint}
            />
          </div>
        )}
        <div className="pt-6 flex items-start justify-between">
            <div>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription>{project.company_role}</CardDescription>
            </div>
            <div className="text-4xl">{project.icon_emoji}</div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.keywords.map((keyword, index) => (
            <Badge key={index} variant="secondary">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Project <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
