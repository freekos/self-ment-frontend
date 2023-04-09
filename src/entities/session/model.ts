import { attach, createEvent, createStore, sample } from 'effector'
import { persist } from 'effector-storage/session'

import { authApi, type Session } from '~src/shared/api'

export const SESSION_KEY = 'session'

export const signedIn = createEvent<{ email: string; password: string }>()
export const signedUp = createEvent<{ email: string; password: string }>()
export const signedOut = createEvent()

export const $session = createStore<Session | null>(null)
export const $isAuth = $session.map((session) => session !== null)
export const $role = $session.map((session) => session?.role ?? null)

export const signUpFx = attach({ effect: authApi.signUp })
export const signInFx = attach({ effect: authApi.signIn })

persist({ store: $session, key: SESSION_KEY })

$session.on(signInFx.doneData, (_, session) => session)

sample({
	clock: signedIn,
	target: signInFx,
})

sample({
	clock: signedUp,
	target: signUpFx,
})

$session.on(signedOut, () => null)
