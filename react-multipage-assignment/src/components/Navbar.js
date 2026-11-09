import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className="navbar">
      <Link to="/" className="brand"><span className="brand-icon">✦</span> Northstar<span>Studio</span></Link>
      <nav aria-label="Main navigation">
        <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={pathname === "/about" ? "active" : ""} to="/about">About</Link>
        <Link className={pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
