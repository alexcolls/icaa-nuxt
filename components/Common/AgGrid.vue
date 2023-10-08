<template>
  <ag-grid-vue
    class="ag-theme-alpine w-full h-screen"
    :default-col-def="defaultColDef"
    :dom-layout="'autoHeight'"
    :row-model-type="'infinite'"
    :pagination-page-size="100"
    :cache-block-size="100"
    :datasource="dataSource"
  />
</template>
<script setup lang="ts">
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

const api = "users";

const { data, error } = await useFetch("/api/users");

const users = toRaw(data.value);
let columns;
if (users !== null && users !== undefined) {
  columns = Object.keys(users[0]).map((item) => ({
    headerName: item,
    field: item,
  }));
}
// Default column definitions
const defaultColDef = {
  flex: 1,
  minWidth: 100,
};

const dataSource = {
  rowCount: null,
  getRows: async function (params: any): Promise<void> {
    try {
      const response = await fetch(
        `/api/${api}?startRow=${params.startRow}&endRow=${params.endRow}`
      );
      const data = await response.json();
      if (dataSource.rowCount === null) {
        dataSource.rowCount = data.totalCount;
      }
      params.successCallback(data.items, dataSource.rowCount);
    } catch (error) {
      console.error(error);
      params.failCallback();
    }
  },
};

const rowData = ref([]);
</script>
