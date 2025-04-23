import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getLogin} from '@/apis/user'
import {getreg} from '@/apis/user'

export const useLoginStore = defineStore('login', () => {
  const userinfo = ref([])
  async function login(account:string, password:string) {
    const response = await getLogin(account, password)
    response.data = userinfo
  }
  async function register(account:string, password:string) {
    const response = await getreg(account, password)
    console.log(response)
    response.data = userinfo
  }


  return { login, register, userinfo }
})
