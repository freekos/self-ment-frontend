import { createEffect } from 'effector'

import { baseInstance } from '../../base'
import type { User } from './api.h'

export const getUserById = createEffect<{ id: string }, User>(async ({ id }) => {
	const url = `/users/${id}`
	const body = {}

	const request = await baseInstance.get(url, body)

	if (request.status === 200) return request.data
	throw new Error('Status is not 200')
})
