import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, useSite } from "@/components/site-shell";
import heroImage from "@/assets/hero-kitchen.jpg";
import livingImage from "@/assets/living-room.jpg";
import bathroomImage from "@/assets/bathroom.jpg";
import outdoorImage from "@/assets/outdoor.jpg";
import projectImage from "@/assets/project-complete.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "D’HOMES × Scavolini — Italian Interiors in Palm Beach" },
    { name: "description", content: "Discover Scavolini kitchens, living spaces, bathrooms and outdoor collections through D’HOMES in Palm Beach." },
    { property: "og:title", content: "D’HOMES × Scavolini Palm Beach" },
    { property: "og:description", content: "Italian design, shaped for Palm Beach living." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: HomePage,
});

function HomePage() {
  const { text } = useSite();
  const t = text.home;
  const collections = [[t.living, livingImage], [t.kitchen, heroImage], [t.bathroom, bathroomImage], [t.outdoor, outdoorImage]] as const;
  return <>
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-foreground sm:min-h-[calc(100svh-6rem)]"><img src={heroImage} alt="Contemporary Italian kitchen overlooking Palm Beach waterways" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover animate-[heroZoom_16s_ease-out_both]" /><div className="absolute inset-0 bg-foreground/10" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-foreground/15" /><div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/10 to-transparent" /><div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1440px] flex-col justify-end px-5 pb-9 sm:min-h-[calc(100svh-6rem)] sm:px-8 sm:pb-14 lg:px-12"><Eyebrow light>{t.eyebrow}</Eyebrow><div className="mt-5 grid items-end gap-8 lg:grid-cols-[1fr_25rem]"><h1 className="max-w-5xl text-[clamp(3rem,7.5vw,7.5rem)] font-medium leading-[.95] text-background drop-shadow-[0_3px_12px_oklch(0.16_0_0/0.28)]">{t.title}</h1><div className="pb-2"><p className="max-w-sm text-base leading-7 text-background/90 drop-shadow-[0_2px_6px_oklch(0.16_0_0/0.35)]">{t.intro}</p><Button asChild variant="outline" className="mt-6 h-12 rounded-none border-background/60 bg-foreground/10 px-5 text-background shadow-md backdrop-blur-sm hover:bg-background hover:text-foreground"><Link to="/products">{t.cta}<ArrowRight /></Link></Button></div></div><ArrowDown className="mt-9 size-5 animate-bounce text-background/60" aria-hidden="true" /></div></section>

    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="mx-auto grid max-w-[1344px] gap-12 lg:grid-cols-[.75fr_1.25fr]"><Eyebrow>{t.storyLabel}</Eyebrow><div><h2 className="max-w-4xl text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">{t.storyTitle}</h2><div className="mt-10 grid gap-6 text-muted-foreground sm:grid-cols-2 sm:text-lg sm:leading-8"><p>{t.storyBody}</p><p>{t.storyBody2}</p></div><Link to="/about" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase text-primary">{text.nav.about}<ArrowRight className="size-4" /></Link></div></div></section>

    <section className="border-y border-border bg-card px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1344px]"><Eyebrow>{t.collectionLabel}</Eyebrow><h2 className="mb-12 mt-5 text-4xl font-medium sm:text-6xl">{t.collectionTitle}</h2><div className="grid gap-5 md:grid-cols-2">{collections.map(([name, image], index) => <Link to="/products" key={name} className={`group image-reveal relative min-h-[420px] ${index === 0 || index === 3 ? "md:col-span-2 md:min-h-[620px]" : ""}`}><img src={image} alt={`${name} collection`} loading="lazy" width={index === 0 || index === 3 ? 1920 : 1600} height={1200} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent"/><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-background sm:p-9"><h3 className="text-3xl font-medium sm:text-5xl">{name}</h3><span className="grid size-11 shrink-0 place-items-center border border-background/60"><ArrowRight /></span></div></Link>)}</div></div></section>

    <section className="grid bg-foreground text-background lg:grid-cols-2"><div className="image-reveal min-h-[480px]"><img src={projectImage} alt="Completed waterfront kitchen project" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover" /></div><div className="flex flex-col justify-center px-5 py-20 sm:px-12 lg:px-20"><Eyebrow light>{t.projectLabel}</Eyebrow><h2 className="mt-6 text-5xl font-medium sm:text-7xl">{t.projectTitle}</h2><p className="mt-7 max-w-lg text-lg leading-8 text-background/65">{t.projectBody}</p><Button asChild variant="outline" className="mt-10 h-12 w-fit rounded-none border-background/30 bg-transparent px-5 text-background hover:bg-background hover:text-foreground"><Link to="/projects">{t.projectCta}<ArrowRight /></Link></Button></div></section>

    <section className="px-5 py-24 text-center sm:px-8 lg:py-36"><p className="mx-auto max-w-4xl font-display text-5xl font-medium leading-tight sm:text-7xl">{t.closing}</p><p className="mx-auto mt-6 max-w-xl text-muted-foreground sm:text-lg">{t.closingBody}</p><Button asChild className="mt-9 h-13 rounded-none px-7"><Link to="/appointment">{text.nav.appointment}<ArrowRight /></Link></Button></section>
  </>;
}
