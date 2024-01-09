<template>
  <p class="text" v-if="textActive">The count value: {{ count }}</p>
</template>

<script>
import { ref, onMounted, onBeforeUpdate, onUpdated } from "vue";

export default {
  props: ["textActive"],
  setup(props, context) {
    const count = ref(0);

    onMounted(() => {
      context.emit("textEvent", true);
      console.log("Mounted Count Value: ", count.value);
    });

    onBeforeUpdate(() => {
      count.value++;
      console.log("Before Update Count Value: ", count.value);
    });

    onUpdated(() => {
      console.log("Update Count Value: " + count.value);
    });

    return {
      count,
    };
  },
};
</script>

<style lang="css" scoped>
.text {
  color: gray;
}
</style>
