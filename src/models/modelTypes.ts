export type UserType = {
    firstName?: string
    lastName?: string
    email: string
    password: string
    [propName: string]: unknown
}

export type PropertyType = {
    title: string,
    description?: string,
    type: string,
    price: number,
    bedrooms?: number,
    bathrooms?: number,
}

export type UserSignUpType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
