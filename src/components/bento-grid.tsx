"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Beautifully Designed",
    description: "Components that are not only functional but also aesthetically pleasing.",
    className: "col-span-1 md:col-span-2",
    background: <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20"></div>
  },
  {
    title: "Highly Animated",
    description: "Powered by Framer Motion for smooth and delightful animations.",
    className: "col-span-1",
    background: <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-pink-500 to-rose-500 opacity-20"></div>
  },
  {
    title: "Fully Responsive",
    description: "Looks great on all devices, from mobile to desktop.",
    className: "col-span-1",
    background: <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-teal-500 to-cyan-500 opacity-20"></div>
  },
  {
    title: "Accessible",
    description: "Built with accessibility in mind, following WAI-ARIA standards.",
    className: "col-span-1 md:col-span-2",
    background: <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-amber-500 to-orange-500 opacity-20"></div>
  },
];


export function BentoGrid() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Why PrismUI?
        </h2>
        <motion.div
          initial="initial"
          whileInView="animate"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[22rem]"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden",
                feature.className
              )}
            >
              {feature.background}
              <div className="z-10 flex flex-col justify-center h-full">
                <div className="font-sans font-bold text-xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                  {feature.title}
                </div>
                <div className="font-sans font-normal text-sm text-neutral-600 dark:text-neutral-300">
                  {feature.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
