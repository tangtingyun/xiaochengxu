// pages/register/register.js
const app = getApp();
var that = this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
  },

  loginusername: function(e) {
    this.setData({
      username: e.detail.value
    });
  },

  loginpassword: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  clickRegister: function() {
    if (this.data.username == '') {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none'
      })
      return;
    }

    if (this.data.password == '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })
      return
    }

    wx.showLoading({
      title: '正在注册...',
    })

    setTimeout(function() {
      wx.hideLoading()
      wx.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 2000
      })
      wx.navigateBack({
        delta: 1
      });
    }, 3000);
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

  }
})