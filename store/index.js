import { vuexfireMutations } from 'vuexfire'
import { getUserFromCookie } from '../helper/index'

export const state = () => ({
    id: null,
    
})

export const mutations = {
  ...vuexfireMutations,
  getValue(state, payload) {
    state.id = payload
    console.log('sate', state.id)
  },
}

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {
    try {
      const user = getUserFromCookie(req)
      if (user) {
        await dispatch('modules/user/setUSER', {
          email: user.email,
          isHm: user.hm,
          isHr: user.hr,
          isAdmin: user.admin,
          isSadmin: user.sa,
          uid: user.user_id,
          name: user.name
        })
      }
      // console.log('index user', user)
    } catch (err) {
      console.log(err)
    }
  },
}
// export const state = () => ({
//   members: [],

// })

// export const mutations = {
//   addUser(state, payload) {
//     let newUser = {
//       ...payload,
//     }
//     state.members.push(newUser)
//   },
// }
// export const mutation = {
//   getValue( state,payload) {
//     state.id = payload
//     console.log('sate',state.id)
//   }
// }

// export const getters = {
//   getUserById: (state) => (id) => {
//     return state.members.find((member) => member.id == id)
//   },
// }
export const getters = {
  getId(state) {
    return state.id
  }
}

// export const getters = () => ({
//   getId: (state) => {
//     return state.id
//   },
// })