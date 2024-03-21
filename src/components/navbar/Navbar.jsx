import Link from "next/link";
import styles from "./navbar.module.scss";
export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between">
        <Link href="/">
          <div>Logo Container</div>
        </Link>
        <ul>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="services">
            <li>Services</li>
          </Link>
          <Link href="contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
