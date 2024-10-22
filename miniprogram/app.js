// app.js
import { addEvent } from './library/services/index.js';
import Storage from './library/extend/storage.js';
import util from './library/extend/util.js';

const { default: logger } = require('./library/extend/log.js');
const { default: updateManager } = require('./library/manager/update_manager.js');
import { getDateToday } from './library/extend/timeFormat.js';
const config = require('./config/index');

import promisify from './library/optimizer/promisify.js';
const { default: debounce } = require('./library/optimizer/debounce.js');
const { default: throttle } = require('./library/optimizer/throttle.js');

const preloadAssetsData = require('./resource/preloadAssets/index.js');

Page = require('./library/extend/page.js').default; // 劫持page对象

App({
  globalData: {
    userInfo: {},
    tabIndex: 0,
    showPrivacy: false,
    userLogining: true,
    windowInfo: {},
    accountInfo: {},
    menuButtonInfo: {},
    appBaseInfo: {},
    tabbarList: [
      {
        icon: 'icon-home',
        text: '首页',
        pagePath: '/pages/home/index',
        type: 'home'
      },
      {
        icon: 'icon-order',
        text: '订单中心',
        pagePath: '/pages/orderCenter/index',
        type: 'orderCenter'
      },
      {
        icon: 'icon-work',
        text: '到店',
        pagePath: '/pages/involveShop/index',
        type: 'involveShop'
      },
      {
        icon: 'icon-service',
        text: '售后中心',
        pagePath: '/pages/service/index',
        type: 'service'
      },
      {
        icon: 'icon-user',
        text: '我的',
        pagePath: '/pages/user/index',
        type: 'user'
      }
    ]
  },
  onLaunch(options) {
    console.log(options);
    this.preloadAssets();
    wx.$storage.setStorageSync('platform', wx.getDeviceInfo().platform);
  },
  onShow() {
    global.state = 'show';
    this.globalData.appBaseInfo = wx.getAppBaseInfo();
    updateManager.execute();
    const acToken = wx.$storage.getStorageSync('access_token');
    const tbyToken = wx.$storage.getStorageSync('tby_token');

    if (!wx.$util.isEmpty(acToken) && !wx.$util.isEmpty(tbyToken)) {
      const time = getDateToday();
      const req = {
        eventId: 'login-2-1',
        eventFrom: '2',
        loginTime: time,
        actionName: '2'
      };
      this.burialPoint(req);
      this.globalData.userLogining = false;
    } else {
      wx.$storage.clear();
      this.globalData.userLogining = true;
    }
  },

  onHide() {
    global.state = 'hide';
  },

  onUnhandledRejection(res) {
    logger.error(res.reason);
  },
  onError(error) {
    logger.error(error);
  },
  onPageNotFound(res) {
    logger.error(res);
  },
  preloadAssets() {
    if (wx.canIUse('preloadAssets')) {
      wx.preloadAssets({
        data: preloadAssetsData.data,
        success(resp) {
          console.log('preloadAssets success', resp);
        },
        fail(err) {
          console.log('preloadAssets fail', err);
        }
      });
    }

    const mb = wx.getMenuButtonBoundingClientRect();
    const sh = wx.getWindowInfo().statusBarHeight;
    const distance = mb.top - sh;
    const navigator = {
      top: sh,
      bottom: sh + mb.height + distance * 2,
      left: 0,
      right: 0,
      height: mb.height + distance * 2,
      width: wx.getWindowInfo().screenWidth
    };
    this.globalData.navigator = navigator;
    this.globalData.windowInfo = wx.getWindowInfo();
    this.globalData.accountInfo = wx.getAccountInfoSync();
    this.globalData.menuButtonInfo = wx.getMenuButtonBoundingClientRect();

    wx.$storage = new Storage();
    wx.$config = config;
    wx.$promisify = promisify;
    wx.$debounce = debounce;
    wx.$throttle = throttle;
    wx.$util = util;
  },
  burialPoint(req) {
    if (!wx.$util.isEmpty(req)) {
      console.log(req);
      setTimeout(function () {
        addEvent(req);
      }, 1000);
    }
  }
});
