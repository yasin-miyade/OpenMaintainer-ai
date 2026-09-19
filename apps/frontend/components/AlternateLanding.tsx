"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowLeft, ArrowUpRight, Check, ChevronRight, CircleDot,
  GitCommit, GitPullRequest, Menu, Shield, Sparkles, X,
} from "lucide-react";

const activity = [
  { icon: GitPullRequest, label: "PULL REQUEST", title: "Update dependency graph", status: "reviewing", tone: "coral" },
  { icon: CircleDot, label: "ISSUE", title: "Duplicate report detected", status: "ready", tone: "lime" },
  { icon: GitCommit, label: "COMMIT", title: "Policy check passed", status: "approved", tone: "blue" },
];

const rules = ["Read the full context", "Check maintainer.yml", "Explain every action"];

export default function AlternateLanding({ onBack }: { onBack: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), 80);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className={`alternate-shell ${visible ? "alternate-ready" : ""}`}>
      <nav className="alternate-nav">
        <button className="alternate-logo" onClick={onBack} aria-label="Back to landing page chooser"><span className="logo-signal"><i /><i /><i /><i /></span><span>OM<span className="logo-slash">/</span>01</span></button>
        <div className={`alternate-links ${menuOpen ? "alternate-links-open" : ""}`}><a href="#signal" onClick={() => setMenuOpen(false)}>Signal</a><a href="#protocol" onClick={() => setMenuOpen(false)}>Protocol</a><a href="#activity" onClick={() => setMenuOpen(false)}>Activity</a></div>
        <div className="alternate-nav-actions"><button className="back-button" onClick={onBack}><ArrowLeft size={15} /> Change landing</button><a className="alternate-install" href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">Install <ArrowUpRight size={15} /></a></div>
        <button className="alternate-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>

      <section className="alternate-hero" id="signal">
        <div className="alternate-hero-copy"><span className="alternate-eyebrow"><i /> MAINTENANCE, RECONSIDERED</span><h1>Less noise.<br /><em>More signal.</em></h1><p>OpenMaintainer is the quiet layer between your GitHub activity and your attention. It sees the routine work, understands the rules, and knows when to stay out of the way.</p><div className="alternate-hero-actions"><a className="alternate-primary" href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">Connect your repo <ArrowUpRight size={17} /></a><a className="alternate-scroll" href="#activity"><span>Scroll to explore</span><ArrowDown size={17} /></a></div></div>
        <div className="signal-visual"><div className="signal-grid" /><div className="signal-orbit signal-orbit-one" /><div className="signal-orbit signal-orbit-two" /><div className="signal-core"><div className="core-top"><span>OM / OPERATIONS</span><span className="core-live"><i /> LIVE</span></div><div className="core-wave"><span /><span /><span /><span /><span /><span /><span /></div><div className="core-bottom"><strong>07</strong><span>signals<br />sorted</span><b>↑ 18.4%</b></div></div><div className="signal-label signal-label-one"><span>01</span> RECEIVE</div><div className="signal-label signal-label-two"><span>02</span> REASON</div><div className="signal-label signal-label-three"><span>03</span> RESPOND</div></div>
      </section>

      <section className="activity-section" id="activity"><div className="section-frame"><div className="alternate-section-head"><span className="alternate-eyebrow"><i /> LIVE FROM YOUR REPOSITORY</span><h2>The queue is<br /><em>already moving.</em></h2><p>Every signal is filtered through your rules before it becomes an action. That means less inbox archaeology, more meaningful work.</p></div><div className="activity-board"><div className="board-top"><span>ACTIVITY / TODAY</span><span>3 EVENTS <CircleDot size={11} /></span></div>{activity.map((item, index) => { const Icon = item.icon; return <div className={`activity-row activity-${item.tone}`} key={item.title}><span className="activity-index">0{index + 1}</span><span className="activity-icon"><Icon size={18} /></span><div className="activity-copy"><span>{item.label}</span><strong>{item.title}</strong></div><span className="activity-status"><i /> {item.status}</span><ChevronRight size={16} /></div>; })}<div className="board-foot"><span><Sparkles size={14} /> OpenMaintainer is watching</span><span>Updated just now</span></div></div></div></section>

      <section className="protocol-section" id="protocol"><div className="protocol-visual"><div className="protocol-ring ring-a" /><div className="protocol-ring ring-b" /><div className="protocol-lock"><Shield size={32} /><span>POLICY<br />ACTIVE</span></div></div><div className="protocol-copy"><span className="alternate-eyebrow"><i /> YOUR RULES, AMPLIFIED</span><h2>Autonomy that<br /><em>knows its limits.</em></h2><p>Good automation is not about doing everything. It is about knowing what should happen next, and why.</p><div className="rule-list">{rules.map((rule, index) => <div className="rule-item" key={rule}><span>0{index + 1}</span><strong>{rule}</strong><Check size={15} /></div>)}</div></div></section>

      <section className="numbers-section"><div className="number-item"><strong>01</strong><span>clear policy<br />before action</span></div><div className="number-item"><strong>24/7</strong><span>quiet coverage<br />for your repo</span></div><div className="number-item"><strong>∞</strong><span>room for the<br />work that matters</span></div></section>

      <section className="alternate-cta"><span className="alternate-eyebrow"><i /> READY WHEN YOU ARE</span><h2>Give your repo<br /><em>a second pair of eyes.</em></h2><a className="alternate-primary" href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">Start with OpenMaintainer <ArrowUpRight size={17} /></a></section>
      <footer className="alternate-footer"><button onClick={onBack}><span className="logo-signal"><i /><i /><i /><i /></span> Explore another landing</button><span>OpenMaintainer / Open source maintenance</span><a href="https://github.com/mustafa-sayyed/OpenMaintainer" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a></footer>
    </main>
  );
}
