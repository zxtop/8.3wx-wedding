// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    // src:'http://vjs.zencdn.net/v/oceans.mp4',
    danmuList:[
      {
        text:'第1s出现的弹幕',
        color:'#ff0000',
        time:1
      },{
        text:'第3s出现的弹幕',
        color:'#ff00ff',
        time:3
      }
    ],
    movieList:[{
      create_time:'1532519734589',
      title:'海边随拍',
      src:'http://vjs.zencdn.net/v/oceans.mp4'
    },{
      create_time:'1532519777690',
      title:'天空之城',
      src:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
    }]
  },
  videoContext:null,
  inputValue:'',
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.videoContext = wx.createAudioContext('myVideo')
    //腾讯插件
    // const TxvContent = requirePlugin('tencentvideo');
    // var txvContent = TxvContent.getTxvContext('txv1');
    // txvContent.play()//播放
    // txvContent.pause()//暂停
  },
  bindInputBlur:function(e){
    this.inputValue = e.detail.value;
  },
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:'#f90'
    })
  },
  bindButtonTap:function(){
    wx.chooseVideo({
      sourceType:['album','camera'],//视频选择的来源,相册和相机
      maxDuration:60,//拍摄视频最长拍摄时间(s)
      camera: 'back',//默认拉起的是前置front或者后置back摄像头
      success:res=>{//成功后执行的回调函数
        this.setData({
          src:res.tempFilePath //选定视频临时文件路径
        })
      }
    })
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