import '~src/app/providers/index'
import { withProviders } from '~src/app/providers/index'

import { Pages } from '~src/pages'

import './styles.scss'

function App() {
	return <Pages />
}

export default withProviders(App)
