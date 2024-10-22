import http from '../optimizer/request';

const defineConfig = { custom: { isLoading: false, catch: true } };

export const weChatLogin = (data, config = defineConfig) => http.POST('/sso/weChat/weChatLogin', data, config);

export const getWeChatUserInfo = (data, config = defineConfig) =>
  http.GET('/sso/weChat/getWeChatUserInfo', data, config);

export const tbyLogin = (data, config = defineConfig) => http.POST('/tbyAuth/login', data, config);

// 查询业务员明细
export const getSalerInfo = (params, config = { custom: { isloading: false } }) =>
  http.GET('/tbySystem/salers/getSalerInfo', params, config);

// 查业务员共赢商编号
export const getInfoByGysId = (data, config = { custom: { isloading: false } }) =>
  http.GET('/tbySystem/gys/getInfoByGysId', data, config);

// 成交金额排行榜
export const qrySalerSellData = (data = {}, config = { custom: { isloading: false } }) =>
  http.GET('/tbyReport/salerDebt/qrySalerSellData?pageSize=5&pageNum=1', data, config);
