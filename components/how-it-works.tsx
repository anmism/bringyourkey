import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Key, Rocket } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Pick an App",
      description: "Browse our collection of useful tools and find the one that fits your needs.",
    },
    {
      icon: Key,
      title: "Add Your API Key",
      description: "Securely enter your own API key. It stays in your browser and is never stored on our servers.",
    },
    {
      icon: Rocket,
      title: "Start Using",
      description: "Enjoy full access to premium features with your own API quota and complete privacy.",
    },
  ]

  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-muted/20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">How It Works</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Get started in three simple steps. No registration, no hassle.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  <span className="text-sm font-medium text-muted-foreground block mb-1">Step {index + 1}</span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
