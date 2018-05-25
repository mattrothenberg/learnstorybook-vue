/* eslint-disable react/react-in-jsx-scope */
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/vue";
import { task } from "./Task.stories";
import { store } from "./InboxScreen.stories";

export const defaultTaskList = [
  { ...task, id: "1", title: "Task 1" },
  { ...task, id: "2", title: "Task 2" },
  { ...task, id: "3", title: "Task 3" },
  { ...task, id: "4", title: "Task 4" },
  { ...task, id: "5", title: "Task 5" },
  { ...task, id: "6", title: "Task 6" }
];

export const withPinnedTasks = [
  ...defaultTaskList.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }
];

const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story/></div>',
    store
  };
};

storiesOf("TaskList", module)
  .addDecorator(paddedList)
  .add("default", () => {
    return {
      template: `<pure-task-list :tasks="tasks"/>`,
      data() {
        return {
          tasks: defaultTaskList
        };
      }
    };
  })
  .add("withPinnedTasks", () => {
    return {
      template: `<pure-task-list :tasks="tasks"/>`,
      data() {
        return {
          tasks: withPinnedTasks
        };
      }
    };
  })
  .add("loading", () => {
    return {
      template: `<pure-task-list loading/>`
    };
  })
  .add("empty", () => {
    return {
      template: `<pure-task-list />`
    };
  });
/* eslint-enable react/react-in-jsx-scope */
