import { notFound } from "next/navigation"
import { Metadata } from "next"
import { ProjectDetail } from "@/components/ui/project-detail"
import { Project } from "@/types"
import projectsData from "@/data/projects.json"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const projects = projectsData as Project[]
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  }
}

export async function generateStaticParams() {
  const projects = projectsData as Project[]
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projects = projectsData as Project[]
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
