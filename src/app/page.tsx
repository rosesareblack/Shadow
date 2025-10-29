import { Hero47 } from "@/components/hero47";
import { BentoGrid } from "@/components/bento-grid";
import { Casestudies2 } from "@/components/casestudies2";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero47 />
      <BentoGrid />
      <Casestudies2 />
      <Footer />
    </main>
  );
}
