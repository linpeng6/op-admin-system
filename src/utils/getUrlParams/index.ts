/**
 * 正则获取url参数
 * @param url
 * @param params
 * @returns
 */
const useRegGetParams = (url: string, params: string): string | null => {
  if (!url) return null;
  const res = new RegExp('(?:&|/?)' + params + '=([^&$]+)').exec(url);
  return res ? res[1] : '';
};

/**
 * URLSearchParams获取url参数
 * 有兼容性问题
 * @returns
 */
const useUrlSearchParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlSearchParams.entries());
};

export { useRegGetParams, useUrlSearchParams };
