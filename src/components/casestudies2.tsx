import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Mercury",
    description: "Redefining the banking experience for startups with a sleek and intuitive interface.",
    link: "/casestudy/mercury",
    tags: ["Fintech", "UX/UI Design", "Web App"],
  },
  {
    title: "Stripe",
    description: "Empowering online businesses with seamless payment processing and financial tools.",
    link: "#",
    tags: ["Fintech", "API", "Developer Tools"],
  },
  {
    title: "Linear",
    description: "The issue tracker you'll enjoy using. A better way to build products.",
    link: "#",
    tags: ["Productivity", "SaaS", "Developer Tools"],
  },
];

export function Casestudies2() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Case Studies</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how we've helped companies like yours achieve their goals with our components.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-background shadow-md">
              <Link href={study.link} className="absolute inset-0 z-10">
                <span className="sr-only">View Case Study</span>
              </Link>
              <Image
                src={`https://picsum.photos/seed/${study.title}/600/400`}
                alt={study.title}
                width={600}
                height={400}
                className="h-60 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{study.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{study.description}</p>
                 <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline">View All Case Studies</Button>
        </div>
      </div>
    </section>
  );
}
