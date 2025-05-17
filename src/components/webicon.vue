<template>
<div>
<div :class="{continer:true,'continer1':mode==1,'continer2':mode==3}" :key="id"
    @mouseover="mymouseover"
    @mouseout="mymouseout"
    @mousemove="updata"
    v-wave>
  <div class="webicon">
    <img :src=imageSrc alt="Web Icon" class="icon"/>
  </div>
  <div class="text">
    {{altText}}
  </div>
  <div class="edit"></div>
</div>
<!-- <div class="dec" v-if="decshow"
      :style="tooltipStyle"
      style="position: fixed; z-index: 999;">
      {{ description }}
</div> -->
<teleport to="body">
  <div
    class="dec"
    v-if="decshow"
    :style="tooltipStyle"
  >
    {{ description }}
  </div>
</teleport>
</div>
</template>

<script setup lang="ts">

import { defineProps, ref } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  src: String,
  text: String,
  id: Number,
  dec:String,
  mode:Number
})
const decshow = ref(false)
const imageSrc = computed(() => props.src);
const altText = computed(() => props.text);
const description = computed(() => {if(props.dec === "") return props.text; return props.dec});
const x = ref(0)
const y = ref(0)
const updata = (e: MouseEvent) => {
  x.value = e.clientX;
  y.value = e.clientY;
}
const tooltipStyle = computed(() => {
  return {
    top: `${y.value + 10}px`,
    left: `${x.value + 10}px`
  }
})
const mymouseover = () => {
  if(props.mode!= 1 && props.mode != 3){
    decshow.value = true;
    return
  }

}

const mymouseout = () => {
  if(props.mode!= 1 && props.mode != 3){
    decshow.value = false;
    return
  }
}
</script>


<style lang="scss" scoped>
.continer{
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;

  border: solid transparent;
  border-width: 2px;
  position: relative;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.15);
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
  content: '';
  width: 30px;
  height: 30px;
  position: relative;
  top: -90px; /* Adjust position if needed */
  right: -30px; /* Adjust position if needed */
  display: none;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  // border: 1px solid red;
  background-image: url("data:image/svg+xml,%3Csvg t='1747474825064' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='4613' width='200' height='200'%3E%3Cpath d='M882.553 207.403l-66.652-66.652L894.352 62.3s67.244-1.399 67.244 65.845l-79.043 79.258z m-727.882 34.214v627.609H782.28V443.348l89.658-89.658v515.536c0 49.518-40.14 89.658-89.658 89.658H154.671c-49.518 0-89.658-40.14-89.658-89.658V241.617c0-49.518 40.14-89.658 89.658-89.658h515.536l-89.658 89.658H154.671zM378.817 645.08v-67.244l33.622-33.622 67.199 67.199-33.578 33.667h-67.243z m458.965-392.789L502.021 588.967 434.853 521.8l336.219-336.219 66.71 66.71z' fill='%230F0F0F' p-id='4614'%3E%3C/path%3E%3C/svg%3E");
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
  // border: 1px solid #000;
  margin-top: 10px;
}
.icon{
  user-select: none;
  width: 50px;
  height: 50px;
}
.text{
  margin-top: 20px;
  font-size: 12px;
  color: white;
  text-align: center;
  // white-space: nowrap; /* 禁止换行 */
  overflow: hidden;    /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 显示省略号 */
  width: 100%;
  user-select: none;
}
.continer:hover{
  background-color: rgba(164, 164, 170, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
  cursor: pointer;
}
.dec{
  position: fixed;
  font-size: 12px;
  max-width: 150px;
  user-select: none;
  z-index: 1000;
  backdrop-filter: blur(5px);
  color: white;
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
