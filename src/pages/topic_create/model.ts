import { attach, createEvent, createStore, sample } from 'effector'

import { createPageEvent } from '~src/entities/page_event'
import { $$addedTopics } from '~src/entities/topic/model'

import { type Topic, type TopicAnalyze, topicApi } from '~src/shared/api'

export type TopicCreateStep = 'title' | 'description' | 'video' | 'result'

const postTopicAnalyzeFx = attach({ effect: topicApi.postTopicAnalysis })

export const stepChanged = createEvent<TopicCreateStep>()
export const titleChanged = createEvent<string>()
export const descriptionChanged = createEvent<string>()

// FIXME: Create step factory
export const $step = createStore<TopicCreateStep>('title')
export const $topicAnalyze = createStore<TopicAnalyze | null>(null)
export const $topicAnalyzePending = postTopicAnalyzeFx.pending

export const $title = createStore<string>('')
export const $description = createStore<string>('')

export const $$pageEvent = createPageEvent<{ step: TopicCreateStep }, void>()

sample({
	clock: $$pageEvent.mounted,
	fn: ({ step }) => step,
	target: $step,
})

$step.on(stepChanged, (_, step) => step)

$title.on(titleChanged, (_, title) => title)

$description.on(descriptionChanged, (_, description) => description)

sample({
	clock: $step,
	source: { title: $title, description: $description },
	filter: (_, step) => step === 'result',
	fn: ({ title, description }) => ({ title, description }),
	target: postTopicAnalyzeFx,
})

$topicAnalyze.on(postTopicAnalyzeFx.doneData, (_, topicAnalyze) => topicAnalyze)

sample({
	clock: postTopicAnalyzeFx.doneData,
	source: { title: $title, description: $description },
	fn: ({ title, description }, topicAnalyze) =>
		({
			id: '0',
			userId: '0',
			createAt: '0',
			updateAt: '0',
			recommendsUrls: [],
			responseText: topicAnalyze.text,
			score: 100,
			title,
			description,
		} as Topic),
	target: $$addedTopics.addTopic,
})

sample({
	clock: $$pageEvent.unMounted,
	target: [$step.reinit!, $title.reinit!, $description.reinit!],
})
