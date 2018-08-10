//获取应用实例
const app = getApp()

Page({
  data: {
    myImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    name:'吴曦',
    job:'设计师',
    email:'121238990@qq.com',
    phone:'13414789009',
    goodsSum:0,
    saveSum:0

  },

  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        myImg: app.globalData.userInfo.avatarUrl,
        ...app.globalData.data[app.globalData.userInfo.nickName]
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            myImg: app.globalData.userInfo.avatarUrl
          });
          // console.log("name:"+this.data.userInfo.nickName); 
        }
      })

    }
  },
  onShow: function(options) {
    const that = this
    wx.getStorage({
      key: 'goodsSum',
      success: function (res) {
        console.log(res.data);
        that.setData({ goodsSum: res.data })
      }
    })
    wx.getStorage({
      key: 'saveSum',
      success: function (res) {
        that.setData({ saveSum: res.data })
      }
    })
  },
  goodsDetail: function (e) {
    wx.navigateTo({//保留当前页面，跳转到应用内的某个页面
      url: '/pages/goods/goodsDetail'//url里面就写上你要跳到的地址
    })
  },
  goCollection: function (e) {
    wx.navigateTo({//保留当前页面，跳转到应用内的某个页面
      url: '/pages/collection/collection'//url里面就写上你要跳到的地址
    })
  }

})


