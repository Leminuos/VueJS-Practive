export const autocomplete = (el, binding) => {
  // Kiểm tra xem phần tử directive được gắn vào có phải là một input không.
  const input = el.tagName === "INPUT" ? el : el.querySelector("input");
  let selectedIndex = -1;

  // Lắng nghe sự kiện input khi người dùng nhập vào.
  input.addEventListener("input", (event) => {
    // Lấy giá trị từ input, chuyển thành chữ thường và gán vào biến searchText.
    const searchText = event.target.value.toLowerCase();

    // Lấy giá trị từ binding của directive, nếu không có giá trị sẽ mặc định là một mảng rỗng.
    const dataList = binding.value.dataList || [];

    // Lọc dữ liệu từ mảng dataList, mảng filteredData mới sẽ chứa các phần tử có chứa searchText.
    const filteredData = dataList.filter((item) =>
      item.toLowerCase().includes(searchText)
    );

    // Tạo một element
    const autocomplete = document.createElement("div");
    autocomplete.className = "autocomplete-suggestions";
    autocomplete.style.display = "none";

    // Tạo một element ul chứa danh sách các phần tử từ filteredData,
    // với mỗi phần tử là một li.
    const suggestions = document.createElement("ul");
    filteredData.forEach((item) => {
      const suggestion = document.createElement("li");
      suggestion.textContent = item;
      suggestions.appendChild(suggestion);
    });

    // Xoá danh sách autocomplete hiện tại,
    // để chỉ có một danh sách autocomplete được hiện thị trong một thời điểm.
    const nodeAutocomplete = document.querySelector(
      ".autocomplete-suggestions"
    );
    if (nodeAutocomplete) {
      nodeAutocomplete.remove();
    }

    if (searchText.trim() && filteredData.length) {
      selectedIndex = -1;
      autocomplete.style.removeProperty("display");

      // Đẩy danh sách autocomplete vừa tạo vào phần tử cha của input.
      // Từ đó render được danh sách này.
      input.parentNode.appendChild(autocomplete).appendChild(suggestions);

      // Bắt sự kiện bàn phím trên danh sách autocomplete.
      document.addEventListener("keydown", handleKeyDown);

      // Bắt sự kiện click trên danh sách autocomplete.
      suggestions.addEventListener("click", (event) => {
        // Hiện thị giá trị click được vào trường input
        // hoặc một sự kiện nào đó tuỳ thích tại đây.
        input.value = event.target.textContent;

        // Xoá danh sách và các sự kiện click, bàn phím.
        if (suggestions.contains(event.target)) {
          suggestions.remove();
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("click", null);
        }
      });
    }
  });

  function handleKeyDown(event) {
    const nodeAutocomplete = document.querySelector(
      ".autocomplete-suggestions"
    );
    if (!nodeAutocomplete) return;

    const suggestionItems = nodeAutocomplete.querySelectorAll("li");

    if (
      /* Xác định sự kiện là mũi tên xuống */
      event.key === "ArrowDown" &&
      selectedIndex < suggestionItems.length - 1
    ) {
      event.preventDefault();
      selectedIndex++; // Tăng lên 1 để chọn element bên dưới.
    } else if (
      // Xác định sự kiện là mũi tên lên
      event.key === "ArrowUp" &&
      selectedIndex > 0
    ) {
      event.preventDefault();
      selectedIndex--; // Giảm xuống 1 để chọn element bên trên.
    } else if (event.key === "Enter") {
      // Hiện thị giá trị được chọn tại trường input.
      // Hoặc một sự kiện bất kỳ tuỳ ý muốn.
      input.value = suggestionItems[selectedIndex].textContent;
      selectedIndex = -1;
    } else return;

    suggestionItems.forEach((item, index) => {
      if (index === selectedIndex) {
        // Thêm class selected làm nổi bật element được họn
        item.classList.add("selected");
      } else {
        // Nếu không phải phần tử được chọn thì xoá class selected.
        item.classList.remove("selected");
      }
    });
  }
};
