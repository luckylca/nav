import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getLogin} from '@/apis/user'
import {getreg} from '@/apis/user'

export const useLoginStore = defineStore('login', () => {
  const account = ref()
  const password = ref()
  const agreement = ref(false)
  async function login() {
    const response = await getLogin(account.value, password.value)
    console.log(response)
  }
  async function register() {
    const response = await getreg(account.value, password.value)
    console.log(response)
  }


  return { account, password, login, register, agreement }
})
