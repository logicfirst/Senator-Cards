import React from 'react'
import {useTable} from 'react-table'
import '../App.css'

function SenatorTable({columns, data}){

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data
  });

  
    return(
      <table {...getTableProps()}>
      <thead className='App'>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className='Data' {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
      // <div>
      //    <table>
      //     <thead>
      //       <tr>
      //         <th>Name</th>
      //         <th>ID</th>
      //         <th>Title</th>
      //         <th>State</th>
      //         <th>Party</th>
      //         <th>Gender</th>
      //         <th>Date of Birth</th>
      //         <th>Missed Vote Percentage</th>
      //         <th>Votes with Party Percentage</th>
      //       </tr>
      //     </thead>
        
      //     <tbody>
      //       {data.map(senator => 
      //         <tr key={data.id}>
      //           <td>{senator.first_name} {senator.last_name}</td>
      //           <td>{senator.id}</td>
      //           <td>{senator.title}</td>
      //           <td>{senator.state}</td>
      //           <td>{senator.party}</td>
      //           <td>{senator.gender}</td>
      //           <td>{senator.date_of_birth}</td>
      //           <td>{senator.missed_votes_pct}</td>
      //           <td>{senator.votes_with_party_pct}</td>
      //         </tr>)}
      //     </tbody>
      //   </table> 
      // </div>
    
 }

export default SenatorTable