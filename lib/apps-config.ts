export interface App {
  id: string
  name: string
  description: string
  path: string
  category: string
  requiredKeys: string[]
  features: string[]
  githubUrl: string
  status: "active" | "beta" | "coming-soon"
}

export const apps: App[] = [
  {
    id: "bulk-email-sender",
    name: "Bulk Email Sender",
    description: "Send personalized emails in bulk using your own SMTP or email API key.",
    path: "bulk-email-sender",
    category: "Productivity",
    requiredKeys: ["SMTP API Key", "Mailgun API", "SendGrid API"],
    features: ["CSV upload", "Custom templates", "Delivery logs", "Email preview"],
    githubUrl: "https://github.com/bringyourkey/bulk-email-sender",
    status: "active",
  },
  {
    id: "easy-visual-scraper",
    name: "Easy Visual Scraper",
    description: "Visually scrape structured data from websites and export to CSV or JSON.",
    path: "easy-visual-scraper",
    category: "Developer",
    requiredKeys: ["None (Local only)"],
    features: ["Visual selector", "Preview data", "Export options", "No code required"],
    githubUrl: "https://github.com/bringyourkey/easy-visual-scraper",
    status: "active",
  },
  {
    id: "not-just",
    name: "Not Just Theta",
    description: "An experimental AI tool that goes beyond typical AI workflows.",
    path: "not-just",
    category: "AI",
    requiredKeys: ["OpenAI API"],
    features: ["Prompt chaining", "Creative AI", "Multi-model support", "State management"],
    githubUrl: "https://github.com/bringyourkey/not-just-theta",
    status: "beta",
  },
  {
    id: "github-blog-automator",
    name: "GitHub Blog Automator",
    description: "Automatically publish and update your blog from GitHub repos or markdown files.",
    path: "github-blog-automator",
    category: "Developer",
    requiredKeys: ["GitHub Personal Access Token"],
    features: ["Markdown parsing", "Frontmatter handling", "Live blog updates", "Theming support"],
    githubUrl: "https://github.com/bringyourkey/github-blog-automator",
    status: "active",
  },
];


export function getAppById(id: string): App | undefined {
  return apps.find((app) => app.id === id)
}

export function getActiveApps(): App[] {
  return apps.filter((app) => app.status === "active")
}
