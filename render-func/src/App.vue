<template>
  <slider-image />
  <chart-array />
  <form @submit.prevent="onSubmit">
    <div>
      <label for="name">
        <span>Name:</span>
        <input type="text" id="name" v-model="data.formData.name" required />
      </label>
    </div>

    <div>
      <label for="age">
        <span>Age:</span>
        <input type="number" id="age" v-model="data.formData.age" required />
      </label>
    </div>

    <div>
      <label for="email">
        <span>Email:</span>
        <input type="email" id="email" v-model="data.formData.email" required />
      </label>
    </div>

    <button type="submit">Submit</button>
  </form>
  <dynamic-table :data="data.tableData" :columns="data.tableColumns" />
</template>

<script>
import SliderImage from "./components/SliderImage.vue";
import ChartArray from "./components/ChartArray.vue";
import DynamicTable from "./components/DynamicTable.vue";
import { reactive } from "vue";

export default {
  components: {
    SliderImage,
    ChartArray,
    DynamicTable,
  },
  setup() {
    const data = reactive({
      formData: {
        name: "",
        age: "",
        email: "",
      },
      tableData: [
        { id: 1, name: "John", age: 25, email: "john@example.com" },
        { id: 2, name: "Alice", age: 30, email: "alice@example.com" },
        { id: 3, name: "Bob", age: 35, email: "bob@example.com" },
      ],
      tableColumns: [
        { label: "ID", field: "id", type: "text" },
        { label: "Name", field: "name", type: "text" },
        { label: "Age", field: "age", type: "text" },
        { label: "Email", field: "email", type: "text" },
      ],
    });

    function onSubmit() {
      const id = data.tableData.length + 1;

      data.tableData.push({
        id,
        name: data.formData.name,
        age: data.formData.age,
        email: data.formData.email,
      });

      data.formData = {
        name: "",
        age: "",
        email: "",
      };
    }

    return {
      data,
      onSubmit,
    };
  },
};
</script>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

span {
  display: inline-block;
  width: 4rem;
  font-weight: 600;
  text-align: center;
}

input {
  width: 20rem;
  padding: 0.2rem;
  margin: 0.25rem;
  border-color: rgb(243 244 246);
  border-width: 1px;
  border-radius: 0.2rem;
}

button {
  margin: 0.75rem auto;
  width: 10rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgb(0 18 255);
}
</style>
