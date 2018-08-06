// pages/goods/lineDetail.js
Page({
  data: {
    seatNum: 3,
    leastTime: '8:30AM'
  },

  onLoad: function (options) {
    this.setData({
      id: options.id
    })
  }  

})