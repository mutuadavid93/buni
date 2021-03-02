/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";

export default function MobileNavBar() {
  return (
    <div id="mobile_nav">
      <div className="nav-scroller">
        <nav>
          <ul>
            <li>
              <a href="#/" className="btn-nav">
                Start A New Project
              </a>
            </li>
            <li>
              <Link href="/discover">
                <a>Discover APIs</a>
              </Link>
            </li>
            <li>
              <a href="#/">Docs</a>
            </li>
            <li>
              <Link href="/support">
                <a>Support</a>
              </Link>
            </li>
            <li>
              <a href="#/">Buni Community</a>
            </li>
            <li className="login-links">
              <a href="#/">Login</a>
              <a href="#/">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
