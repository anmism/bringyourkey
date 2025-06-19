import Link from "next/link"
import { Github, MessageCircle, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
              <span className="font-bold">BringYourKey.com</span>
            </div>
            <p className="text-sm text-muted-foreground">Powerful tools. Your terms.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/bringyourkey"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/bringyourkey"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/bringyourkey"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-2">
              <Link
                href="https://github.com/bringyourkey"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.gg/bringyourkey"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://twitter.com/bringyourkey"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BringYourKey.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
