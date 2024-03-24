const app = getApp();

Component({
  properties: {
    takeSpace: {
      type: Boolean,
      value: true,
    },
    enableBack: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: '',
    },
    reverse: {
      type: Boolean,
      value: false,
    },
    reverseOpacity: {
      type: Number,
      value: 0,
    },
  },
  data: {
    navBarHeight: app.globalData.navBarHeight,
    statusBarHeight: app.globalData.statusBarHeight,
    hasCurrentPagesLength: false,
    backStyle: '',
  },
  lifetimes: {
    attached() {
      this.setData({
        hasCurrentPagesLength: !getCurrentPages().length,
      });
      console.log('====================================');
      console.log("getCurrentPages().length",getCurrentPages().length);
      console.log('====================================');
      const { reverse } = this.data;
      if (reverse) {
        this.capsuleBlack();
      } else {
        this.capsuleWhite();
        this.setBackColor(1);
      }
    },
  },
  observers: {
    'reverse, reverseOpacity'(reverse: boolean, reverseOpacity: number) {
      if (reverse && reverseOpacity > 0) {
        this.capsuleWhite();
        this.setBackColor(1 - reverseOpacity);
      } else {
        this.capsuleBlack();
        this.setBackColor(1);
      }
    },
  },
  methods: {
    handleBack() {
      wx.navigateBack();
    },
    capsuleWhite() {
      // make capsule color white
      wx.setNavigationBarColor({ frontColor: '#000000', backgroundColor: '#000000' });
    },
    capsuleBlack() {
      // make capsule color transparent black
      wx.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: '#ffffff' });
    },
    setBackColor(invert: number) {
      this.setData({
        backStyle: `filter: invert(${invert})`,
      });
    },
  },
});
