Page({
  data: {
    myImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    userName: '周丽丽',
    bumen: '设计中心',
    job:'UI设计师',
    jobId:'12121121',
    phone:'86905695',
    goodsSum:'2',
    saveSum:'8'

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
