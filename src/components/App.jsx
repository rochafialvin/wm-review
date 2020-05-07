import React, { Component } from 'react';

import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import TombolAjaib from './TombolAjaib'

class App extends Component {
   render() {
      return(
         <div className="container">
            {/* <FirstComponent/>
            <SecondComponent/> */}
            <TombolAjaib/>
         </div>
      )
   }
}

export default App;