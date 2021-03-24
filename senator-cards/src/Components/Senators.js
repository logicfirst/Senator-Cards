import React, {Component} from 'react'
import SenatorTable from './SenatorTable'

class Senators extends Component {

  state = {
    senatorData: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/senators')
    .then(res => res.json())
    .then((senatorData) => {this.setState({senatorData})})
  }

  render(){
    return(
      <div>
        <SenatorTable senatorData={this.state.senatorData}/>
      </div>
    )
  }
}
export default Senators