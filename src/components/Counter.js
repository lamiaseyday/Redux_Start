//Burda sayac bilgisini tutuyoruz.
//sayac bi sayı içeriyor ve sayıda aslında state bilgisidir.
//bu state CounterReducer den geliyor.

import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
          {/* state bilgisini App Den değil depodan alıyoruz. */}
        <h1>{this.props.counter}</h1>
      </div>
    );
    
  }
}

{/* mapStateToProps : yani counter'ın proplarına state'i bağla. */}
function mapStateToProps(state){
    return {counter:state.CounterReducer}
}
export default connect(mapStateToProps)(Counter);
