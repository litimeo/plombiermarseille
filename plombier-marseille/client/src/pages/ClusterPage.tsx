import { useEffect } from "react";
import { Link, useLocation, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight, Check, Droplets, MapPin, ShieldCheck } from "lucide-react";
import { EmergencyBar, Footer, FaqItem, LeadForm, SectionEyebrow, SiteHeader } from "@/components/SiteChrome";
import { seoPages, SeoPage } from "@/lib/seoData";

function resolvePage(slug: string | undefined, location: string): SeoPage {
  const normalized = location.startsWith("/zones/") ? `plombier-${slug}` : slug;
  return seoPages[normalized || "plombier-marseille"] || seoPages["plombier-marseille"];
}

function relatedSlug(label: string) {
  const found = Object.values(seoPages).find((page) => page.keyword.toLowerCase() === label.toLowerCase() || page.slug === label);
  return found?.slug || label;
}

export default function ClusterPage() {
  const { slug } = useParams();
  const [location] = useLocation();
  const page = resolvePage(slug, location);
  const isLocal = page.slug.includes("130") || page.slug.startsWith("plombier-aubagne") || page.slug.startsWith("plombier-allauch") || page.slug.startsWith("plombier-cassis");

  useEffect(() => {
    document.title = `${page.keyword} — dépannage, devis et conseils`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", page.intro);
  }, [page]);

  return <div className="site-shell"><EmergencyBar /><SiteHeader /><main>
    <section className="cluster-hero"><div className="container cluster-hero-grid"><div><Link href="/" className="back-link"><ArrowLeft size={15} /> Retour à l'accueil</Link><SectionEyebrow>{isLocal ? `Plombier local · ${page.area}` : page.keyword}</SectionEyebrow><h1>{page.title.split(":")[0]}<br /><em>{page.title.split(":")[1] || "à Marseille"}.</em></h1><p>{page.intro}</p><div className="hero-actions"><a href="#contact" className="button button-orange">Décrire mon besoin <ArrowUpRight size={16} /></a><a href="#content" className="text-link light-link">Voir les informations <ArrowUpRight size={16} /></a></div></div><div className="cluster-hero-panel"><div className="panel-icon"><Droplets size={26} /></div><span className="card-label">Recherche ciblée</span><h2>{page.keyword}</h2><p>{page.area}</p><div className="panel-points"><span><Check size={15} /> Situation urgente ou projet planifié</span><span><Check size={15} /> Demande locale et contextualisée</span><span><Check size={15} /> Réponse sans engagement préalable</span></div></div></div></section>
    <section className="section cluster-content" id="content"><div className="container cluster-content-grid"><article><SectionEyebrow>Informations utiles</SectionEyebrow><h2>{page.keyword} :<br /><em>les bons repères.</em></h2>{page.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="cluster-checks"><div><Check size={17} /><span><strong>Décrivez le symptôme</strong><small>Ce qui se passe, depuis quand et dans quelle pièce.</small></span></div><div><Check size={17} /><span><strong>Indiquez la zone</strong><small>Arrondissement, commune, étage et accès si utile.</small></span></div><div><Check size={17} /><span><strong>Précisez l'urgence</strong><small>Fuite active, dégât des eaux ou demande de devis.</small></span></div></div><h3 className="related-title">Poursuivre votre recherche</h3><div className="related-links">{page.related.map((item) => { const target = relatedSlug(item); return <Link href={target.startsWith("plombier-") && target.includes("130") ? `/${target}` : target.startsWith("plombier-") && !target.includes("marseille") ? `/zones/${target.replace("plombier-", "")}` : `/${target}`} key={item}><MapPin size={14} /> {seoPages[target]?.keyword || item} <ArrowUpRight size={14} /></Link>; })}</div></article><aside id="contact"><LeadForm compact /></aside></div></section>
    <section className="section cluster-faq"><div className="container faq-grid"><div><SectionEyebrow>Questions fréquentes</SectionEyebrow><h2>Avant de choisir<br /><em>un plombier.</em></h2><p>Des réponses simples pour avancer avec les bonnes informations, que votre recherche concerne une urgence ou un devis.</p></div><div className="faq-list">{page.questions.map(([question, answer]) => <FaqItem question={question} answer={answer} key={question} />)}</div></div></section>
    <section className="section cluster-cta"><div className="container cluster-cta-inner"><div><SectionEyebrow>Une demande à formuler</SectionEyebrow><h2>Commencez par<br /><em>décrire.</em></h2></div><a href="#contact" className="button button-orange">Recevoir une orientation <ArrowUpRight size={16} /></a><div className="cta-note"><ShieldCheck size={18} /><span>Pas besoin de numéro de téléphone pour commencer.</span></div></div></section>
  </main><Footer /></div>;
}
