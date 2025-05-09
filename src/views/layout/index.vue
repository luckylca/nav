<template>
<div class="outer-container">
  <div style="width: 100%; position: absolute; top: 0; left: 0; z-index: 1000">
    <topnav/>
  </div>
  <div style="width: 100%; position: absolute; top: 0; left: 0; z-index: 999" class="container">
    <div class="time">{{ formattedTime }}</div>
    <websearch/>
    <div class="container_item">
      <div v-for="(item , i) in userInfo" :key="i">
        <webicon :src="item.src" :text="item.name" :dec="item.dec" id="i" :mode="mode" @click="handleClick(i)" />
      </div>
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
  <el-dialog
    v-model="dialogVisible"
    title="提示"
    width="30%"
  >
    <span>是否删除这条网址</span>
    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </template>
  </el-dialog>
  <img src="../../assets/设置.svg" alt="" class="tabbarbutton" id="tabbarbutton" />
  <div class="tabbar" id="tabbar">
    <div><img src="../../assets/编辑.svg" alt="" class="settingimg1" @click="handleEditClick"></div>
    <div><img src="../../assets/删除.svg" alt="" class="settingimg3" @click="handleDeleteClick"></div>
    <div><img src="../../assets/添加.svg" alt="" class="settingimg2" @click="handleAddClick"></div>
  </div>
</div>
</template>
<script setup lang="ts">
import webicon from '@/components/webicon.vue'
import websearch from '@/components/websearch.vue'
import {useLoginStore} from '@/stores/user'
import { ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus'
import { onMounted, ref } from 'vue'
import { getwebinfo } from '../../apis/user'
import topnav from './components/topnav/index.vue'
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
const dialogVisible = ref(false)
const pretimmer = ref<number | undefined>(undefined)

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

// 定时器引用
let intervalId: number | null = null

const confirm = () => {
  loginStore.deleteUser(index)
  dialogVisible.value = false
}
const handkeydown = (event: KeyboardEvent) => {
  if((mode.value == 1 || mode.value == 3) && event.key === 'Escape' && !pretimmer.value) {
    // Start a timer when ESC is pressed
    pretimmer.value = setTimeout(() => {
      mode.value = 0
      dialogVisible.value = false
      pretimmer.value = undefined
    }, 1000) // 1 second delay for long press
  }
}

// Add keyup handler to cancel the timer if key is released too soon
const handkeyup = (event: KeyboardEvent) => {
  if(event.key === 'Escape' && pretimmer.value) {

    clearTimeout(pretimmer.value)
    pretimmer.value = undefined
  }
}

// Don't forget to add this event listener in onMounted

const handleClick = (i: number) => {
  console.log(mode.value)
  if(mode.value==0){
    const url = userInfo.value[i].url;
    window.open(url, '_blank');
  }
  if(mode.value==1){
    dialogVisible.value = true
    index = i
  }
  if(mode.value==3){
    formDialog.value = true
    index = i
    tmmpform.value = {
      name: userInfo.value[i].name,
      dec: userInfo.value[i].dec,
      src: userInfo.value[i].src,
      url: userInfo.value[i].url
    }
  }
}
const handleDeleteClick = () => {
  mode.value = 1
  ElMessage('长按ESC键退出删除模式.')
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
const handleEditClick = () => {
  mode.value = 3
  ElMessage('长按ESC键退出编辑模式.')
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

const submitForm = async () => {
  if(mode.value==2){
    mode.value = 0
    // if(tmmpform.value.url == " "){
    //   ElMessage.error('请填写网址')
    // }
    // else
    // {
    //   let tempform = await getwebinfo(tmmpform.value.url)
    //   if(tmmpform.value.name == " "){
    //     tmmpform.value.name = tempform.name
    //   }
    //   if(tmmpform.value.src == " "){
    //     tmmpform.value.src = tempform.src
    //   }
    //   if(tmmpform.value.dec == " "){
    //     tmmpform.value.dec = tempform.dec
    //   }
    // }
    loginStore.adduserinfo(tmmpform.value.name, tmmpform.value.dec, tmmpform.value.url, tmmpform.value.src)
  }
  if(mode.value==3){
    loginStore.userinfoupdata(index,tmmpform.value.name, tmmpform.value.dec, tmmpform.value.url, tmmpform.value.src)
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
  window.addEventListener('keydown', handkeydown);
  window.addEventListener('keyup', handkeyup);
    // 初始化时间
  formattedTime.value = formatTime(currentTime.value)

  // 每秒更新时间
  intervalId = window.setInterval(() => {
    currentTime.value = new Date()
    formattedTime.value = formatTime(currentTime.value)
  }, 1000)

});
</script>


<style lang="scss" scoped>
:global(html), :global(body) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.outer-container{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.time{
  text-align:center;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 10px;
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
  z-index: 1000;
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
  height: 200px;
  background-color: white;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.08),
    0 4px 8px rgba(0,0,0,0.06),
    0 8px 16px rgba(0,0,0,0.04),
    0 16px 24px rgba(0,0,0,0.03);
  z-index: 999;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.settingimg1{
  width: 100%;
  height: 40px;
  margin-top: 10px;
  z-index: 1000;

}
.settingimg2{
  width: 100%;
  height: 40px;
  z-index: 1000;
}
.settingimg3{
  width: 100%;
  height: 40px;
  z-index: 1000;
}
.container{
  box-sizing: border-box;
  margin-top: 100px;
}
.container_item {
  box-sizing: border-box;
  padding-left: 40px; // 距离视口左右20p
  padding-right: 40px; // 距离视口左右20px
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); // 调整最小列宽
  gap: 20px; // 统一控制间距
  max-width: 1300px; // 限制最大宽度
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  border: 1px solid red;

}




</style>
