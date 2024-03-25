export enum Gender {
  Male = 'mens',
  Female = 'womens'
}

export interface ShoeSize {
  id: number;
  label: string;
  ean: string;
  us_size: string;
  cn_size: string;
  product_slug: string;
  product_id: string;
  created_at: string;
  updated_at: string;
  magento_price: string;
  stock: number;
}
export interface ShoeAsset {
  id: number;
  entity_id: string;
  code: null;
  title: string;
  media: string;
  media_alt_text: null;
  caption: null;
  url: string;
  product_slug: string;
  product_id: string;
  local_url: string;
  weimob_url: string;
  is_video: number;
  enable: number;
  sort: number;
  is_global: number;
  created_at: string;
  updated_at: string;
}
export interface ShoeColor {
  id: number;
  product_id: string;
  available_from: string;
  color_name: string;
  color_name_cn: string;
  gender: string;
  gender_cn: string;
  default_image: string;
  product_name: string;
  product_name_cn?: string | null;
  price: number;
  tag: string | null;
  pdp_sort: number;
  sort: number;
  internal_tags: string;
  search_keywords: string;
  purchase_limit: number;
  preview: number;
  publish: number;
  enable_at_website: number;
  enable_at_wcmp: number;
  schedule_enable_time: string | null;
  weimob_goods_id: number;
  photoshoot_model_ids: string | null;
  color_selector_image: string;
  product_card_image: string;
  size_chart_id: string;
  measurement_image: string | null;
  measurement_desc: string | null;
  created_at: string;
  updated_at: string;
  sizes: ShoeSize[];
  assets: ShoeAsset[];
  lang: {
      id: number;
      color_name: string;
      color_name_cn: string;
      filter_attritbutes: string;
      created_at: string | null;
      updated_at: string | null;
  };
  photo_model: null;
  size_chart: {
      id: number;
      entity_id: string;
      name: string;
      cn_name: string;
      content: string;
      created_at: string;
      updated_at: string;
  };
  gender_code: string;
  tags: (null | string)[];
  stock: number;
  magento_price: string;
  key: number;
  spu: string;
  original_price: number;
}
export interface CmsProductApiResponseData {
  style_display_name_cn: string;
  style_short_description_cn: string;
  price: number;
  colors: ShoeColor[];
}
