// pages/news/news.js
const request = require('../../utils/fetch.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsSort: [
      { id: 1, name: "头条" },
      { id: 2, name: "社会" },
      { id: 3, name: "国内" },
      { id: 4, name: "娱乐" },
      { id: 5, name: "体育" },
      { id: 6, name: "军事" },
      { id: 7, name: "科技" },
      { id: 8, name: "财经" },
      { id: 9, name: "时尚" }
    ],
    selectedkey: 1,
    content: '头条的新闻',
    newsList: []

  },
  chooseSort(e){
    var id = e.currentTarget.dataset.id;
    console.log('打印当前点击的元素的id', id);
    this.setData({
      selectedkey: id
    })
    this.getNewsData(id);
  },
  getNewsData(id) {
    this.setData({
      newsList: []
    })
    request.fetch(id).then(data => {
      console.log(data);
      this.setData({
        newsList: data
      })
    }).catch(err => {
      console.log(err);
    })
  },
  openNewsDetail(e) {
    
    var url = e.currentTarget.dataset.url;
    console.log('点击的新闻链接为', url);
    url = '/pages/newsDetail/newsDetail?url=' + url
    wx.navigateTo({
      url: url,
      success(){
        console.log('路由跳转成功');
      },
      fail(err){
        console.log('路由跳转失败', err);
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsData(1);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})