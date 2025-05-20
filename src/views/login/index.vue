<template>
<div class="layout">
    <div class="login-container">
      <div v-if="isLogin" class="mention">登录</div>
      <div v-else class="mention">注册</div>
      <div class="form-container">
        <el-form
        ref="form"
        :model="formdata"
        :rules="rules"
        label-width="80px"
        class="login-form"
        :inline="true"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formdata.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formdata.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="协议" prop="agreement">
          <el-checkbox v-model="formdata.agreement" class="agreementtext">我同意隐私条款和服务协议</el-checkbox>
        </el-form-item>
        </el-form>
    </div>
    <div class="but-container">
      <div class="login-button" v-show="isLogin" @click="loginclick">登录</div>
      <div class="login-button" v-show="!isLogin" @click="registerclick">注册</div>
    </div>
    <div @click="changeMode" v-show="isLogin" style="font-size: 13px;margin-top: 10px;">如果未注册，请点击这里注册</div>
    <div @click="changeMode" v-show="!isLogin" style="font-size: 13px;margin-top: 10px;">如果已注册，请点击这里登录</div>
  </div>
</div>

</template>
<script setup lang="ts">
// import { getLogin } from '@/apis/user';
import { ref } from 'vue';
import { useLoginStore } from '@/stores/user';
import {getLogin} from '@/apis/user';
import { getreg } from '@/apis/user';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
import type { FormInstance, FormItemRule } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
const loginStore = useLoginStore();
const router = useRouter();
const formdata = ref({
  username: '',
  password: '',
  agreement: false,
})
const form = ref<FormInstance | null>(null)
const isLogin = ref(true)
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
  // agreement: [
  //   { required: true, message: '请勾选协议', trigger: 'change' },
  // ],
  agreement:[
    {
      validator: (rule: FormItemRule, value: boolean, callback: (error?: Error) => void) => {
        if (!value) {
          return callback(new Error('请同意隐私条款和服务协议'))
        }
        callback()
      }
    }
  ]
}
const loginclick = async () => {
  if (!form.value) return;
  form.value.validate(async (valid) => {
    if (valid) {
      const res = await getLogin(formdata.value.username, formdata.value.password)
      console.log(res)
      if (res.data.code == 200) {
        await loginStore.login(formdata.value.username, formdata.value.password ,res.data.token)
        ElMessage({
          type: 'success',
          message: '登录成功',
          duration: 2000
        })
        router.replace({path: '/'})
      }
      else if(res.data.code == 404){
        ElMessage({
          type: 'error',
          message: '登录失败，用户不存在，请先注册',
          duration: 2000
        })
      }
      else if(res.data.code == 401){
        ElMessage({
          type: 'error',
          message: '登录失败，密码错误',
          duration: 2000
        })
      }
    }
    else {
      ElMessage({
        type: 'error',
        message: '登录失败，请检查用户名和密码',
        duration: 2000
      })
    }
  })
}
const changeMode = () => {
  isLogin.value = !isLogin.value
  formdata.value.username = ''
  formdata.value.password = ''
  formdata.value.agreement = false
}
const registerclick = ()=>{
  if (!form.value) return;
  form.value.validate(async (valid) => {
    if (valid) {
      const res = await getreg(formdata.value.username, formdata.value.password)
      console.log(res)
      if (res.data.code == 200) {
        loginStore.register(formdata.value.username, formdata.value.password,res.data.token)
        ElMessage({
          type: 'success',
          message: '注册成功',
          duration: 2000
        })
        router.replace({path: '/'})
      } else {
        ElMessage({
          type: 'error',
          message: '你的用户名重复了',
          duration: 2000
        })
      }
    } else {
      ElMessage({
        type: 'error',
        message: '注册失败',
        duration: 2000
      })
    }
  })
}
</script>


<style lang="scss" scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; // 防止意外滚动
  min-width: 100vw;
  min-height: 100vh;
}
.layout{
  background: url('../../assets/background.jpg') no-repeat center center/cover; /* Corrected URL */
  height: 100vh;
  width: 100vw;
  // backdrop-filter: blur(10px);
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.agreementtext{
  padding: 0 10px; /* Corrected syntax for padding */
}
.login-container{
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 16px;
  border: 2px solid transparent; /* 透明边框 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 内嵌阴影 */
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.6);
}


/* 调整所有表单标签的字体大小 */
:deep(.el-form-item__label) {
  font-size: 14px; /* 设置标签字体大小 */
  font-weight: 500; /* 可选：设置字体粗细 */
}
.form-container{
  position: relative;


  width: 100%; /* Added width for better layout */
  padding-left: 60px; /* Added padding for spacing */
}
.login-button:hover {
      transform: scale(1.05); /* 悬停时放大 */
      transition: transform 0.3s ease-in-out; /* 平滑过渡 */
}
.but-container{
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 80px;
}
.login-button{
  width: 200px;
  height: 45px;
  line-height: 30px;
  text-align: center;
  background-color: #409eff;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mention{
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}
</style>
