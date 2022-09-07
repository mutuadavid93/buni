//  see - https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules

import { defineRule, configure } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

export default defineNuxtPlugin((nuxtApp) => {
  // Bring in all the rules.
  // P.S Not good for performance
  // Object.keys(rules)
  //   .filter((k) => k !== "default")
  //   .forEach((rule) => {
  //     defineRule(rule, rules[rule]);
  //   });

  defineRule("required", required);
  defineRule("email", email);

  configure({
    generateMessage: localize("en", {
      messages: {
        required: "{field} is required",
        email: "{field} must be a valid email"
      }
    })
  });
});
