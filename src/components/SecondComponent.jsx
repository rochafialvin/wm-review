import React, { Component } from 'react';
// Untuk  membuat jalur (menerima , mengirim), dimana pada component ini kita akan mengirim
import {connect} from 'react-redux'
import { kirimAction } from '../actions/actions'
import axios from 'axios'


class SecondComponent extends Component {


   kirim = () => {
      let name = this.name.value
      let email = this.email.value
      let hobby = this.hobby.value

      // Kirim ke reducer
      this.props.kirimAction(name, email, hobby)
   }

   reset = () => {

   }


   render() {
      return(
         <form className="form-group" >
            <p className="text-light">
               Name
               <input className="form-control" ref={input => this.name = input} type="text"/>
            </p>
            <p className="text-light">
               Email
               <input className="form-control" ref={input => this.email = input} type="text"/>
            </p>
            <p className="text-light">
               Hobby
               <input className="form-control" ref={input => this.hobby = input} type="text"/>
            </p>

            <input onClick={this.kirim} className="btn btn-primary btn-block mt-4" type="button" value="Kirim"/>
            <input onClick={this.reset} className="btn btn-danger btn-block my-4" type="button" value="Reset"/>
         </form>
      )
   }
}

export default connect(null, { kirimAction })(SecondComponent);