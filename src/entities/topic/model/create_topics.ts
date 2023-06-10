import { attach, createStore } from 'effector'

import { type Topic, topicApi } from '~src/shared/api'

export function createTopics() {
	const getTopicsFx = attach({ effect: topicApi.getTopicsById })

	const $topics = createStore<Array<Topic>>([])
	const $topicsPending = getTopicsFx.pending

	$topics.on(getTopicsFx.doneData, (_, topics) => topics)

	return {
		getTopicsFx,
		$topics,
		$topicsPending,
	}
}
