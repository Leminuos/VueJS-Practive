export const tooltip = (el, binding) => {
  const tooltip = document.createElement("div");
  tooltip.textContent = binding.value.text;
  tooltip.className = "data-v-tooltip";
  tooltip.style.opacity = 0;
  tooltip.style.visibility = "hidden";

  if (typeof binding.value.position === "string") {
    switch (binding.value.position) {
      case "left":
        tooltip.style.left = "0%";
        tooltip.style.top = "-20%";
        tooltip.style.transform = "translate(-110%, -50%)";
        break;
      case "right":
        tooltip.style.left = "100%";
        tooltip.style.top = "-20%";
        tooltip.style.transform = "translate(10%, -50%)";
        break;
      case "top":
        tooltip.style.left = "50%";
        tooltip.style.top = "-50%";
        tooltip.style.transform = "translate(-50%, -110%)";
        break;
      case "bottom":
      default:
        tooltip.style.left = "50%";
        tooltip.style.top = "20%";
        tooltip.style.transform = "translate(-50%, 10%)";
        break;
    }
  } else {
    for (const [key, val] of Object.entries(binding.value.position)) {
      tooltip.style[key] = val;
    }
  }

  el.appendChild(tooltip);

  el.addEventListener("mouseenter", () => {
    tooltip.style.opacity = 1;
    tooltip.style.visibility = "visible";
  });

  el.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
    tooltip.style.visibility = "hidden";
  });
};
