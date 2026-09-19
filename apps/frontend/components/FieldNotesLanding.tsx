"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, GitBranch,
  Menu, MessageCircle, ShieldCheck, Sparkles, Users, X,
} from "lucide-react";

const chapters = [
  { number: "01", title: "Keep the queue moving", text: "OpenMaintainer finds the small things that quietly become big things: stale issues, duplicate reports, dependency drift, and unanswered questions.", icon: MessageCircle },
  { number: "02", title: "Make the context visible", text: "Every suggestion arrives with the reasoning behind it, so contributors understand what happened and maintainers stay in the loop.", icon: BookOpen },
  { number: "03", title: "Protect the way you work", text: "Your repository policy is not a footnote. It is the source of truth that shapes every comment, label, and handoff.", icon: ShieldCheck },
];

const questions = [
  ["Does it take over my repo?", "No. OpenMaintainer works inside the boundaries you define and keeps its reasoning visible."],
  ["Can my community see what it does?", "Yes. Actions stay native to GitHub, with clear context for contributors and maintainers."],
  ["What happens when it is unsure?", "It pauses, explains the uncertainty, and leaves the decision with a human."],
];

export default function FieldNotesLanding({ onBack }: { onBack: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), 80);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className={`field-notes-shell ${visible ? "field-notes-ready" : ""}`}>
      <header className="field-header"><button className="field-brand" onClick={onBack} aria-label="Back to landing page chooser"><span className="field-brand-mark"><span /><span /></span><span>openmaintainer<span className="field-brand-dot">.</span>notes</span></button><nav className={`field-nav ${menuOpen ? "field-nav-open" : ""}`}><a href="#story" onClick={() => setMenuOpen(false)}>The story</a><a href="#chapters" onClick={() => setMenuOpen(false)}>How it helps</a><a href="#questions" onClick={() => setMenuOpen(false)}>Questions</a></nav><div className="field-header-actions"><button className="field-back" onClick={onBack}>All editions</button><a className="field-install" href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">Install on GitHub <ArrowUpRight size={15} /></a></div><button className="field-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></header>

      <section className="field-hero" id="story"><div className="field-hero-copy"><span className="field-label">A FIELD GUIDE TO BETTER MAINTENANCE <i /></span><h1>There is more to<br /><em>keeping things healthy.</em></h1><p>OpenMaintainer gives open source teams a little more room to think. It takes care of the repeatable work, while the people who make a project special stay close to the important decisions.</p><a className="field-arrow-link" href="#chapters">Read the field notes <ArrowRight size={17} /></a></div><div className="field-hero-art"><div className="field-sun" /><div className="field-paper"><span className="paper-date">VOL. 01 / 2026</span><div className="paper-rule" /><div className="paper-scribble">care<br /><em>is a</em><br />system</div><div className="paper-bottom"><span>OPEN<br />MAINTAINER</span><span>✳</span></div></div><div className="field-stamp">MADE FOR<br />MAINTAINERS</div><div className="field-doodle field-doodle-a">✳</div><div className="field-doodle field-doodle-b">↗</div></div></section>

      <div className="field-marquee"><div>MAINTAIN THE WORK <span>✳</span> MAKE SPACE FOR PEOPLE <span>✳</span> MAINTAIN THE WORK <span>✳</span> MAKE SPACE FOR PEOPLE <span>✳</span></div></div>

      <section className="field-intro" id="chapters"><div className="field-intro-aside"><span className="field-label">THE SHORT VERSION <i /></span><span className="field-big-number">03</span><p>ways OpenMaintainer makes maintenance feel lighter.</p></div><div className="field-chapters">{chapters.map((chapter) => { const Icon = chapter.icon; return <article className="field-chapter" key={chapter.number}><span className="chapter-number">{chapter.number}</span><div className="chapter-icon"><Icon size={21} /></div><h2>{chapter.title}</h2><p>{chapter.text}</p><a href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">Explore this idea <ArrowUpRight size={14} /></a></article>; })}</div></section>

      <section className="field-quote"><div className="quote-mark">“</div><blockquote>Automation should not make a project feel less human. It should make more room for the humans who care.</blockquote><div className="quote-byline"><span className="quote-line" /> A PRINCIPLE OF OPENMAINTAINER</div></section>

      <section className="field-community"><div className="community-copy"><span className="field-label">BUILT AROUND PEOPLE <i /></span><h2>The best tools<br /><em>leave room.</em></h2><p>For the thoughtful response. The surprising contribution. The maintainer who has been carrying too much for too long.</p><div className="community-points"><span><Users size={17} /> Community-aware</span><span><Sparkles size={17} /> Clear by default</span><span><Check size={17} /> Human-approved</span></div></div><div className="community-card"><div className="community-card-top"><span>MAINTAINER / TODAY</span><span><i /> ONLINE</span></div><div className="community-card-message"><div className="message-avatar">OM</div><div><strong>A little breathing room</strong><p>3 routine tasks handled while you were away.</p></div></div><div className="community-card-items"><span><Check size={13} /> 2 issues triaged</span><span><Check size={13} /> 1 PR policy-checked</span><span><Check size={13} /> 0 surprises</span></div><div className="community-card-footer">YOUR RULES ARE ACTIVE <span>↗</span></div></div></section>

      <section className="field-questions" id="questions"><div><span className="field-label">A FEW GOOD QUESTIONS <i /></span><h2>Worth<br /><em>asking.</em></h2></div><div className="question-list">{questions.map(([question, answer], index) => <div className={`question ${activeQuestion === index ? "question-active" : ""}`} key={question}><button onClick={() => setActiveQuestion(activeQuestion === index ? -1 : index)}><span>0{index + 1}</span><strong>{question}</strong><ChevronDown size={17} /></button>{activeQuestion === index && <p>{answer}</p>}</div>)}</div></section>

      <section className="field-final"><div className="field-final-icon"><GitBranch size={25} /></div><span className="field-label">THE NEXT CHAPTER IS YOURS <i /></span><h2>Keep building.<br /><em>We will mind the edges.</em></h2><a className="field-install field-install-dark" href="https://github.com/apps/openmaintainerai" target="_blank" rel="noreferrer">Bring OpenMaintainer in <ArrowUpRight size={15} /></a></section>
      <footer className="field-footer"><button onClick={onBack}><span className="field-brand-mark"><span /><span /></span> Choose another edition</button><span>OpenMaintainer / Field notes for open source</span><a href="https://github.com/mustafa-sayyed/OpenMaintainer" target="_blank" rel="noreferrer">View source <ArrowUpRight size={13} /></a></footer>
    </main>
  );
}
