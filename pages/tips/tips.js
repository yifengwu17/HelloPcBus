// pages/ding/ding.js
//获取应用实例
const app = getApp()
var isPresvious;
var isPresvious2;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    langitem: {
      value: "语音播放功能",
      checked: false,
      disabled: true
    },
    msgitem: {
      value: "短信提醒功能",
      checked: true,
      disable: false
    },


    array: ['体育西线', '番禺线', '车陂线', '黄村线'],
    objectArray: [
      {
        id: 0,
        name: '体育西线'
      },
      {
        id: 1,
        name: '番禺线'
      },
      {
        id: 2,
        name: '车陂线'
      },
      {
        id: 3,
        name: '黄村线'
      }
    ],
    index: 0,

    date: '2016-09-01',
    time: '12:01'
  },


  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },



  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.userInfo) {
      let str = app.globalData.data[app.globalData.userInfo.nickName].job
      let i = str.indexOf("司机")
      if (i >= 0) {
        this.setData({
          langitem: {
            value: "语音播报功能",
            checked: true,
            disabled: false
          },
          msgitem: {
            value: "短信提醒功能",
            checked: false,
            disable: false
          }
        });
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          let str = app.globalData.data[app.globalData.userInfo.nickName].job
          let i = str.indexOf("司机")
          if (i >= 0) {
            this.setData({
              langitem: {
                value: "语音播放功能",
                checked: true,
                disabled: false
              },
              msgitem: {
                value: "短信提醒功能",
                checked: false,
                disable: false
              }
            });
          }
          // console.log("name:"+this.data.userInfo.nickName); 
        }
      })

    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  checkboxChange: function(e) {
    // if (e.detail.value.length <= 0) {
    //   return
    // } else if (e.detail.value.length = 1) {
    //   wx.setStorage({
    //     key: e.detail.value[0],
    //     data: true,
    //   })
    // } else {
    //   wx.setStorage({
    //     key: e.detail.value[0],
    //     data: true,
    //   })
    //   wx.setStorage({
    //     key: e.detail.value[1],
    //     data: true,
    //   })
    // }
    // for (let i = 0; i < e.detail.value.length; i++) {
    //   wx.setStorage({
    //     key: e.detail.value[i],
    //     data: true,
    //   })
      // wx.showToast({
      //   title: e.detail.value[i],
      // })
    // }
  },

  switchChange1: function(e) {
    if(e.detail.value) {

    }

  },
  switchChange2: function(e){
    if (e.detail.value) {

    }
  }

})