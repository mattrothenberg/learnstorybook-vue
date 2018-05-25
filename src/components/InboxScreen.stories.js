/* eslint-disable react/react-in-jsx-scope */
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/vue";
import { defaultTaskList } from "./TaskList.stories";
import Vuex from "vuex";

export const store = new Vuex.Store({
  state: {
    tasks: defaultTaskList
  },
  actions: {
    pinTask(context, id) {
      action("pinTask")(id);
    },
    archiveTask(context, id) {
      action("archiveTask")(id);
    }
  }
});

storiesOf("InboxScreen", module)
  .add("default", () => {
    return {
      template: `<inbox-screen/>`,
      store
    };
  })
  .add("error", () => {
    return {
      template: `<inbox-screen :error="true"/>`
    };
  });

/* eslint-enable react/react-in-jsx-scope */
