import Button from "../UI/Button";

export default function DiscoverAPI() {
  return (
    <>
      <section className="content-wrapper discover-section">
        <div className="wrapper">
          <div className="col">
            <h1 className="section-title">Discover APIs</h1>
            <p>
              Make your platform adaptable. Our APIs allow you to integrate
              different functionalities onto your platform, making it versatile
              with different payment capabilities and service offerings centered
              around transacting money.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="content-wrapper apis-section">
        <div className="wrapper">
          <h2 className="section-title secondary text-center">APIs</h2>

          <div className="apis-list">
            <div className="api">
              <div className="col left">
                <img
                  src="/images/apis/send-money.png"
                  width="532"
                  height="295"
                  alt="Send Money"
                />
              </div>
              <div className="col right">
                <h3 className="section-title small">Send Money</h3>
                <p>
                  Mobile Payments, Bank Transfers, Card P2P, Cross Border &amp;
                  International Remittance
                </p>
                <Button />
              </div>
            </div>
            <div className="api">
              <div className="col left">
                <img
                  src="/images/apis/receive-payments.png"
                  width="532"
                  height="364"
                  alt="Receive Payments"
                />
              </div>
              <div className="col right">
                <h3 className="section-title small">Receive Payments</h3>
                <p>
                  Accept Cards, Mobile Money, Bank Account Payments in a simple
                  and convenient way from your customers
                </p>
                <Button />
              </div>
            </div>
            <div className="api">
              <div className="col left">
                <img
                  src="/images/apis/credit.png"
                  width="532"
                  height="306"
                  alt="Credit (Loans)"
                />
              </div>
              <div className="col right">
                <h3 className="section-title small">Credit (Loans)</h3>
                <p>
                  Extend loans and credit to the right customer for the right
                  amount and build loyalty and value add services to keep your
                  customer satisfied.
                  <br />
                  Make sound decisions when advancing credit to your customers.
                </p>
                <Button />
              </div>
            </div>
            <div className="api">
              <div className="col left">
                <img
                  src="/images/apis/account-services.png"
                  width="532"
                  height="412"
                  alt="Account Services"
                />
              </div>
              <div className="col right">
                <h3 className="section-title small">Account Services</h3>
                <p>
                  Provides you with insights and notifications to the services
                  we power as well as those of our partner banks.
                </p>
                <Button />
              </div>
            </div>
          </div>
        </div>
        <div className="leaf-1">
          <img
            src="/images/leaves-1.svg"
            width="245"
            height="316"
            alt="Leaves"
          />
        </div>
        <div className="leaf-2">
          <img
            src="/images/leaves-2.svg"
            width="379"
            height="424"
            alt="Leaves"
          />
        </div>
        <div className="leaf-3">
          <img
            src="/images/leaves-2.svg"
            width="379"
            height="424"
            alt="Leaves"
          />
        </div>
      </section>
    </>
  );
}
