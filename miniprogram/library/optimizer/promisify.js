/**
 *
 * 将小程序/小游戏异步接口转为同步接口
 * 这是异步转同步编程范式必需的一个工具函数
 *
 */
// miniprogram/library/optimus/promisify.js
// 将小程序/小游戏异步接口转为同步接口
export default function promisify(fn) {
  return (args = {}) =>
    new Promise((resolve, reject) => {
      fn(
        Object.assign(args, {
          success: resolve,
          fail: reject
        })
      );
    });
}
