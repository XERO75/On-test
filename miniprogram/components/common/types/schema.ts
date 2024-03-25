import { SchemaName } from '../enums/common'

export type ImageSchema = {
  name: SchemaName.Image;
  data: {
    src: string;
  };
};

export type CarouselSchema = {
  name: SchemaName.Carousel;
  data: {
    items: ImageSchema['data'][];
    height?: string;
    autoplay?: boolean;
    interval?: number;
    vertical?: boolean;
  };
};
