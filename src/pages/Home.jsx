import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  Add  from '../components/Add'
import Allvideos from '../components/Allvideos'
import AllCatergories from '../components/AllCatergories'
const Home = () => {

  const[addVideoResponse,setAddVideoResponse]= useState([])
  return (
    <div>
      <div className="container my-3 d-flex justify-content-between">
        <Add setAddVideoResponse={setAddVideoResponse}/>
        <Link to={'/History'}>Watch History</Link>
      </div>
      <div className="container-fluid row">
        <div className="col-lg-6">
          <Allvideos addVideoResponse={addVideoResponse}/>
        </div>
        <div className="col-lg-6">
          <AllCatergories/>
        </div>
      </div>
    </div>
  )
}

export default Home