//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isPlayingMusic:false//控制音乐播放或者暂停
  },
  bgm:null,
  music_url:"/videos/wedding.mp3",
  music_coverImgUrl:"/images/cover.png",

  onReady:function(){
    this.bgm = wx.getBackgroundAudioManager();
    this.bgm.title = 'marry me';
    this.bgm.epname = 'wedding';
    this.bgm.singer = 'singer';
    this.bgm.coverImgUrl = this.music_coverImgUrl;
    this.bgm.onCanplay(()=>{
      this.bgm.pause();
    })
    this.bgm.src = this.music_url;
  },

  play:function(e){
    if(this.data.isPlayingMusic){
      this.bgm.pause();
    }else{
      this.bgm.play();
    }
    this.setData({
      isPlayingMusic:!this.data.isPlayingMusic
    })
  },

  callGroom:function(){
    wx.makePhoneCall({
      phoneNumber: '15117999663',
    })
  },
  callBride:function(){
    wx.makePhoneCall({
      phoneNumber: '15117999663',
    })
  },
  onLoad: function () {
  
  }
})
