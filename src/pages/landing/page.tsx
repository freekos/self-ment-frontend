import { Layout, Typography } from 'antd'
import cn from 'classnames'
import { motion } from 'framer-motion'

import { Header } from '~src/widgets/header'

import { TypedText } from '~src/shared/ui'

import styles from './styles.module.scss'

const TYPE_DELAY = 9.9
const TITLE = 'Добро пожаловать в SELF MENT'
const TEXT =
	'Мы стремимся предоставлять нашим пользователям лучший опыт обучения, и поэтому мы применяем методику обучения, разработанную Фейнманом, которая доказала свою эффективность. Наша команда специалистов помогает нашим пользователям максимально эффективно учиться и успешно достигать своих учебных целей.'
const TEXT_DELAY_BEFORE_START = TITLE.length * TYPE_DELAY
const QUOTE_DELAY_BEFORE_START = TEXT_DELAY_BEFORE_START + TEXT.length * TYPE_DELAY
const QUOTE = `Я не учу своих студентов. Я создаю условия, в которых они учатся."
"Учиться - это не запоминать, это понимать. Не важно, сколько вы знаете, важно, сколько вы понимаете."`
const QUOTE_AUTHOR_DELAY_BEFORE_START = QUOTE_DELAY_BEFORE_START + QUOTE.length * TYPE_DELAY
const QUOTE_AUTHOR = 'Ричард Фейнман'

export function LandingPage() {
	return (
		<Layout className={styles.root}>
			<Header />
			<Layout.Content className='container'>
				<section className={styles.hero_section}>
					<motion.div
						initial={{ transform: 'translateY(-20px)', opacity: 0 }}
						animate={{ transform: 'translateY(0)', opacity: 1 }}
						transition={{ delay: 0.45, duration: 0.5 }}
						className={styles.hero}
					/>

					<motion.div
						className={styles.hero_content}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: 0.3,
							duration: 0.5,
						}}
					>
						<Typography.Title className={cn(styles.hero_title)}>
							<TypedText text={TITLE} delay={TYPE_DELAY} />
						</Typography.Title>
						<Typography.Paragraph className={cn(styles.hero_text)}>
							<TypedText text={TEXT} delayBeforeStart={TEXT_DELAY_BEFORE_START} delay={TYPE_DELAY} />
						</Typography.Paragraph>
						<div className={styles.hero_quote}>
							<Typography.Text className={cn(styles.quote_text)}>
								<TypedText text={QUOTE} delayBeforeStart={QUOTE_DELAY_BEFORE_START} delay={TYPE_DELAY} />
							</Typography.Text>
							<Typography.Text className={cn(styles.quote_author)}>
								<TypedText text={QUOTE_AUTHOR} delayBeforeStart={QUOTE_AUTHOR_DELAY_BEFORE_START} delay={TYPE_DELAY} />
							</Typography.Text>
						</div>
					</motion.div>
				</section>
			</Layout.Content>
		</Layout>
	)
}
