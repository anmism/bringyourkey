import { HeroSection } from "@/components/hero-section"
import { FeaturedApps } from "@/components/featured-apps"
import { HowItWorks } from "@/components/how-it-works"
import { FAQ } from "@/components/faq"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedApps />
      <HowItWorks />
      <FAQ />
    </main>
  )
}
