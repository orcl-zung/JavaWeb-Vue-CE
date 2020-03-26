import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    avatar:sessionStorage.getItem('avatar') ? sessionStorage.getItem('avatar') : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
  },
  mutations: {
    changeAvatar (state, avatar) {  //这里的state对应上面状态state （修改头像）
      state.avatar = avatar;
      sessionStorage.setItem('avatar', avatar);
    }
  },
  actions: {
  },
  modules: {
  }
})
