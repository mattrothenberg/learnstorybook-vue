<template>
  <div :class="taskClass">
    <label class="checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="true"
        name="checked"
      />
      <span class="checkbox-custom" @click="archiveTask"/>
    </label>
    <div class="title">
      <input type="text" :value="this.task.title" placeholder="Input title" />
    </div>

    <!-- <div class="actions" onClick={event => event.stopPropagation()}>
      {state !== 'TASK_ARCHIVED' && (
        <a onClick={() => onPinTask(id)}>
          <span class={`icon-star`} />
        </a>
      )}
    </div> -->
  </div>  
</template>

<script>
export default {
  name: "task",
  props: {
    task: Object,
    required: true
  },
  methods: {
    archiveTask() {}
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
