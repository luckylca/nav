<template>
<div class="continer">
   <div class="webicon">
    <img :src=imageSrc alt="Web Icon" />
  </div>
  <div class="text">
    {{altText}}
  </div>
</div>

</template>

<script setup lang="ts">

import { defineProps } from 'vue'
import { computed } from 'vue'
// import { ref } from 'vue'

const props = defineProps({
  src: String,
  text: String,
  id:String
})

const imageSrc = computed(() => props.src);
const altText = computed(() => props.text);

</script>


<style lang="scss" scoped>
.continer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 40px;
  width: 100%;
  height: 125px;
  border-radius: 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  box-sizing: border-box;
}
.webicon{
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #000;
  margin-top: 20px;
}
.text{
  margin-top: 30px;
  font-size: 12px;
  color: #000;
  text-align: center;
  // white-space: nowrap; /* 禁止换行 */
  overflow: hidden;    /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 显示省略号 */
  width: 100%;
}
.continer:hover{
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
  cursor: pointer;
}
</style>
