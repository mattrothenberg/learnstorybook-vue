<template>
  <div id="app">
      <inbox-screen :tasks="tasks"></inbox-screen>
  </div>
</template>

<script>
import InboxScreen from "@/components/InboxScreen";
import { mapState } from "vuex";
export default {
  name: "app",
  components: {
    InboxScreen
  },
  computed: {
    ...mapState(["tasks"])
  }
};
</script>
