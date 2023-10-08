<template>
  <CommonMenuLeft />
</template>
<script setup lang="ts">
const isExpanded = ref(false);
const menuItems = [
  { icon: "fas fa-home", name: "Home" },
  { icon: "fas fa-user", name: "Profile" },
  { icon: "fas fa-cog", name: "Settings" },
  // Add more menu items as needed
];

const expandMenu = () => {
  isExpanded.value = true;
};

const collapseMenu = () => {
  isExpanded.value = false;
};
</script>

<style scoped>
/* Add any additional styles or tailwind utilities here */
</style>
