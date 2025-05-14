import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Col, Row } from "react-bootstrap";
import { getVideoApi } from "../services/allApi";
const Allvideos = ({addVideoResponse}) => {

  const[videosData, setVideosData] = useState([])
  const[deleteVideoRes,setDeleteVideoRes]= useState([])

  useEffect(()=>{
    getVideo()
  },[addVideoResponse,deleteVideoRes])

  const getVideo = async()=>{
    let result = await getVideoApi()
    if(result.status>=200 && result.status<=300)
    {
      setVideosData(result.data)
      console.log(result)
    }
    else{
      alert("Error Fetching Video Data")
    }
    
  }
  return (
    <>
      <h1>All Videos</h1>
      <Row>
        {
          videosData?.map((eachVideos,index) =>(
            <Col key={index} className='m-5 ' lg={4} md={6} sm={12}>
            <VideoCard videos={eachVideos}
            setDeleteVideoRes={setDeleteVideoRes}/>
            </Col>
          ))
        }
        
      </Row>
    </>
  );
};

export default Allvideos;
