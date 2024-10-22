/**
 *
 * 一个朴素的节流函数
 * 它可以直接套在小程序页面中事件监听函数的外面，并且也劫持在代码中保留this
 *
 */
function throttle(method, wait = 50) {
  let previous = 0;
  return function (...args) {
    const _this = this;
    const now = new Date().getTime();
    if (now - previous > wait) {
      method.apply(_this, args);
      previous = now;
    } else {
      console.log('节流少许');
    }
  };
}

export default throttle;
