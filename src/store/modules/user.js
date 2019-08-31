const state = {
    user: {}
};
const getters = {
    user: state => state.user
};
const mutations = {
    setUser: (state, user) => state.user = user
};
const actions = {
    setUserAsync: ({ commit }, user) => commit("setUser", user)
};

export default {
    state, getters, mutations, actions
}