import Button from "../../../../components/UI/Button";

export default function DesktopNavBar() {
  return (
    <header>
      {/* <!-- logo -->	 */}
      <a href="index.html" className="logo-wrapper">
        <span className="logo">
          <img src="/images/logo.svg" width="178" height="59" alt="KCB" />
        </span>
        <span className="logo-text">BUNI</span>
      </a>
      {/* <!-- logo end --> */}

      {/* <!-- main_nav --> */}
      <nav id="main_nav">
        <Button title="Start A New Project" classname="btn-nav" />
        <a href="discover.html">Discover APIs</a>
        <a href="#/">Docs</a>
        <a href="support.html">Support</a>
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
