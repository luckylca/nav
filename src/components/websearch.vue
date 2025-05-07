<template>
<div class="continer">
  <img :src="SearchEngineList[index].icon" alt="" class="Search_engine"  @click="changeengine"/>
  <input type="text" placeholder="请输入内容" class="input-data"/>
  <img src="../assets/搜索.svg" alt="" class="searchbutton" />
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import search360 from '../assets/webicon/360搜索.png'
import baidu from '../assets/webicon/百度.png'
import bing from '../assets/webicon/必应.png'
import google from '../assets/webicon/谷歌.png'
import zhihu from '../assets/webicon/知乎.png'
import bilbil from '../assets/webicon/icon_bilibili.png'

const index = ref(2)
const SearchEngineList = ref([
  {
    name: 'bing',
    icon: bing,
    id: 1
  },
  {
    name: 'google',
    icon: google,
    id: 2
  },
  {
    name: 'baidu',
    icon: baidu,
    id: 3
  },
  {
    name: 'zhihu',
    icon: zhihu,
    id: 4
  },
  {
    name: 'bilbil',
    icon: bilbil,
    id: 5
  },
  {
    name: '360搜索',
    icon: search360,
    id: 6
  },
]);

const changeengine = () => {
  console.log('change search engine');
}



</script>

<style>
.continer{
  width: 60vw;
  border: 1px solid red;
  height: 100px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #f0f0f0;
  position: relative;
}
.Search_engine{
  max-width: 30px;
  max-height: 30px;
  border-radius: 50%;
  margin-left: 10px;
  position: absolute;
  left: 0;
  top: 4px;
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
