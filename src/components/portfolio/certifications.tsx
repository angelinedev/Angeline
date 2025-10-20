
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type Certification = {
  title: string;
  issuer: string;
  year: string;
};

type CertificationsProps = {
  certifications: Certification[];
};

export function Certifications({ certifications }: CertificationsProps) {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-3 max-w-[700px] text-foreground/80 md:text-lg">
            My professional awards and certifications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col border-border/60">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/60">Awarded: {cert.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
