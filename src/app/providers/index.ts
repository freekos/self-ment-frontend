import compose from 'compose-function'

import { withAntd } from './with_antd'
import { withRouter } from './with_router'

export const withProviders = compose(withAntd, withRouter)
