import { CarouselSchema } from "../../../components/common/types/schema";
import { fetchProductDetailById } from "../../../services/cms";
import { transformProductApiResponseData } from "../../../services/transformCmsApiResponseData";
import { Gender } from "../../../types/cms";
import { ProductColor } from "../../../types/product";

Page({
  data: {
    loading: false,
    name: '',
    price: 0,
    description: '',
    selectedIndex: 0,
    gender: Gender.Male,
    colors: [] as ProductColor[],
    carousel: undefined as CarouselSchema['data'] | undefined,
    currentSizes: [] as ProductColor['sizes'],
    currentColors: [] as ProductColor[],
  },
  async onLoad(options: { id: string }) {
    this.setData({ loading: true });
    const { id = '1' } = options; // for test
    const data = await fetchProductDetailById(id)
    const { name, price, description, colors } = transformProductApiResponseData(data)
    const carousel = {
      autoplay: false,
      height: "500px",
      interval: 5000,
      items: colors[0]?.assets
    }
    this.setData({
      carousel,
      name,
      price,
      description,
      colors,
      loading: false
    });
    this._updateCurrentColors()
    this._updateCurrentSizes();
  },

  handleGenderChange(e: WechatMiniprogram.TouchEvent) {
    const active = e.detail.active;
    this.setData({ gender: active, selectedIndex: 0 });
    this._updateCurrentColors()
    this._updateCurrentSizes();
    this._updateCarousel()
  },

  selectColor: function (e: WechatMiniprogram.TouchEvent) {
    const { index } = e.currentTarget.dataset;
    this.setData({
      selectedIndex: index,
      currentSizes: this.data.currentColors[index].sizes
    });
    this._updateCarousel();
  },

  _updateCurrentSizes: function () {
    this.setData({
      currentSizes: this.data.currentColors[0].sizes
    });
  },

  _updateCurrentColors: function () {
    this.setData({
      currentColors: this.data.colors.filter(i => i.gender === this.data.gender)
    });
  },

  _updateCarousel: function () {
    this.setData({
      carousel: {
        ...this.data.carousel,
        items: this.data.currentColors[this.data.selectedIndex].assets
      }
    });
  }
});
