import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {increaseCounter} from '../redux/actions/CounterActions'

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseCounter())
                }}>1 arttır</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    //bindActionCreators : bir aksiyonu bağlamak için
    //redux'dan gelen bir fonksiyon
    return {actions: bindActionCreators(increaseCounter, dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter)
