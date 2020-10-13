export default function ({ store, redirect, route }) {
    const user = store.getters["modules/user/user"];
    const blockRouteAdmin = /\/admin\/*/g;
    const blockRouteHM = /\/hm\/*/g;
    const blockRouteHR = /\/hr\/*/g;
    const blockRouteSuperAdmin = /\/superadmin\/*/g;
    if (user) {
        if (user.isHm) {
            if (route.path.match(blockRouteSuperAdmin) || route.path.match(blockRouteAdmin) || route.path.match(blockRouteHR)) {
                redirect("/hm");
            }
        }
        if (user.isHr) {
            if (route.path.match(blockRouteSuperAdmin) || route.path.match(blockRouteAdmin) || route.path.match(blockRouteHM)) {
                redirect("/hr");
            }
        }
        if (user.isSadmin) {
            if (route.path.match(blockRouteAdmin) || route.path.match(blockRouteHM) || route.path.match(blockRouteHR)) {
                redirect("/superadmin");
            }
        }
        if (user.isAdmin) {
            if (route.path.match(blockRouteSuperAdmin) || route.path.match(blockRouteHM) || route.path.match(blockRouteHR)) {
                redirect("/admin")
            }
        }
    }
}