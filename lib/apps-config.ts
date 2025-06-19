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
    id: "ai-chat",
    name: "AI Chat",
    description: "Advanced conversational AI with support for multiple models including GPT-4, Claude, and Gemini.",
    path: "ai-chat",
    category: "AI",
    requiredKeys: ["OpenAI API", "Anthropic API", "Google AI API"],
    features: ["Multi-model support", "Conversation history", "File uploads", "Code highlighting"],
    githubUrl: "https://github.com/bringyourkey/ai-chat",
    status: "active",
  },
  {
    id: "text-summarizer",
    name: "Text Summarizer",
    description: "Intelligent text summarization with customizable length and style options.",
    path: "text-summarizer",
    category: "Productivity",
    requiredKeys: ["OpenAI API"],
    features: ["Multiple summary styles", "Length control", "Bulk processing", "Export options"],
    githubUrl: "https://github.com/bringyourkey/text-summarizer",
    status: "active",
  },
  {
    id: "image-generator",
    name: "Image Generator",
    description: "Create stunning images from text descriptions using DALL-E, Midjourney, and Stable Diffusion.",
    path: "image-generator",
    category: "Creative",
    requiredKeys: ["OpenAI API", "Stability AI API"],
    features: ["Multiple AI models", "Style presets", "Batch generation", "High resolution"],
    githubUrl: "https://github.com/bringyourkey/image-generator",
    status: "active",
  },
  {
    id: "code-reviewer",
    name: "Code Reviewer",
    description: "AI-powered code review and analysis with security scanning and optimization suggestions.",
    path: "code-reviewer",
    category: "Developer",
    requiredKeys: ["OpenAI API", "Anthropic API"],
    features: ["Security analysis", "Performance tips", "Best practices", "Multi-language support"],
    githubUrl: "https://github.com/bringyourkey/code-reviewer",
    status: "beta",
  },
  {
    id: "document-analyzer",
    name: "Document Analyzer",
    description: "Extract insights, summaries, and key information from PDFs, documents, and web pages.",
    path: "document-analyzer",
    category: "Productivity",
    requiredKeys: ["OpenAI API"],
    features: ["PDF processing", "Web scraping", "Key extraction", "Multi-format support"],
    githubUrl: "https://github.com/bringyourkey/document-analyzer",
    status: "beta",
  },
  {
    id: "translation-hub",
    name: "Translation Hub",
    description: "Professional-grade translation with context awareness and cultural adaptation.",
    path: "translation-hub",
    category: "Language",
    requiredKeys: ["OpenAI API", "Google Translate API"],
    features: ["100+ languages", "Context preservation", "Bulk translation", "Quality scoring"],
    githubUrl: "https://github.com/bringyourkey/translation-hub",
    status: "coming-soon",
  },
]

export function getAppById(id: string): App | undefined {
  return apps.find((app) => app.id === id)
}

export function getActiveApps(): App[] {
  return apps.filter((app) => app.status === "active")
}
