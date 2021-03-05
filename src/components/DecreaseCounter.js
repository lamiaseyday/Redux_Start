import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {decreaseCounter} from '../redux/actions/CounterActions'

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(decreaseCounter())
                }}>1 eksilt</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    //bindActionCreators : bir aksiyonu bağlamak için
    //redux'dan gelen bir fonksiyon
    return {actions: bindActionCreators(decreaseCounter, dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter)
