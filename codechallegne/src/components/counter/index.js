import  React, { PureComponent }  from 'react'
import PropTypes from 'prop-types'


export default class Counter extends PureComponent {
    static propTypes = {
        number: PropTypes.number,
    }
    render() {
        const { number } = this.props
        return(
                {number}
        )
    }

}