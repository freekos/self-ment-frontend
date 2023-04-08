import { Layout, Typography } from 'antd'
import cn from 'classnames'

import { Header } from '~src/widgets/header'

import { TypedText } from '~src/shared/ui'

import styles from './styles.module.scss'

const TYPE_DELAY = 30
const TITLE = 'Добро пожаловать в SELF MENT'
const TEXT =
	'Наш сайт создан для того, чтобы помочь вам в развитии и достижении ваших целей. Саморазвитие - это не просто слова, это наша жизнь.'
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
					<div className={styles.hero} />
					<div className={styles.hero_content}>
						<Typography.Title className={cn(styles.hero_title)} level={2}>
							<TypedText text={TITLE} delay={TYPE_DELAY} />
						</Typography.Title>
						<Typography.Paragraph className={cn(styles.hero_text)}>
							<TypedText text={TEXT} delayBeforeStart={TEXT_DELAY_BEFORE_START} delay={TYPE_DELAY} />
						</Typography.Paragraph>
						<div className={styles.hero_quote}>
							<Typography.Title className={cn(styles.hero_text)} level={5}>
								<TypedText text={QUOTE} delayBeforeStart={QUOTE_DELAY_BEFORE_START} delay={TYPE_DELAY} />
							</Typography.Title>
							<Typography.Paragraph className={cn(styles.quote_author)}>
								<TypedText text={QUOTE_AUTHOR} delayBeforeStart={QUOTE_AUTHOR_DELAY_BEFORE_START} delay={TYPE_DELAY} />
							</Typography.Paragraph>
						</div>
					</div>
				</section>
			</Layout.Content>
		</Layout>
	)
}
