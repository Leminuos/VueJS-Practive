<script>
import { h, computed, reactive } from "vue";
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const value = reactive({
      sortColumn: null,
      sortOrder: true,
    });

    const sortedData = computed(() => {
      if (!value.sortColumn) {
        return props.data;
      }
      return props.data.slice().sort(() => {
        return value.sortOrder ? -1 : 1;
      });
    });

    function sortData(column) {
      if (value.sortColumn === column) {
        value.sortOrder = !value.sortOrder;
      } else {
        value.sortColumn = column;
        value.sortOrder = true;
      }
    }

    return () =>
      h("div", [
        h("table", { class: "custom-table" }, [
          h("thead", [
            h("tr", [
              props.columns.map((column, index) =>
                h(
                  "th",
                  {
                    key: index,
                    onClick: () => sortData(column.field),
                  },
                  column.label
                )
              ),
            ]),
          ]),
          h("tbody", [
            sortedData.value.map((item, index) =>
              h(
                "tr",
                {
                  key: index,
                },
                [
                  props.columns.map((column, colIndex) =>
                    h(
                      "td",
                      {
                        key: colIndex,
                      },
                      item[column.field]
                    )
                  ),
                ]
              )
            ),
          ]),
        ]),
      ]);
  },
};
</script>

<style>
/* CSS cho table */
.custom-table {
  width: 100%;
  border: 2px solid #ffdab9;
}

.custom-table th,
.custom-table td {
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: #fff5ee;
  font-style: bold;
}

.custom-table th:hover {
  cursor: pointer;
}

.custom-table tbody tr:hover {
  background-color: #fff5ee;
}
</style>
