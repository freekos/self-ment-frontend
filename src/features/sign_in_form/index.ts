import { createSignInForm } from './model'
import { SignInForm } from './ui'

export const SignInFactory = {
	Form: SignInForm,
	create: createSignInForm,
}
