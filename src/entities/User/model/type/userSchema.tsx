export interface user {
    id: number
    username: string
}

export interface userSchema {
    isAuth?: user
    init?: boolean
}