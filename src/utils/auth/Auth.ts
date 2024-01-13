import { Request } from "express";

class Auth {

    requireAuth(path: string, whiteListedPaths: string[]) {
        if (!path) return true
        if (!whiteListedPaths || whiteListedPaths.length <= 0) return true
        for (const whiteListedPath of whiteListedPaths) {
            if (path.startsWith(whiteListedPath)) return false
            if ([path, path + '/'].includes(whiteListedPath)) return false
            else if (whiteListedPath.endsWith('*') && path.startsWith(whiteListedPath[whiteListedPath.length])){
                return false
            }
        }
        return true
    }

    authorizationHeader(req: Request) {
        const authHeader = req?.headers['authorization']
        return authHeader ? authHeader : null
    }
    currentUser(req: Request) {
        return `${req.path}`
    }
}

export default Auth
