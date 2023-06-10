import { createEvent, createStore } from 'effector'
import { persist } from 'effector-storage/local'

import { type Topic } from '~src/shared/api'

export const ADDED_TOPICS_KEY = 'addedTopics'

export const addTopic = createEvent<Topic>()

export const $addedTopics = createStore<Array<Topic>>([])

persist({
	store: $addedTopics,
	key: ADDED_TOPICS_KEY,
})

$addedTopics.on(addTopic, (state, topic) => [...state, topic])
