<template>
  <div>
    <section
      class="content-wrapper discover-apis getting-started welcome-section"
      :style="{
        backgroundImage: `url(${$config.baseUrl}${introduction.image.data.attributes?.url})`
      }"
    >
      <div class="wrapper">
        <div class="col" v-html="introduction?.heading" />
      </div>
    </section>

    <section id="tabs" class="tabs">
      <nav>
        <ul>
          <li v-for="(tab, index) in tabs" :key="tab.id">
            <a :href="'#section-' + (index + 1).toString()"
              ><span>{{ tab?.label }}</span></a
            >
          </li>
        </ul>
      </nav>

      <div class="content">
        <section id="section-1">
          <div class="tab-header">
            <h3>Account Creation</h3>
            <p>
              To get started, you first need to register on the API gateway here
            </p>
            <a href="#">https://sandbox.buni.kcbgroup.com/devportal/apis</a>
          </div>

          <div class="tab-content">
            <img
              src="~/assets/images/getting-started/login.png"
              width="517"
              alt="login"
            />
          </div>

          <div class="tab-footer">
            <p>
              In case more clarification is needed, please send an email to
              <a href="mailto:buni@kcbgroup.com"> buni@kcbgroup.com</a>
            </p>
          </div>
        </section>

        <section id="section-2">
          <div class="tab-header">
            <h3>API Authentication</h3>
            <p>
              Once you have created an account, log on to the developer portal.
              Your Username & <br />Password combination is required to log in.
            </p>
          </div>

          <div class="tab-content">
            <h3>Create Application</h3>
            <img
              src="~/assets/images/getting-started/create-app.png"
              width="1032"
              alt="create app"
            />

            <p class="step">
              <span>Step 1:</span> Click on the Applications menu
            </p>
            <img
              src="~/assets/images/getting-started/app-menu.png"
              width="1032"
              alt="app menu"
            />

            <p class="step">
              <span>Step 2:</span> Click on “ADD NEW APPLICATION”
            </p>
            <p class="step">
              <span>Step 3:</span> Fill in the application details and save.
            </p>

            <h3>Create Application</h3>
            <p class="step">
              <span>Step 1:</span> Click on the Applications listing row item,
              and navigate to the below:
            </p>
            <img
              src="~/assets/images/getting-started/test-app.png"
              width="1031"
              alt="test app"
            />

            <p class="step">
              <span>Step 2:</span> Click on GENERATE KEYS at the bottom of the
              page.
            </p>
            <p>
              You will then obtain the client consumer key and client secret.
            </p>
            <img
              src="~/assets/images/getting-started/generate-keys.png"
              width="1030"
              alt="generate-keys"
            />
            <ul>
              <li>
                You can generate access token and store it for use in subsequent
                requests.
              </li>
              <li>
                You can also generate a curl request for token generation.
              </li>
            </ul>
          </div>
        </section>
        <section id="section-3">
          <div class="tab-header">
            <h3>API Subscription</h3>
          </div>

          <div class="tab-content">
            <p class="step"><span>Step 1:</span> Click on APIS menu.</p>
            <img
              src="~/assets/images/getting-started/create-app.png"
              width="1032"
              alt="create app"
            />

            <p class="step">
              <span>Step 2:</span> APIs will be listed. Click on one to get the
              below view.
            </p>
            <img
              src="~/assets/images/getting-started/payment-dashboard.png"
              width="1030"
              alt="payment-dashboard"
            />

            <p class="step">
              <span>Step 3:</span> Click on the SUBSCRIBE button
            </p>
            <p>
              On the next window, subscribe the API to an Application. You can
              also generate sandbox keys if not done previously.
            </p>
            <img
              src="~/assets/images/getting-started/subscribe-dashboard.png"
              width="1032"
              alt="subscribe-dashboard"
            />

            <p class="step">
              <span>Step 4:</span> Select your Application NAME and click on
              SUBSCRIBE
            </p>
            <img
              src="~/assets/images/getting-started/app-name.png"
              width="1028"
              alt="app-name"
            />
          </div>
        </section>
        <section id="section-4">
          <div class="tab-header">
            <h3>Try Our APIs</h3>
          </div>

          <div class="tab-content">
            <p class="step">
              <span>On the</span> left menu panel, <span>click on</span> Try Out
            </p>
            <p>
              On the next window, subscribe the API to an Application. You can
              also generate sandbox keys if not done previously.
            </p>
            <img
              src="~/assets/images/getting-started/test-dashboard.png"
              width="1053"
              alt="test-dashboard"
            />

            <ol type="a">
              <li>Select OAuth as the authentication method.</li>
              <li>Select your Application Name from the dropdown.</li>
              <li>Select Sandbox as the Key Type</li>
              <li>
                Click on GET TEST KEY (This ensures that token is added to the
                request header.)
              </li>
            </ol>

            <p class="step">
              <span>On the</span> left menu panel, <span>click on</span> Try Out
            </p>
            <p class="step">
              <span>Step 1:</span> At the bottom of the page click on the API
              name to expand the section.
            </p>
            <p>See an example below:</p>
            <img
              src="~/assets/images/getting-started/bs-transfer.png"
              width="1051"
              alt="business-transfer"
            />

            <p class="step">
              <span>Step 2:</span> Click on the
              <span class="highlight">Try it Out</span> button to edit the
              request.
            </p>
            <p class="step">
              <span>Step 3:</span> Add the appropriate request in the text box.
            </p>
            <p class="step">
              <span>Step 4:</span> Click on the <span>Execute</span> button to
              run it.
            </p>
            <img
              src="~/assets/images/getting-started/bs-transfer-test.png"
              width="1054"
              alt="business-transfer"
            />
          </div>
        </section>
        <section id="section-5">
          <div class="tab-header">
            <h3>Test the API Using Postman</h3>
          </div>

          <div class="tab-content">
            <p class="step"><span>Step 1:</span> Generate a Token Request</p>
            <p>
              Create a POST Form URL Encoded Request with params<br />

              Key= grant_type<br />
              value= client_credentials<br />

              Endpoint:
              <a href="https://uat.buni.kcbgroup.com/token"
                >https://uat.buni.kcbgroup.com/token</a
              >
            </p>

            <p class="step"><span>Step 2:</span> Set Authorization as Basic.</p>
            <p class="step">
              Use the <span>Client ID</span> and
              <span>Client Secret</span> generated for your application earlier.
            </p>
            <img
              src="~/assets/images/getting-started/authorization-dashboard.png"
              width="1018"
              alt="authorization-dashboard"
            />

            <p>
              When you send the request, you will receive an access token that
              you can use as a bearer token in subsequent requests.
            </p>
            <img
              src="~/assets/images/getting-started/access-token-dashboard.png"
              width="1018"
              alt="access-token-dashboard"
            />

            <p class="step"><span>CONCLUSION</span> <br />Need some help?</p>
            <p class="step">
              Get support now from our team by dropping them an email on
              <a href="mailto:buni@kcbgroup.com">buni@kcbgroup.com</a> or
              <br />log in to the forum <a href="#">here</a> to talk shop with
              fellow developers.
            </p>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";

useHead({
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
      body: true
    },
    {
      src: "plugins.js",
      body: true
    }
    // {
    //   src: "main.js",
    //   body: true
    // }
  ]
});
// const route = useRoute();

// Detect Route Change
// watch(route, (n, o) => {
//   console.log(n, o);
// });

const { data } = await useAsyncData("gettinstarted", () => GqlGettinstarted());
const getSection = ({ payload, name }) => {
  return payload.find((item) => item.attributes?.slug == name).attributes;
};
const payload = data.value.gettingStarteds?.data;
const introduction = computed(
  () => getSection({ payload, name: "introduction" })?.section
);
const tabs = computed(
  () => getSection({ payload, name: "introduction" })?.tabs
);

// console.log("--- ", tabs);
</script>

<style lang="scss" scoped></style>
