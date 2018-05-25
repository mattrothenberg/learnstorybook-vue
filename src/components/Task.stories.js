/* eslint-disable react/react-in-jsx-scope */
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/vue";
import { store } from "./InboxScreen.stories";

export const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

const withStore = () => {
  return {
    store,
    template: `<story/>`
  };
};

storiesOf("Task", module)
  .addDecorator(withStore)
  .add("default", () => {
    return {
      template: `<task :task="task"/>`,
      data() {
        return {
          task
        };
      }
    };
  })
  .add("pinned", () => {
    return {
      template: `<task :task="task"/>`,
      data() {
        return {
          task: { ...task, state: "TASK_PINNED" }
        };
      }
    };
  })
  .add("archived", () => {
    return {
      template: `<task :task="task"/>`,
      data() {
        return {
          task: { ...task, state: "TASK_ARCHIVED" }
        };
      }
    };
  });
/* eslint-enable react/react-in-jsx-scope */
