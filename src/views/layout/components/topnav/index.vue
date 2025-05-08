<template>
<div class="continer">
  <img src="https://github.com/favicon.ico" alt="" />
  <img src="https://github.com/favicon.ico" alt="" class="github" >
  <div class="headline">{{loginStore.userdata.account}}的导航栏</div>
  <div class="user">
    {{loginStore.userdata.account}}
  </div>
  <div @click="logout">退出登录</div>
</div>
</template>
<script lang="ts" setup>
import {useLoginStore} from '@/stores/user'

const loginStore = useLoginStore()






const logout = () => {
  window.location.href = '/login'
}
</script>
<style lang="scss" scoped>
.continer{
  width: 100%;
  border: 1px solid red;
  height: 50px;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  background-color: gray;
}
.github{
  margin-left: 5px;


}
.user{
  padding: 0 5px;
}
.headline{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

</style>
