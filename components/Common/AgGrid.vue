<template>
  <ag-grid-vue
    class="ag-theme-alpine w-full h-full"
    :default-col-def="defaultColDef"
    :dom-layout="'autoHeight'"
    :row-model-type="'infinite'"
    :pagination-page-size="10"
    :cache-block-size="10"
    :datasource="dataSource"
    :column-defs="columns"
  />
</template>

<script setup lang="ts">
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { ref } from 'vue';

const api = "users";

const getColumns = (rows: Object[]): Object[] => {
  return Object.keys(rows[0]).map((item) => ({
    headerName: item,
    field: item,
  }));
};

const defaultColDef = {
  flex: 1,
  minWidth: 100,
};

type Params = {
  startRow: number;
  endRow: number;
  successCallback: (rows: Object[], totalRows: number) => void;
  failCallback: () => void;
};

type DataSource = {
  rowCount: number;
  getRows: (params: Params) => Promise<void>;
}

const columns = ref<Object[]>([]);

const dataSource: DataSource = {
  rowCount: 0,
  getRows: async function (params: Params): Promise<void> {
    try {
      const { data } = await useFetch(
        `/api/${api}?startRow=${params.startRow}&endRow=${params.endRow}`
      );
      const rows = toRaw(data.value) as Object[];
      if (!dataSource.rowCount) columns.value = getColumns(rows);
      dataSource.rowCount += rows.length;
      params.successCallback(rows, dataSource.rowCount);      
    } catch (error) {
      console.error(error);
      params.failCallback();
    }
  },
};

</script>
