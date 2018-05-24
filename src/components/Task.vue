<template>
  <div :class="taskClass">
    <label class="checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="true"
        name="checked"
      />
      <span class="checkbox-custom" @click="archive"/>
    </label>
    <div class="title">
      <input type="text" :readonly="true" :value="this.task.title" placeholder="Input title" />
    </div>
    <div class="actions">
      <a @click="pin" v-if="!isChecked">
        <span class="icon-star"/>
      </a>
    </div>
  </div>  
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "task",
  props: {
    task: Object,
    required: true
  },
  methods: {
    ...mapActions(["archiveTask", "pinTask"]),
    archive() {
      this.archiveTask(this.task.id);
    },
    pin() {
      this.pinTask(this.task.id);
    }
  },
  computed: {
    taskClass() {
      return `list-item ${this.task.state}`;
    },
    isChecked() {
      return this.task.state === "TASK_ARCHIVED";
    }
  }
};
</script>
