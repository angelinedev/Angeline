import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Code } from "lucide-react";

type FooterProps = {
  name: string;
  email: string;
  linkedin_url: string;
};

export function Footer({ name, email, linkedin_url }: FooterProps) {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-foreground/60">
            <Code className="h-4 w-4 text-primary" />
            <span>© {new Date().getFullYear()} {name}. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
