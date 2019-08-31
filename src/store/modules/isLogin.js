const state = {
    isLogin: false
};
const getters = {
    isLogin: state => state.isLogin
};
const mutations = {
    setIsLogin: (state, isLogin) => state.isLogin = isLogin
};
const actions = {
    setIsLoginAsync: ({ commit }, isLogin) => commit("setIsLogin", isLogin)
};

export default {
    state, getters, mutations, actions
}