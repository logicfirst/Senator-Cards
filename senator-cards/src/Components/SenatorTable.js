import React, {Component} from 'react'
import './Card.css'

class SenatorTable extends Component{

  render(){
    return(
      <div>
        <table className='senator-table'>
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
                <td>{senator.first_name} {senator.last_name}</td>
                <td>{senator.id}</td>
                <td>{senator.title}</td>
                <td>{senator.state}</td>
                <td>{senator.party}</td>
                <td>{senator.gender}</td>
                <td>{senator.date_of_birth}</td>
                <td>{senator.missed_votes_pct}</td>
                <td>{senator.votes_with_party_pct}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}
export default SenatorTable