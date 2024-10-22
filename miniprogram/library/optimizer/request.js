/* eslint-disable eqeqeq */
/**
 * 一个代替wx.request的网络请求接口
 * 封装一些网络请求参数的设置，打破最大10个并发的限制，支持优先级设置
 */

// POST请求
function POST(url, params, config) {
  return request('POST', url, {
    params,
    config
  });
}

// GET请求
function GET(url, params, config = {}) {
  return request('GET', url, {
    params,
    config
  });
}

export default function request(method, url, { params, config }) {
  if (config.custom?.isLoading) {
    wx.showLoading({
      title: config.custom?.msg || '加载中...',
      mask: true
    });
  }
  const header = {};
  if (wx.$storage.getStorageSync('access_token')) {
    header.Token = wx.$storage.getStorageSync('access_token');
  }
  if (wx.$storage.getStorageSync('tby_token')) {
    header.Authorization = wx.$storage.getStorageSync('tby_token');
  }
  const brOutAddData = wx.$storage.getStorageSync('brOutAddData');
  if (!wx.$util.isEmpty(brOutAddData)) {
    header.createVersion = brOutAddData.createVersion || '';
  }
  header.SystemChannel = 'WECHAT';

  const Request = wxPromisify(wx.request, config);
  const { accountInfo } = getApp().globalData;
  const requestUrl = accountInfo.miniProgram.envVersion === 'release' ? wx.$config.prodURL : wx.$config.defaultURL;

  return Request({
    enableCache: true,
    enableHttp2: true,
    enableQuic: true,
    header: header,
    url: `${requestUrl}${url}`,
    method: method,
    data: params || {}
  });
}

function wxPromisify(fn, config) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      const custom = config?.custom;
      obj.success = function (res) {
        // 成功
        // console.log('接口名称')
        // console.log(obj.url)
        // console.log('接口参数')
        // console.log(obj.data)
        // console.log('接口数据')
        // console.log(res.data)

        if (custom?.isLoading) {
          wx.hideLoading();
        }
        const { data } = res;
        const { code, msg } = data;

        if (code === 'TN0000026') {
          reject({
            errType: 'register',
            ...(data.data || {})
          });
        }
        if (code === '999301') {
          resolve('noCoupon');
        }
        if (code === 'TN10000025') {
          reject({
            errType: 'register',
            ...(data || {})
          });
        }

        if (code == 401 || code == 501 || code == 504 || code == 505 || code == 506) {
          const pages = getCurrentPages();
          const { route } = pages[pages.length - 1];
          let toastTitle = '请重新登录';
          if (code == 401) {
            if (route === '/subpages/webview/webview') {
              resolve();
            }
            toastTitle = '请先登录';
          } else if (code == 501) {
            toastTitle = '当前未登录，请登录!';
          } else if (code == 504) {
            toastTitle = '登录超时，请重新登录!';
          } else if (code == 505) {
            toastTitle = '账号在另一台设备登录,请重新登录!';
          } else if (code == 506) {
            toastTitle = '登录信息已失效,请重新登录!';
          }
          if (!getApp().globalData.userLogining) {
            getApp().globalData.userLogining = true;
            wx.$util.toast(toastTitle).then((_res) => {
              wx.$storage.clear();
              wx.navigateTo({
                url: '/pages/login/index'
              });
            });
          }
          return;
        }

        // 不管成功与否都全部返回
        if (custom?.allReturn) {
          return resolve(data || {});
        }
        if (code != 200) {
          // 服务端返回的状态码不等于200，则reject()
          // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
          if (custom?.toast !== false) {
            wx.showToast({
              title: msg,
              icon: 'none',
              mask: true,
              duration: 3000
            });
          }
          // 如果需要返回接口所有数据 fullContent
          if (custom?.fullContent) {
            return resolve(data.data || {});
          }
          // 如果需要catch返回，则进行reject
          if (custom?.catch) {
            return reject(data);
          }
          // 否则返回一个pending中的promise
          return new Promise(() => {});
        }

        return resolve(data.data || {});
      };
      obj.fail = function (err) {
        // 失败
        wx.hideLoading();
        reject(err);
      };
      obj.complete = function () {};
      fn(obj);
    });
  };
}

module.exports = {
  POST: POST,
  GET: GET
};
