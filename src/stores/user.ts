import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getLogin} from '@/apis/user'
import {getreg} from '@/apis/user'
import { id } from 'element-plus/es/locales.mjs'

export const useLoginStore = defineStore('user', () => {
  const userdata = ref({
    account: 'lucky',
    password: '',
    token: '',})
  const userinfo = ref([
    {
      "name": "微博",
      "dec": "中国领先的社交媒体平台，分享实时动态和热点新闻。",
      "url": "https://www.weibo.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 0
    },
    {
      "name": "知乎",
      "dec": "中文互联网高质量问答社区，覆盖科技、文化、生活等领域。",
      "url": "https://www.zhihu.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 1
    },
    {
      "name": "B站",
      "dec": "年轻人潮流文化社区，涵盖视频、直播、动漫等内容。",
      "url": "https://www.bilibili.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 2
    },
    {
      "name": "豆瓣",
      "dec": "文艺青年聚集地，提供书籍、电影、音乐的评分与讨论。",
      "url": "https://www.douban.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 3
    },
    {
      "name": "网易云音乐",
      "dec": "专注于音乐发现与分享的流媒体平台，拥有个性化推荐系统。",
      "url": "https://www.163.com/music",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 4
    },
    {
      "name": "GitHub",
      "dec": "全球最大的代码托管平台，开发者协作与开源项目管理社区。",
      "url": "https://www.github.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 5
    },
    {
      "name": "Pixabay",
      "dec": "免费高质量图片和视频素材库，支持商用授权。",
      "url": "https://www.pixabay.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 6
    },
    {
      "name": "Canva",
      "dec": "在线设计工具，提供模板制作海报、PPT等视觉内容。",
      "url": "https://www.canva.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 7
    },
    {
      "name": "知乎专栏",
      "dec": "深度长文创作与阅读平台，聚焦专业领域知识分享。",
      "url": "https://www.zhihu.com/column",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 8
    },
    {
      "name": "少数派",
      "dec": "数字生活媒体，提供软件教程与效率工具测评。",
      "url": "https://www.sspai.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 9
    },
    {
      "name": "V2EX",
      "dec": "科技爱好者社区，讨论编程、产品设计与创业话题。",
      "url": "https://www.v2ex.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 10
    },
    {
      "name": "稀土掘金",
      "dec": "技术文章分享平台，涵盖前端、后端与人工智能领域。",
      "url": "https://www.juejin.cn",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 11
    },
    {
      "name": "Unsplash",
      "dec": "免费高清摄影图库，支持无版权图片下载使用。",
      "url": "https://www.unsplash.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 12
    },
    {
      "name": "CodePen",
      "dec": "前端开发者的代码演示与实验平台，展示HTML/CSS/JS作品。",
      "url": "https://www.codepen.io",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 13
    },
    {
      "name": "星云网",
      "dec": "科幻爱好者交流社区，分享小说创作与宇宙探索话题。",
      "url": "https://www.xingyun.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 14
    },
    {
      "name": "极光论坛",
      "dec": "数码产品评测与科技资讯分享平台，聚焦硬件创新。",
      "url": "https://www.jiguang.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 15
    },
    {
      "name": "花瓣网",
      "dec": "设计师灵感采集工具，收集整理创意视觉素材。",
      "url": "https://www.huaban.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 16
    },
    {
      "name": "SegmentFault",
      "dec": "中文技术问答社区，解决编程开发中的疑难问题。",
      "url": "https://www.segmentfault.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 17
    },
    {
      "name": "开源中国",
      "dec": "中文开源技术社区，提供项目托管与协作开发支持。",
      "url": "https://www.oschina.net",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 18
    },
    {
      "name": "Product Hunt",
      "dec": "每日新创产品发现平台，追踪互联网最新工具应用。",
      "url": "https://www.producthunt.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 19
    },
    {
      "name": "Medium",
      "dec": "全球知名博客平台，阅读深度分析与行业洞察文章。",
      "url": "https://www.medium.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 20
    },
    {
      "name": "Notion",
      "dec": "全能型生产力工具，支持文档协作与知识管理。",
      "url": "https://www.notion.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 21
    },
    {
      "name": "Figma",
      "dec": "云端UI设计工具，支持团队实时协作与原型制作。",
      "url": "https://www.figma.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 22
    },
    {
      "name": "Behance",
      "dec": "Adobe旗下设计师作品展示平台，发现创意设计案例。",
      "url": "https://www.behance.net",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 23
    },
    {
      "name": "Dribbble",
      "dec": "设计师作品分享社区，聚焦UI/UX设计与插画创作。",
      "url": "https://www.dribbble.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 24
    },
    {
      "name": "Stack Overflow",
      "dec": "全球最大的程序员问答社区，解决技术开发难题。",
      "url": "https://www.stackoverflow.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 25
    },
    {
      "name": "LeetCode",
      "dec": "程序员刷题平台，提供算法训练与面试准备资源。",
      "url": "https://www.leetcode.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 26
    },
    {
      "name": "TED",
      "dec": "分享思想与创新的演讲平台，涵盖科技、文化等领域。",
      "url": "https://www.ted.com",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 27
    },
    {
      "name": "Wikipedia",
      "dec": "多语言在线百科全书，提供开放协作的知识内容。",
      "url": "https://www.wikipedia.org",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 28
    },
    {
      "name": "Coursera",
      "dec": "在线教育平台，提供名校课程与专业认证项目。",
      "url": "https://www.coursera.org",
      "src": "https://www.baidu.com/favicon.ico",
      "id": 29
    }
  ])
  async function login(account:string, password:string) {
    const response = await getLogin(account, password)
    response.data = userinfo
  }
  async function register(account:string, password:string) {
    const response = await getreg(account, password)
    console.log(response)
    response.data = userinfo
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
return { login, register, userinfo, userinfoupdata, adduserinfo, deleteUser, userdata, changeWebOrder }

}, { persist: true })
