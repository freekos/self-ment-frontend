import { useUnit } from 'effector-react'
import { type ReactNode } from 'react'

import { type UserRole } from '~src/shared/api'

import * as $$session from '../model'

interface ShowOnlyProps {
	children: ReactNode
	showRole: UserRole
}

export function ShowOnly(props: ShowOnlyProps) {
	const { children, showRole } = props

	const [isAuth, role] = useUnit([$$session.$isAuth, $$session.$role])

	if (!isAuth && showRole === 'guest') return <>{children}</>
	if (isAuth && showRole === 'user' && role === 'user') return <>{children}</>
	if (isAuth && showRole === 'admin' && role === 'admin') return <>{children}</>

	return null
}
