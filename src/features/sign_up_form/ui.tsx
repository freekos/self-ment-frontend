import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import cn from 'classnames'
import { useUnit } from 'effector-react'
import { z } from 'zod'

import { type createSignUpForm, type SignUpForm } from './model'
import styles from './styles.module.scss'

interface SignUpFormProps {
	className?: string
	model: ReturnType<typeof createSignUpForm>
}

const schema = z
	.object({
		email: z.string({ required_error: 'Введите почту' }).email({ message: 'Введите корректную почту' }),
		password: z
			.string({ required_error: 'Введите пароль' })
			.min(6, { message: 'Пароль должен быть не менее 6 символов' }),
		confirmPassword: z
			.string({ required_error: 'Введите подтерждающий пароль' })
			.min(6, { message: 'Пароль должен быть не менее 6 символов' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароль и подтверждающий пароль не совпадают',
		path: ['confirmPassword'],
	})

export function SignUpForm(props: SignUpFormProps) {
	const { className, model } = props

	const [form] = Form.useForm()
	const [errors, setErrors] = useUnit([model.$errors, model.setErrors])
	const signUpPending = useUnit(model.$signUpPending)
	const handleFinish = useUnit(model.submit)

	const onFinish = async (values: SignUpForm) => {
		try {
			await schema.parse(values)
			handleFinish(values)
		} catch (err: any) {
			setErrors(err.formErrors.fieldErrors)
		}
	}

	return (
		<Form className={cn(styles.form, className)} form={form} size='large' onFinish={onFinish}>
			<Form.Item name='email' validateStatus={errors?.email ? 'error' : ''} help={errors.email}>
				<Input prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name='password' validateStatus={errors?.password ? 'error' : ''} help={errors.password}>
				<Input.Password prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item
				name='confirm'
				validateStatus={errors?.confirm ? 'error' : ''}
				help={errors.confirm}
			>
				<Input.Password prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className={cn(styles.submit)}>
				<Button htmlType='submit' type='primary' loading={signUpPending}>
					Зарегистрироваться
				</Button>
			</Form.Item>
		</Form>
	)
}
