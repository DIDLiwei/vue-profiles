const state = {
    profiles: []
};
const getters = {
    profiles: state => state.profiles
};
const mutations = {
    setProfiles: (state, profiles) => state.profiles = profiles
};
const actions = {
    setProfilesAsync: ({ commit }, profiles) => commit("setProfiles", profiles)
};

export default {
    state, getters, mutations, actions
}