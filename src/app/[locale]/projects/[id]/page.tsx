import { setRequestLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();
  const projects = (messages as any).projects?.items as any[];
  const project = projects?.find((p: any) => p.id === id);

  if (!project) notFound();

  return <ProjectDetail project={project} locale={locale} />;
}
