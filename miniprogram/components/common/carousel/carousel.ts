import { CarouselSchema } from '../types/schema';

Component({
  properties: {
    schemaData: {
      type: Object,
      value: () => ({} as CarouselSchema['data']),
    },
  },
  data: {
    style: '',
  },
  observers: {
    schemaData(schemaData: CarouselSchema['data']) {
      const { height } = schemaData || { height: '0px' }; 
      this.setData({ style: `height: ${height};` });
    },
  },
});
