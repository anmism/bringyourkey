"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Key, Github, AlertCircle } from "lucide-react"
import Link from "next/link"
import type { App } from "@/lib/apps-config"

interface AppContainerProps {
  app: App
}

export function AppContainer({ app }: AppContainerProps) {
  const [apiKeys, setApiKeys] = useState<Record<string, string>>({})
  const [isConfigured, setIsConfigured] = useState(false)

  const handleKeyChange = (keyType: string, value: string) => {
    setApiKeys((prev) => ({ ...prev, [keyType]: value }))
  }

  const handleConfigure = () => {
    // In a real app, you'd validate the keys here
    setIsConfigured(true)
    // Store keys in localStorage for persistence
    localStorage.setItem(`byk-keys-${app.id}`, JSON.stringify(apiKeys))
  }

  if (app.status === "coming-soon") {
    return (
      <div className="container py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{app.name}</h1>
          <Badge variant="secondary" className="mb-4">
            Coming Soon
          </Badge>
          <p className="text-muted-foreground mb-8">{app.description}</p>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              This app is currently in development. Follow our GitHub repository for updates.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">{app.name}</h1>
              <p className="text-muted-foreground mt-2">{app.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Badge variant={app.status === "active" ? "default" : "secondary"}>{app.status}</Badge>
              <Button variant="outline" size="sm" asChild>
                <Link href={app.githubUrl} target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  Source
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {!isConfigured ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Key className="h-5 w-5" />
                Configure API Keys
              </CardTitle>
              <CardDescription>
                Enter your API keys to start using {app.name}. Your keys are stored locally and never sent to our
                servers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {app.requiredKeys.map((keyType) => (
                <div key={keyType} className="space-y-2">
                  <Label htmlFor={keyType} className="text-sm font-medium">
                    {keyType}
                  </Label>
                  <Input
                    id={keyType}
                    type="password"
                    placeholder={`Enter your ${keyType}`}
                    value={apiKeys[keyType] || ""}
                    onChange={(e) => handleKeyChange(keyType, e.target.value)}
                    className="w-full"
                  />
                </div>
              ))}
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  Your API keys are stored only in your browser and are never transmitted to our servers.
                </AlertDescription>
              </Alert>
              <Button
                onClick={handleConfigure}
                disabled={app.requiredKeys.some((key) => !apiKeys[key])}
                className="w-full"
              >
                Configure & Start Using {app.name}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="app" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="app" className="text-xs sm:text-sm">
                Use App
              </TabsTrigger>
              <TabsTrigger value="features" className="text-xs sm:text-sm">
                Features
              </TabsTrigger>
              <TabsTrigger value="settings" className="text-xs sm:text-sm">
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="app" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{app.name} Interface</CardTitle>
                  <CardDescription>This is where the actual app interface would be rendered.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 sm:h-96 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center px-4">
                      <p className="text-muted-foreground mb-4">App interface would be rendered here</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        This is a demo - each app would have its own custom interface
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="features" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {app.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full flex-shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">API Key Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {app.requiredKeys.map((keyType) => (
                    <div key={keyType} className="flex items-center justify-between">
                      <span className="text-sm sm:text-base">{keyType}</span>
                      <Badge variant="outline">Configured</Badge>
                    </div>
                  ))}
                  <Button variant="outline" onClick={() => setIsConfigured(false)} className="w-full">
                    Reconfigure Keys
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
