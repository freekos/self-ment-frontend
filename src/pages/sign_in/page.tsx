import { Layout, Typography } from 'antd'
import cn from 'classnames'
import { useUnit } from 'effector-react'
import { Navigate, NavLink } from 'react-router-dom'

import { SignInFactory } from '~src/features/sign_in_form'

import { $$session } from '~src/entities/session'

import { Logo } from '~src/shared/assets'

import * as model from './model'
import { routes } from '../routes'
import styles from './styles.module.scss'

export function SignInPage() {
	const isAuth = useUnit($$session.$isAuth)

	if (isAuth) return <Navigate to={routes.home()} />
	return (
		<Layout className={styles.root}>
			<Layout.Content className='container'>
				<div className={styles.section}>
					<NavLink className={cn(styles.logo_link)} to={routes.landing()}>
						<img src={Logo} alt='logo' />
						<Typography.Text>Self Ment</Typography.Text>
					</NavLink>
					<Typography.Title level={2}>Вход</Typography.Title>
					<div className={styles.form}>
						<SignInFactory.Form model={model.$$signInForm} />

						<div className={styles.form_bottom}>
							<NavLink to={routes.signUp()}>
								<Typography.Link>Регистрация</Typography.Link>
							</NavLink>
							{/* <NavLink> */}
							<Typography.Link>Забыли пароль?</Typography.Link>
							{/* </NavLink> */}
						</div>
					</div>
				</div>
			</Layout.Content>
		</Layout>
	)
}
