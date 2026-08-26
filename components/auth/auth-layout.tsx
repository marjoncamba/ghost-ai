import { FileText, Sparkles, Users } from "lucide-react"
import type { ComponentType, ReactNode } from "react"

interface Feature {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description: "Describe your system in plain English and AI maps it onto a shared canvas.",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "Live cursors, presence, and shared editing as your team refines the design.",
  },
  {
    icon: FileText,
    title: "Spec Generation",
    description: "Turn the finished canvas into a persisted Markdown technical spec.",
  },
]

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-base">
      <div className="hidden w-1/2 flex-col border-r border-surface-border bg-surface px-16 py-16 lg:flex">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-lg bg-brand" />
          <span className="text-lg font-bold tracking-tight text-copy-primary">
            Ghost AI
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl leading-tight font-bold text-copy-primary">
              A real-time collaborative system design workspace.
            </h1>
            <p className="max-w-md text-sm text-copy-muted">
              Describe a system in plain English and watch AI map it onto a
              shared canvas your team can refine together.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim">
                  <Icon className="h-4 w-4 text-brand" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-copy-primary">
                    {title}
                  </span>
                  <span className="text-sm text-copy-muted">
                    {description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        {children}
      </div>
    </div>
  )
}
