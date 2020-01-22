import Vue from 'vue';
import Vuex from 'vuex';
import systemSetup from './modules/system-setup';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    systemSetup,
  },
  state: {
    startMenuVisible: false,
  },
  mutations: {
    setStartMenuVisible(state, visible) {
      state.startMenuVisible = visible;
    },
  },
  actions: {},
});
