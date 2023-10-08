<template>
  <UContainer>
    <CommonAgGrid />
  </UContainer>
</template>
<script setup lang="ts">
const { data, error } = await useFetch("/api/users");
const users = toRaw(data.value) as Object[];

const columns = Object.keys(users[0]).map((item) => ({
  headerName: item,
  field: item,
}));

const columnDefs = [
  { headerName: "Make", field: "make" },
  { headerName: "Model", field: "model" },
  { headerName: "Price", field: "price" },
];

const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxster", price: 72000 },
];
</script>
