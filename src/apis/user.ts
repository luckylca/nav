import { instance } from "@/utils/http";
export const getLogin = async (account: string, password: string) => {
  return instance.get('/login', {
    params: {
      account,
      password
    }
  });
}
export const getreg = async (account: string, password: string) => {
  return instance.get('/register', {
    params: {
      account,
      password
    }
  });
}
export const getwebinfo = async (url:string) => {
  return instance.get('/getwebinfo', {
    params: {
      url
    }
  });
}
export const getUserInfo = async (account: string, token: string) => {
  return instance.get('/userinfo', {
    params: {
      account: account,
      token: token
    }

  });
}
export const saveUserInfo = async (account: string, token: string, userinfo: object[]) => {
  return instance.post('/userinfo', {
    params: {
      account: account,
      token: token
    },
    data: userinfo
  });
}
