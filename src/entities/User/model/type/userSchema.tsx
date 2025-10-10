export interface user {
    id: number
    username: string
    avatar?: string
}

export interface userSchema {
    isAuth?: user
    init?: boolean
}