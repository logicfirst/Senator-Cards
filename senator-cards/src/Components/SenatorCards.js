import React, {Component} from 'react'
import './Card.css' 

class SenatorCards extends Component{

  render(){
    return(
      <div>{this.props.senatorData.map(senator => 
        <div key={this.props.senatorData.id}>
          <div className='card'>
            <p>{senator.first_name}</p>
          </div>
          <div className='card'>
            <p>{senator.last_name}</p>
          </div>
          <div className='card'>
            <p>{senator.last_name}</p>
          </div>
          <div className='card'>
            <p>{senator.last_name}</p>
          </div>
        </div>
      )}</div>
    )
  }
}
export default SenatorCards

