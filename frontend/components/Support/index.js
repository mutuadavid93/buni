import Button from "../UI/Button/index";

export default function Support() {
  return (
    <section className="content-wrapper support-section fill-space">
      <div className="wrapper">
        <div className="col">
          <h1 className="section-title">Support</h1>
          <p>
            Need our help?
            <br />
            <br />
            You can get in touch with our support team through email, check out
            the FAQs for quick answers or join the forum to interact with other
            innovators.
          </p>
          <div className="support-btns">
            <Button title="Email Us" />
            <Button title="FAQs" link="/faqs" />
            <Button title="Forum" />
          </div>
        </div>
      </div>
    </section>
  );
}
