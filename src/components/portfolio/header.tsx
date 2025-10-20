
import { Code } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#projects"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Experience
            </a>
            <a
              href="#certifications"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Certifications
            </a>
             <a
              href="#recent-posts"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Posts
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
