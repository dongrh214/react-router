import React from 'react'
import { browserHistory } from 'react-router'
import './index.less'

class List extends React.Component {
    render() {
        const arr = [1, 2, 3]
        return (
            <ul>
                {arr.map((item, index) => {
                    return <li className="list-item" key={index} onClick={this.clickHandler.bind(this, item)}>js jump to {item}</li>
                })}
            </ul>
        )
    }
    clickHandler(value) {
        browserHistory.push('/detail/' + value)
    }
}

export default List