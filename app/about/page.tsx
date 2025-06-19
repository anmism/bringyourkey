import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Code, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About BringYourKey.com</h1>
          <p className="text-xl text-muted-foreground">Empowering developers and creators with privacy-first tools</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe powerful AI tools should be accessible to everyone while respecting privacy and giving users
                complete control over their data and API usage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                Privacy First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your API keys never leave your browser. We don't store, log, or have access to your credentials or
                conversations. Complete transparency, complete control.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-500" />
                Open Source
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every app is open source and available on GitHub. Review the code, contribute improvements, or host your
                own version. Full transparency is our commitment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                Community Driven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built by developers, for developers. Join our community to suggest features, report issues, and help
                shape the future of privacy-first AI tools.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Why We Built This</h2>
          <div className="prose prose-gray dark:prose-invert mx-auto">
            <p>
              We were frustrated with the lack of privacy-respecting AI tools. Most platforms require you to create
              accounts, store your data on their servers, and often charge premium prices for basic features. We wanted
              something different.
            </p>
            <p>
              BringYourKey.com was born from the idea that you should have complete control over your AI interactions.
              By bringing your own API keys, you get direct access to the latest AI models, pay only for what you use,
              and maintain complete privacy.
            </p>
            <p>
              Our platform is completely free because we believe powerful tools should be accessible to everyone. We're
              funded by the community and committed to keeping it that way.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Badge variant="outline" className="text-sm">
            Made with ❤️ by the open source community
          </Badge>
        </div>
      </div>
    </div>
  )
}
