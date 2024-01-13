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
        '/api/v1/users/signup',
        '/api/v1/users/login',
        '/api/v1/properties'
    ]
    if (auth) {
        const isAuthNeeded = auth.requireAuth(req.path, whiteListedPaths)
        if (isAuthNeeded) {
            if (!auth.authorizationHeader(req)) return res.status(401).end('Not Authorized')
            if (!auth.currentUser(req)) return res.status(403).end('Forbidden')
        }
        next()
    }
}
