import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow, useSite } from "@/components/site-shell";
import progressImage from "@/assets/project-progress.jpg";
import completeImage from "@/assets/project-complete.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — D’HOMES × Scavolini Palm Beach" },
    { name: "description", content: "Discover ongoing and completed D’HOMES interior projects in Palm Beach." },
    { property: "og:title", content: "D’HOMES Projects" },
    { property: "og:description", content: "Ideas in the making. Spaces made real." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProjectsPage,
});

function ProjectsPage() {
  const { text } = useSite(); const t = text.projects; const [tab, setTab] = useState<"ongoing" | "completed">("ongoing");
  const active = tab === "ongoing" ? { image: progressImage, title: t.progressTitle, type: t.progressType, body: t.progressBody } : { image: completeImage, title: t.completeTitle, type: t.completeType, body: t.completeBody };
  return <>
    <section className="px-5 pb-14 pt-20 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28"><div className="mx-auto max-w-[1344px]"><Eyebrow>{t.eyebrow}</Eyebrow><div className="mt-7 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end"><h1 className="max-w-5xl text-5xl font-medium leading-[1.03] sm:text-7xl lg:text-8xl">{t.title}</h1><p className="max-w-lg text-lg leading-8 text-muted-foreground">{t.intro}</p></div></div></section>
    <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36"><div className="mx-auto max-w-[1344px]"><div className="mb-8 flex border-b border-border"><Button variant="ghost" onClick={() => setTab("ongoing")} className={`h-14 rounded-none border-b-2 px-0 mr-8 ${tab === "ongoing" ? "border-primary text-foreground" : "border-transparent text-muted-foreground"}`}>{t.ongoing}</Button><Button variant="ghost" onClick={() => setTab("completed")} className={`h-14 rounded-none border-b-2 px-0 ${tab === "completed" ? "border-primary text-foreground" : "border-transparent text-muted-foreground"}`}>{t.completed}</Button></div>
      <article className="grid bg-card lg:grid-cols-[1.35fr_.65fr]"><div className="image-reveal min-h-[420px] lg:min-h-[680px]"><img key={active.image} src={active.image} alt={active.title} width={1920} height={1280} className="h-full w-full object-cover animate-fade-in" /></div><div className="flex flex-col justify-end border border-border p-7 sm:p-10 lg:p-12"><p className="text-xs uppercase text-primary">{active.type}</p><h2 className="mt-4 text-4xl font-medium sm:text-5xl">{active.title}</h2><p className="mt-6 leading-7 text-muted-foreground">{active.body}</p><Link to="/appointment" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase">{t.detail}<ArrowRight className="size-4" /></Link></div></article>
    </div></section>
  </>;
}