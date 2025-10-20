
import { Briefcase } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  date: string;
  summary_points: string[];
};

type ExperienceProps = {
  experience: ExperienceItem[];
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-[700px] text-foreground/80 md:text-lg">
            My professional journey and key responsibilities.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {experience.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 mt-1.5 md:top-2 md:mt-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary ring-8 ring-background">
                  <Briefcase className="h-4 w-4 text-secondary-foreground" />
                </span>
              </div>
              <div className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="w-full md:w-1/2 px-4 md:px-8 py-2">
                    <div className={`md:p-6 p-4 rounded-lg bg-card border border-border/60 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <p className="text-sm text-foreground/60">{item.date}</p>
                        <h3 className="text-lg font-bold font-headline mt-1">{item.role}</h3>
                        <p className="text-primary font-medium">{item.company} &middot; {item.location}</p>
                        <ul className="mt-3 list-disc list-inside text-left text-sm text-foreground/80 space-y-1">
                            {item.summary_points.map((point, pIndex) => (
                                <li key={pIndex}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
