export const routesPath = {
	landing: '/',
	home: '/home',
	signIn: '/sign-in',
	signUp: '/sign-up',
	topicCreate: '/topic/create/:step',
}

export const routes = {
	landing: () => routesPath.landing,
	home: () => routesPath.home,
	signIn: () => routesPath.signIn,
	signUp: () => routesPath.signUp,
	topicCreate: ({ step }: { step: string }) => routesPath.topicCreate.replace(':step', step),
}
