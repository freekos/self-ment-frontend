import { Button, Layout, Typography } from 'antd'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import { SignUpFactory } from '~src/features/sign_up_form'

import { Logo } from '~src/shared/assets'

import * as model from './model'
import { routes } from '../routes'
import styles from './styles.module.scss'

export function SignUpPage() {
	return (
		<Layout className={styles.root}>
			<Layout.Content className='container'>
				<div className={styles.section}>
					<NavLink className={cn(styles.logo_link)} to={routes.landing()}>
						<img src={Logo} alt='logo' />
						<Typography.Text>Self Ment</Typography.Text>
					</NavLink>
					<Typography.Title level={2} className={cn(styles.title)}>
						Регистрация
					</Typography.Title>
					<div className={styles.form}>
						<SignUpFactory.Form model={model.$$signUpForm} />
						<div className={styles.form_bottom}>
							<NavLink to={routes.signIn()}>
								<Typography.Link>Войти</Typography.Link>
							</NavLink>
						</div>
					</div>
				</div>
			</Layout.Content>
		</Layout>
	)
}
