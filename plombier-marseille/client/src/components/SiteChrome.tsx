import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Check, ChevronDown, Clock3, Droplets, Instagram, MapPin, Menu, ShieldCheck, X } from "lucide-react";

export const FORMSPARK_ENDPOINT = import.meta.env.VITE_FORMSPARK_ENDPOINT || "https://submit-form.com/DYAlSSiR6";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Notre méthode", href: "/#method" },
  { label: "Zones", href: "/#zones" },
  { label: "Conseils", href: "/#insights" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Plombier Marseille accueil"><span className="brand-mark"><Droplets size={20} strokeWidth={2.5} /></span><span><strong>plombier</strong><em>marseille</em></span></Link><nav className="desktop-nav" aria-label="Navigation principale">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="header-actions"><span className="header-status"><span className="status-dot" /> Demande en ligne</span><a href="#contact" className="button button-orange button-small">Demander un devis <ArrowUpRight size={15} /></a><button className="menu-button" aria-label="Ouvrir le menu" onClick={() => setOpen((value) => !value)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div></div>{open && <div className="mobile-nav">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a className="button button-orange" href="#contact">Décrire mon besoin <ArrowUpRight size={15} /></a></div>}</header>;
}

export function EmergencyBar() {
  return <div className="emergency-bar"><div className="container emergency-inner"><span className="status-dot" /><strong>Urgence plomberie à Marseille ?</strong><span className="emergency-copy">Commencez par décrire le problème, on vous oriente rapidement.</span><a href="#contact">Faire une demande <ArrowUpRight size={14} /></a></div></div>;
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><span />{children}</div>; }

export function PhoneCta({ label = "Décrire mon besoin" }: { label?: string }) { return <a href="#contact" className="button button-orange">{label} <ArrowUpRight size={16} /></a>; }

export function LeadForm({ compact = false }: { compact?: boolean }) {
  return <form className={`lead-form ${compact ? "lead-form-compact" : ""}`} action={FORMSPARK_ENDPOINT} method="POST"><input type="hidden" name="_subject" value="Nouveau lead — Plombier Marseille" /><div className="form-heading"><span className="form-kicker"><Clock3 size={14} /> Réponse claire</span><h3>Décrivez votre problème.</h3><p>Un formulaire court pour les urgences comme pour les projets planifiés.</p></div><div className="form-grid"><label htmlFor="name">Votre nom<input id="name" type="text" name="name" required placeholder="Marie Dupont" /></label><label htmlFor="email">Votre email<input id="email" type="email" name="email" required placeholder="marie@email.fr" /></label></div><label htmlFor="besoin">Votre besoin<select id="besoin" name="besoin" defaultValue=""><option value="" disabled>Choisir une situation</option><option>Urgence plomberie</option><option>Fuite d'eau</option><option>WC ou évier bouché</option><option>Chauffe-eau</option><option>Recherche de fuite</option><option>Rénovation ou installation</option></select></label><label htmlFor="zone">Votre arrondissement ou commune<input id="zone" name="zone" placeholder="Ex. Marseille 8e, Aubagne…" /></label><label htmlFor="message">Message<textarea id="message" name="message" rows={compact ? 3 : 4} required placeholder="Que se passe-t-il ? Depuis quand ?"></textarea></label><button className="button button-orange button-full" type="submit">Recevoir une orientation <ArrowUpRight size={17} /></button><p className="form-note"><ShieldCheck size={14} /> Vos coordonnées servent uniquement à traiter votre demande.</p></form>;
}

export function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Link href="/" className="brand"><span className="brand-mark"><Droplets size={20} /></span><span><strong>plombier</strong><em>marseille</em></span></Link><p>Une mise en relation simple avec un professionnel de la plomberie à Marseille et dans les Bouches-du-Rhône.</p><div className="footer-social"><a href="#contact" aria-label="Instagram"><Instagram size={17} /></a><a href="#zones" aria-label="Localisation"><MapPin size={17} /></a></div></div><div><h4>Services</h4><Link href="/urgence-plomberie-marseille">Urgence plomberie</Link><Link href="/fuite-eau-marseille">Fuite d'eau</Link><Link href="/debouchage-marseille">Débouchage</Link><Link href="/chauffe-eau-marseille">Chauffe-eau</Link><Link href="/installation-plomberie-marseille">Installation</Link></div><div><h4>Marseille</h4><Link href="/plombier-marseille">Plombier Marseille</Link><Link href="/plombier-marseille-13008">Plombier Marseille 13008</Link><Link href="/plombier-marseille-13005">Plombier Marseille 13005</Link><a href="/#zones">Tous les arrondissements</a></div><div><h4>Contact</h4><a className="footer-call" href="#contact">Faire une demande <ArrowUpRight size={15} /></a><p className="footer-small">Décrivez votre urgence ou votre projet. Aucun numéro n'est nécessaire pour commencer.</p><a href="#contact" className="footer-link">Formulaire de contact <ArrowUpRight size={14} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Plombier Marseille</span><span>Mentions légales · Politique de confidentialité</span></div></footer>;
}

export function FaqItem({ question, answer }: { question: string; answer: string }) { return <details className="faq-item"><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>; }
