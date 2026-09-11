import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { EmergencyBar, Footer, SiteHeader } from "@/components/SiteChrome";

export default function NotFound() { return <div className="site-shell"><EmergencyBar /><SiteHeader /><main className="not-found"><div className="container"><span className="not-found-number">404</span><h1>Cette page a pris<br /><em>un mauvais tournant.</em></h1><p>Retournez à l'accueil ou décrivez directement votre besoin.</p><div className="hero-actions"><Link href="/" className="button button-orange"><ArrowLeft size={17} /> Retour à l'accueil</Link><a className="text-link" href="/#contact">Faire une demande <ArrowUpRight size={16} /></a></div></div></main><Footer /></div>; }
