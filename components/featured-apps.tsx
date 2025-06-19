import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import Link from "next/link"
import { apps } from "@/lib/apps-config"

export function FeaturedApps() {
  return (
    <section id="apps" className="py-12 sm:py-20 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Featured Apps</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Powerful tools that work with your API keys. No registration required.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Card key={app.id} className="flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                      {app.name.charAt(0)}
                    </div>
                    <CardTitle className="text-base sm:text-lg">{app.name}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {app.category}
                  </Badge>
                </div>
                <CardDescription className="text-sm">{app.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <div className="space-y-3">
                  <div className="text-xs sm:text-sm">
                    <span className="font-medium">Required:</span> {app.requiredKeys.join(", ")}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {app.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {app.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{app.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-2 pt-0">
                <Button asChild className="flex-1 w-full sm:w-auto">
                  <Link href={`/${app.path}`}>
                    <Play className="mr-2 h-4 w-4" />
                    Use App
                  </Link>
                </Button>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
                    <Link href={app.githubUrl} target="_blank">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
                    <Link href={`/docs/${app.id}`}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
