import { Casestudy8 } from "@/components/casestudy8";
import { Footer } from "@/components/footer";

const mercuryCaseStudy = {
  title: "Mercury: Redefining Banking for Startups",
  description:
    "A deep dive into how PrismUI helped Mercury build a sleek, intuitive, and highly performant banking interface that startups love.",
  imageUrl: "https://picsum.photos/seed/mercury-main/1200/800",
  stats: [
    { label: "User Growth", value: "300%" },
    { label: "Development Time", value: "-40%" },
    { label: "User Satisfaction", value: "98%" },
    { label: "Performance", value: "+60%" },
  ],
  challenge:
    "Mercury needed to create a user-friendly banking platform that could handle complex financial operations without overwhelming its users. The challenge was to design an interface that was both powerful and simple, breaking away from traditional, clunky banking software.",
  solution:
    "By leveraging PrismUI's component library, Mercury's team was able to rapidly prototype and build a consistent and beautiful user interface. Our pre-built, animated components for data visualization, forms, and navigation saved hundreds of development hours and ensured a high-quality, accessible experience out of the box.",
  result:
    "The new platform was a resounding success. Mercury saw a 300% increase in user sign-ups within the first six months. The development team reported a 40% reduction in time spent on UI development, allowing them to focus on core banking features. User satisfaction scores skyrocketed to 98%, with customers praising the platform's ease of use and modern design.",
};


export default function MercuryCaseStudyPage() {
    return (
        <>
            <Casestudy8 {...mercuryCaseStudy} />
            <Footer />
        </>
    )
}
