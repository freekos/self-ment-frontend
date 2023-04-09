import { Button, Divider, Layout, Spin, Typography } from 'antd'
import cn from 'classnames'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { Header } from '~src/widgets/header'

import { TopicsTopicCard } from '~src/entities/topic'

import * as model from './model'
import { routes } from '../routes'
import styles from './styles.module.scss'

export function HomePage() {
	const [handleMount, handleUnmount] = useUnit([model.$$pageEvent.mounted, model.$$pageEvent.unMounted])

	useEffect(() => {
		handleMount()
		return () => {
			handleUnmount()
		}
	}, [handleMount, handleUnmount])

	return (
		<Layout className={styles.root}>
			<Header />
			<Layout.Content className='container'>
				<div className={styles.section}>
					<Topics />
				</div>
			</Layout.Content>
		</Layout>
	)
}

function Topics() {
	const [topics, topicsPending] = useUnit([model.$$topics.$topics, model.$$topics.$topicsPending])

	return (
		<div className={styles.topics_content}>
			<div className={styles.section_header}>
				<Typography.Title level={3}>Ваши темы:</Typography.Title>
				<NavLink to={routes.topicCreate({ step: 'title' })}>
					<Button type='primary'>Создать новую тему</Button>
				</NavLink>
			</div>
			<Divider />
			{topicsPending ? (
				<div className={styles.spin_center}>
					<Spin />
				</div>
			) : (
				<div className={styles.topics}>
					{topics.map((topic, index) => (
						<TopicsTopicCard className={cn(styles.topic_card)} key={index} topic={topic} />
					))}
				</div>
			)}
		</div>
	)
}
