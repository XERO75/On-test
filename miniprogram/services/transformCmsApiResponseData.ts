import { formatImg } from '../utils/util';
import { CmsProductApiResponseData } from '../types/cms';

import { ProductDetail } from '../types/product';

export function transformProductApiResponseData(data: CmsProductApiResponseData): ProductDetail{
  const { style_display_name_cn, style_short_description_cn, price } = data
  const colors = data.colors.slice(0,8).map(color => { //for test only
    return {
      src: formatImg((color.assets.find(asset => asset.entity_id && color.default_image))!.local_url, 174),
      gender: color.gender,
      sizes: color.sizes.map(size => {
        return {
          id: size.product_id,
          size: size.cn_size,
          inStock: size.stock > 0
        }
      }),
      assets: color.assets.map(asset => {
        return {
          id: asset.entity_id,
          src: formatImg(asset.local_url, 1024),
          alt: asset.entity_id,
          
        }
      })
  }});

  return {
    name: style_display_name_cn,
    price: price,
    description: style_short_description_cn,
    colors,
  }
}
