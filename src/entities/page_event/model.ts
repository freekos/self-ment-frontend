import { createEvent } from 'effector'

export function createPageEvent<M = void, U = void>() {
	const mounted = createEvent<M>()
	const unMounted = createEvent<U>()

	return {
		mounted,
		unMounted,
	}
}
