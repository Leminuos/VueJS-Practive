<template>
  <div class="text__timer">
    {{ data.totalTime }}
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  created() {
    this.data.timer = setInterval(() => this.countdown(), 1000);
    console.log("created timer");
  },
  beforeUnmount() {
    clearInterval(this.data.timer);
    this.data.timer = null;
    this.$emit("timeUse", this.data.totalTime);
    this.data.totalTime = 0;
    console.log("unmount timer");
  },
  setup() {
    const obj = {
      time: null,
      totalTime: 0,
    };

    const data = reactive(obj);

    function countdown() {
      data.totalTime++;
    }
    return {
      data,
      countdown,
    };
  },
};
</script>

<style scoped>
.text__timer {
  font-size: 3rem;
  color: grey;
}
</style>
