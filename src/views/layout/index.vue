<template>
<div class="outer-container">
  <div class="headline">lucky的导航栏</div>
  <div class="container">
    <div v-for="(item , i) in userInfo" :key="i">
      <webicon :src="item.src" :text="item.name" id="i" @click="handleClick(i)" />
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
</div>
</template>
<script setup lang="ts">
import webicon from '@/components/webicon.vue'
import {useLoginStore} from '@/stores/user'

import { ref } from 'vue'
let index = -1
const formDialog = ref(false)
const loginStore = useLoginStore()
const userInfo = loginStore.userinfo
const tmmpform = ref({
  name: '',
  dec: '',
  src: '',
  url:''
})
const handleClick = (i: number) => {
  formDialog.value = true
  index = i
  const selctedUser = userInfo[i]
  tmmpform.value = {
    name: selctedUser.name,
    dec: selctedUser.dec,
    src: selctedUser.src,
    url: selctedUser.url
  }
}
const submitForm = () => {

  if (index !== -1) {
    loginStore.userinfoupdata(index, tmmpform.value.name, tmmpform.value.dec, tmmpform.value.url, tmmpform.value.src)
  }
  formDialog.value = false
}
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
