<template>
<div class="continer">
  <img src="../../../../assets/music/音乐.png" alt="" class="music" @mouseenter="showMusicCard"/>
  <img src="https://github.com/favicon.ico" alt="" class="github" @click="openGithub">
  <div class="headline animate__animated"
    onmouseover="this.classList.add('animate__flip')"
    onmouseout="this.classList.remove('animate__flip')"
  >{{loginStore.userdata.account}}的导航栏</div>
  <div class="user" v-if="loginStore.userdata.account">
    {{loginStore.userdata.account}}
  </div>
  <div class="user" v-else @click = "openLogin">
    未登录
  </div>
  <div @click="logout">退出登录</div>
</div>
<div class="musicClass" id="musicClass">
  <musicCard />
</div>
</template>
<script lang="ts" setup>
import {useLoginStore} from '@/stores/user'
import musicCard from '@/components/musicCard.vue'
import { onMounted,ref } from 'vue'
import {saveUserInfo} from '@/apis/user'
const loginStore = useLoginStore()
const hideTimeout = ref<number | undefined>(undefined)
const openGithub = () => {
  window.open('https://github.com')
}
const showMusicCard = () => {
  clearTimeout(hideTimeout.value);
  const musicClass = document.getElementById('musicClass');
  if (musicClass) {
    musicClass.style.opacity = '1'
    musicClass.style.transition = 'opacity 0.5s'
  }
}
const hideMusicCard = () => {
  clearTimeout(hideTimeout.value);
  hideTimeout.value = setTimeout(() => {
    const musicClass = document.getElementById('musicClass')
    if (musicClass) {
      musicClass.style.opacity = '0'
      musicClass.style.transition = 'opacity 0.5s'
    }
  }, 5000)
}
const logout = () => {
  saveUserInfo(loginStore.userdata.account, loginStore.userdata.token, loginStore.userinfo);
  loginStore.logout();
  window.location.href = '/login'
}
const openLogin = () => {
  window.location.href = '/login'
}
onMounted(() => {
  const musicClass = document.getElementById('musicClass')
  const inputElement = musicClass.querySelector('input, textarea, [contenteditable]');
  musicClass.addEventListener('mouseenter', showMusicCard);
  musicClass.addEventListener('mouseleave', hideMusicCard);
  if (inputElement) {
    inputElement.addEventListener('focus', () => {
      showMusicCard();
    });
    inputElement.addEventListener('blur', () => {
      hideMusicCard();
    });
  }
})
</script>
<style lang="scss" scoped>
.continer{
  width: 100%;
  // border: 1px solid red;
  height: 50px;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0px;
  margin-top: 0px;
  background: linear-gradient(135deg, rgba(230, 235, 240, 0.2), rgba(220, 225, 235, 0.9));
  backdrop-filter: blur(5px);
  position: relative;
}
.github{
  margin-left: 5px;
}
.music{
  width: 35px;
  height: 35px;
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
.musicClass{
  position: absolute;
  width: 200px;
  height: 100%;
  top: 100%;
  left: 0px;
  opacity: 0;
}
</style>
