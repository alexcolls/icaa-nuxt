<template>
  <div
    :class="[{ 'w-44': isExpanded }, 
             isDark ? 'shadow-zinc-800 bg-zinc-900' : 
             'shadow-zinc-200 bg-zinc-100']"
    class="h-screen flex flex-col w-16 transition-all duration-300 absolute
     z-50 shadow-md"
    @mouseover="expandMenu"
    @mouseleave="collapseMenu"
  >
    <ul class="flex flex-col">
      <li
        v-for="item in menuItems"
        :key="item.icon"
      >
        <a
          :href="item.link"
          class="flex items-center p-4 relative"
          :class="isDark ? 'hover:bg-zinc-800' : 'hover:bg-zinc-200'"
        >
          <div class="py-3">
            <UIcon
              :name="item.icon"
              class="h-6 w-6 absolute left-5 top-1/2 transform -translate-y-1/2"
            />
          </div>
          <span
            v-if="isExpanded"
            class="ml-12"
          >
            {{ item.name }}
          </span>
        </a>
      </li>
    </ul>
    <div class="p-2">
      <CommonButtonColorMode />
    </div>
  </div>
</template>


<script setup lang="ts">
const isDark = useIsDark();
const isExpanded = ref(false);

const menuItems = [
  { icon: "i-heroicons-home", name: "Home", link: "/" },
  { icon: "i-heroicons-user", name: "Usuarios", link: "users"},
  { icon: "i-heroicons-cog-6-tooth", name: "Ajustes", link: "settings" },
];

let timeout: ReturnType<typeof setTimeout>;

const expandMenu = () => {
  clearTimeout(timeout);
  isExpanded.value = true;
};

const collapseMenu = () => {
  timeout = setTimeout(() => {
    isExpanded.value = false;
  }, 300);
};
</script>
