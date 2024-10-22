import { TimerBehavior } from 'timer-miniprogram';

module.exports = Behavior({
  behaviors: [TimerBehavior],
  data: {
    loadingComplete: false,
    enable: false,
    loadingProps: {
      size: '40rpx'
    },
    loadingTexts: ['下拉刷新', '松手刷新', '正在刷新', '刷新完成'],
    imageBaseUrl: 'https://tby-static.tntab.cn/wxapplet/wxAppletImg',
    navbarQuery: getApp().globalData.navigator,
    windowInfo: getApp().globalData.windowInfo,
    menuButtonInfo: getApp().globalData.menuButtonInfo,
    loadingMore: false,
    noMore: false
  },
  methods: {
    loadingComplete: function () {
      this.setData({ loadingComplete: true });
    },
    startRefresh: function () {
      if (this.enable) {
        return;
      }
      this.setData({ enable: true });
    },
    endRefresh: function () {
      this.setData({ enable: false });
    }
  }
});
