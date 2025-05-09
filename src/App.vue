<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style>
/* 全局样式重置 */
::-webkit-scrollbar {
  display: none;
}

/* Firefox：隐藏滚动条宽度 */
html {
  scrollbar-width: none; /* 可选值：auto / thin / none */
  -ms-overflow-style: none; /* IE/Edge */
}

</style>
