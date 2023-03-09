     
import React from 'react';
import Tm from "./Tm"
import Hi from "./Hi"

class Myapp extends React.Component{
    render(){
      return(
        <div className='main'>
          <Hi/>
          <Tm/>
        </div>
      )
    }
  
  }
export default Myapp

