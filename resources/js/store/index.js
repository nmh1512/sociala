import Auth from './modules/auth';
import { createStore } from 'vuex';
// export default 123

const store = createStore({
    state: {
        user: {
            data: {},
            token: 123
        }
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {}
});

export default store;