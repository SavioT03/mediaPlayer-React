import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getHistoryApi } from '../services/allApi'

const History = () => {

  const [historyData,setHistoryData]= useState([])

  useEffect(()=>{
    getHistoryData()
  },[])
  const getHistoryData= async()=>{
    let result= await getHistoryApi();
    console.log(result.data)
    setHistoryData(result.data)
  }
  const deleteHistory=async(id)=>{
    console.log(id)
    await deleteHistoryApi(id);
    getHistoryData();
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h1>Watch History</h1>
        <Link to={'/Home'}>Back to Home</Link>
      </div>
      <Table striped bordered hover variant="dark" className='mt-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Time Stamp</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {
          historyData?.map((eachHistory,index)=>(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{eachHistory?.caption}</td>
          <td>{eachHistory?.link}</td>
            <td>{eachHistory?.currentDate}</td>
            <td>{" "}
              <button onClick={()=>deleteHistory(eachHistory.id)} className='btn'><i className="fa-solid fa-trash text-danger fs-5"></i></button>
            </td>
          </tr>
          ))
        }
      </tbody>
    </Table>
    </div>
    )
}

export default History