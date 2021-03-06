import React, {Component} from 'react'
import '../Card.css' 

class SenatorCards extends Component{

  render(){
    return(
      <div>{this.props.data.map(senator => 
        <div className='card'>
          <div key={this.props.data.id}>
            <p>{senator.first_name}</p>
            <p>{senator.last_name}</p>  
            <p>{senator.title}</p>  
            <p>{senator.state}</p>  
            <p>{senator.party}</p>  
          </div> 
        </div>
      )}</div>
    )
  }
}
export default SenatorCards

