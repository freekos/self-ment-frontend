import { ConfigProvider } from 'antd'
import { type ReactNode } from 'react'

export function withAntd(component: () => ReactNode) {
	return () => <ConfigProvider>{component()}</ConfigProvider>
}
