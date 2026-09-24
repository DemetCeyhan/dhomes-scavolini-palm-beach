import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eyebrow, useSite } from "@/components/site-shell";
import livingImage from "@/assets/living-room.jpg";

export const Route = createFileRoute("/appointment")({
  head: () => ({ meta: [
    { title: "Book a Consultation — D’HOMES Palm Beach" },
    { name: "description", content: "Request a private design consultation with the D’HOMES Palm Beach team." },
    { property: "og:title", content: "Book a D’HOMES Design Consultation" },
    { property: "og:description", content: "Begin your Scavolini project with a private conversation in Palm Beach." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AppointmentPage,
});

function AppointmentPage() {
  const { text } = useSite(); const t = text.appointment;
  const [space, setSpace] = useState(""); const [done, setDone] = useState(false);
  const isOther = space === t.spaces[t.spaces.length - 1];
  const field = "mt-2 h-12 rounded-none bg-card";
  const contact: [typeof MapPin, string, string][] = [[MapPin, t.addressLabel, t.addressValue], [Phone, t.phoneLabel, t.phoneValue], [Mail, t.emailLabel, t.emailValue], [Clock, t.hoursLabel, t.hoursValue]];
  return <>
    <section className="grid lg:grid-cols-[.72fr_1.28fr]">
      <div className="relative hidden overflow-hidden bg-foreground lg:block"><img src={livingImage} alt="D'HOMES consultation setting" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-foreground/30"/><p className="absolute bottom-10 left-10 right-10 font-display text-3xl text-background">D’HOMES<br/>Palm Beach</p></div>
      <div className="px-5 py-14 sm:px-10 lg:px-16 lg:py-20"><div className="mx-auto max-w-3xl"><Eyebrow>{t.eyebrow}</Eyebrow><h1 className="mt-6 text-5xl font-medium sm:text-7xl">{t.title}</h1><p className="mt-5 max-w-xl leading-7 text-muted-foreground">{t.intro}</p>
        {!done ? <form className="mt-12 grid gap-10 border-t border-border pt-10 animate-fade-in" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <div><h2 className="text-2xl font-medium">{t.spaceQuestion}</h2><div className="mt-5 grid gap-5 sm:grid-cols-2">
            <select required value={space} onChange={(e) => setSpace(e.target.value)} className="h-12 w-full rounded-none border border-input bg-card px-4 text-sm"><option value="" disabled>{t.selectPlaceholder}</option>{t.spaces.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            {isOther && <Input required placeholder={t.otherLabel} aria-label={t.otherLabel} className="h-12 rounded-none bg-card animate-fade-in" />}
          </div></div>
          <div><h2 className="text-2xl font-medium">{t.timingTitle}</h2><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="text-sm">{t.date}<Input type="date" className={field} /></label><label className="text-sm">{t.time}<select className="mt-2 h-12 w-full rounded-none border border-input bg-card px-4 text-sm"><option>10:00 AM</option><option>1:00 PM</option><option>3:30 PM</option></select></label></div></div>
          <div><h2 className="text-2xl font-medium">{t.detailsTitle}</h2><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="text-sm">{t.firstName}<Input required className={field} /></label><label className="text-sm">{t.lastName}<Input required className={field} /></label><label className="text-sm">{t.email}<Input required type="email" className={field} /></label><label className="text-sm">{t.phone}<Input type="tel" className={field} /></label><label className="text-sm sm:col-span-2">{t.notes}<Textarea className="mt-2 min-h-28 rounded-none bg-card" /></label></div></div>
          <div className="border-t border-border pt-6"><Button type="submit" className="h-12 rounded-none px-8">{t.submit}<ArrowRight /></Button></div>
        </form> : <div className="py-20 animate-fade-in"><span className="grid size-14 place-items-center bg-primary text-primary-foreground"><Check /></span><h2 className="mt-7 text-4xl font-medium">{t.success}</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">{t.successBody}</p><Button variant="outline" className="mt-8 h-12 rounded-none px-6" onClick={() => { setDone(false); setSpace(""); }}>{t.restart}</Button></div>}
      </div></div>
    </section>
    <section id="contact" className="bg-foreground px-5 py-20 text-background sm:px-10 lg:px-16"><div className="mx-auto max-w-6xl"><Eyebrow>{t.contactTitle}</Eyebrow><h2 className="mt-6 text-4xl font-medium sm:text-5xl">D’HOMES Palm Beach</h2>
      <div className="mt-12 grid gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-4">{contact.map(([Icon, label, value]) => <div key={label} className="bg-foreground p-6"><Icon className="size-5 text-primary" /><p className="mt-5 text-xs uppercase tracking-widest text-background/60">{label}</p><p className="mt-2 leading-7">{value}</p></div>)}</div>
    </div></section>
  </>;
}