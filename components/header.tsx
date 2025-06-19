"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Github, MessageCircle, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-6 w-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
            <span className="font-bold hidden sm:inline-block">BringYourKey.com</span>
            <span className="font-bold sm:hidden">BYK</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-between space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="/docs" className="transition-colors hover:text-foreground/80">
              Docs
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/bringyourkey" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://discord.gg/bringyourkey" target="_blank">
                <MessageCircle className="h-4 w-4" />
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden flex-1 items-center justify-end space-x-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                <Link
                  href="/about"
                  className="text-lg font-medium transition-colors hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/docs"
                  className="text-lg font-medium transition-colors hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  Documentation
                </Link>
                <div className="flex space-x-4 pt-4 border-t">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://github.com/bringyourkey" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://discord.gg/bringyourkey" target="_blank">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Discord
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
