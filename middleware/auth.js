export default function ({ store, redirect }) {
  let user = store.getters['modules/user/user']
  console.log('Users', user)
  if (!user) {
    console.log('Not User')
    return redirect('/loginform')
  }
  if (user.isHm) {
    return redirect('/hm')
  }
  if (user.isHr) {
    return redirect('/hr')
  }
  if (user.isAdmin) {
    return redirect('/admin')
  }
  if (user.isSadmin) {
    return redirect('/superadmin')
  }
  // else {
  // console.log('User')
  // return redirect('/admin')
  // }
}
