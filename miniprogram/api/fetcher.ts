// https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html

type Headers = Record<string, string>;
type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
type Data = Record<string, number | string>;

const DEFAULT_HEADER: Partial<Headers> = {
  'content-type': 'application/json',
};

export function fetcher<T extends string | WechatMiniprogram.IAnyObject | ArrayBuffer>(
  url: string,
  method: Method,
  data?: Data,
) {
  return new Promise<WechatMiniprogram.RequestSuccessCallbackResult<T>>((resolve, reject) => {
    wx.request<T>({
      url,
      header: DEFAULT_HEADER,
      method,
      data: data || '',
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
}
