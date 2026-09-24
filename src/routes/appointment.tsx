import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
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
  const [step, setStep] = useState(0); const [space, setSpace] = useState(""); const [done, setDone] = useState(false);
  const canContinue = step !== 0 || Boolean(space);
  return <section className="grid min-h-[calc(100svh-5rem)] lg:grid-cols-[.72fr_1.28fr]">
    <div className="relative hidden overflow-hidden bg-foreground lg:block"><img src={livingImage} alt="D'HOMES consultation setting" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-foreground/30"/><p className="absolute bottom-10 left-10 right-10 font-display text-3xl text-background">D’HOMES<br/>Palm Beach</p></div>
    <div className="px-5 py-14 sm:px-10 lg:px-16 lg:py-20"><div className="mx-auto max-w-3xl"><Eyebrow>{t.eyebrow}</Eyebrow><h1 className="mt-6 text-5xl font-medium sm:text-7xl">{t.title}</h1><p className="mt-5 max-w-xl leading-7 text-muted-foreground">{t.intro}</p>
      {!done ? <><div className="mt-12 grid grid-cols-3 border-y border-border">{t.steps.map((label, index) => <div key={label} className={`py-4 text-xs uppercase ${index <= step ? "text-foreground" : "text-muted-foreground"}`}><span className={`mr-2 inline-grid size-6 place-items-center border ${index <= step ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>{index + 1}</span>{label}</div>)}</div>
      <div className="min-h-[400px] py-12 animate-fade-in" key={step}>{step === 0 && <div><h2 className="text-3xl font-medium">{t.spaceQuestion}</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{t.spaces.map((item) => <Button key={item} variant="outline" className={`h-16 justify-between rounded-none px-5 text-left ${space === item ? "border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`} onClick={() => setSpace(item)}>{item}{space === item && <Check />}</Button>)}</div></div>}
      {step === 1 && <div><h2 className="text-3xl font-medium">{t.timingTitle}</h2><div className="mt-8 grid gap-6 sm:grid-cols-2"><label className="text-sm">{t.date}<Input type="date" className="mt-3 h-13 rounded-none bg-card px-4" /></label><label className="text-sm">{t.time}<select className="mt-3 h-13 w-full rounded-none border border-input bg-card px-4 text-sm"><option>10:00 AM</option><option>1:00 PM</option><option>3:30 PM</option></select></label></div></div>}
      {step === 2 && <div><h2 className="text-3xl font-medium">{t.detailsTitle}</h2><div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="text-sm">{t.firstName}<Input required className="mt-2 h-12 rounded-none bg-card" /></label><label className="text-sm">{t.lastName}<Input required className="mt-2 h-12 rounded-none bg-card" /></label><label className="text-sm">{t.email}<Input required type="email" className="mt-2 h-12 rounded-none bg-card" /></label><label className="text-sm">{t.phone}<Input type="tel" className="mt-2 h-12 rounded-none bg-card" /></label><label className="text-sm sm:col-span-2">{t.notes}<Textarea className="mt-2 min-h-28 rounded-none bg-card" /></label></div></div>}</div>
      <div className="flex justify-between border-t border-border pt-6"><Button variant="ghost" className="rounded-none" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))}><ArrowLeft />{t.back}</Button>{step < 2 ? <Button className="h-11 rounded-none px-6" disabled={!canContinue} onClick={() => setStep((current) => Math.min(2, current + 1))}>{t.next}<ArrowRight /></Button> : <Button className="h-11 rounded-none px-6" onClick={() => setDone(true)}>{t.submit}<ArrowRight /></Button>}</div></> : <div className="py-20 animate-fade-in"><span className="grid size-14 place-items-center bg-primary text-primary-foreground"><Check /></span><h2 className="mt-7 text-4xl font-medium">{t.success}</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">{t.successBody}</p><Button variant="outline" className="mt-8 h-12 rounded-none px-6" onClick={() => { setDone(false); setStep(0); setSpace(""); }}>{t.restart}</Button></div>}
    </div></div>
  </section>;
}