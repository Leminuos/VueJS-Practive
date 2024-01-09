<script>
import { reactive, h, Transition } from "vue";

export default {
  setup() {
    const data = reactive({
      currentIndex: 0,
      images: [
        "https://i.pinimg.com/564x/93/75/ae/9375aef3b0ea35e0cf4ca12862bb5fef.jpg",
        "https://bizweb.dktcdn.net/100/438/408/files/avatar-anime-cho-nam-6.jpg?v=1699239545678",
        "https://i.pinimg.com/736x/36/10/b9/3610b932658d980bcdd5919f7dec2875.jpg",
      ],
    });

    function goToSlide(index) {
      data.currentIndex = index;
    }

    return () =>
      h(
        "div",
        {
          class: "image-slider",
        },
        [
          // Render slider
          h("div", { class: "slider-container" }, [
            h(
              Transition,
              {
                name: "slider",
              },
              [
                h(
                  "div",
                  {
                    class: "slide",
                    key: data.currentIndex,
                  },
                  h("img", {
                    src: data.images[data.currentIndex],
                    alt: "Slider Image",
                  })
                ),
              ]
            ),
          ]),
          // Render thumbnails
          h("div", { class: "thumbnail-container" }, [
            data.images.map((image, index) =>
              h(
                "div",
                {
                  class: ["thumbnail", { active: index === data.currentIndex }],
                  key: index,
                  onClick: () => goToSlide(index),
                },
                [h("img", { src: image, alt: "Thumbnail Image" })]
              )
            ),
          ]),
        ]
      );
  },
};
</script>

<style lang="css" scoped>
.slider-enter-from,
.v-leave-to {
  opacity: 0;
}

.slider-enter-active {
  transition: opacity 1s;
  animation: slide-in 1s ease-out forwards;
}

.slide {
  width: 100%;
  height: 20rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  width: 30rem;
  height: auto;
  overflow: hidden;
}

.thumbnail-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.thumbnail {
  cursor: pointer;
  margin: 5px;
}

.thumbnail img {
  width: 50px;
  height: auto;
  opacity: 0.5;
}

.thumbnail.active img {
  opacity: 1;
}

@keyframes slide-in {
  from {
    transform: translateX(30rem);
  }
  to {
    transform: translateX(0);
  }
}
</style>
