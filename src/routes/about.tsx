import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Leaf, RefreshCw, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, useSite } from "@/components/site-shell";
import heroImage from "@/assets/living-room.jpg";
import heritageImage from "@/assets/project-complete.jpg";
import palmImage from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About D’HOMES × Scavolini — Italian Heritage in Palm Beach" },
    { name: "description", content: "Discover D’HOMES, Scavolini’s design heritage since 1961, and our complete-home approach for Palm Beach." },
    { property: "og:title", content: "About D’HOMES × Scavolini Palm Beach" },
    { property: "og:description", content: "Italian design heritage, a personal process and a complete-home vision for Palm Beach." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  const { text } = useSite();
  const t = text.about;
  const icons = [ShieldCheck, Leaf, HeartHandshake, RefreshCw];

  return <>
    <section className="relative min-h-[76svh] overflow-hidden bg-foreground">
      <img src={heroImage} alt="Refined Italian living interior" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover animate-[heroZoom_16s_ease-out_both]" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-foreground/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/45 via-transparent to-transparent" />
      <div className="relative mx-auto flex min-h-[76svh] max-w-[1440px] flex-col justify-end px-5 pb-12 text-background sm:px-8 sm:pb-16 lg:px-12">
        <Eyebrow light>{t.eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-5xl text-5xl font-medium leading-[.98] drop-shadow-[0_3px_12px_oklch(0.16_0_0/0.32)] sm:text-7xl lg:text-8xl">{t.title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-background/85">{t.intro}</p>
      </div>
    </section>

    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1344px] gap-12 lg:grid-cols-[.75fr_1.25fr]"><Eyebrow>{t.storyLabel}</Eyebrow><div><h2 className="max-w-4xl text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">{t.storyTitle}</h2><p className="mt-9 max-w-3xl text-lg leading-8 text-muted-foreground">{t.storyBody}</p></div></div>
    </section>

    <section className="grid border-y border-border bg-card lg:grid-cols-[1.05fr_.95fr]">
      <div className="image-reveal min-h-[460px] lg:min-h-[720px]"><img src={heritageImage} alt="Scavolini Italian design craftsmanship" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover" /></div>
      <div className="flex flex-col justify-between px-5 py-16 sm:px-10 lg:px-16 lg:py-20"><Eyebrow>{t.heritageLabel}</Eyebrow><div className="mt-20"><p className="text-xs uppercase text-primary">{t.heritageNote}</p><h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight sm:text-6xl">{t.heritageTitle}</h2><p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">{t.heritageBody}</p></div></div>
    </section>

    <TimelineSection t={t} />

    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1344px]"><Eyebrow>{t.processLabel}</Eyebrow><h2 className="mt-6 max-w-4xl text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">{t.processTitle}</h2><div className="mt-14 grid border-t border-border md:grid-cols-2 lg:grid-cols-4">{t.process.map(([title, body], index) => <article key={title} className="border-b border-border py-8 md:px-7 md:odd:border-r lg:border-r lg:last:border-r-0"><span className="text-xs text-primary">0{index + 1}</span><h3 className="mt-16 text-3xl font-medium">{title}</h3><p className="mt-5 leading-7 text-muted-foreground">{body}</p></article>)}</div></div></section>

    <section className="bg-card px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1344px]"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><Eyebrow>{t.valuesLabel}</Eyebrow><div><h2 className="max-w-4xl text-4xl font-medium leading-tight sm:text-6xl">{t.valuesTitle}</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{t.valuesIntro}</p></div></div><div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">{t.values.map(([title, body], index) => { const Icon = icons[index] ?? ShieldCheck; return <article key={title} className="border-b border-border py-8 sm:px-7 sm:odd:border-r lg:border-r lg:last:border-r-0"><Icon className="size-6 text-primary" aria-hidden="true" /><h3 className="mt-14 text-2xl font-medium">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{body}</p></article>; })}</div></div></section>

    <section className="grid border-b border-border lg:grid-cols-[.9fr_1.1fr]"><div className="flex flex-col justify-center px-5 py-20 sm:px-10 lg:px-16 lg:py-28"><Eyebrow>{t.palmLabel}</Eyebrow><h2 className="mt-6 max-w-2xl text-5xl font-medium leading-tight sm:text-7xl">{t.palmTitle}</h2><p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">{t.palmBody}</p><Button asChild className="mt-9 h-12 w-fit rounded-none px-6"><Link to="/products">{t.cta}<ArrowRight /></Link></Button></div><div className="image-reveal min-h-[480px] lg:min-h-[700px]"><img src={palmImage} alt="Palm Beach indoor and outdoor living by D'HOMES" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover" /></div></section>

    <section className="px-5 py-24 text-center sm:px-8 lg:py-36"><p className="mx-auto max-w-4xl font-display text-5xl font-medium leading-tight sm:text-7xl">{t.closing}</p><p className="mx-auto mt-6 max-w-xl text-muted-foreground sm:text-lg">{t.closingBody}</p><Button asChild className="mt-9 h-13 rounded-none px-7"><Link to="/appointment">{text.nav.appointment}<ArrowRight /></Link></Button></section>
  </>;
}

type TimelineProps = {
  t: {
    timeline: string[][];
    timelineTags: string[];
    timelineLabel: string;
    timelineTitle: string;
    heritageNote: string;
  };
};

function TimelineSection({ t }: TimelineProps) {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-background px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1344px]">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <Eyebrow>{t.timelineLabel}</Eyebrow>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">{t.timelineTitle}</h2>
          </div>
          <p className="hidden pb-2 text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">{t.heritageNote}</p>
        </div>
        <div className="mt-10 flex flex-col gap-2 lg:h-[560px] lg:flex-row">
          {t.timeline.map(([year, body], index) => {
            const isActive = index === active;
            return (
              <article
                key={year}
                onMouseEnter={() => setActive(index)}
                style={{ flex: `${isActive ? 4.5 : 1} 1 0%` }}
                className={`relative overflow-hidden border bg-card transition-all duration-500 ease-out lg:min-w-[88px] ${isActive ? "border-primary/30" : "border-border"}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  aria-expanded={isActive}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring lg:h-full lg:w-auto lg:flex-none lg:flex-col lg:items-center lg:justify-start lg:gap-0 lg:p-6"
                >
                  <span className="font-display text-2xl font-semibold text-primary lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-3xl">{year}</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground lg:mt-auto lg:[writing-mode:vertical-rl] lg:rotate-180">{t.timelineTags[index]}</span>
                </button>
                {isActive && (
                  <div className="min-w-0 flex-1 animate-in fade-in px-5 pb-6 duration-500 sm:text-lg lg:px-10 lg:py-12 lg:pr-16">
                    <div className="flex flex-col justify-center lg:h-full lg:max-w-md">
                      <p className="leading-8 text-muted-foreground">{body}</p>
                      <span aria-hidden="true" className="mt-8 hidden h-px w-12 bg-primary lg:block" />
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
