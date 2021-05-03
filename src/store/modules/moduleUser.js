import axios from "axios";

export default {
  namespaced: true,
  state: {
    userAuth: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.userAuth = user;
    },
    OUT_USER(state) {
      state.userAuth = null;
    },
  },
  actions: {
    loginUser({ commit }, user) {
      commit("SET_USER", user);
    },

    logoutUser({ commit }) {
      commit("OUT_USER");
    },
  },
};
