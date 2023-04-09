export interface Topic {
	id: string
	userId: string
	title: string
	description: string
	score: number
	responseText: string
	recommendsUrls: Array<string>
	createAt: string
	updateAt: string
}

export interface TopicAnalyze {
	text: string
}

export interface TopicSent {
	title: string
	description: string
}
