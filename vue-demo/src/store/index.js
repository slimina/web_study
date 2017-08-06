import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  totalTime: 0,
  list: [{
    name : '二哲',
    avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date : '2016-12-25',
    totalTime : '6',
    comment : '12月25日晚上，陪女朋友一起过圣诞节需要6个小时'
  }]
};

//通过vue-Devtools我们可以发现我们的store已经构造好了并且成功从store获取了数据

export default new Vuex.Store({
  state,
  mutations,
  actions
})
/*
mutation-types 记录我们所有的事件名
mutations 注册我们各种数据变化的方法
actions 则可以编写异步的逻辑或者是一些逻辑，再去commit 我们的事件
如果有getter 我们可以把一些需要处理返回的数据放在这即可，不进行业务操作
*/
