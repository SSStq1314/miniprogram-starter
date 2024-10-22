// 全局store
const create = require('mini-stores');

class Store extends create.Store {
  data = {
    selected: 0,
    oldSelected: 0,
    isVibrateShort: false,
    tabbarList: [
      {
        icon: 'icon-home',
        text: '首页',
        type: 'home'
      },
      {
        icon: 'icon-order',
        text: '订单',
        type: 'orderCenter'
      },
      {
        icon: 'icon-work',
        text: '到店',
        type: 'involveShop'
      },
      {
        icon: 'icon-service',
        text: '售后',
        type: 'service'
      },
      {
        icon: 'icon-user',
        text: '我的',
        type: 'user'
      }
    ]
  };
  switchTab(index) {
    if (Number(index) === this.data.selected) {
      return;
    }
    if (this.data.isVibrateShort) {
      wx.vibrateShort({ type: 'light' });
    }
    this.data.selected = Number(index);
    this.data.oldSelected = Number(index);

    this.update();
  }

  show() {
    this.data.selected = this.data.oldSelected;
    this.update();
  }

  hide() {
    this.data.selected = -1;
    this.update();
  }
}

module.exports = new Store();
