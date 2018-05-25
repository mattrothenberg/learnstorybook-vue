import { action } from "@storybook/addon-actions";
import Vuex from "vuex";

const defaultTaskList = [
  { ...task, id: "1", title: "Task 1" },
  { ...task, id: "2", title: "Task 2" },
  { ...task, id: "3", title: "Task 3" },
  { ...task, id: "4", title: "Task 4" },
  { ...task, id: "5", title: "Task 5" },
  { ...task, id: "6", title: "Task 6" }
];

const withPinnedTasks = [
  ...defaultTaskList.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }
];

const generateStore = (tasks = defaultTaskList) => {
  return new Vuex.Store({
    state: {
      tasks
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
};

export { task, generateStore, withPinnedTasks };
