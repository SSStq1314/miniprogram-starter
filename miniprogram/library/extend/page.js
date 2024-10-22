const nativePage = Page;
export default function (options) {
  const { onLoad } = options;
  // 重写onLoad方法以劫持setData，
  // onLoad方法只有在页面实例化以后才存在，所以只能在onLoad里面获取
  options.onLoad = ((onLoadFunc) =>
    function (res) {
      const { setData } = this;
      Object.defineProperty(this.__proto__, 'setData', {
        configurable: true,
        enumerable: false,
        value(...args) {
          if (global.state !== 'hide') {
            return setData.apply(this, args);
          }
          return void 0;
        }
      });
      // eslint-disable-next-line no-unused-expressions
      onLoadFunc?.call(this, res);
    })(onLoad);

  return nativePage?.call(this, options);
}
