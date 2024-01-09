<template>
  <div class="directive">
    <span
      class="tooltip"
      v-tooltip="{ text: 'Tooltip content', position: 'top' }"
    >
      Di chuột qua để xem tooltip
    </span>
  </div>

  <div>
    <img
      src="https://i.pinimg.com/736x/27/ed/69/27ed699be8e019a406af5dd04791460b.jpg"
      alt="move"
      style="width: 20%; height: auto; position: absolute"
      v-draggable
    />
  </div>

  <div class="data-v-autocomplete">
    <input type="text" v-autocomplete="{ dataList: suggestions }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      suggestions: [
        "Apple",
        "Banana",
        "Orange",
        "Pineapple",
        "Mango",
        "Grapes",
        "Strawberry",
        "Watermelon",
        "Cherry",
        "Peach",
        "Blueberry",
        "Pear",
        "Kiwi",
        "Lemon",
        "Coconut",
        "Raspberry",
        "Blackberry",
        "Cranberry",
        "Plum",
        "Apricot",
      ],
    };
  },
};
</script>

<style>
.directive {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5rem;
}

.data-v-tooltip {
  position: relative;
  width: 10rem;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 1rem;
  border: 1px solid red;
}

.data-v-autocomplete {
  display: flex;
  justify-content: center;
  align-content: center;
}

.autocomplete-suggestions {
  width: 50%;
  position: absolute;
  margin-top: 30px;
}

.autocomplete-suggestions ul {
  list-style: none;
  padding: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.autocomplete-suggestions li {
  padding: 8px 12px;
  cursor: pointer;
}

.autocomplete-suggestions li:hover {
  background-color: #f0f0f0;
}

.autocomplete-suggestions li.selected {
  background-color: #f0f0f0; /* Màu nền khi được chọn */
}
</style>
