import { auth } from '../../plugins/firebaseConfig'
import Cookies from 'js-cookie'

export const state = () => ({
  user: null,
})

export const getters = {
  user(state) {
    return state.user
  },
}

export const actions = {
  async userlogin({ dispatch }, user) {
    try {
      const token = await auth.currentUser.getIdToken(true)
      const userInfo = {
        email: user.email,
        isHm: user.hm,
        isHr: user.hr,
        isAdmin: user.admin,
        isSadmin: user.sa,
        uid: user.uid
      }
      Cookies.set('access_token', token)

      await dispatch('setUSER', userInfo)
    } catch (err) {
      console.log(err)
    }
  },

  setUSER({ commit }, user) {
    commit('setUSER', user)
  },
}

export const mutations = {
  setUSER(state, user) {
    state.user = user
  },
}
