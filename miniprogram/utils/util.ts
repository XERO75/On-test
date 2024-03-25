import { ossPath } from "../config"

export const formatImg = (url: string, size: number) => {
  return `${ossPath}/${url}?x-oss-process=image/resize,w_${size},m_lfit/format,webp`
}
