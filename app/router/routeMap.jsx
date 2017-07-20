import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../conponents/App'
import Home from '../conponents/Home'
import List from '../conponents/List'
import Detail from '../conponents/Detail'
import NotFound from '../conponents/NotFound'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('router发生变化')
    }
    render() {
        return (
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='list' component={List}/>
                    <Route path='detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap