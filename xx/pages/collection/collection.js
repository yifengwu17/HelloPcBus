
Page({
  data: {
    id: 1,
    line: '体育中心线1',
    firstArea: '车陂南',
    nextArea: '太平洋网络',
    leastTime:'8：00'

  },

goLineDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({//保留当前页面，跳转到应用内的某个页面

      url: '/pages/lineDetail/lineDetail?id=' + id//url里面就写上你要跳到的地址
    })
  }






})