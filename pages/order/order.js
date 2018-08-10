var listsData = require("../data/data.js");

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    currentTab: 0, //
    listsData: '',
  },



  onLoad: function() {
    console.log(listsData.initData)
    this.setData({
      listsData: listsData.initData
    })
  },



  // 滚动切换标签样式
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  goLineDetail: function(e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({ //保留当前页面，跳转到应用内的某个页面

      url: '/pages/lineDetail/lineDetail?id=' + id //url里面就写上你要跳到的地址
    })
  },
  submit: function(e) {
    wx.showLoading({
      title: '正在提交中.....',
    })
    setTimeout(function () {
      wx.getStorage({
        key: 'goodsSum',
        success: function(res) {
          wx.setStorage({
            key: 'goodsSum',
            data: res.data + 1,
          })
        },
        fail: function(res) {
          wx.setStorage({
            key: 'goodsSum',
            data: 1,
          })
        }
      })
      wx.hideLoading()
      wx.showToast({
        title: '提交成功啦！',
      })
  
    }, 1100)
  }
})