import axios from 'axios'
import store from '../store'
import router from '../router'

// Add a request interceptor
axios.interceptors.request.use((config) => {

    store.dispatch("setLoadingAsync", true)

    if (localStorage.getItem("jwtToken")) {
        config.headers.Authorization = localStorage.jwtToken;
    }

    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
    store.dispatch("setLoadingAsync", false)
    return response;
}, (error) => {
    store.dispatch("setLoadingAsync", false)
    const { status } = error.response;
    if (status == 401) {
        // 提示
        alert("token值失效,请重新登录");
        // 干掉ls
        localStorage.removeItem("jwtToken");

        // vuex状态初始化
        store.dispatch("setIsLoginAsync", false);
        store.dispatch("setProfileAsync", null);
        store.dispatch("setUserAsync", null);

        router.push("/login");
    }
    return Promise.reject(error);
});

export default axios;