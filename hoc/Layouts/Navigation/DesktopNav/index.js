/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import Button from "../../../../components/UI/Button";

export default function DesktopNavBar() {
  return (
    <header>
      {/* <!-- logo -->	 */}
      <Link href="/">
        <a className="logo-wrapper">
          <span className="logo">
            <img src="/images/logo.svg" width="178" height="59" alt="KCB" />
          </span>
          <span className="logo-text">BUNI</span>
        </a>
      </Link>
      {/* <!-- logo end --> */}

      {/* <!-- main_nav --> */}
      <nav id="main_nav">
        <Button title="Start A New Project" classname="btn-nav" />
        <Link href="/discover">
          <a>Discover APIs</a>
        </Link>
        <a href="#/">Docs</a>
        <Link href="/support">
          <a>Support</a>
        </Link>
        <a href="#/">Buni Community</a>
      </nav>
      {/* <!-- main_nav end --> */}

      {/* <!-- secondary_nav --> */}
      <nav id="secondary_nav">
        <a href="#/">Login</a>
        <a href="#/">Sign Up</a>
      </nav>
      {/* <!-- secondary_nav end --> */}

      <div className="navigation-hamburger">
        <div className="bar-wrap">
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </div>
        <div className="cross-wrap">
          <div className="cross-line cross-line1" />
          <div className="cross-line cross-line2" />
        </div>
      </div>
    </header>
  );
}
