<template>
  <header
    class="shadow-md"
    :class="isDark ? 'bg-zinc-900 shadow-zinc-800' :
      'bg-zinc-100 shadow-zinc-200'"
  >
    <div class=" mx-auto flex justify-between items-center">
      <div class="w-14 max-w-10 p-2">
        <img
          :src="logo"
          alt="ICAA"
        >
      </div>
      <nav class="pr-12">
        <div class="p-2">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar" 
            chip-color="primary"
            chip-text=""
            chip-position="top-right"
            size="md"
          />
        </div>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import logo from "~/assets/img/logo-icaa.png";

const isDark = useIsDark();

// const links = ref<Array<{ text: string; href: string }>>([
//   { text: 'Home', href: '/' },
//   { text: 'About', href: '/about' },
//   { text: 'Contact', href: '/contact' },
// ]);
</script>
