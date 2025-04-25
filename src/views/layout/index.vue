<template>
<div class="outer-container">
  <div class="headline">lucky的导航栏</div>
  <div class="container">
    <div v-for="(item , i) in userInfo" :key="i">
      <webicon :src="item.src" :text="item.name" id="i" :mode="mode" @click="handleClick(i)" />
    </div>
  </div>
  <ElDialog v-model="formDialog" title="表单示例" width="40%">
    <ElForm :model="tmmpform" label-width="80px">
      <ElFormItem label="名称">
        <ElInput v-model="tmmpform.name" />
      </ElFormItem>
      <ElFormItem label="描述">
        <ElInput v-model="tmmpform.dec" />
      </ElFormItem>
      <ElFormItem label="图标">
        <ElInput v-model="tmmpform.src" />
      </ElFormItem>
      <ElFormItem label="链接">
        <ElInput v-model="tmmpform.url" />
      </ElFormItem>
    </ElForm>
    <template #footer>
      <ElButton @click="formDialog = false">取消</ElButton>
      <ElButton type="primary" @click="submitForm">提交</ElButton>
    </template>
  </ElDialog>
  <img src="../../assets/设置.svg" alt="" class="tabbarbutton" id="tabbarbutton" />
  <div class="tabbar" id="tabbar">
    <div><img src="../../assets/编辑.svg" alt="" class="settingimg1" @click="handleEditClick"></div>
    <div><img src="../../assets/添加.svg" alt="" class="settingimg2" @click="handleAddClick"></div>
  </div>
</div>
</template>
<script setup lang="ts">
import webicon from '@/components/webicon.vue'
import {useLoginStore} from '@/stores/user'

import { onMounted, ref } from 'vue'
let index = -1
const mode = ref(0)
const formDialog = ref(false)
const loginStore = useLoginStore()
const userInfo = ref(loginStore.userinfo)
const tmmpform = ref({
  name: '',
  dec: '',
  src: '',
  url:''
})
let temp1 = 0
const handleClick = (i: number) => {
  if(mode.value==0){
    const url = userInfo.value[i].url;
    window.open(url, '_blank');
  }
  if(mode.value==1){
    formDialog.value = true
    index = i
    const selctedUser = userInfo.value[i]
    tmmpform.value = {
      name: selctedUser.name,
      dec: selctedUser.dec,
      src: selctedUser.src,
      url: selctedUser.url
    }
  }
}
const handleEditClick = () => {
  mode.value = 1
}

const handleAddClick = () => {
  mode.value = 2
  formDialog.value = true
  index = -1
  tmmpform.value = {
    name: '',
    dec: '',
    src: '',
    url: ''
  }
}
const showtabbar = () => {
  temp1 = 1
  tabbar.style.opacity = '1';
}
const hidetabbar = () => {
  if (temp1 === 1) {
    temp1 = 0
    tabbar.style.opacity = '0';
    return
  }

}
const submitForm = () => {
  if(mode.value==2){
    mode.value = 0
    loginStore.adduserinfo(tmmpform.value.name, tmmpform.value.dec, tmmpform.value.url, tmmpform.value.src)
  }

  if (mode.value==1) {
    loginStore.userinfoupdata(index, tmmpform.value.name, tmmpform.value.dec, tmmpform.value.url, tmmpform.value.src)
  }
  formDialog.value = false
}
onMounted(() => {
  const target = document.getElementById('tabbarbutton');
  const tabbar = document.getElementById('tabbar');
  tabbar.addEventListener('mouseenter', showtabbar);
  tabbar.addEventListener('mouseleave', hidetabbar);
  target.addEventListener('mouseenter', showtabbar);
  target.addEventListener('mouseleave', hidetabbar);
});
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
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
}
.tabbarbutton{
  position: fixed;
  bottom: 125px;
  right: 125px;
  height: 50px;
  width: 50px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  border-radius: 50%;
  transition: transform 0.5s ease;
  z-index: 3;
}
.tabbarbutton:hover{
  transform: rotate(180deg);
}
.tabbar{
  position: fixed;
  width: 60px;
  border-radius: 40px;
  bottom: 120px;
  right: 120px;
  height: 160px;
  background-color: white;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.08),
    0 4px 8px rgba(0,0,0,0.06),
    0 8px 16px rgba(0,0,0,0.04),
    0 16px 24px rgba(0,0,0,0.03);
  z-index: 2;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.settingimg1{
  width: 100%;
  height: 40px;
  margin-top: 10px;

}
.settingimg2{
  width: 100%;
  height: 40px;
}
.container {
  box-sizing: border-box;
  padding: 0 40px; // 距离视口左右20p
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); // 调整最小列宽
  gap: 20px; // 统一控制间距
  max-width: 1200px; // 限制最大宽度
  margin: 0 auto; // 水平居中
  // border: 1px solid red;

}




</style>
