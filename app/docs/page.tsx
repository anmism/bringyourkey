import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Key, Shield, Code } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground">Everything you need to know about using BringYourKey.com</p>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Getting Started
              </CardTitle>
              <CardDescription>Learn how to set up and use your first app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-gray dark:prose-invert">
                <h3>Step 1: Choose an App</h3>
                <p>Browse our collection of apps on the homepage and select one that fits your needs.</p>

                <h3>Step 2: Get Your API Key</h3>
                <p>Visit the provider's website (e.g., OpenAI, Anthropic) and create an API key:</p>
                <ul>
                  <li>
                    <strong>OpenAI:</strong> Visit platform.openai.com → API Keys
                  </li>
                  <li>
                    <strong>Anthropic:</strong> Visit console.anthropic.com → API Keys
                  </li>
                  <li>
                    <strong>Google AI:</strong> Visit makersuite.google.com → API Key
                  </li>
                </ul>

                <h3>Step 3: Configure and Use</h3>
                <p>Enter your API key in the app's configuration screen and start using the tool immediately.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>How we protect your data and API keys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-600">✓ What We Do</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>Store keys only in your browser</li>
                    <li>Use HTTPS for all connections</li>
                    <li>Open source all our code</li>
                    <li>No user tracking or analytics</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-600">✗ What We Don't Do</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>Store your API keys on servers</li>
                    <li>Log your conversations</li>
                    <li>Share data with third parties</li>
                    <li>Require account creation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                API Providers
              </CardTitle>
              <CardDescription>Supported API providers and how to get keys</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">OpenAI</span>
                    <Badge variant="outline">GPT-4, DALL-E</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get your key at platform.openai.com. Supports GPT-3.5, GPT-4, and DALL-E models.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://platform.openai.com/api-keys" target="_blank">
                      Get OpenAI Key <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Anthropic</span>
                    <Badge variant="outline">Claude</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get your key at console.anthropic.com. Access to Claude models.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://console.anthropic.com/" target="_blank">
                      Get Anthropic Key <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Google AI</span>
                    <Badge variant="outline">Gemini</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get your key at makersuite.google.com. Access to Gemini models.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://makersuite.google.com/app/apikey" target="_blank">
                      Get Google AI Key <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Stability AI</span>
                    <Badge variant="outline">Stable Diffusion</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get your key at platform.stability.ai. Image generation models.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://platform.stability.ai/account/keys" target="_blank">
                      Get Stability Key <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
