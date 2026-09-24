import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/dhomes-logo.png.asset.json";
import { copy, languageNames, type Language } from "@/lib/site-copy";

type SiteContextValue = { language: Language; setLanguage: (language: Language) => void };
const SiteContext = createContext<SiteContextValue | undefined>(undefined);

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used within SiteShell");
  return { ...context, text: copy[context.language] };
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const text = copy[language];

  useEffect(() => setMenuOpen(false), [pathname]);

  const links = [
    ["/", text.nav.home],
    ["/products", text.nav.products],
    ["/projects", text.nav.projects],
  ] as const;

  return (
    <SiteContext.Provider value={{ language, setLanguage }}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:h-24 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-12">
          <Link to="/" aria-label="D'HOMES home" className="min-w-0">
            <img src={logoAsset.url} alt="D'HOMES Design, LLC" className="h-11 w-auto max-w-[210px] object-contain object-left sm:h-14" />
          </Link>
          <nav className="hidden justify-center gap-8 lg:flex" aria-label="Main navigation">
            {links.map(([to, label]) => (
              <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="nav-link text-xs font-semibold uppercase text-foreground/65 transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>{label}</Link>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <LanguagePicker language={language} setLanguage={setLanguage} />
            <Button asChild className="h-11 rounded-none px-5 text-xs uppercase shadow-none">
              <Link to="/appointment">{text.nav.appointment}<ArrowUpRight /></Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="justify-self-end lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background px-5 pb-7 pt-5 lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {links.map(([to, label]) => <Link key={to} to={to} className="border-b border-border py-4 text-2xl font-display">{label}</Link>)}
              <Link to="/appointment" className="border-b border-border py-4 text-2xl font-display text-primary">{text.nav.appointment}</Link>
            </nav>
            <div className="mt-6"><LanguagePicker language={language} setLanguage={setLanguage} /></div>
          </div>
        )}
      </header>
      <main id="main-content" className="pt-20 sm:pt-24">{children}</main>
      <footer className="bg-foreground px-5 py-14 text-background sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1344px]">
          <div className="grid gap-12 border-b border-background/20 pb-14 md:grid-cols-[1.3fr_.7fr]">
            <div><p className="text-xs uppercase text-background/55">D’HOMES × SCAVOLINI</p><p className="mt-5 max-w-xl font-display text-4xl leading-tight sm:text-5xl">{text.footer.line}</p></div>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div><p className="mb-4 text-xs uppercase text-background/45">{text.footer.explore}</p>{links.map(([to,label]) => <Link key={to} to={to} className="mb-2 block text-background/80 hover:text-background">{label}</Link>)}</div>
              <div><p className="mb-4 text-xs uppercase text-background/45">Showroom</p><p className="text-background/80">{text.footer.visit}</p></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-background/45 sm:flex-row sm:justify-between"><p>© 2026 {text.footer.rights}</p><span>{text.footer.privacy}</span></div>
        </div>
      </footer>
    </SiteContext.Provider>
  );
}

function LanguagePicker({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  return <div className="flex items-center gap-1" aria-label="Language selector">{(Object.keys(languageNames) as Language[]).map((item) => <Button key={item} variant="ghost" size="sm" aria-pressed={language === item} className={`h-8 min-w-9 rounded-none px-2 text-[11px] ${language === item ? "bg-foreground text-background hover:bg-foreground hover:text-background" : "text-muted-foreground"}`} onClick={() => setLanguage(item)}>{languageNames[item]}</Button>)}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase ${light ? "text-background/80" : "text-primary"}`}><span className="h-px w-8 bg-current" />{children}</p>;
}