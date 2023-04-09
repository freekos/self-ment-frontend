import { createEvent, createStore, sample } from 'effector'

import { $$session } from '~src/entities/session'

export interface SignInForm {
	email: string
	password: string
}

export function createSignInForm() {
	const submit = createEvent<SignInForm>()
	const setErrors = createEvent<SignInForm>()

	const $errors = createStore<SignInForm>({} as SignInForm)
	const $signInPending = $$session.signInFx.pending

	$errors.on(setErrors, (_, errors) => errors)

	sample({
		clock: submit,
		filter: (form) => form?.email !== '' && form?.password !== '',
		target: $$session.signedIn,
	})

	return { submit, setErrors, $errors, $signInPending }
}
