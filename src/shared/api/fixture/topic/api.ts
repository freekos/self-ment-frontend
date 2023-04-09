import { createEffect } from 'effector'

import { baseInstance } from '../../base'
import type { Topic, TopicAnalyze, TopicSent } from './api.h'

export const postTopicAnalysis = createEffect<TopicSent, TopicAnalyze>(async ({ title, description }) => {
	const url = '/topic_analyze_cohere'
	const body = {
		title,
		description,
	}

	const request = await baseInstance.post(url, body)

	if (request.status === 200) return request.data
	throw new Error('Status is not 200')
})

export const getTopicsById = createEffect<{ userId: string }, Array<Topic>>(async ({ userId }) => {
	const url = `/topics/${userId}`
	const body = {}

	const request = await baseInstance.get(url, body)

	if (request.status === 200) return request.data

	throw new Error('Status is not 200')
})
