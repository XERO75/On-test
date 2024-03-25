import { fetcher } from '../api/fetcher';
import { cmsBaseURL } from '../config';
import { CmsProductApiResponseData } from '../types/cms';

export const fetchProductDetailById = async (id: string) => {
  const res = await fetcher<CmsProductApiResponseData>(
    `${cmsBaseURL}/api/products/${id}`,
    'GET',
  );
  return res.data;
};
