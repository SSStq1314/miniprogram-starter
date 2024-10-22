/**
 * 判断是否为空
 */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) {
        return true;
      }
      break;
    case 'boolean':
      if (!value) {
        return true;
      }
      break;
    case 'number':
      if (value === 0 || isNaN(value)) {
        return true;
      }
      break;
    case 'object':
      if (value === null || value.length === 0) {
        return true;
      }
      for (const i in value) {
        return false;
      }
      return true;
    default:
      return;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value === 'string') {
    try {
      const obj = JSON.parse(value);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 显示消息提示框
 * @param {String} title 提示的内容，长度与 icon 取值有关。
 * @param {Number} duration 提示的延迟时间，单位毫秒，默认：1600
 */
function toast(title, icon = 'none', duration = 1600) {
  return new Promise((resolve, reject) => {
    wx.showToast({
      title: String(title),
      icon: icon,
      mask: true,
      duration,
      success: () => {
        setTimeout(() => {
          wx.hideToast({ noConflict: true });
          resolve();
        }, duration + 100);
      },
      fail: () => {
        reject();
      }
    });
  });
}

export default {
  toast,
  empty,
  isEmpty: empty,
  isJsonString: jsonString
};
