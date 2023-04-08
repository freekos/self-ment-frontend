import { useEffect, useState } from 'react'

interface TypedTextProps {
	text: string
	delay?: number
	delayBeforeStart?: number
	isRepeatable?: boolean
}

export function TypedText(props: TypedTextProps) {
	const { text, delay = 100, delayBeforeStart = 1, isRepeatable = false } = props

	const [typedText, setTypedText] = useState<string>('')
	const [isStart, setIsStart] = useState<boolean>(false)

	useEffect(() => {
		setTimeout(() => {
			setIsStart(true)
		}, delayBeforeStart)

		if (isStart) {
			setInterval(() => {
				setTypedText((prev) => {
					if (prev.length < text.length) {
						return text.slice(0, prev.length + 1)
					} else {
						if (isRepeatable) {
							return ''
						}
					}
					return prev
				})
			}, delay)
		}

		// return () => clearInterval(intervalId)
	}, [isStart, text, delay, delayBeforeStart])

	return <>{typedText}</>
}
