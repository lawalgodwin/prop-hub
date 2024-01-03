import { RequestHandler } from "express"
import Auth from "../utils/auth/Auth"

const authType = process.env.AUTH_TYPE || null

let auth: Auth
if (authType === 'auth'){
    auth = new Auth()
}

export const validateRequest: RequestHandler = (req, res, next) => {
    const whiteListedPaths = [
        '/status',
        '/stats',
        '/signup',
        '/login',
        '/api/v1/properties'
    ]
    if (auth) {
        const isAuthNeeded = auth.requireAuth(req.path, whiteListedPaths)
        if (isAuthNeeded) {
            if (!auth.authorizationHeader(req)) return next(Error("Not Authorised"))
            if (!auth.currentUser(req)) return next(Error('Forbidden'))
            return next()
        }
        next()
    }
}
