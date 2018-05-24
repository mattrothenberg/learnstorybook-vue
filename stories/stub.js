import { action } from "@storybook/addon-actions";

const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

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

const generateStore = (tasks = defaultTaskList) => ({
  state: {
    tasks
  },
  actions: {
    pinTask() {
      action("pin");
    },
    archiveTask() {
      console.log("FOO");
      action("archive");
    }
  }
});

export default generateStore;
