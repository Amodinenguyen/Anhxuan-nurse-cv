export default function About() {
  return (
    <main className="page about-page">
      <div className="eyebrow">OUR STORY</div>
      <h1>Small studio.<br /><em>Big imagination.</em></h1>
      <div className="about-grid">
        <div className="about-art" aria-hidden="true">✳</div>
        <div className="about-copy">
          <h2>Hello, we're Northstar.</h2>
          <p>Northstar Studio is a fictional creative company founded by Alex Morgan, a curious designer who loves turning simple ideas into useful websites.</p>
          <p>We believe good design should feel friendly, clear, and easy to use. Our favorite tools are creativity, collaboration, and a little bit of code.</p>
          <div className="pill-row"><span>Web design</span><span>Creative thinking</span><span>React</span></div>
        </div>
      </div>
    </main>
  );
}
