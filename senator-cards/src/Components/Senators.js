import React, {useMemo, useEffect, useState} from 'react'
import SenatorTable from './SenatorTable'
import SenatorCards from './SenatorCards'
import '../App.css'

function Senators(props) {

  const [senatorData, setSenatorData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/senators')
    .then(res => res.json())
    .then((senatorData) => setSenatorData(senatorData))
  })
  
    return(
      <div>
        <SenatorTable senatorData={senatorData}/>
        <SenatorCards senatorData={senatorData}/>
      </div>
    )
  
}
export default Senators