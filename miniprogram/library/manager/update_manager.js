/**
 *
 * 一个小程序版本强制更新管理器
 *
 */
import promisifyOn from '../optimizer/promisify_on.js';
import promisify from '../optimizer/promisify.js';

/** 小程序版本强制更新管理器 */
class UpdateManager {
  #numHasTried = 0; // 重试次数

  async execute() {
    if (!wx.canIUse('getUpdateManager')) {
      wx.showModal({
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        showCancel: false
      });
      return false;
    }

    const updateManager = wx.getUpdateManager(); // 每次取到的实例内存地址都不一样
    console.log('开始版本检查');

    let res = await promisifyOn(updateManager.onCheckForUpdate)();
    if (res.hasUpdate) {
      console.log('有新版本', res.hasUpdate);
      updateManager.onUpdateFailed(() => {
        console.log('更新竟然失败了');
        // 更新失败了，重试三次吧
        if (this.#numHasTried++ < 3) {
          this.execute(); // 这是地方部分机型是真有可能失败
        } else {
          wx.showModal({
            content: '版本更新失败，请将小程序从是近列表中删除后重试。',
            showCancel: false
          });
        }
      });

      await promisifyOn(updateManager.onUpdateReady)();
      res = await promisify(wx.showModal)({
        title: '更新',
        showCancel: false,
        content: '新版本已准备好，马上重启更新？'
      });
      wx.$storage.setStorageSync('myPrivateStorage', Math.random());

      // 新版本已经下载好，用户也同意了，重启
      if (res.confirm) {
        console.log('开始强制更新版本');
        updateManager.applyUpdate();
      }
      return true;
    }
    console.log('暂无新版本');

    return false;
  }
}

export default new UpdateManager();
