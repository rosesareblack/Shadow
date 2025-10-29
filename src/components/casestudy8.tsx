// FIX: Implemented a reusable Casestudy8 component for displaying detailed case study information, replacing placeholder content.
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface CaseStudyProps {
  title: string;
  description: string;
  imageUrl: string;
  stats: { label: string; value: string }[];
  challenge: string;
  solution: string;
  result: string;
}

export function Casestudy8({
  title,
  description,
  imageUrl,
  stats,
  challenge,
  solution,
  result,
}: CaseStudyProps) {
  return (
    <div className="bg-background text-foreground">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {title}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {description}
                </p>
              </div>
            </div>
            <Image
              src={imageUrl}
              alt={title}
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2 text-center">
                <div className="text-4xl font-bold">{stat.value}</div>
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              The Challenge
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {challenge}
            </p>
          </div>
          <Separator className="my-8" />
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              The Solution
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {solution}
            </p>
          </div>
           <Separator className="my-8" />
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              The Result
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {result}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
