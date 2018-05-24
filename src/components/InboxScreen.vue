<template>
  <div>
    <div class="page lists-show" v-if="error">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>
    <div class="page lists-show" v-else>
      <nav>
        <h1 class="title-page">
          <span class="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <task-list :tasks="tasks"/>
    </div>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";
export default {
  name: "inbox-screen",
  props: {
    error: {
      type: Boolean,
      default: false
    },
    tasks: {
      type: Array
    }
  },
  components: {
    TaskList
  }
};
</script>
