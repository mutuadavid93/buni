export default function Home() {
  return (
    <>
      {/* <!-- mobile_nav --> */}
      <div id="mobile_nav">
        <div class="nav-scroller">
          <nav>
            <ul>
              <li>
                <a href="#" class="btn-nav">
                  Start A New Project
                </a>
              </li>
              <li>
                <a href="discover.html">Discover APIs</a>
              </li>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="support.html">Support</a>
              </li>
              <li>
                <a href="#">Buni Community</a>
              </li>
              <li class="login-links">
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!-- mobile_nav end --> */}

      {/* <!-- header --> */}
      <header>
        {/* <!-- logo -->	 */}
        <a href="index.html" class="logo-wrapper">
          <span class="logo">
            <img src="/images/logo.svg" width="178" height="59" alt="KCB" />
          </span>
          <span class="logo-text">BUNI</span>
        </a>
        {/* <!-- logo end --> */}

        {/* <!-- main_nav --> */}
        <nav id="main_nav">
          <a href="#" class="btn-nav">
            Start A New Project
          </a>
          <a href="discover.html">Discover APIs</a>
          <a href="#">Docs</a>
          <a href="support.html">Support</a>
          <a href="#">Buni Community</a>
        </nav>
        {/* <!-- main_nav end --> */}

        {/* <!-- secondary_nav --> */}
        <nav id="secondary_nav">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </nav>
        {/* <!-- secondary_nav end --> */}

        <div class="navigation-hamburger">
          <div class="bar-wrap">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
          </div>
          <div class="cross-wrap">
            <div class="cross-line cross-line1"></div>
            <div class="cross-line cross-line2"></div>
          </div>
        </div>
      </header>
      {/* <!-- header end --> */}

      {/* <!-- welcome-section --> */}
      <section class="content-wrapper welcome-section">
        <div class="wrapper">
          <div class="col">
            <h1 class="section-title">
              Welcome to <br />
              Buni API Portal
            </h1>
            <p>
              Buni is designed for the modern innovator. Developers can now
              leverage on the KCB API to offer their customers a seamless
              digital experience on their platforms. Buni helps you integrate a
              unified payment system onto your website or app, allowing
              customers to easily pay for your product or service.
            </p>
            <a href="#" class="primary-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
      {/* <!-- welcome-section end --> */}

      {/* <!-- home-slider-section --> */}
      <section class="content-wrapper home-slider-section">
        <div class="wrapper">
          <h2 class="section-title secondary text-center">
            What Makes Buni Awesome
          </h2>

          {/* <!-- home-slider --> */}
          <div class="home-slider owl-carousel">
            <div class="item">
              <div class="col left">
                <h3 class="section-title small">Buni Speaks your Language</h3>
                <p>
                  Buni speaks many languages. BuniAPIs are pre-integrated into
                  the financial, identity, credit and payment systems across
                  Africa. With a single point integration on Buni, you do
                  business in multiple countries as though you were actually
                  there.
                </p>
                <a href="#" class="primary-btn">
                  View Docs
                </a>
              </div>
              <div
                class="col right"
                style={{ backgroundImage: "url('/images/slider-pic-1.png');" }}
              >
                {/* <!-- code-wrapper --> */}
                <div class="code-wrapper">
                  <div class="code-header">
                    <div class="tabs">
                      <a href="#curl" class="active">
                        Curl
                      </a>
                      <a href="#python">Python</a>
                      <a href="#js">JavaScript</a>
                      <a href="#ruby">Ruby</a>
                    </div>
                  </div>
                  <div class="content">
                    <div id="curl" class="tab-content active">
                      <h4 class="title">curl</h4>
                      <p>
                        <span>—request</span> POST \<br />
                        <span>—url</span>{" "}
                        https://api-test.kcbgroup.com/identity-sandbox/v2/token
                        \<br />
                        <span>—header</span> ‘authorization: Authorization’ \
                        <br />
                        <span>—header</span> ‘content-type: Content-Type’
                      </p>
                    </div>
                    <div id="python" class="tab-content">
                      <h4 class="title">python</h4>
                      <p>
                        <span>—request</span> POST \<br />
                        <span>—url</span>{" "}
                        https://api-test.kcbgroup.com/identity-sandbox/v2/token
                        \<br />
                        <span>—header</span> ‘authorization: Authorization’ \
                        <br />
                        <span>—header</span> ‘content-type: Content-Type’
                      </p>
                    </div>
                    <div id="js" class="tab-content">
                      <h4 class="title">javascript</h4>
                      <p>
                        <span>—request</span> POST \<br />
                        <span>—url</span>{" "}
                        https://api-test.kcbgroup.com/identity-sandbox/v2/token
                        \<br />
                        <span>—header</span> ‘authorization: Authorization’ \
                        <br />
                        <span>—header</span> ‘content-type: Content-Type’
                      </p>
                    </div>
                    <div id="ruby" class="tab-content">
                      <h4 class="title">ruby</h4>
                      <p>
                        <span>—request</span> POST \<br />
                        <span>—url</span>{" "}
                        https://api-test.kcbgroup.com/identity-sandbox/v2/token
                        \<br />
                        <span>—header</span> ‘authorization: Authorization’ \
                        <br />
                        <span>—header</span> ‘content-type: Content-Type’
                      </p>
                    </div>
                  </div>
                  <div class="code-footer"></div>
                </div>
                {/* <!-- code-wrapper end --> */}
              </div>
            </div>
            <div class="item">
              <div class="col left">
                <h3 class="section-title small">Buni Speaks your Language</h3>
                <p>
                  Buni speaks many languages. BuniAPIs are pre-integrated into
                  the financial, identity, credit and payment systems across
                  Africa. With a single point integration on Buni, you do
                  business in multiple countries as though you were actually
                  there.
                </p>
                <a href="#" class="primary-btn">
                  View Docs
                </a>
              </div>
              <div
                class="col right"
                style={{ backgroundImage: "url('/images/slider-pic-1.png');" }}
              ></div>
            </div>
            <div class="item">
              <div class="col left">
                <h3 class="section-title small">Buni Speaks your Language</h3>
                <p>
                  Buni speaks many languages. BuniAPIs are pre-integrated into
                  the financial, identity, credit and payment systems across
                  Africa. With a single point integration on Buni, you do
                  business in multiple countries as though you were actually
                  there.
                </p>
                <a href="#" class="primary-btn">
                  View Docs
                </a>
              </div>
              <div
                class="col right"
                style={{ backgroundImage: "url('/images/slider-pic-1.png');" }}
              ></div>
            </div>
          </div>
          {/* <!-- home-slider end --> */}

          <div class="slider-dotted-line">
            <img
              src="/images/slider-dotted-line.png"
              width="556"
              height="212"
              alt="Dotted Line"
            />
          </div>
        </div>
        <div class="leaf-1">
          <img src="/images/leaves-1.svg" width="245" height="316" alt="Leaf" />
        </div>
      </section>
      {/* <!-- home-slider-section end --> */}

      {/* <!-- start-project-section --> */}
      <section class="content-wrapper project-section">
        <div class="wrapper">
          <div class="col">
            <h2 class="section-title secondary">
              Ready to build something amazing?
            </h2>
            <a href="#" class="primary-btn">
              Start A New Project
            </a>
            <div class="project-dotted-line">
              <img
                src="/images/project-dotted-line.png"
                width="588"
                height="198"
                alt="Dotted Line"
              />
            </div>
          </div>
        </div>
        <div class="leaf-1">
          <img src="/images/leaves-1.svg" width="245" height="316" alt="Leaf" />
        </div>
        <div class="leaf-2">
          <img src="/images/leaves-2.svg" width="379" height="424" alt="Leaf" />
        </div>
      </section>
      {/* <!-- start-project-section end --> */}

      {/* <!-- footer --> */}
      <footer>
        {/* <!-- links-section --> */}
        <div class="links-section">
          <div class="wrapper">
            <div class="footer-links">
              <div class="links-block">
                <h3>Discover APIs</h3>
                <ul>
                  <li>
                    <a href="#">Send Money</a>
                  </li>
                  <li>
                    <a href="#">Receive Payments</a>
                  </li>
                  <li>
                    <a href="#">Credit (Loans)</a>
                  </li>
                  <li>
                    <a href="#">Account Services</a>
                  </li>
                </ul>
              </div>
              <div class="links-block">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy &amp; Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- links-section end --> */}

        {/* <!-- copyright-section --> */}
        <div class="copyright-section">
          <div class="wrapper">
            <span>
              Regulated by the Central Bank of Kenya
              <span class="copyright">&copy; KCB BUNI 2021</span>
            </span>
          </div>
        </div>
        {/* <!-- copyright-section end --> */}
      </footer>
      {/* <!-- footer end --> */}
    </>
  );
}
