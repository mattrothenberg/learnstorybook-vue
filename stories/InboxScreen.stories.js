/* eslint-disable react/react-in-jsx-scope */
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/vue";
import { generateStore } from "./stub";

storiesOf("InboxScreen", module)
  .add("default", () => {
    return {
      template: `<inbox-screen/>`,
      store: generateStore()
    };
  })
  .add("error", () => {
    return {
      template: `<inbox-screen :error="true"/>`
    };
  });

/* eslint-enable react/react-in-jsx-scope */
