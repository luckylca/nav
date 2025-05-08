<template>
<div class="container">
  <div class="chose1" :class="{ active: showArrows }">&lt;</div>
  <img :src="SearchEngineList[index].icon" alt="" class="Search_engine" @mouseenter="showArrows = true" @mouseleave="showArrows = false" @click="changeengine"/>
  <div class="chose2" :class="{ active: showArrows }">&gt;</div>
  <input type="text" placeholder="请输入内容" class="input-data"/>
  <img src="../assets/搜索.svg" alt="" class="searchbutton" />
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showArrows = ref(false);
const index = ref(2)
const SearchEngineList = ref([
  {
    name: 'bing',
    icon: 'https://cn.bing.com/favicon.ico',
    id: 1
  },
  {
    name: 'google',
    icon: 'https://www.google.com/favicon.ico',
    id: 2
  },
  {
    name: 'baidu',
    icon: 'https://www.baidu.com/favicon.ico',
    id: 3
  },
  {
    name: 'bilbil',
    icon: 'https://www.bilibili.com/favicon.ico',
    id: 4
  },
]);

const changeengine = () => {



  console.log('change search engine');
}


</script>

<style lang="scss" scoped>
.container{
  width: 60vw;
  border: 1px solid red;
  height: 50px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #f0f0f0;
  position: relative;
}
.Search_engine{
  max-width: 25px;
  max-height: 25px;
  border-radius: 50%;
  margin-left: 13px;
  position: absolute;
  left: 0;
  top: 11px;
}
.chose1{
  width: 10px;
  height: 30px;
  position: absolute;
  left: 5px;
  top: 16px;
  font-size: 10px;
  opacity: 0;
}
.chose2{
  width: 10px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 38px;
  top: 16px;
  font-size: 10px;
  opacity: 0;
}
.chose1, .chose2 {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.chose1.active, .chose2.active {
  opacity: 1;
}
.searchbutton{
  width: 20px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}
.input-data{
  border-radius: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #f0f0f0;
  outline: none;
  border: none;
}


</style>
