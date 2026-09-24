import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, useSite } from "@/components/site-shell";
import heroImage from "@/assets/hero-kitchen.jpg";
import livingImage from "@/assets/living-room.jpg";
import bathroomImage from "@/assets/bathroom.jpg";
import outdoorImage from "@/assets/outdoor.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Collections — D’HOMES × Scavolini Palm Beach" },
    { name: "description", content: "Explore Scavolini kitchens, bathrooms, living rooms, living spaces, tables and chairs, and outdoor collections in Palm Beach." },
    { property: "og:title", content: "D’HOMES Collections" },
    { property: "og:description", content: "A complete vocabulary of Italian design for every space in the home." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProductsPage,
});

function ProductsPage() {
  const { text } = useSite(); const t = text.products;
  const images = [livingImage, heroImage, bathroomImage, livingImage, heroImage, outdoorImage];
  return <>
    <section className="px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28"><div className="mx-auto max-w-[1344px]"><Eyebrow>{t.eyebrow}</Eyebrow><div className="mt-7 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end"><h1 className="max-w-4xl text-5xl font-medium leading-[1.03] sm:text-7xl lg:text-8xl">{t.title}</h1><p className="max-w-lg text-lg leading-8 text-muted-foreground">{t.intro}</p></div><p className="mt-14 border-t border-border pt-5 text-xs uppercase text-muted-foreground">{t.note}</p></div></section>
    <div className="border-t border-border">{t.items.map(([name, description], index) => <article key={name} className="group grid border-b border-border lg:grid-cols-[.8fr_1.2fr]">
      <div className={`flex min-h-[360px] flex-col justify-between px-5 py-10 sm:px-8 lg:min-h-[600px] lg:px-12 lg:py-14 ${index % 2 ? "lg:order-2" : ""}`}><span className="text-xs text-primary">0{index + 1}</span><div><h2 className="text-4xl font-medium sm:text-6xl">{name}</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">{description}</p><Link to="/appointment" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase text-primary">{t.action}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></div></div>
      <div className={`image-reveal min-h-[420px] lg:min-h-[600px] ${index % 2 ? "lg:order-1" : ""}`}><img src={images[index]} alt={`${name} by D'HOMES and Scavolini`} loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" /></div>
    </article>)}</div>
  </>;
}