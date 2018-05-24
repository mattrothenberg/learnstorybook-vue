<template>
  <div>
    <div class="loading-item" v-if="loading" v-for="(n, index) in 5" :key="index">
      <span class="glow-checkbox" />
      <span class="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
    <div class="list-items" v-if="noTasks">
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">You have no tasks</div>
        <div class="subtitle-message">Sit back and relax</div>
      </div>
    </div>
    <div class="list-items" v-else>
      <task v-for="(task, index) in tasksInOrder" :key="index" :task="task"/>
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "task-list",
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Task
  },
  data() {
    return {
      tasks: []
    };
  },
  computed: {
    noTasks() {
      return this.tasks.length === 0;
    },
    tasksInOrder() {
      return [
        ...this.tasks.filter(t => t.state === "TASK_PINNED"),
        ...this.tasks.filter(t => t.state !== "TASK_PINNED")
      ];
    }
  }
};
</script>
