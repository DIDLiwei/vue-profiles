const state = {
    profile: {}
};
const getters = {
    profile: state => state.profile
};
const mutations = {
    setProfile: (state, profile) => state.profile = profile
};
const actions = {
    setProfileAsync: ({ commit }, profile) => commit("setProfile", profile)
};

export default {
    state, getters, mutations, actions
}