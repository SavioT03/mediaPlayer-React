import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import { addHistory, deleteVideoApi, getVideoApi } from "../services/allApi";

const VideoCard = ({ videos,setDeleteVideoRes }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    const currentDate= new Date();
    const caption= videos.caption;
    const link= videos.youtubeLink;
    const reqObj={
        currentDate,
        caption,
        link,
    };
    console.log(currentDate)
    let result = await addHistory(reqObj);
    console.log(result)
    setShow(true)
};
console.log(videos)
const deleteVideo=async(id)=>{
  setDeleteVideoRes(id)
  await deleteVideoApi(id);
  getVideoApi();
}

const videoDrag= (e,id)=>{
  console.log(e)
  console.log(id)
}
  return (
    <>
      <Card draggable="true" onDragStart={(e)=>videoDrag(e,videos?.id)} style={{ width: "18rem", border: "1px solid white" }}>
        <Card.Img
          onClick={handleShow}
          variant="top"
          src={videos.imageURL}
          style={{ height: "300px" }}
        />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h4>{videos.caption}</h4>
            <button onClick={()=>deleteVideo(videos.id)} className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </div>
        </Card.Body>
      </Card>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{videos.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="430"
            src={`${videos.youtubeLink}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoCard;
