import { notFound } from "next/navigation"
import { getAppById } from "@/lib/apps-config"
import { AppContainer } from "@/components/app-container"

interface AppPageProps {
  params: {
    app: string
  }
}

export default function AppPage({ params }: AppPageProps) {
  const app = getAppById(params.app)

  if (!app) {
    notFound()
  }

  return <AppContainer app={app} />
}

export async function generateStaticParams() {
  const { apps } = await import("@/lib/apps-config")

  return apps.map((app) => ({
    app: app.id,
  }))
}

//hello
