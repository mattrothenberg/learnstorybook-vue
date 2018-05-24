/* eslint-disable react/react-in-jsx-scope */
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/vue";
import Vuex from "vuex";
import generateStore from "./stub";

storiesOf("InboxScreen", module).add("default", () => {
  const tasks = [{ id: "6", title: "Task 6" }];
  return {
    template: `<inbox-screen/>`,
    store: {
      state: {
        tasks
      },
      actions: {
        pinTask() {
          action("foo");
        }
      }
    }
  };
});

/* eslint-enable react/react-in-jsx-scope */
