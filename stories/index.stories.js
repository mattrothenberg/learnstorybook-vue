/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

storiesOf("InboxScreen", module).add("default", () => {
  const tasks = [{ id: "6", title: "Task 6" }];
  return {
    template: `<inbox-screen :tasks="tasks"/>`,
    data() {
      return {
        tasks
      };
    },
    methods: {
      pin() {
        console.log("hello");
      }
    }
  };
});

/* eslint-enable react/react-in-jsx-scope */
