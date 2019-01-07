//index.js
//获取应用实例
const app = getApp()
var me;
Page({
  data: {
    imgUrls: [],
    todayList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getToday: function() {
    return new Promise(function(resolve, rejecgt) {
      wx.request({
        url: app.globalData.baseUrl + '/api/today',
        method: 'GET',
        success: (resp) => {
          resolve(resp);
        },
        fail: (error) => {
          rejecgt(error);
        }
      })
    });
  },
  getBanner: function() {
    return new Promise(function(resolve, reject) {
      wx.request({
        url: app.globalData.baseUrl + '/api/data/福利/10/1',
        method: 'GET',
        success: resp => {
          resolve(resp);
        },
        fail: error => {
          reject(error)
        }
      })
    });
  },
  onLoad: function() {
    // me = this;
    // wx.showLoading({
    //   title: '加载中...',
    // });
    // Promise.all([this.getBanner(), this.getToday()])
    //   .then(([banner, body]) => {
    //     wx.hideLoading();
    //     console.log(banner);
    //     console.log("====================");
    //     console.log(body);
    //     let data = body.data.results;
    //     var list = [];
    //     for (var prop in data) {
    //       let realData = data[prop]
    //       list = list.concat(realData);
    //     }
    //     if (banner.data.results) {
    //       me.setData({
    //         imgUrls: banner.data.results,
    //         todayList: list
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     wx.hideLoading();
    //   });
  },
  onPullDownRefresh: function() {}
})