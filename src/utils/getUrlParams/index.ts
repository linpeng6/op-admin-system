/**
 * 正则获取url参数
 * @param url
 * @param params
 * @returns
 */
const getParamsByReg = (url: string, params: string): string | null => {
  if (!url) return null;
  const res = new RegExp('(?:&|/?)' + params + '=([^&$]+)').exec(url);
  return res ? res[1] : '';
};

export { getParamsByReg };
