// import { iUser } from '../models/interface'
import { UserSignUpType, UserType } from '../models/modelTypes'
import User from '../models/userModel'
// import dbClient from './db'

export async function createUser(userData: UserSignUpType) {
    const { email, password, firstName, lastName } = userData
    if (!email) throw Error(JSON.stringify({code: 400, message: "Bad Request"}))
    const user = await User.countDocuments({ email })
    if (user) throw Error(`A user with the email address ${email} already exists`)
    if (!firstName) throw Error("First Name required")
    if (!lastName) throw Error("Last Name required")
    if (!password) throw Error("Password required")
    try {
        const newUser = new User({ email, password, firstName, lastName })
        const result = await newUser.save()
        console.log(result)
        return result
    } catch (e) {
        throw Error(`Error: unable to create user: ${e}`)
    }
}

export async function getUserBy(filter: UserType) {
    try {
        const user = User.find({ ...filter })
        return user
    } catch (error) {
        throw Error((error as Error).message)
    }
}

