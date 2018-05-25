/* eslint-disable react/react-in-jsx-scope */
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/vue";
import { task, generateStore, withPinnedTasks } from "./stub";

const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story/></div>'
  };
};

storiesOf("TaskList", module)
  .addDecorator(paddedList)
  .add("default", () => {
    return {
      template: `<task-list/>`,
      store: generateStore()
    };
  })
  .add("withPinnedTasks", () => {
    return {
      template: `<task-list/>`,
      store: generateStore(withPinnedTasks)
    };
  })
  .add("loading", () => {
    return {
      template: `<task-list :loading="true"/>`,
      store: generateStore(withPinnedTasks)
    };
  })
  .add("empty", () => {
    return {
      template: `<task-list />`,
      store: generateStore([])
    };
  });
/* eslint-enable react/react-in-jsx-scope */
