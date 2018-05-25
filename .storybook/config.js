import Vue from "vue";
import Vuex from "vuex";
import { configure } from "@storybook/vue";
import "../src/style/index.css";
import InboxScreen from "../src/components/InboxScreen";
import Task from "../src/components/Task";
import TaskList from "../src/components/TaskList";

// Initialize Vuex
Vue.use(Vuex);

// Global component registration
Vue.component("inbox-screen", InboxScreen);
Vue.component("task", Task);
Vue.component("task-list", TaskList);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
