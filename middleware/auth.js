export default function ({ store, redirect, route }) {
  const user = store.getters["modules/user/user"];
  const path = ["/", "/loginform", "/signup", "/demo1"];
  let value = path.includes(route.path);
  if (!user) {
    if (value) {
      redirect();
    }
    else {
      redirect("/");
    }
  } else {
    if (value) {
      if (user.isHm) {
        redirect('/hm')
      }
      if (user.isHr) {
        redirect('/hr')
      }
      if (user.isAdmin) {
        redirect('/admin')
      }
      if (user.isSadmin) {
        redirect('/superadmin')
      }
    }
  }
}
