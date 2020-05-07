import React, { Component } from 'react';
// Untuk membuat jalur (menerima , mengirim), dimana pada component ini kita akan menerima
import {connect} from 'react-redux'

class FirstComponent extends Component {


   render() {
      return(
         <div>
            <p className="lead text-light">Name  : {this.props.na_me}</p>
            <p className="lead text-light">Email : {this.props.e_mail}</p>
            <p className="lead text-light">Hobby : {this.props.hob_by}</p>
         </div>
      )
   }
}

// Function yang digunakan untuk mengambil data
const mapStateToProps = (state) => { // state = {name, email, hobby}
   return {
      na_me : state.info.name,
      e_mail : state.info.email,
      hob_by : state.info.hobby
   }
}

export default connect(mapStateToProps)(FirstComponent);