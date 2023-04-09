import { StarOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { routes } from '~src/pages/routes'

import { type Topic } from '~src/shared/api'

import styles from './styles.module.scss'

interface TopicsTopicCardProps {
	topic: Topic
	className?: string
}

export function TopicsTopicCard(props: TopicsTopicCardProps) {
	const { topic, className } = props

	return (
		<Card className={cn(className)}>
			<div className={styles.card_content}>
				<Typography.Title level={4} style={{ textTransform: 'capitalize' }}>
					{topic.title}
				</Typography.Title>
				<StarOutlined onClick={() => null} />
			</div>
			<div className={styles.card_footer} style={{ display: 'flex', justifyContent: 'flex-end' }}>
				{/* FIXME: Change to routes.topic */}
				<NavLink to={routes.home()} className={cn(styles.more_link)}>
					<Button type='dashed'>Подробнее</Button>
				</NavLink>
			</div>
		</Card>
	)
}
