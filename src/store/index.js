import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/moduleUser";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: user,
  },
});
