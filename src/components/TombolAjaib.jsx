import React, { Component } from 'react';
import axios from 'axios'

class TombolAjaib extends Component {

   tombolGet = () => {
      let config = {
         // req.header('Authorization)
         headers : { Authorization : 'Auth Token'},
         // req.query  
         params : { username : 'Karen' }            
      }
      
      // req.params.tombolid
      axios.get('http://localhost:2020/tombolget/15', config ) 
         .then(res => console.log({res}))
         .catch(err => console.log({err}))
   }

   tombolPost = () => {
      let config = {
         headers : { Authorization : 'Auth Token'},  
         params : { username : 'Karen' }            
      }

      // req.body
      let body = {
         description : "Winter Soldier"
      }

      axios.post('http://localhost:2020/tombolget/15', body, config ) 
         .then(res => console.log({res}))
         .catch(err => console.log({err}))
   }

   tombolPatch = () => {
      let config = {
         headers : { Authorization : 'Auth Token'},  
         params : { username : 'Karen' }            
      }

      // req.body
      let body = {
         description : "Winter Soldier"
      }

      axios.patch('http://localhost:2020/tombolget/15', body, config ) 
         .then(res => console.log({res}))
         .catch(err => console.log({err}))
   }

   tombolDelete = () => {
      let config = {
         headers : { Authorization : 'Auth Token'},  
         params : { username : 'Karen' }            
      }

      // req.body
      let body = {
         description : "Winter Soldier"
      }

      axios.patch('http://localhost:2020/tombolget/15', body, config ) 
         .then(res => console.log({res}))
         .catch(err => console.log({err}))
   }

   tombolStatus = () => {
      axios.get('http://localhost:2020/status')
         // SUCCESS : 2xx
         // res.data , res.status, res.statusText
         .then(res => console.log({res}))

         // ERROR : 3xx, 4xx
         // err.response.data, err.response.status, err.response.statusText
         .catch(err => console.log({err}))
   }

   render(){
      return (
         <div>
            <h1 className ="text-center">Tombol ajaib</h1>
            <button onClick={this.tombolGet} className="btn btn-block btn-outline-primary" > GET </button>
            <button onClick={this.tombolPost} className="btn btn-block btn-outline-success" > POST </button>
            <button onClick={this.tombolPatch} className="btn btn-block btn-outline-secondary" > PATCH </button>
            <button onClick={this.tombolDelete} className="btn btn-block btn-outline-danger" > DELETE </button>
            <button onClick={this.tombolStatus} className="btn btn-block btn-outline-warning" > STATUS </button>
         </div>
      )
   }
}

export default TombolAjaib