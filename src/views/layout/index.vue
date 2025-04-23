<template>
<div class="outer-container">
  <div class="headline">lucky的导航栏</div>
  <div class="container">
    <div v-for="i in 50" :key="i">
      <webicon src="https://www.baidu.com/favicon.ico" text="百度1111111111111111111111111111111111111" id="i" />
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import webicon from '@/components/webicon.vue'
import {useLoginStore} from '@/stores/user'


const loginStore = useLoginStore()
const userInfo = loginStore.userinfo
console.log(userInfo)

</script>


<style lang="scss" scoped>
:global(html), :global(body) {
  margin: 0;
  padding: 0;
  height: 100%;
}
.outer-container{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.headline{
  margin: 10px auto;
  font-size: 50px;

}
.container {
  box-sizing: border-box;
  padding: 0 40px; // 距离视口左右20px

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); // 调整最小列宽
  gap: 20px; // 统一控制间距
  max-width: 1200px; // 限制最大宽度
  margin: 0 auto; // 水平居中
  // border: 1px solid red;

}




</style>
