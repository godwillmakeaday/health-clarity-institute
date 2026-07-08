import Link from "next/link";
import { primaryNav } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Health Clarity Institute home">
        <span className="brand-mark">HCI</span>
        <span>
          <strong>Health Clarity</strong>
          <small>Institute</small>
        </span>
      </Link>
      <nav className="nav" aria-label="Main navigation">
        {primaryNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
