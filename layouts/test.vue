<template>
  <!-- <div @mouseover="expandMenu" @mouseleave="collapseMenu" :class="{ 'w-48': isExpanded }"
    class="h-screen flex flex-col w-16 bg-gray-800 transition-all duration-300">
    <ul class="flex flex-col">
      <li v-for="item in menuItems" :key="item.icon" class="p-4 hover:bg-gray-700">
        <i :class="item.icon" class="text-white"></i>
        <span v-if="isExpanded" class="ml-4 text-white">{{ item.name }}</span>
      </li>
      <CommonColorModeButton />
    </ul>
  </div> -->
  <div class="bg-transparent">Hello 2</div>
</template>

<script setup lang="ts">
const isExpanded = ref(false);
const menuItems = [
  { icon: 'fas fa-home', name: 'Home' },
  { icon: 'fas fa-user', name: 'Profile' },
  { icon: 'fas fa-cog', name: 'Settings' },
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
