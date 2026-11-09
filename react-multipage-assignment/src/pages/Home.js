import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page home-page">
      <div className="eyebrow">WELCOME TO NORTHSTAR STUDIO</div>
      <h1>Creative ideas.<br /><em>Beautiful results.</em></h1>
      <p>We are a small imaginary design studio creating thoughtful digital experiences for people and brands.</p>
      <Link className="primary-button" to="/about">Get to know us <span aria-hidden="true">↗</span></Link>
      <div className="hero-art" aria-hidden="true"><span>✦</span><span>✳</span><span>●</span></div>
    </main>
  );
}
