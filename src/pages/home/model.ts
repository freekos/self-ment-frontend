import { combine, sample } from 'effector'

import { createPageEvent } from '~src/entities/page_event'
import { $$session } from '~src/entities/session'
import { createTopics } from '~src/entities/topic'
import { $$addedTopics } from '~src/entities/topic/model'

import { type Session } from '~src/shared/api'

export const $$pageEvent = createPageEvent()
export const $$topics = createTopics()
export const $resultTopics = combine($$topics.$topics, $$addedTopics.$addedTopics, (topics, addedTopics) => [
	...topics,
	...addedTopics,
])

sample({
	clock: $$pageEvent.mounted,
	source: $$session.$session,
	filter: (session: Session | null): session is Session => !!session,
	fn: (session) => ({ userId: session.id }),
	target: $$topics.getTopicsFx,
})
