import axios from "axios";

export default {
  namespaced: true,
  state: {
    userAuth: null,
    tokenAuth: null,
  },
  mutations: {
    SET_USER(state, user, token) {
      state.userAuth = user;
      state.tokenAuth = token;
    },
    OUT_USER(state) {
      state.userAuth = null;
      state.tokenAuth = null;
    },
    OUT_USER(state, token) {
      state.tokenAuth = token;
    },
  },
  actions: {
    loginUser({ commit }, user, token) {
      commit("SET_USER", user, token);
    },
    logoutUser({ commit }) {
      commit("OUT_USER");
    },
  },
};
