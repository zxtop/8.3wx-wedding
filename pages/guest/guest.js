// pages/guest/guest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['html','css','javascript','photoshop'],
    index:1,
    picker:{
      arr:['0','1','2','3','4','5','6'],
      index:1
    }
  },
  pickerChange:function(e){
    this.setData({
      'picker.index':e.detail.value
    })
  },

  nameChange:function(e){
    this.checkName(e.detail.value)
  },
  phoneChange:function(e){
    this.checkPone(e.detail.value)
  },

  checkName:function(data){
    var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
    return this.check(data,reg,'姓名输入错误')
  },

  checkPone:function(data){
    var reg =/^(((13)|(15)|(17)|(18))\d{9})$/;
    return this.check(data,reg,'手机号码输入错误')
  },
  check:function(data,reg,errMsg){
    if(!reg.test(data)){
      wx.showToast({
        title: errMsg,
        icon:'none',
        duration:1500
      })
      return false
    }
    return true
  },

  formSubmit:function(e){
    console.log('formidddddd',e.detail.formId,e)
    var name = e.detail.value.name;
    var phone = e.detail.value.phone;
    if(this.checkName(name) && this.checkPone(phone)){
      //此处编写代码将e.detail.value提交到服务器
      wx.showToast({
        title: '提交成功',
        icon:'success',
        duration:1500
      })
    }
  },
  // pickerChange:function(e){
  //   console.log('用户选择的值为',e.detail.value);
  //   this.setData({index:e.detail.value})
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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