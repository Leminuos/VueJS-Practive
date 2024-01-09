<script>
import { h, reactive, onMounted } from "vue";

export default {
  setup() {
    const data = reactive({
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    });

    onMounted(() => {
      const shuffled = (list) => list.sort(() => Math.random() - 0.5);
      shuffled(shuffled(data.values));
    });

    return () =>
      h(
        "div",
        {
          class: "chart-container",
        },
        [
          data.values.map((value, index) =>
            h(
              "div",
              {
                class: "chart-items",
                key: index,
                style: { "--percent": `${value * 2}rem` },
              },
              value
            )
          ),
        ]
      );
  },
};
</script>

<style>
.chart-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 30rem;
  height: 20rem;
  margin: 3rem auto;
}

.chart-items {
  height: var(--percent);
  width: 2.5rem;
  color: #fff;
  text-align: center;
  background-color: #3498db;
  transition: height 0.5s ease;
  animation: growth ease-in 0.5s;
}

@keyframes growth {
  from {
    opacity: 0;
    height: calc(var(--percent) - 50%);
  }
  to {
    opacity: 1;
    height: var(--percent);
  }
}
</style>
