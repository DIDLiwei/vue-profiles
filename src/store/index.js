import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import isLogin from './modules/isLogin'
import profile from './modules/profile'
import loading from './modules/loading'
import profiles from './modules/profiles'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        isLogin,
        profile,
        loading,
        profiles
    }
})
