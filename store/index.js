export const state = () => ({
  members: [],
  // {
  //   email: 'laith@hotmail.com',
  //   id: '1',
  // },
  // {
  //   email: 'Zoe@hotmail.com',
  // },
  // {
  //   email: 'shubh@gmail.com',
  // },
})

export const mutations = {
  addUser(state, payload) {
    let newUser = {
      ...payload,
    }
    state.members.push(newUser)
  },
}

export const getters = {
  getUserById: (state) => (id) => {
    return state.members.find((member) => member.id == id)
  },
}

// export const getters = {
//   getUserById: (state) => (id) => {
//     return state.members.find(member => member.id == id)
//   }
// }
