<template>
  <section class="content-wrapper welcome-section contact-us">
    <div class="wrapper">
      <div class="col">
        <h1 class="section-title">
          We’re here <br />
          to help!
        </h1>
        <p>
          Have a burning question? Or do you simply want to share some feedback?
          We’re happy to hear your thoughts. Fill out the form below and we’ll
          get back to you sooner than you can say Hello World.
        </p>
      </div>
      <div class="col">
        <VeeForm class="contact-us-form" @submit="onSubmit">
          <div class="field-group">
            <div class="form-field">
              <label class="error" for="name"></label>
              <VeeField
                type="text"
                id="name"
                name="name"
                v-model="payload.fname"
                placeholder="Full Name"
                rules="required"
              /><VeeErrorMessage name="name" class="error" />
            </div>

            <div class="form-field">
              <label class="error" for="email"></label>
              <VeeField
                type="email"
                id="email"
                name="email"
                v-model="payload.email"
                rules="required|email"
                placeholder="Email Address"
              />
              <VeeErrorMessage name="email" class="error" />
            </div>
          </div>

          <div class="field-group">
            <div class="form-field">
              <label class="error" for="phone"></label>
              <VeeField
                type="text"
                id="phone"
                name="phone"
                v-model="payload.phone"
                rules="required"
                placeholder="Phone"
              />
              <VeeErrorMessage name="phone" class="error" />
            </div>

            <div class="form-field">
              <label class="error" for="work"></label>
              <VeeField
                type="text"
                id="work"
                name="work"
                v-model="payload.work"
                rules="required"
                placeholder="Place of work"
              />
              <VeeErrorMessage name="work" class="error" />
            </div>
          </div>

          <div class="field-group">
            <label class="error" for="message"></label>
            <VeeField
              as="textarea"
              rows="8"
              id="message"
              name="message"
              v-model="payload.message"
              rules="required"
              placeholder="Message"
            ></VeeField>
            <VeeErrorMessage name="message" class="error" />
          </div>
          <!--                <span class="msg-success">Your details have been submitted successfully.</span>-->
          <button type="submit">SUBMIT</button>
        </VeeForm>
      </div>
    </div>
  </section>
</template>

<script setup>
const payload = shallowReactive({
  fname: "",
  email: "",
  work: "",
  phone: "",
  message: ""
});
// const refresh = () => nuxtApp.refresh();
const onSubmit = async (values) => {
  try {
    const { data, error, refresh, pending } = await useAsyncGql(
      "contactus",
      payload
    );
    // console.log("submitted ...", values);
    alert("Submitted successfully!");
    // refresh();
  } catch (error) {
    console.error(error);
  }
};

// console.log(nuxt);
</script>

<style lang="css" scoped>
span.error {
  color: red;
}
</style>
