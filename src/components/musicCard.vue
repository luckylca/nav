<template>
<div class="container">
  <div class="search">
    <input type="text" placeholder="Search for music..." class="searchInput" v-model="inputText"/>
    <img src="../assets/搜索.svg" alt="" class="search_button" @click="search"/>
  </div>
  <!-- <div class="musicName">Song Title</div> -->
  <div class="musicCard">
    <div class="preDiv">
      <img src="../assets/music/上一个.png" alt="" class="preMusic" @click="preMusic" />
    </div>
    <div class="playPauseDiv">
      <div class="musicName" v-show="isPlaying" @click="pauseMusic" v-on:wheel="handleWheel">{{ realAudioInfo.song }}</div>
      <img src="../assets/music/播放.png" alt="" class="pauseMusic" v-show="!isPlaying" @click="playMusic"/>
    </div>
    <div class="nextDiv">
      <img src="../assets/music/下一个.png" alt="" class="nextMusic" @click="nextMusic"/>
    </div>
  </div>
  <div class="musicList" v-show="isList">
    <div v-for="(item,i) in musicList" :key="item.id" class="musicItem">
      <div class="musicInfo" @click="musicStart(item.id,i)">
        <div class="song">{{ item.song }}</div>
        <div class="artist">{{ item.singer }}</div>
      </div>
    </div>
  </div>
  <audio
    ref="audioRef"
    class="audio"
    :src="audioSrc"
    @canplay="onCanPlay"
    loop
  ></audio>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {getMusicListApi,getMusicApi} from '../apis/music';
const audioSrc = ref('http://m701.music.126.net/20250512232809/a607947a63a21ea70416ee68786e85c5/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/21437209997/c67b/affc/9c70/f128f990576f52957c574c2f9f0db2f5.m4a?vuutv=aSJyNjIY7+2utrgh8x6enxpvTm7PyFPuVZX1S4qvD4wPVnedZQWA/gixjfliYtSy7mJxSMsumt9R25mJMyOuGkqLaPhxLUQ90I83yitFco0=')
const inputText = ref('')
interface MusicItem {
  id: number;
  song: string;
  singer: string;
  cover: string;
}
const realAudioInfo = ref({
  id: 0,
  song: '',
  singer: '',
  cover: ''
})
const audioRef = ref<HTMLAudioElement | null>(null)
const musicList = ref<MusicItem[]>([])
const isList = ref(false)
const isPlaying = ref(false)
const volumeLevel = ref(50)
const musicIndex = ref(0)
const imgurl = ref("https://p3.music.126.net/mQcab-6L7D-w1lRxmYB7MQ==/109951168015051713.jpg")
const playMusic = () => {
  if (audioRef.value) {
    isPlaying.value = true;
    audioRef.value.play();
  }
}
const pauseMusic = () => {
  if (audioRef.value) {
    isPlaying.value = false;
    audioRef.value.pause();
  }
}
const handleWheel = (event: WheelEvent) => {
  if (event.deltaY < 0) {
    if (audioRef.value) {
      audioRef.value.volume = Math.min(audioRef.value.volume + 0.05, 1);
      console.log(audioRef.value.volume);
    }
  } else if (event.deltaY > 0) {
    if (audioRef.value) {
      audioRef.value.volume = Math.max(audioRef.value.volume - 0.05, 0);
      console.log(audioRef.value.volume);
    }
  }
}
const onCanPlay = () => {
  audioRef.value?.play().catch(err => {
    console.error('播放失败:', err);
  });
};
const preMusic = () => {
  if (audioRef.value) {
    if (musicIndex.value > 0) {
      musicIndex.value--;
    } else {
      musicIndex.value = musicList.value.length - 1;
    }
    musicStart(musicList.value[musicIndex.value].id, musicIndex.value);
  }
}
const nextMusic = () => {
  if (audioRef.value) {
    if (musicIndex.value < musicList.value.length - 1) {
      musicIndex.value++;
    } else {
      musicIndex.value = 0;
    }
    musicStart(musicList.value[musicIndex.value].id, musicIndex.value);
  }
}

async function getMusicList(word: string) {
  return await getMusicListApi(word)

}
async function getMusic(id: number) {
  return await getMusicApi(id);
}
function search(){
  isList.value = true;
  getMusicList(inputText.value).then((res) => {
      musicList.value = res.data.data;
      console.log(musicList.value);
  })
}
function musicStart(id: number, index: number) {
  getMusic(id).then((res) => {
    console.log(res.data.data);
    const url = res.data.data.url;
    realAudioInfo.value = {
      id: res.data.data.id,
      song: res.data.data.song,
      singer: res.data.data.singer,
      cover: res.data.data.cover
    }
    imgurl.value = res.data.data.cover;
    musicIndex.value = index;
    audioSrc.value = url;
    if (audioRef.value) {
      audioRef.value.volume = volumeLevel.value / 100;
    }
    document.documentElement.style.setProperty('--imgurl', `url(${imgurl.value})`);
    isPlaying.value = true;
    audioRef.value?.play();
  })
}
</script>
<style scoped lang="scss">
:root{
  --imgurl: url("https://p3.music.126.net/mQcab-6L7D-w1lRxmYB7MQ==/109951168015051713.jpg");
}
.container{
  width: 200px;
  border: 1px solid #000;
  border-top:none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  z-index: -1;
  pointer-events: auto;
  background-color: rgba(224, 224, 224, 0.5);
}
.search{
  width: 200px;
  height: 30px;
}
.searchInput{
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding-left: 10px;
}
.search_button{
  width: 28px;
  height: 28px;
  position: relative;
  right: -170px;
  top: -30px;
  border-radius: 50%;
  padding: 5px;
}
.musicName{
  width: 100px;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  user-select: none;
  overflow:hidden;
  text-overflow: ellipsis;
  padding: 0 2px;
  box-sizing: border-box;
}
.musicName:hover{
  border: 2px solid #e0e0e0;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: scale 0.3s;
  transform: scale(1.1);
  border-radius: 20px;
}
.musicCard{
  width:200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  border-radius: 10px;

}
.musicCard::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--imgurl);
  background-size: cover;
  background-position: center;
  opacity: 0.5; /* 调整透明度 */
  z-index: -1;
}
.preDiv{
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 50%;
  padding: 5px 5px;
  box-sizing: border-box;
  user-select: none;
}
.preDiv:hover{
  border: 2px solid rgba(224, 224, 224, 0.5);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: scale 0.3s;
  transform: scale(1.1);
}
.nextDiv{
  width: 40px;
  height: 40px;
  padding: 5px 5px;
  margin-left: 5px;
  border-radius: 50%;
  user-select: none;
}
.nextDiv:hover{
  border: 2px solid rgba(224, 224, 224, 0.5);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: scale 0.3s;
  transform: scale(1.1);
}
.playPauseDiv{
  width: 100px;
  height: 30px;
  // border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.musicInfo{
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  // border:1px solid red;
  box-sizing: border-box;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.song{
  width: 150px;
  font-size: 14px;
  font-weight: bold;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right:20px;
  text-align: center;
  margin-left: 20px;
  user-select: none;
}
.artist{
  width: 90px;
  font-size: 12px;
  color: #666;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
  text-align: center;
  user-select: none;
}
.musicItem:nth-child(even) {
  background-color: #ffffff;
}
.musicItem:nth-child(odd) {
  background-color: #f0f0f0;
}
.musicItem:hover {
  background-color: #e0e0e0;
}
.preMusic{
  width: 25px;
  height: 100%;
  user-select: none;
}
.nextMusic{
  width: 25px;
  height: 100%;
  user-select: none;
}
.playMusic{
  width: 100%;
  height: 100%;
}
.pauseMusic{
  width: 30px;
  height: 100%;
  border-radius: 50%;
  margin: 0 auto;
}
.pauseMusic:hover{
  border: 2px solid #e0e0e0;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: scale 0.3s;
  transform: scale(1.1);
}
</style>
