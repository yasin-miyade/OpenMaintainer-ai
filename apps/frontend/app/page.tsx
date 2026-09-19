"use client";

import { useEffect, useRef, useState } from "react";
import AlternateLanding from "@/components/AlternateLanding";
import FieldNotesLanding from "@/components/FieldNotesLanding";
import {
  ArrowDownRight, ArrowUpRight, Check, ChevronRight, CircleDot, GitBranch,
  GitPullRequest, Inbox, LockKeyhole, Menu, MessageSquare, ScanSearch,
  ShieldCheck, Sparkles, Tag, X, Zap,
} from "lucide-react";

const steps = [
  { number: "01", icon: Inbox, title: "Listen", text: "OpenMaintainer watches the activity you already have, turning noisy GitHub signals into a clear queue of what matters next.", accent: "peach" },
  { number: "02", icon: ScanSearch, title: "Understand", text: "It reads the issue, looks for context, and checks your repository conventions before it suggests a single action.", accent: "mint" },
  { number: "03", icon: ShieldCheck, title: "Act carefully", text: "Every comment, label, close, or merge follows the policy you set. Nothing happens in the dark.", accent: "lilac" },
];

const principles = [
  ["Useful by default", "Routine work gets done without adding another dashboard to your day."],
  ["Transparent by design", "Actions are grounded in visible policy and clear reasoning."],
  ["Yours to shape", "Start with sensible defaults. Tune the rules as your community grows."],
];

function LandingPicker({ onSelect }: { onSelect: (landing: "current" | "alternate" | "field-notes") => void }) {
  return (
    <main className="landing-picker">
      <div className="picker-grid" aria-hidden="true" />
      <div className="picker-content">
        <div className="picker-brand"><span className="brand-mark"><span /><span /><span /></span><span>OpenMaintainer</span></div>
        <span className="picker-kicker">Choose your experience</span>
        <h1>Two ways to give<br /><em>your repo room.</em></h1>
        <p>Explore the original OpenMaintainer story or step into a sharper, more editorial take on autonomous maintenance.</p>
        <div className="picker-actions">
          <button className="picker-button picker-button-primary" onClick={() => onSelect("current")}><span><b>01</b><strong>The Maintainer</strong><small>Warm, calm, policy-first</small></span><ArrowUpRight size={19} /></button>
          <button className="picker-button picker-button-secondary" onClick={() => onSelect("alternate")}><span><b>02</b><strong>Signal / Noise</strong><small>Bold, editorial, operations-led</small></span><ArrowUpRight size={19} /></button>
          <button className="picker-button picker-button-tertiary" onClick={() => onSelect("field-notes")}><span><b>03</b><strong>Field Notes</strong><small>Human, considered, community-led</small></span><ArrowUpRight size={19} /></button>
        </div>
        <div className="picker-note"><span className="picker-note-line" /> Both experiences are built for open source teams.</div>
      </div>
      <div className="picker-orbit picker-orbit-a" /><div className="picker-orbit picker-orbit-b" />
    </main>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={revealRef} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [landing, setLanding] = useState<"picker" | "current" | "alternate" | "field-notes">("picker");

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  if (landing === "picker") return <LandingPicker onSelect={setLanding} />;
  if (landing === "alternate") return <AlternateLanding onBack={() => setLanding("picker")} />;
  if (landing === "field-notes") return <FieldNotesLanding onBack={() => setLanding("picker")} />;

  return (
    <main className="site-shell" id="top">
      <div className="grain" aria-hidden="true" />
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="OpenMaintainer home"><span className="brand-mark"><span /><span /><span /></span><span>OpenMaintainer</span></a>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#principles" onClick={() => setMenuOpen(false)}>Principles</a>
          <a href="#use-cases" onClick={() => setMenuOpen(false)}>Use cases</a>
          <a className="nav-github" href="https://github.com/mustafa-sayyed/OpenMaintainer" target="_blank" rel="noreferrer"><GitBranch size={15} /> GitHub <ArrowUpRight size={13} /></a>
        </div>
        <a className="nav-cta" href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">Install app <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>

      <section className="hero section-pad">
        <div className="hero-copy">
          <Reveal><div className="eyebrow"><span className="eyebrow-dot" /> Autonomous maintenance for open source</div></Reveal>
          <Reveal delay={100}><h1>Your repo deserves <em>a co-maintainer.</em></h1></Reveal>
          <Reveal delay={180}><p className="hero-lede">OpenMaintainer handles the routine work on GitHub, guided by policies you define. Less tab-switching. More time for the work only you can do.</p></Reveal>
          <Reveal delay={250}><div className="hero-actions"><a className="button button-dark" href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">Add to GitHub <ArrowUpRight size={17} /></a><a className="text-link" href="#how-it-works">See how it works <ArrowDownRight size={16} /></a></div></Reveal>
          <Reveal delay={320}><div className="hero-proof"><div className="avatar-stack"><span className="avatar avatar-1">M</span><span className="avatar avatar-2">A</span><span className="avatar avatar-3">J</span><span className="avatar avatar-4">+</span></div><span>Built for maintainers who care about the details.</span></div></Reveal>
        </div>
        <Reveal className="hero-console-wrap" delay={160}>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="console-card">
            <div className="console-top"><div className="window-dots"><i /><i /><i /></div><span>openmaintainer / activity</span><span className="live-badge"><span /> live</span></div>
            <div className="console-body">
              <div className="console-heading"><div><span className="muted-label">MONDAY, OCT 14</span><h3>Good morning, maintainer.</h3></div><div className="spark-icon"><Sparkles size={17} /></div></div>
              <div className="status-banner"><span className="pulse-icon"><Zap size={14} /></span><div><strong>OpenMaintainer is thinking...</strong><span>Issue triage · just now</span></div><span className="thinking-dots"><i /><i /><i /></span></div>
              <div className="issue-card"><div className="issue-top"><span className="issue-label"><CircleDot size={14} /> ISSUE TRIAGE</span><span className="confidence">94% confidence</span></div><h4>I found a likely duplicate and checked the repository policy before taking action.</h4><div className="issue-user"><span className="mini-avatar">MS</span><span>mustafa-sayyed / OpenMaintainer</span><span className="issue-open">ACTIVE</span></div><div className="issue-action"><span className="action-check"><Check size={13} /></span><span>Action approved</span><strong>Comment with related issue</strong><ChevronRight size={15} /></div></div>
              <div className="console-footer"><span><LockKeyhole size={13} /> POLICY / MAINTAINER.YML</span><span>YOUR RULES, ALWAYS</span></div>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="ticker"><div className="ticker-track"><span>ONE AGENT. THE BORING BITS HANDLED.</span><b>✳</b><span>ISSUE TRIAGE</span><b>✳</b><span>DEPENDABOT PRS</span><b>✳</b><span>POLICY CHECKS</span><b>✳</b><span>GITHUB NATIVE</span><b>✳</b><span>ONE AGENT. THE BORING BITS HANDLED.</span></div></div>

      <section className="signal-section section-pad" id="how-it-works">
        <Reveal><div className="section-kicker">A calm layer between signal and action</div><h2>It acts like a maintainer.<br /><em>Because it follows one.</em></h2></Reveal>
        <div className="steps-grid">{steps.map((step, index) => { const Icon = step.icon; return <Reveal key={step.number} delay={index * 100}><article className={`step-card ${step.accent}`}><div className="step-top"><span className="step-number">{step.number}</span><div className="step-icon"><Icon size={22} strokeWidth={1.8} /></div></div><h3>{step.title}</h3><p>{step.text}</p><span className="step-line" /></article></Reveal>; })}</div>
      </section>

      <section className="principles-section" id="principles"><div className="principles-inner section-pad"><Reveal><div className="section-kicker">The OpenMaintainer way</div><h2>Autonomy <em>with guardrails.</em></h2><p className="section-intro">The best automation does not make you feel out of control. It gives you the right amount of help, at the right moment.</p></Reveal><div className="principles-list">{principles.map(([title, text], index) => <Reveal key={title} delay={index * 100}><div className="principle-row"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={20} /></div></Reveal>)}</div></div></section>

      <section className="use-section section-pad" id="use-cases"><Reveal><div className="section-kicker">Less maintenance, more momentum</div><h2>Keep your attention<br /><em>on the interesting parts.</em></h2></Reveal><div className="use-grid"><Reveal delay={80}><article className="use-card use-card-large"><div className="use-icon"><GitPullRequest size={21} /></div><span className="muted-label">FOR BUSY TEAMS</span><h3>Small tasks.<br />Handled beautifully.</h3><p>Automate the edges of your workflow without handing over the keys to your repository.</p><div className="use-visual"><div><Tag size={14} /><span>dependencies</span><b>updated</b></div><div><MessageSquare size={14} /><span>issue #284</span><b>triaged</b></div><div><Check size={14} /><span>policy check</span><b>passed</b></div></div></article></Reveal><Reveal delay={180}><article className="use-card use-card-dark"><div className="use-card-head"><span className="muted-label">YOUR REPOSITORY</span><span className="green-dot" /></div><div className="repo-mark"><GitBranch size={24} /></div><h3>Open source,<br /><em>with breathing room.</em></h3><p>Let your community move quickly while your rules stay close.</p><a href="https://github.com/mustafa-sayyed/OpenMaintainer" target="_blank" rel="noreferrer" className="card-link">Explore on GitHub <ArrowUpRight size={16} /></a></article></Reveal></div></section>

      <section className="cta-section section-pad"><Reveal><div className="cta-panel"><div className="cta-stars">✦ &nbsp; ✳ &nbsp; ✦</div><h2>Make room for<br /><em>the work that matters.</em></h2><p>Your repository already has a heartbeat. OpenMaintainer helps you keep it healthy.</p><a className="button button-light" href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">Bring in your co-maintainer <ArrowUpRight size={17} /></a></div></Reveal></section>

      <footer className="footer section-pad"><a className="brand" href="#top"><span className="brand-mark"><span /><span /><span /></span><span>OpenMaintainer</span></a><span className="footer-note">Open source maintenance, with a little more breathing room.</span><div className="footer-links"><a href="https://github.com/mustafa-sayyed/OpenMaintainer" target="_blank" rel="noreferrer">Source <ArrowUpRight size={13} /></a><a href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">GitHub App <ArrowUpRight size={13} /></a></div></footer>
      <div className="scroll-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
    </main>
  );
}
