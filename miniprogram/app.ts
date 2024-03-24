// app.ts
App({
  onLaunch() {
    this.initGlobalData();
  },
  globalData: {
    navBarHeight: 0,
    statusBarHeight: 0,
    language: '',
  },
  initGlobalData() {
    const systemInfo = wx.getSystemInfoSync();
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();

    this.globalData.statusBarHeight = systemInfo.statusBarHeight;
    this.globalData.navBarHeight =
      (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
      menuButtonInfo.height +
      systemInfo.statusBarHeight;

    this.globalData.language = systemInfo.language;
  },
})