import jwtDecode from 'jwt-decode'
var cookieparser = require('cookie-parser')
export function getUserFromCookie(req) {
  if (process.server && process.static) return
  if (!req.header.cookie) return

  if (req.header.cookie) {
    const parsed = cookieparser.parse(req.header.cookie)
    const accessTokenCookie = parsed.access_token
    if (!accessTokenCookie) return
    const decodedToken = jwtDecode(accessTokenCookie)
    if (!decodedToken) return

    return decodedToken
  }
}
