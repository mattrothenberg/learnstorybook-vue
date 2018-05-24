import Vue from "vue";
import { configure } from "@storybook/vue";
import "../src/style/index.css";
import InboxScreen from "../src/components/InboxScreen";

Vue.component("inbox-screen", InboxScreen);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);