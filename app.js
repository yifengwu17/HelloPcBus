//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res.userInfo);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    data:{
      "农民伯伯": { phone: "13727503194", name: "吴楚钦", job: "移动产品开发部-AI", email: "wuchuqin"},
      "Nono: (": { phone: "17724224916", name: "蔡俊达", job: "设计中心-杂志平面组", email: "caijunda" },
      "🚕 ZengAy💨": { phone: "13119524031", name: "曾蔼盈", job: "项目支持部-平台项目", email: "zengaiying" },
      "思想开始过分": { phone: "13414909559", name: "王治安", job: "设计中心-前端", email: "wangzhian" },
      "yongchoidee": { phone: "17612044626", name: "杨彩蝶", job: "设计中心-设计", email: "yangcaidie" },
      "子非鱼": { phone: "17620497344", name: "周子翔", job: "平台产品开发部-活动开发", email: "zhouzixiang" },
  }
  }
})