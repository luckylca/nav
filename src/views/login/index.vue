<template>
<div class="layout">
    <div class="login-container">
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
          <el-checkbox v-model="formdata.agreement" class="agreementtext">我同意隐私协议</el-checkbox>
        </el-form-item>
        </el-form>
    </div>
    <div class="but-container">
      <div class="login-button" @click="loginclick">登录</div>
      <div class="login-button" @click="resetForm">重置</div>
    </div>
  </div>
</div>

</template>
<script setup lang="ts">
// import { getLogin } from '@/apis/user';
import { ref } from 'vue';
// import { useLoginStore } from '@/stores/user';
// const loginStore = useLoginStore();
const formdata = ref({
  username: '',
  password: '',
  agreement: false,
})
const form = ref(null)
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
  agreement: [
    { required: true, message: '请勾选协议', trigger: 'change' },
  ],
}
const loginclick = ()=>{



}
const resetForm = ()=>{
  formdata.value.username = '';
  formdata.value.password = '';
  formdata.value.agreement = false;
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
  z-index: -1;
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
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
  justify-content: space-between;
  width: 100%;
  padding: 0 80px;
  margin-top: 20px;
}
.login-button{
  width: 90px;
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

</style>
