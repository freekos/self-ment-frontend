export type UserRole = 'guest' | 'user' | 'admin'

export interface User {
	id: string
	email: string
	phone: string
	address: string
	firstName: string
	lastName: string
	role: UserRole
	favoritesTopicsIds: Array<string>
}
