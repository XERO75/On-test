import { ImageSchema } from '../types/schema'

Component({
  properties: {
    schemaData: {
      type: Object,
      value: () => ({} as ImageSchema['data']),
    },
    mode: String,
    extraStyle: String,
  },
  data: {
    ratioStyle: '',
    loaded: false
  },
  lifetimes: {
    attached() {
    },
  },
  methods: {
    onImageLoad() {
      this.setData({ loaded: true, loadedImageClass: 'loaded-image' });
    },
  },
});
