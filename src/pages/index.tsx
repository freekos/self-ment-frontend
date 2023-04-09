import { Route, Routes } from 'react-router'

import { AuthProtect } from '~src/entities/session'

import { lazy } from '~src/shared/lib'

import { routesPath } from './routes'
// const TopicCreatePage = lazy(() => import('./topic_create'), 'TopicCreatePage')
import { TopicCreatePage } from './topic_create'

const LandingPage = lazy(() => import('./landing'), 'LandingPage')
const HomePage = lazy(() => import('./home'), 'HomePage')
const SignInPage = lazy(() => import('./sign_in'), 'SignInPage')
const SignUpPage = lazy(() => import('./sign_up'), 'SignUpPage')

export function Pages() {
	return (
		<Routes>
			<Route path={routesPath.landing} element={routesMap[routesPath.landing]} />
			<Route path={routesPath.home} element={routesMap[routesPath.home]} />
			<Route path={routesPath.signIn} element={routesMap[routesPath.signIn]} />
			<Route path={routesPath.signUp} element={routesMap[routesPath.signUp]} />
			<Route path={routesPath.topicCreate} element={routesMap[routesPath.topicCreate]} />
		</Routes>
	)
}

export const routesMap = {
	[routesPath.landing]: <LandingPage />,
	[routesPath.home]: (
		<AuthProtect>
			<HomePage />
		</AuthProtect>
	),
	[routesPath.signIn]: <SignInPage />,
	[routesPath.signUp]: <SignUpPage />,
	[routesPath.topicCreate]: (
		<AuthProtect>
			<TopicCreatePage />
		</AuthProtect>
	),
}
