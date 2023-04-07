import { Spin } from 'antd'
import { type ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export function withRouter(component: () => ReactNode) {
	return () => (
		<BrowserRouter>
			<Suspense fallback={<Spin className='overlay' />}>{component()}</Suspense>
		</BrowserRouter>
	)
}
