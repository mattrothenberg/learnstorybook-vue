import Vue from "vue";
import Vuex from "vuex";
import { configure } from "@storybook/vue";
import "../src/style/index.css";
import InboxScreen from "../src/components/InboxScreen";
import Task from "../src/components/Task";
import TaskList from "../src/components/TaskList";
import PureTaskList from "../src/components/PureTaskList";

// Initialize Vuex
Vue.use(Vuex);

// Global component registration
Vue.component("inbox-screen", InboxScreen);
Vue.component("task", Task);
Vue.component("task-list", TaskList);
Vue.component("pure-task-list", PureTaskList);

const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
