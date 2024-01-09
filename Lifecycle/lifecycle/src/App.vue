<template>
  <div class="header">
    <div class="btn--header">
      <button class="btn btn__timer" @click="isTimer = !isTimer">Timer</button>
      <button class="btn btn__text" @click="isText = !isText">Text</button>
      <button class="btn btn__data" @click="isData = !isData">Data</button>
    </div>

    <timer v-if="isTimer" @time-use="onEventTime($event)" />
    <span v-else>Component usage time is: {{ time }}</span>
    <Text :text-active="isText" @text-event="onEventText($event)" />
    <local-storage v-if="isData" @data-event="onDataEvent($event)" />
  </div>
</template>

<script>
import Timer from "./components/Timer";
import Text from "./components/Text";
import LocalStorage from "./components/LocalStorage";
import { ref } from "vue";

export default {
  setup() {
    const time = ref(0);
    const isTimer = ref(false);
    const isText = ref(false);
    const isData = ref(false);

    function onEventTime(event) {
      time.value = event;
    }

    function onEventText(event) {
      isText.value = event;
    }

    function onDataEvent(event) {
      isData.value = event;
    }

    return {
      isTimer,
      time,
      isText,
      isData,
      onEventTime,
      onEventText,
      onDataEvent,
    };
  },
  components: {
    Timer,
    Text,
    LocalStorage,
  },
};
</script>

<style lang="css" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 5rem;
  height: 3rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 3rem 1rem;
}

.btn__timer {
  background-color: rgba(124, 252, 0, 0.5);
}

.btn__text {
  background-color: #0099ff;
}

.btn__data {
  background-color: #e82f2f;
}
</style>
