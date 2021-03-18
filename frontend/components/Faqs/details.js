/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import $ from "jquery";
import SearchBox from "./SearchBox";

const handleQuestionClick = (e) => {
  if (!$(e.target).parent("li").hasClass("content-visible")) {
    if (!$(e.target).closest(".accordion").hasClass("all-open")) {
      $(".accordion li").removeClass("content-visible");
      $(".accordion .desc").slideUp(200);
    }
  }
  $(e.target)
    .next(".desc")
    .slideToggle(200)
    .end()
    .parent("li")
    .toggleClass("content-visible");
  e.preventDefault();
};

export default function FAQsDetails() {
  return (
    <>
      {/* <!-- faqs-section --> */}
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
            <li>
              <a href="#!">Receive Payments</a>
            </li>
          </ul>
          {/* <!-- breadcrumbs end --> */}
          <h1 className="section-title secondary">Receive Payments</h1>

          <SearchBox />

          {/* <!-- accordion -->	 */}
          <ul className="accordion">
            <li className="content-visible active">
              <h2
                className="title"
                onClick={(event) => handleQuestionClick(event)}
              >
                <a href="#!">bCommerce: Accept bank transfers</a>
              </h2>
              <div className="desc">
                <p>
                  Quisque a mauris nulla. Ut at risus in lacus fermentum
                  molestie vitae at velit. Donec ornare nunc ac risus sagittis,
                  eu mollis ipsum interdum. Phasellus vitae odio tempus, dictum
                  risus vitae, finibus mi. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Nulla
                  accumsan tempus consequat.
                </p>
                <br />
                <ul>
                  <li>
                    Nunc eget felis nulla. Fusce consequat sit amet dolor nec
                    viverra. Aliquam erat volutpat.
                  </li>
                  <li>
                    Phasellus eu eros commodo dolor lobortis pharetra. Ut
                    porttitor, ipsum ac tempus vulputate.
                  </li>
                  <li>
                    Nibh quam convallis purus, ac ultricies nisl magna eget
                    justo. Ut pharetra nisi justo.
                  </li>
                  <li>
                    Sed suscipit enim malesuada sit amet. Nullam auctor nibh a
                    neque cursus, in efficitur urna venenatis.
                  </li>
                  <li>
                    Pellentesque cursus vitae urna ut placerat. Etiam sed felis
                    elementum quam feugiat posuere at sed justo.
                  </li>
                  <li>
                    Suspendisse non metus a metus pellentesque maximus. Maecenas
                    dapibus vulputate tellus sed porttitor.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h2
                className="title"
                onClick={(event) => handleQuestionClick(event)}
              >
                <a href="#!">mCommerce: Accept mobile money</a>
              </h2>
              <div className="desc">
                <p>
                  Mobile money is now mainstream. However, every provider and
                  telco requires single point integrations to each of them; a
                  complex and daunting task to get your business up and running.
                  Buni does all the heavy lifting and integrations for you.
                  Multiple mobile wallets, multiple providers, multiple
                  countries, one Buni. Explore our mobile wallet APIs today!
                </p>
              </div>
            </li>
            <li>
              <h2
                className="title"
                onClick={(event) => handleQuestionClick(event)}
              >
                <a href="#!">
                  eCommerce: Accept card payments from 180 countries
                </a>
              </h2>
              <div className="desc">
                <p>
                  Mobile money is now mainstream. However, every provider and
                  telco requires single point integrations to each of them; a
                  complex and daunting task to get your business up and running.
                  Buni does all the heavy lifting and integrations for you.
                  Multiple mobile wallets, multiple providers, multiple
                  countries, one Buni. Explore our mobile wallet APIs today!
                </p>
                <br />
                <ol>
                  <li>
                    Nunc eget felis nulla. Fusce consequat sit amet dolor nec
                    viverra. Aliquam erat volutpat.
                  </li>
                  <li>
                    Phasellus eu eros commodo dolor lobortis pharetra. Ut
                    porttitor, ipsum ac tempus vulputate.
                  </li>
                  <li>
                    Nibh quam convallis purus, ac ultricies nisl magna eget
                    justo. Ut pharetra nisi justo.
                  </li>
                  <li>
                    Sed suscipit enim malesuada sit amet. Nullam auctor nibh a
                    neque cursus, in efficitur urna venenatis.
                  </li>
                  <li>
                    Pellentesque cursus vitae urna ut placerat. Etiam sed felis
                    elementum quam feugiat posuere at sed justo.
                  </li>
                  <li>
                    Suspendisse non metus a metus pellentesque maximus. Maecenas
                    dapibus vulputate tellus sed porttitor.
                  </li>
                </ol>
              </div>
            </li>
            <li>
              <h2
                className="title"
                onClick={(event) => handleQuestionClick(event)}
              >
                <a href="#!">Fraud and chargebacks</a>
              </h2>
              <div className="desc">
                <p>
                  Mobile money is now mainstream. However, every provider and
                  telco requires single point integrations to each of them; a
                  complex and daunting task to get your business up and running.
                  Buni does all the heavy lifting and integrations for you.
                  Multiple mobile wallets, multiple providers, multiple
                  countries, one Buni. Explore our mobile wallet APIs today!
                </p>
                <br />
                <ol>
                  <li>
                    Nunc eget felis nulla. Fusce consequat sit amet dolor nec
                    viverra. Aliquam erat volutpat.
                  </li>
                  <li>
                    Phasellus eu eros commodo dolor lobortis pharetra. Ut
                    porttitor, ipsum ac tempus vulputate.
                  </li>
                  <li>
                    Nibh quam convallis purus, ac ultricies nisl magna eget
                    justo. Ut pharetra nisi justo.
                  </li>
                  <li>
                    Sed suscipit enim malesuada sit amet. Nullam auctor nibh a
                    neque cursus, in efficitur urna venenatis.
                  </li>
                  <li>
                    Pellentesque cursus vitae urna ut placerat. Etiam sed felis
                    elementum quam feugiat posuere at sed justo.
                  </li>
                  <li>
                    Suspendisse non metus a metus pellentesque maximus. Maecenas
                    dapibus vulputate tellus sed porttitor.
                  </li>
                </ol>
              </div>
            </li>
          </ul>
          {/* <!-- accordion end -->		 */}
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
            src="/images/leaves-1.svg"
            width="245"
            height="316"
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
      {/* <!-- faqs-section end --></> */}
    </>
  );
}
