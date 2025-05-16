import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('user', () => {
  const userdata = ref({
    account: '',
    password: '',
    token: '',
  })
  const userinfo = ref([
  {
    "name": "微博",
    "dec": "中国领先的社交媒体平台，分享实时动态和热点新闻。",
    "url": "https://www.weibo.com",
    "src": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.weibo.com&size=128",
    "id": 0
  },
  {
    "name": "知乎",
    "dec": "中文互联网高质量知识分享社区，涵盖各领域专业问答。",
    "url": "https://www.zhihu.com",
    "src": "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.zhihu.com&size=128",
    "id": 1
  },
  {
    "name": "知乎专栏",
    "dec": "知乎旗下专业内容创作平台，支持深度文章发布与订阅。",
    "url": "https://zhuanlan.zhihu.com",
    "src": "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fzhuanlan.zhihu.com&size=128",
    "id": 2
  },
  {
    "name": "小红书",
    "dec": "生活方式分享社区，覆盖美妆、旅行、美食等领域。",
    "url": "https://www.xiaohongshu.com",
    "src": "https://www.xiaohongshu.com/favicon.ico",
    "id": 3
  },
  {
    "name": "B站",
    "dec": "中国年轻世代弹幕视频文化社区，涵盖动画、游戏等内容。",
    "url": "https://www.bilibili.com",
    "src": "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.bilibili.com&size=128",
    "id": 4
  },
  {
    "name": "抖音",
    "dec": "短视频社交平台，支持创意视频拍摄与全球用户互动。",
    "url": "https://www.douyin.com",
    "src": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.douyin.com&size=128",
    "id": 5
  },
  {
    "name": "CSDN",
    "dec": "全球最大中文IT技术社区，提供编程资源与开发者交流平台。",
    "url": "https://www.csdn.net",
    "src": "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.csdn.net&size=128",
    "id": 6
  },
  {
    "name": "力扣",
    "dec": "全球程序员算法学习平台，提供编程题库与竞赛对战功能。",
    "url": "https://leetcode.cn",
    "src": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fleetcode.cn&size=128",
    "id": 7
  },
  {
    "name": "X",
    "dec": "国际社交平台，支持实时信息分享与热点话题讨论。",
    "url": "https://twitter.com",
    "src": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftwitter.com&size=128",
    "id": 8
  },
  {
    "name": "YouTube",
    "dec": "全球最大视频分享平台，涵盖教育、娱乐等多领域内容。",
    "url": "https://www.youtube.com",
    "src": "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.youtube.com&size=128",
    "id": 9
  },
  {
    "name": "GitHub",
    "dec": "全球代码托管与协作开发平台，支持开源项目与版本管理。",
    "url": "https://github.com",
    "src": "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fgithub.com&size=128",
    "id": 10
  },
  {
    "name": "Qwen",
    "dec": "通义实验室研发的超大规模语言模型，提供智能对话与创作能力。",
    "url": "https://chat.qwen.ai",
    "src": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://chat.qwen.ai/&size=128",
    "id": 11
  },
  {
    "name": "吾爱破解",
    "dec": "国内知名软件安全与逆向分析论坛，汇聚技术爱好者。",
    "url": "https://www.52pojie.cn",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.52pojie.cn&size=128",
    "id": 12
  },
  {
    "name": "V2EX",
    "dec": "程序员友好型创意工作者社区，聚焦科技与商业话题。",
    "url": "https://www.v2ex.com",
    "src": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.v2ex.com&size=128",
    "id": 13
  },
  {
    "name": "NGA",
    "dec": "中国资深游戏玩家论坛，覆盖网络游戏与电子竞技领域。",
    "url": "https://bbs.nga.cn",
    "src": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fbbs.nga.cn&size=128",
    "id": 14
  },
  {
    "name": "百度贴吧",
    "dec": "基于兴趣主题的互动社区，支持话题讨论与内容分享。",
    "url": "https://tieba.baidu.com",
    "src": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftieba.baidu.com&size=128",
    "id": 15
  },
  {
    "name": "最右",
    "dec": "年轻人文化社区，主打幽默段子与热点话题互动。",
    "url": "https://www.izuiyou.com/",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.izuiyou.com&size=128",
    "id": 16
  },
  {
    "name": "博客园",
    "dec": "面向开发者的技术博客平台，支持原创文章与技术分享。",
    "url": "https://www.cnblogs.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.cnblogs.com&size=128",
    "id": 17
  },
  {
    "name": "DeepSeek",
    "dec": "人工智能大模型研发企业，提供多语言支持与智能服务。",
    "url": "https://www.deepseek.com",
    "src": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.deepseek.com&size=128",
    "id": 18
  },
  {
    "name": "菜鸟教程",
    "dec": "免费编程技术文档平台，涵盖多种开发语言与工具教程。",
    "url": "https://www.runoob.com",
    "src": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.runoob.com&size=128",
    "id": 19
  },
  {
    "name": "币安",
    "dec": "全球领先的区块链资产交易平台，提供多种加密货币交易服务。",
    "url": "https://www.binance.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.binance.com&size=128",
    "id": 20
  },
  {
    "name": "LINUX DO",
    "dec": "Linux技术交流社区，专注开源系统与运维开发讨论。",
    "url": "https://linux.do",
    "src": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Flinux.do&size=128",
    "id": 21
  },
  {
    "name": "Reddit",
    "dec": "社交新闻和讨论平台，用户可发布话题并参与社区投票与讨论。",
    "url": "https://www.reddit.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.reddit.com&size=128",
    "id": 22
  },
  {
    "name": "Quora",
    "dec": "问答式知识分享平台，用户可提出问题并获取专业或多样化解答。",
    "url": "https://www.quora.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.quora.com&size=128",
    "id": 23
  },
  {
    "name": "Instagram",
    "dec": "图片和短视频分享平台，主打视觉内容社交与网红文化传播。",
    "url": "https://www.instagram.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.instagram.com&size=128",
    "id": 24
  },
  {
    "name": "虎扑",
    "dec": "体育竞技社区，聚焦篮球、足球等赛事讨论与球迷互动。",
    "url": "https://bbs.hupu.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fbbs.hupu.com&size=128",
    "id": 25
  },
  {
    "name": "网易云音乐",
    "dec": "音乐流媒体平台，强调个性化推荐与用户评论社区氛围。",
    "url": "https://music.163.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fmusic.163.com&size=128",
    "id": 26
  },
  {
    "name": "QQ音乐",
    "dec": "腾讯旗下音乐流媒体服务，整合高音质资源与粉丝社群功能。",
    "url": "https://y.qq.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fy.qq.com&size=128",
    "id": 27
  },
  {
    "name": "Discord",
    "dec": "语音、视频和文本通信平台，支持社群实时互动与服务器搭建。",
    "url": "https://discord.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fdiscord.com&size=128",
    "id": 28
  },
  {
    "name": "微信读书",
    "dec": "微信生态内的阅读应用，提供电子书共享与好友阅读互动。",
    "url": "https://weread.qq.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fweread.qq.com&size=128",
    "id": 29
  },
  {
    "name": "Z-Library",
    "dec": "电子书资源库，提供大量免费书籍下载与文档共享服务。",
    "url": "https://zh.z-library.sk/",
    "src": "https://zh.z-library.sk/favicon.ico",
    "id": 30
  },
  {
    "name": "豆包",
    "dec": "字节跳动推出的多功能人工智能助手，支持多模态交互。",
    "url": "https://www.doubao.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.doubao.com&size=128",
    "id": 31
  },
  {
    "name": "百度地图",
    "dec": "百度旗下地图导航服务，集成实时路况、地点搜索与路线规划。",
    "url": "https://map.baidu.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fmap.baidu.com&size=128",
    "id": 32
  },
  {
    "name": "快手",
    "dec": "短视频社交平台，涵盖生活、娱乐与电商直播等内容。",
    "url": "https://www.kuaishou.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.kuaishou.com&size=128",
    "id": 33
  },
  {
    "name": "3DMGAME",
    "dec": "游戏资讯与下载平台，专注单机、电竞及主机游戏领域。",
    "url": "https://www.3dmgame.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.3dmgame.com&size=128",
    "id": 34
  },
  {
    "name": "懂车帝",
    "dec": "汽车信息与交易平台，提供车型对比、评测及二手车服务。",
    "url": "https://www.dongchedi.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.dongchedi.com&size=128",
    "id": 35
  },
  {
    "name": "微信文件传输助手",
    "dec": "微信内置工具，支持用户与个人微信账号间传输文件和消息。",
    "url": "https://filehelper.weixin.qq.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ffilehelper.weixin.qq.com&size=128",
    "id": 36
  },
  {
    "name": "百度网盘",
    "dec": "百度云存储服务，提供文件存储、分享及在线播放功能。",
    "url": "https://pan.baidu.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fpan.baidu.com&size=128",
    "id": 37
  },
  {
    "name": "Spotify",
    "dec": "全球音乐流媒体服务，提供个性化歌单推荐与跨设备同步功能。",
    "url": "https://open.spotify.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fopen.spotify.com&size=128",
    "id": 38
  },
  {
    "name": "Netflix",
    "dec": "影视流媒体平台，提供电影、剧集、纪录片等内容的在线观看。",
    "url": "https://www.netflix.com",
    "src": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwww.netflix.com&size=128",
    "id": 39
  },
])
  async function login(account:string, password:string,token:string) {
    userdata.value.account = account
    userdata.value.password = password
    userdata.value.token = token
  }
  async function register(account:string, password:string,token:string) {
    userdata.value.account = account
    userdata.value.password = password
    userdata.value.token = token
  }
function userinfoupdata(index: number, name: string, dec: string, url: string, src: string) {
  const updatedUser = {
    ...userinfo.value[index],
    name,
    dec,
    url,
    src,
    id: index
  }
  userinfo.value = [
    ...userinfo.value.slice(0, index),
    updatedUser,
    ...userinfo.value.slice(index + 1)
  ]
}
function adduserinfo(name: string, dec: string, url: string, src: string) {
  const newUser = {
    name,
    dec,
    url,
    src,
    id: userinfo.value.length
  }
  userinfo.value.push(newUser)
}
function deleteUser(index: number) {
  userinfo.value.splice(index, 1)
}
function changeWebOrder(oldIndex: number, newIndex: number) {
  const movedUser = userinfo.value[oldIndex]
  userinfo.value.splice(oldIndex, 1)
  userinfo.value.splice(newIndex, 0, movedUser)
  userinfo.value = [...userinfo.value]
}
function logout() {
  userdata.value = {
    account: '',
    password: '',
    token: ''
  }
}
return { login, register, userinfo, userinfoupdata, adduserinfo, deleteUser, userdata, changeWebOrder, logout }

}, { persist: true })
