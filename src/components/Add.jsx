import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { uploadVideoAPI } from "../services/allApi";

const Add = ({ setAddVideoResponse }) => {
  const [InvalidYtLink, setInvalidYtLink] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imageURL: "",
    youtubeLink: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addDetails = async () => {
    if (videoDetails.caption && videoDetails.imageURL && videoDetails.youtubeLink) {
      let result = await uploadVideoAPI(videoDetails);
      console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        alert("Succesfully added your video");
        setAddVideoResponse(result);
        handleClose();
      } else {
        alert("Something went wrong, please contact admin");
      }
    } else {
      alert("Please fill the form");
    }
  };

  const ConvertToID = (videoURL) => {
    if (videoURL.includes(".be/")) {
      let videoID = videoURL.slice(17, 28);
      console.log(videoID);

      setVideoDetails({
        ...videoDetails,
        youtubeLink: `https://www.youtube.com/embed/${videoID}`,
      });

      setInvalidYtLink(false);
    } else {
      setInvalidYtLink(true);
      console.error("Invalid YouTube link");
    }
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <h3>Upload New videos</h3>
        <button
          className="ms-2 btn btn-warning fs-5 fw-bolder"
          onClick={handleShow}
        >
          +
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Your Video Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rounded p-3 m-2">
            <FloatingLabel
              controlId="floatingInputVideoCaption"
              label="Video Caption"
              className="mb-3 w-100"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
                type="text"
                placeholder="Video Caption"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImageURL"
              label="Video Image URL"
              className="mb-3 w-100"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imageURL: e.target.value })
                }
                type="text"
                placeholder="Video Image URL"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputYoutubeLink"
              label="Video YouTube Link"
              className="mb-3 w-100"
            >
              <Form.Control
                onChange={(e) => ConvertToID(e.target.value)}
                type="text"
                placeholder="Video YouTube Link"
              />
            </FloatingLabel>
            {InvalidYtLink ? (
              <span className="text-danger fw-bolder">Invalid Youtube Link</span>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={InvalidYtLink} onClick={addDetails} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;