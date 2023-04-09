import { type UserRole } from '../user'

export interface Session {
	id: string
	email: string
	firstName: string
	lastName: string
	role: UserRole
	favoritesTopicsIds: Array<string>
}
