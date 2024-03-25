
Component({
  properties: {
    active: {
      type: String,
      value: ''
    }
  },
  data: {
    genders: ['mens', 'womens'],
  },
  lifetimes: {
    attached() {},
  },
  methods: {
    handleChange(e: WechatMiniprogram.TouchEvent) {
      const active = e.currentTarget.dataset.gender;
      if (this.data.active !== active) {
        this.triggerEvent('change', { active });
      }
    }
  },
});
