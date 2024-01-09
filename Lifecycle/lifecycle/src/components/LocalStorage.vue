<template>
  <form @submit.prevent="onSubmit" class="from">
    <input
      id="text"
      placeholder="Write something ..."
      type="text"
      v-model="text"
    />
    <button type="submit" class="btn">Submit</button>
  </form>
</template>

<script>
import { ref, onMounted, onUpdated, onBeforeUnmount } from "vue";
export default {
  setup(prop, context) {
    const text = ref("");
    const isSubmit = ref(false);

    function onSubmit() {
      isSubmit.value = !isSubmit.value;
    }

    onMounted(() => {
      const data = localStorage.getItem("data");
      if (data) text.value = data;
      isSubmit.value = false;
    });

    onUpdated(() => {
      localStorage.setItem("data", text.value);
    });

    onBeforeUnmount(() => {
      if (!isSubmit.value) {
        const answer = window.confirm(
          "Are you sure you want to exit the page?"
        );
        if (!answer) {
          context.emit("dataEvent", !answer);
        }
      }
    });

    return {
      text,
      isSubmit,
      onSubmit,
    };
  },
};
</script>

<style lang="css" scoped>
.from {
  margin-top: 2rem;
}

.btn {
  margin-left: 1rem;
}
</style>
