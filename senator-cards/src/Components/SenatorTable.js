import React, {Component} from 'react'

class SenatorTable extends Component{

  render(){
    return(
      <div>
        <table border='1'>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Title</th>
              <th>State</th>
              <th>Party</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Missed Vote Percentage</th>
              <th>Votes with Party Percentage</th>
            </tr>
          </thead>
          <tbody>
            {this.props.senatorData.map(senator => 
              <tr key={this.props.senatorData.id}>
                <td>{senator.first_name}</td>
              </tr>)}
            
          </tbody>
        </table>
      </div>
    )
  }
}
export default SenatorTable