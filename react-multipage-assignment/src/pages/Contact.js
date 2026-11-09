export default function Contact() {
  return (
    <main className="page contact-page">
      <div className="eyebrow">LET'S CONNECT</div>
      <h1>Have an idea?<br /><em>Say hello.</em></h1>
      <p className="contact-intro">We would love to hear about your next project. These are fictional contact details for this school assignment.</p>
      <div className="contact-grid">
        <div className="contact-card"><span className="contact-icon">✉</span><h2>Email</h2><p>hello@northstar.example</p></div>
        <div className="contact-card"><span className="contact-icon">☎</span><h2>Phone</h2><p>+358 00 000 0000</p></div>
        <div className="contact-card"><span className="contact-icon">⌖</span><h2>Location</h2><p>Helsinki, Finland</p></div>
      </div>
    </main>
  );
}
