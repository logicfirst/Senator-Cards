import React, {useMemo, useEffect, useState} from 'react'
import SenatorTable from './SenatorTable'
import SenatorCards from './SenatorCards'
import '../App.css'

function Senators(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/senators')
    .then(res => res.json())
    .then((data) => setData(data))
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: "Senators",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "senator.first_name"
          },
          {
            Header: "ID",
            accessor: "senator.id"
          },
          {
            Header: "Title",
            accessor: "senator.title"
          },
          {
            Header: "State",
            accessor: "senator.state"
          },
          {
            Header: "Party",
            accessor: "senator.party"
          },
          {
            Header: "Gender",
            accessor: "senator.gender"
          },
          {
            Header: "Date of Birth",
            accessor: "senator.date_of_birth"
          },
          {
            Header: "Missed Votes Percentage",
            accessor: "senator.missed_votes_pct"
          },
          {
            Header: "Votes with Party Percentage",
            accessor: "senator.votes_with_party_pct"
          }
        ]
      } 
    ],
    [])
  
    return(
      <div className='App'>
        <SenatorTable columns={columns} data={data}/>
        <SenatorCards data={data}/>
      </div>
    )
  
}
export default Senators