
type TabBarItem = {
  path: string;
  text: string;
  iconPath: string;
  selectedIconPath: string;
};

const tabs: TabBarItem[] = [
  {
    path: '/pages/tabs/home/home',
    text: 'home',
    iconPath: '/assets/home.png',
    selectedIconPath: '/assets/home-selected.png',
  },
  {
    path: '/pages/tabs/me/me',
    text: 'me',
    iconPath: '/assets/me.png',
    selectedIconPath: '/assets/me-selected.png',
  },
];

Component({
  data: {
    tabs,
    selected: 0,
  },
  methods: {
    switchTab(e: WechatMiniprogram.BaseEvent) {
      const data = e.currentTarget.dataset;
      const { path, index } = data;
      wx.switchTab({ url: path });
      this.setData({
        selected: index,
      });
    },
  },
});
