import SearchBox from "./SearchBox";

export default function FAQs() {
  return (
    <>
      <section className="content-wrapper faqs-section">
        <div className="wrapper">
          {/* <!-- breadcrumbs --> */}
          <ul id="breadcrumbs">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">FAQs</a>
            </li>
          </ul>
          {/* <!-- breadcrumbs end --> */}
          <h1 className="section-title secondary">
            Frequently Asked Questions
          </h1>

          {/* <!-- faqs-layout --> */}
          <div className="faqs-layout">
            <div className="col left">
              <SearchBox />

              <span className="faqs-articles-label">
                There are <strong>165 articles</strong> in our base.
              </span>

              {/* <!-- faqs-categories --> */}
              <ul className="faqs-categories">
                <li>
                  <a href="faqs-details.html" className="faq-btn">
                    <span className="icon">
                      <img
                        src="/images/faqs/faqs-general.png"
                        width="60"
                        height="60"
                        alt="Category Icon"
                      />
                    </span>
                    <span className="label">General</span>
                  </a>
                </li>
                <li>
                  <a href="faqs-details.html" className="faq-btn">
                    <span className="icon">
                      <img
                        src="/images/faqs/faqs-receive-payments.png"
                        width="60"
                        height="60"
                        alt="Category Icon"
                      />
                    </span>
                    <span className="label">Receive Payments</span>
                  </a>
                </li>
                <li>
                  <a href="faqs-details.html" className="faq-btn">
                    <span className="icon">
                      <img
                        src="/images/faqs/faqs-credit-loans.png"
                        width="60"
                        height="60"
                        alt="Category Icon"
                      />
                    </span>
                    <span className="label">Credit Loans</span>
                  </a>
                </li>
                <li>
                  <a href="faqs-details.html" className="faq-btn">
                    <span className="icon">
                      <img
                        src="/images/faqs/faqs-payments.png"
                        width="60"
                        height="60"
                        alt="Category Icon"
                      />
                    </span>
                    <span className="label">Payments</span>
                  </a>
                </li>
                <li>
                  <a href="faqs-details.html" className="faq-btn">
                    <span className="icon">
                      <img
                        src="/images/faqs/faqs-returns.png"
                        width="60"
                        height="60"
                        alt="Category Icon"
                      />
                    </span>
                    <span className="label">Returns &amp; Refunds</span>
                  </a>
                </li>
                <li>
                  <a href="faqs-details.html" className="faq-btn">
                    <span className="icon">
                      <img
                        src="/images/faqs/faqs-technical-issues.png"
                        width="60"
                        height="60"
                        alt="Category Icon"
                      />
                    </span>
                    <span className="label">Technical Issues</span>
                  </a>
                </li>
              </ul>
              {/* <!-- faqs-categories end --> */}
            </div>
            <div className="col right">
              <span className="icon-help" />
              <span className="help-label">Can&apos;t find an answer?</span>
              <a href="mailto:email@kcbgroup.com" className="btn-email faq-btn">
                <span className="icon-mail" />
                <span className="text">Email us</span>
              </a>
            </div>
          </div>
          {/* <!-- faqs-layout end --> */}
        </div>
        <div className="leaf-1">
          <img
            src="/images/leaves-1.svg"
            width="245"
            height="316"
            alt="Leaves"
          />
        </div>
      </section>

      <section className="content-wrapper questions-section">
        <div className="wrapper">
          <h2 className="section-title small questions-title">
            Popular questions
          </h2>

          {/* <!-- popular-questions --> */}
          <ul className="popular-questions">
            <li>
              <a href="#!">Do you ship your products to EU?</a>
            </li>
            <li>
              <a href="#!">How to return a product?</a>
            </li>
            <li>
              <a href="#!">What are the shipping options?</a>
            </li>
            <li>
              <a href="#!">
                What are the international taxes, duties, etc. that I have to
                pay?
              </a>
            </li>
            <li>
              <a href="#!">Do you ship your products to EU?</a>
            </li>
            <li>
              <a href="#!">How to return a product?</a>
            </li>
            <li>
              <a href="#!">What are the shipping options?</a>
            </li>
            <li>
              <a href="#!">When will I receive my order?</a>
            </li>
          </ul>
          {/* <!-- popular-questions end --> */}

          {/* <!-- helpful-action-wrapper --> */}
          <div className="helpful-action-wrapper">
            <span className="label">
              Did you find what you were looking for?
            </span>

            {/* <!-- actions --> */}
            <ul className="actions">
              <li>
                <span>15</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a href="#!" className="icon-thumbs-down" />
              </li>
              <li>
                <span>901</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a href="#!" className="icon-thumbs-up" />
              </li>
            </ul>
            {/* <!-- actions end --> */}
          </div>
          {/* <!-- helpful-action-wrapper end --> */}
        </div>
        <div className="leaf-2">
          <img
            src="images/leaves-1.svg"
            width="245"
            height="316"
            alt="Leaves"
          />
        </div>
        <div className="leaf-3">
          <img
            src="images/leaves-2.svg"
            width="379"
            height="424"
            alt="Leaves"
          />
        </div>
      </section>
    </>
  );
}
