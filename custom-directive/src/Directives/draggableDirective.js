export const draggable = (el, binding) => {
  const data = {
    down: false,
    initialX: 0,
    initialY: 0,
    draggerOffsetLeft: 0,
    draggerOffsetTop: 0,
  };

  const mousedown = (event) => {
    data.down = true;
    data.initialX = event.clientX;
    data.initialY = event.clientY;
    el.classList.add("dragging");
    binding.value && binding.value.dragStart && binding.value.dragStart(event);
  };

  const mouseup = (event) => {
    data.down = false;
    data.draggerOffsetLeft = el.offsetLeft;
    data.draggerOffsetTop = el.offsetTop;
    el.classList.remove("dragging");
    binding.value && binding.value.drop && binding.value.drop(event);
  };

  const mousemove = (event) => {
    if (data.down) {
      el.style.left =
        data.draggerOffsetLeft + (event.clientX - data.initialX) + "px";
      el.style.top =
        data.draggerOffsetTop + (event.clientY - data.initialY) + "px";
    }
  };

  el.addEventListener("mouseup", mouseup);
  el.addEventListener("mousedown", mousedown);
  el.addEventListener("mousemove", mousemove);

  data.draggerOffsetLeft = el.offsetLeft;
  data.draggerOffsetTop = el.offsetTop;
};
