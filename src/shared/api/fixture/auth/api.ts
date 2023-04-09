import { createEffect } from 'effector'

import { baseInstance } from '../../base'
import type { Session } from './api.h'

export const signIn = createEffect<{ email: string; password: string }, Session | null>(async ({ email, password }) => {
	const url = '/auth/sign_in'
	const body = {
		email,
		password,
	}

	const request = await baseInstance.post(url, body)

	if (request.status === 200) return request.data
	throw new Error('Status is not 200')
})

export const signUp = createEffect<{ email: string; password: string }, boolean>(async ({ email, password }) => {
	const url = '/auth/sign_up'
	const body = { email, password }

	const request = await baseInstance.post(url, body)

	if (request.status === 200) return true
	throw new Error('Status is not 200')
})
