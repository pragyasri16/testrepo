import JwtDecode from 'jwt-decode'
var cookieparser = require('cookieparser')

export function getUserFromCookie(req) {
  if (process.server && process.static) return
  if (!req.headers.cookie) return

  if (req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token
    if (!accessTokenCookie) return

    const decodedToken = JwtDecode(accessTokenCookie)
    if (!decodedToken) return

    return decodedToken
  }
}
