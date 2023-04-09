import { Button, Input, Layout, Spin, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import cn from 'classnames'
import { useUnit } from 'effector-react'
import { NavLink } from 'react-router-dom'

// import VideoRecorder from 'react-video-recorder'
import * as model from './model'
import { routes } from '../routes'
import styles from './styles.module.scss'

export function TopicCreatePage() {
	const [handleMount, handleUnmount] = useUnit([model.$$pageEvent.mounted, model.$$pageEvent.unMounted])
	const [step] = useUnit([model.$step])

	return (
		<Layout className={styles.root}>
			<Layout.Content className='container'>
				<div className={styles.section}>
					<Typography.Text className={cn(styles.section_title)}>Создайте тему для изучения</Typography.Text>
					{step === 'title' && <TitleCreateScreen />}
					{step === 'description' && <DescriptionCreateScreen />}
					{step === 'video' && <VideoCreateScreen />}
					{step === 'result' && <ResultScreen />}
				</div>
			</Layout.Content>
		</Layout>
	)
}

function TitleCreateScreen() {
	const [title, handleTitle] = useUnit([model.$title, model.titleChanged])
	const handleStep = useUnit(model.stepChanged)

	return (
		<div className={styles.title_content}>
			<Typography.Text className={cn(styles.title)}>Напишите названия темы:</Typography.Text>
			<Input
				className={styles.input}
				size='large'
				placeholder='Пример: Квантовая физика'
				value={title}
				onChange={(e) => handleTitle(e.target.value)}
			/>

			<div className={styles.create_footer}>
				<NavLink to={routes.home()}>
					<Button type='dashed' onClick={() => handleStep('title')}>
						Назад
					</Button>
				</NavLink>
				<Button type='dashed' disabled={title === ''} onClick={() => handleStep('description')}>
					Дальше
				</Button>
			</div>
		</div>
	)
}

function DescriptionCreateScreen() {
	const [description, handleDescription] = useUnit([model.$description, model.descriptionChanged])
	const handleStep = useUnit(model.stepChanged)

	return (
		<div className={styles.description_content}>
			<Typography.Text className={cn(styles.title)}>Напишите описание темы:</Typography.Text>
			<TextArea
				className={cn(styles.textarea)}
				value={description}
				onChange={(e) => handleDescription(e.target.value)}
			/>
			<div className={styles.create_footer}>
				<Button type='dashed' onClick={() => handleStep('title')}>
					Назад
				</Button>
				<Button type='dashed' disabled={description === ''} onClick={() => handleStep('result')}>
					Дальше
				</Button>
			</div>
		</div>
	)
}

// TODO: Add video recorder
function VideoCreateScreen() {
	return (
		<>
			<></>
		</>
	)
}

function ResultScreen() {
	const [topicAnalyze, topicAnalyzePending] = useUnit([model.$topicAnalyze, model.$topicAnalyzePending])

	return (
		<div className={styles.result_content}>
			{topicAnalyzePending && <Spin />}
			{!topicAnalyzePending && topicAnalyze && (
				<div className={styles.analyze}>
					<Typography.Title level={4}>Оценка понимания темы:</Typography.Title>
					<Typography.Title level={5}>{topicAnalyze.text}</Typography.Title>
				</div>
			)}

			<NavLink to={routes.home()} className={cn(styles.result_btn_wrapper)}>
				<Button type='primary' disabled={topicAnalyzePending}>
					Завершить
				</Button>
			</NavLink>
		</div>
	)
}
