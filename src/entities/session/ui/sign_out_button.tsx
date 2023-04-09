import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useUnit } from 'effector-react'

import * as model from '../model'

export function SignOutButton() {
	const handleSignOut = useUnit(model.signedOut)

	return (
		<Button type='primary' onClick={handleSignOut}>
			Выйти
		</Button>
	)
}
