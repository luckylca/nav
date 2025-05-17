<template>
<div class="container">
  <div class="chose1" :class="{ active: showArrows }">&lt;</div>
  <img :src="SearchEngineList[index].icon" alt="" class="Search_engine" v-on:wheel="handleWheel" @mouseenter="changeSearchEngine" @mouseleave="reset"/>
  <div class="chose2" :class="{ active: showArrows }">&gt;</div>
  <input type="text" placeholder="请输入内容" class="input-data" v-model="inputText" @keyup.enter="search"/>
  <img src="../assets/搜索.svg" alt="" class="search_button" @click="search"/>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
const showArrows = ref(false);
const index = ref(0);
const SearchEngineList = ref([
  {
    name: 'cn.bing',
    icon: 'https://cn.bing.com/favicon.ico',
    id: 0
  },
  {
    name: 'google',
    icon: 'https://www.google.com/favicon.ico',
    id: 1
  },
  {
    name: 'baidu',
    icon: 'https://www.baidu.com/favicon.ico',
    id: 2
  },
  {
    name: 'bilibili',
    icon: 'https://www.bilibili.com/favicon.ico',
    id: 3
  },
]);
const inputText = ref('');
const search = () => {

  if(inputText.value == '')
  {
    ElMessage('请输入内容')
    return
  }
  if(index.value== 0)
    {
      const url = `https://cn.bing.com/search?q=${inputText.value}`;
      window.open(url, '_blank');
    }
  else if(index.value == 1)
    {
      const url = `https://www.google.com/search?q=${inputText.value}`;
      window.open(url, '_blank');
    }
  else if(index.value == 2)
    {
      const url = `https://www.baidu.com/s?wd=${inputText.value}`;
      window.open(url, '_blank');
    }
  else if(index.value == 3)
    {
      const url = `https://www.bilibili.com/search?keyword=${inputText.value}`;
      window.open(url, '_blank');
    }
}

const handleWheel = (event: { deltaY: number; }) => {
  if(showArrows.value == true)
{
  if (event.deltaY < 0) {
    index.value--;
    if (index.value < 0) {
      index.value = SearchEngineList.value.length;
    }

  } else if (event.deltaY > 0) {
    index.value++;
    if (index.value >= SearchEngineList.value.length) {
      index.value = 0;
    }

  }
}

}
const changeSearchEngine = () => {
  showArrows.value = true;
  document.body.style.overflow = 'hidden'
}
const reset = () => {
  showArrows.value = false;
  document.body.style.overflow = ''
}

</script>

<style lang="scss" scoped>

.container{
  width: 60vw;
  height: 50px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #f0f0f0;
  position: relative;
  opacity: 0.9;
}
.Search_engine{
  max-width: 25px;
  max-height: 25px;
  border-radius: 50%;
  margin-left: 13px;
  position: absolute;
  left: 0;
  top: 13px;
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
.search_button{
  width: 20px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}
.search_button:hover{
  transform: scale(1.2);
  transition: all 0.3s ease;
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
  font-size: 15px;
}


</style>
