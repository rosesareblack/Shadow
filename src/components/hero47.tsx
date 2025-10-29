"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero47() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm mb-4">
            Built on Shadcn/UI, Framer Motion, and Tailwind CSS
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Beautifully Animated Components for Your Next Project
          </h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            PrismUI is a collection of expertly crafted, production-ready components that you can copy and paste into your apps.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="#" passHref>
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="#" passHref>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                View Components
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
