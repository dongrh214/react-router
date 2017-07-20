import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'

import RouteMap from './router/routeMap'

// 通用样式
import './static/css/base.less'

render(
    <RouteMap history={browserHistory}/>,
    document.getElementById('root')
)
