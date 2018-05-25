/* eslint-disable react/react-in-jsx-scope */
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/vue";
import { task, generateStore } from "./stub";

storiesOf("Task", module)
  .add("default", () => {
    return {
      template: `<task :task="task"/>`,
      data() {
        return {
          task
        };
      },
      store: generateStore()
    };
  })
  .add("pinned", () => {
    return {
      template: `<task :task="task"/>`,
      data() {
        return {
          task: { ...task, state: "TASK_PINNED" }
        };
      },
      store: generateStore()
    };
  })
  .add("archived", () => {
    return {
      template: `<task :task="task"/>`,
      data() {
        return {
          task: { ...task, state: "TASK_ARCHIVED" }
        };
      },
      store: generateStore()
    };
  });
/* eslint-enable react/react-in-jsx-scope */
