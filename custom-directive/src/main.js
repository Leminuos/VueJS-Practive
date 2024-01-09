import { createApp } from "vue";
import App from "./App.vue";
import { tooltip } from "./Directives/tooltipDirective.js";
import { draggable } from "./Directives/draggableDirective.js";
import { autocomplete } from "./Directives/autocompleteDirective";

const app = createApp(App);

app.directive("tooltip", tooltip);
app.directive("draggable", draggable);
app.directive("autocomplete", autocomplete);
app.mount("#app");
