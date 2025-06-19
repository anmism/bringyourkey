import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Code, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-12 sm:py-20 lg:py-32">
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-xs sm:text-sm leading-6 text-muted-foreground ring-1 ring-muted-foreground/20 hover:ring-muted-foreground/30">
              Self-hosted. But Simpler.{" "}
              <Link href="/about" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <ArrowRight className="inline h-3 w-3" />
              </Link>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
            Use Your Favorite Tools.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              With Your Own Keys.
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground max-w-2xl mx-auto px-4">
            A collection of powerful web apps and tools that respect your privacy. Bring your own API keys, maintain
            full control, and enjoy complete transparency. All apps are open-source and your keys never leave your
            browser.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#apps">
                Try an App <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3 px-4">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-semibold">Privacy First</h3>
              <p className="text-sm text-muted-foreground">Your API keys never leave your browser</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Code className="h-8 w-8 text-blue-600 mb-2" />
              <h3 className="font-semibold">Open Source</h3>
              <p className="text-sm text-muted-foreground">Full transparency with public repositories</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-8 w-8 text-purple-600 mb-2" />
              <h3 className="font-semibold">Powerful Tools</h3>
              <p className="text-sm text-muted-foreground">Access premium features with your own keys</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
