import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  actions,
  mutations,
});
