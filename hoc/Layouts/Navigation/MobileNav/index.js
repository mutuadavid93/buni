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
              <a href="discover.html">Discover APIs</a>
            </li>
            <li>
              <a href="#/">Docs</a>
            </li>
            <li>
              <a href="support.html">Support</a>
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
