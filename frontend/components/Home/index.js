import Button from "../UI/Button";

export default function Home() {
  return (
    <>
      {/* <!-- welcome-section --> */}
      <section className="content-wrapper welcome-section">
        <div className="wrapper">
          <div className="col">
            <h1 className="section-title">
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
            <Button link="#" classname="primary-btn" title="Learn More" />
          </div>
        </div>
      </section>
      {/* <!-- welcome-section end --> */}

      {/* <!-- home-slider-section --> */}
      <section className="content-wrapper home-slider-section">
        <div className="wrapper">
          <h2 className="section-title secondary text-center">
            What Makes Buni Awesome
          </h2>

          {/* <!-- home-slider --> */}
          <div className="home-slider owl-carousel">
            <div className="item">
              <div className="col left">
                <h3 className="section-title small">
                  Buni Speaks your Language
                </h3>
                <p>
                  Buni speaks many languages. BuniAPIs are pre-integrated into
                  the financial, identity, credit and payment systems across
                  Africa. With a single point integration on Buni, you do
                  business in multiple countries as though you were actually
                  there.
                </p>
                <Button link="#" title="View Docs" />
              </div>
              <div
                className="col right"
                style={{ backgroundImage: "url('/images/slider-pic-1.png')" }}
              >
                {/* <!-- code-wrapper --> */}
                <div className="code-wrapper">
                  <div className="code-header">
                    <div className="tabs">
                      <a href="#curl" className="active">
                        Curl
                      </a>
                      <a href="#python">Python</a>
                      <a href="#js">JavaScript</a>
                      <a href="#ruby">Ruby</a>
                    </div>
                  </div>
                  <div className="content">
                    <div id="curl" className="tab-content active">
                      <h4 className="title">curl</h4>
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
                    <div id="python" className="tab-content">
                      <h4 className="title">python</h4>
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
                    <div id="js" className="tab-content">
                      <h4 className="title">javascript</h4>
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
                    <div id="ruby" className="tab-content">
                      <h4 className="title">ruby</h4>
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
                  <div className="code-footer" />
                </div>
                {/* <!-- code-wrapper end --> */}
              </div>
            </div>
            <div className="item">
              <div className="col left">
                <h3 className="section-title small">
                  Buni Speaks your Language
                </h3>
                <p>
                  Buni speaks many languages. BuniAPIs are pre-integrated into
                  the financial, identity, credit and payment systems across
                  Africa. With a single point integration on Buni, you do
                  business in multiple countries as though you were actually
                  there.
                </p>
                <Button link="#" />
              </div>
              <div
                className="col right"
                style={{ backgroundImage: "url('/images/slider-pic-1.png')" }}
              />
            </div>
            <div className="item">
              <div className="col left">
                <h3 className="section-title small">
                  Buni Speaks your Language
                </h3>
                <p>
                  Buni speaks many languages. BuniAPIs are pre-integrated into
                  the financial, identity, credit and payment systems across
                  Africa. With a single point integration on Buni, you do
                  business in multiple countries as though you were actually
                  there.
                </p>
                <Button link="#" />
              </div>
              <div
                className="col right"
                style={{ backgroundImage: "url('/images/slider-pic-1.png')" }}
              />
            </div>
          </div>
          {/* <!-- home-slider end --> */}

          <div className="slider-dotted-line">
            <img
              src="/images/slider-dotted-line.png"
              width="556"
              height="212"
              alt="Dotted Line"
            />
          </div>
        </div>
        <div className="leaf-1">
          <img src="/images/leaves-1.svg" width="245" height="316" alt="Leaf" />
        </div>
      </section>
      {/* <!-- home-slider-section end --> */}

      {/* <!-- start-project-section --> */}
      <section className="content-wrapper project-section">
        <div className="wrapper">
          <div className="col">
            <h2 className="section-title secondary">
              Ready to build something amazing?
            </h2>
            <Button link="#" title="Start A New Project" />

            <div className="project-dotted-line">
              <img
                src="/images/project-dotted-line.png"
                width="588"
                height="198"
                alt="Dotted Line"
              />
            </div>
          </div>
        </div>
        <div className="leaf-1">
          <img src="/images/leaves-1.svg" width="245" height="316" alt="Leaf" />
        </div>
        <div className="leaf-2">
          <img src="/images/leaves-2.svg" width="379" height="424" alt="Leaf" />
        </div>
      </section>
      {/* <!-- start-project-section end --> */}
    </>
  );
}
