
Page({
  data: {
    list: [{
      id: 'demo',
      pages: [{
        name: 'Render Demo',
        path: '/pages/products/demo/demo?index=0'
      },{
        name: 'Edit Demo',
        path: '/pages/products/demo/demo?index=1'
      },{
        name: 'Product Detail Page',
        path: '/pages/products/product-detail/product-detail?id=1'
      }]
    }]
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
      });
    }
  },
  async onLoad() {

  },
});
