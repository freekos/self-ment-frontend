import { Button, Layout } from 'antd'
import cn from 'classnames'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { type ReactNode, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { routes } from '~src/pages/routes'

import { ShowOnly, SignOutButton } from '~src/entities/session'

import { Logo } from '~src/shared/assets'
import { envVars } from '~src/shared/config'

import styles from './styles.module.scss'

interface NavItem {
	title: string
	path: string
}

// TODO: Don't import routes here

const HEADER_STICKY = 100
const NAVS: Array<NavItem> = [
	{
		title: 'Главная',
		path: routes.home(),
	},
]

export function Header() {
	return (
		<HeaderRoot>
			<div className={styles.header_left}>
				<NavLink to={routes.landing()} className={cn(styles.logo_link)}>
					<div className={cn(styles.header_logo)}>
						<img src={Logo} alt='logo' />
					</div>
					<p>{envVars.APP_TITLE}</p>
				</NavLink>
			</div>
			<div className={styles.header_navs}>
				<ShowOnly showRole='user'>
					{NAVS.map((navItem, index) => (
						<NavLink key={index} to={navItem.path}>
							<Button size='large' type='link'>
								{navItem.title}
							</Button>
						</NavLink>
					))}
				</ShowOnly>
			</div>

			<div className={cn(styles.header_right)}>
				<ShowOnly showRole='guest'>
					<NavLink to={routes.signIn()}>
						<Button size='large' type='link'>
							Войти
						</Button>
					</NavLink>
					<NavLink to={routes.signUp()}>
						<Button size='large' type='primary'>
							Регистрация
						</Button>
					</NavLink>
				</ShowOnly>
				<ShowOnly showRole='user'>
					<SignOutButton />
				</ShowOnly>
			</div>
		</HeaderRoot>
	)
}

function HeaderRoot(props: { children: ReactNode }) {
	const { children } = props

	const [isSticky, setIsSticky] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', (y) => {
		if (y > HEADER_STICKY) {
			setIsSticky(true)
		} else {
			setIsSticky(false)
		}
	})

	return <Layout.Header className={cn(styles.header, { [styles.sticky!]: isSticky })}>{children}</Layout.Header>
}
