import { Button, Form, Input } from 'antd'
import cn from 'classnames'
import { z } from 'zod'

import styles from './styles.module.scss'
import { type createSignInForm, type SignInForm } from './model'
import { useUnit } from 'effector-react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

interface SignInFormProps {
	className?: string
	model: ReturnType<typeof createSignInForm>
}

const schema = z
	.object({
		email: z.string({ required_error: 'Введите почту' }).email({ message: 'Введите корректную почту' }),
		password: z
			.string({ required_error: 'Введите пароль' })
			.min(6, { message: 'Пароль должен быть не менее 6 символов' }),
	})
	

export function SignInForm(props: SignInFormProps) {
	const { className, model } = props

	const [form] = Form.useForm()
	const [errors, setErrors] = useUnit([model.$errors, model.setErrors])
	const signInPending = useUnit(model.$signInPending)
	const handleFinish = useUnit(model.submit)

	const onFinish = async (values: SignInForm) => {
		try {
			await schema.parse(values)
			handleFinish(values)
		} catch (err: any) {
			setErrors(err.formErrors.fieldErrors)
		}
	}

	return (
		<Form className={cn(styles.form, className)} size='large' form={form} onFinish={onFinish}>
			<Form.Item name='email' validateStatus={errors?.email ? 'error' : ''} help={errors.email}>
				<Input  prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name='password' validateStatus={errors?.password ? 'error' : ''} help={errors.password}>
				<Input.Password prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className={cn(styles.submit)}>
				<Button htmlType='submit'  type='primary' loading={signInPending}>
					Войти
				</Button>
			</Form.Item>
		</Form>
	)
}
