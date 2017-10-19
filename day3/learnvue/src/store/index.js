import Vue from 'vue'
import Vuex from 'vuex'

Vue .use(Vuex)

let store = new Vuex.Store({
    state: {
        num: 100
    },
    mutations: {
        AddIncrement(state,num){
            // 函数接受一个参数state 这个state就是上面的state
            state.num += num.n;
        },
        MinIncrement(state,num){
            state.num -= num.n;
        }
    }
})

export default store