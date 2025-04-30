<template>
<div :class="{continer:true,'continer1':mode==1,'continer2':mode==3}" :key="id">
  <div class="webicon">
    <img :src=imageSrc alt="Web Icon" />
  </div>
  <div class="text">
    {{altText}}
  </div>
  <div class="edit"></div>
</div>

</template>

<script setup lang="ts">

import { defineProps } from 'vue'
import { computed } from 'vue'
// import { ref } from 'vue'

const props = defineProps({
  src: String,
  text: String,
  id:String,
  mode:Number
})

const imageSrc = computed(() => props.src);
const altText = computed(() => props.text);

</script>


<style lang="scss" scoped>
.continer{
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 120px;
  border-radius: 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  box-sizing: border-box;
}
.continer1{
  border: 1px solid #000;
  animation: edit 0.3s infinite;
}
.continer1::after{
  content: '\00d7';
  position: relative;
  top: -95px; /* Adjust position if needed */
  right: -30px; /* Adjust position if needed */
  color: red; /* Set color for the content */
  font-weight: bold; /* Make the content bold */
  line-height: 1; /* Adjust line height if needed */
  font-size: 24px; /* Increase font size for better visibility */
  display: none;
}
.continer1:hover::after{
  display: block;
}
.continer2{
  border: 1px solid #000;
  animation: edit 0.3s infinite;
}
.continer2::after{
  content: '✍';
  position: relative;
  top: -95px; /* Adjust position if needed */
  right: -30px; /* Adjust position if needed */
  color: red; /* Set color for the content */
  line-height: 1; /* Adjust line height if needed */
  font-size: 20px; /* Increase font size for better visibility */
  display: none;
}
.continer2:hover::after{
  display: block;
}
.webicon{
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #000;
  margin-top: 10px;
}
.text{
  margin-top: 20px;
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
@keyframes edit {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
