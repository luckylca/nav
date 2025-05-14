<template>
<div class="time hvr-grow">{{ formattedTime }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';


const currentTime = ref<Date>(new Date())

// 格式化时间（HH:mm:ss）
const formattedTime = ref<string>('')

// 格式化函数
const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let intervalId: number | null = null

onMounted(() => {
  formattedTime.value = formatTime(currentTime.value)
  // 每秒更新时间
  intervalId = window.setInterval(() => {
    currentTime.value = new Date()
    formattedTime.value = formatTime(currentTime.value)
  }, 1000)
})

</script>

<style scoped lang="scss">

.time{
  width: 250px;;
  text-align:center;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 10px;
  margin-left: auto !important;
  margin-right: auto !important;
  mix-blend-mode: difference;
  backdrop-filter: blur(10px);
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.2);
}



</style>
