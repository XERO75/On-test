
Component({
  properties: {
    sizes: {
      type: Array,
    }
  },
  data: {
    selectedIndex: 0,
  },
  lifetimes: {
    attached() {
    },
  },
  methods: {
    handleTap: function (e: WechatMiniprogram.TouchEvent) {
      const { index } = e.currentTarget.dataset;
      if(!this.properties.sizes[index].inStock) return
      this.setData({
        selectedIndex: index,
      });
    },
  },
});
