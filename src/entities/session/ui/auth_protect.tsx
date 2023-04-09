import { useUnit } from 'effector-react'
import { type ReactNode } from 'react'
import { Navigate } from 'react-router'

import { routes } from '~src/pages/routes'

import * as $$session from '../model'

interface AuthProtectProps {
	children: ReactNode
}

export function AuthProtect(props: AuthProtectProps) {
	const { children } = props

	const isAuth = useUnit($$session.$isAuth)

	if (!isAuth) {
		return <Navigate to={routes.signIn()} />
	}

	return <>{children}</>
}
