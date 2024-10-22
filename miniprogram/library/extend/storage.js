export const MINUTES = 60000;
export const HOURS = 60 * MINUTES;
export const DAY = 24 * HOURS;
export const WEEK = 7 * DAY;
export const MONTH = 30 * DAY;

/**
 *  数据缓存类
 * @author 邵天奇
 * @param appKey 用于存储数据时键名的前缀
 * @param storage 本地存储或会话存储
 **/
export default class Storage {
  /**
   * 数据缓存类构造方法
   * @param appKey 用于存储数据时键名的前缀
   */
  constructor(appKey) {
    this.__storage = {
      setStorageSync: wx.setStorageSync,
      getStorageSync: wx.getStorageSync,
      removeStorageSync: wx.removeStorageSync,
      getStorageInfoSync: wx.getStorageInfoSync,
      clearStorageSync: wx.clearStorageSync
    };
    this.WEEK = WEEK;
    this.__appKey = appKey ? `${appKey}-` : '';
  }

  /**
   * 存储数据
   * @param key   键名
   * @param v     键值
   * @param expire  有效期， ms 单位
   * @param merge 新旧数据是否合并
   */
  setStorageSync(key, v, expire) {
    const { __storage, __appKey } = this;
    const str = {
      v: v
    };
    if (expire) {
      str.t = Date.now() + expire;
    }
    __storage.setStorageSync(__appKey + key.toString(), JSON.stringify(str));
  }

  /**
   * 获取数据
   * @param key   键名
   * @returns     返回键值， 如果过期则为空
   */
  getStorageSync(key) {
    const { __storage, __appKey } = this;
    const storageKey = __appKey + key.toString();
    const storageValue = __storage.getStorageSync(storageKey);

    if (wx.$util.isEmpty(storageValue)) {
      return undefined;
    }

    const parsedValue = wx.$util.isJsonString(storageValue) ? JSON.parse(storageValue) : storageValue;

    if (parsedValue && parsedValue.t && parsedValue.t < Date.now()) {
      __storage.removeStorageSync(storageKey);
      return undefined;
    }

    return parsedValue && parsedValue.v;
  }

  /**
   * 删除存储的数据
   * @param key
   */
  removeStorageSync(key) {
    const { __storage, __appKey } = this;
    const k = __appKey + key.toString();
    __storage.removeStorageSync(k);
  }

  /**
   * 清空数据
   */
  clear() {
    const { __storage, __appKey } = this;
    const keys = wx.getStorageInfoSync()?.keys || [];
    if (keys.length > 0) {
      keys.forEach((item) => {
        if (item !== 'loginInfo' && item !== 'loginUserList') {
          __storage.removeStorageSync(item);
        }
      });
    }
  }
}
