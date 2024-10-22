// custom-tab-bar/index.js
import tabbarStore from '../../stores/tabbarStore';

Component({
  options: {
    virtualHost: true
  },
  lifetimes: {
    ready() {
      tabbarStore.bind(this, '$tabbarStore');
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const selected = e.currentTarget.dataset.index;
      if (selected === this.data.selected) {
        return;
      }
      tabbarStore.switchTab(selected);
    }
  }
});
