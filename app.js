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
      "农民伯伯": { phone: "13723434d4", name: “yifengwu”, job: “yidong”, email: “yingwu”},
      "Nono: (": { phone: "177234234d4916", name: “juda”, job: “设计”, email: “judai” },
      "🚕 ZengAy💨": { phone: "1323433d31", name: “aiyi”, job: “支持”, email: “aiyi” },
      "思想开始过分": { phone: "134144r3212423”, name: “zhian”, job: "前端", email: "wazhan" },
      "yongchoidee": { phone: "1723443e4236", name: “caidei”, job: "设计", email: "yancadie" },
      "子非鱼": { phone: "1723434e444", name: “zixiang”, job: "活动开发", email: "zixiang" },
  }
  }
})