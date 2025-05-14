import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addCategory, getCategoryApi,getSingleVideo } from '../services/allApi'

const AllCatergories = () => {
  const [show, setShow] = useState(false)
  const [categoryName,setCategoryName]= useState("")
  const [categoryData,setCategoryData]=useState([])

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(()=>{
    getAllCategory()
  },[])

  const addCategoryCall= async()=>{
    const reqObj={
      categoryName,videos:[]
    }
    let result= await addCategory(reqObj)
    console.log(result)
  }

  const getAllCategory = async()=> {
    let result= await getCategoryApi()
    setCategoryData(result.data)
    console.log(result.data)
  }

  const onVideoDrop=async(e,eachData)=>{
    console.log(e)
    console.log(eachData);
    let vidId = e.dataTransfer.getData("videoId")
    let result = await getSingleVideo(vidId)

    eachData.videos.push(result.data)
    console.log(eachData)
  }

  const onDragging=(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <div className="d-flex justify-content-around">
        <h1>AllCatergories</h1>
        <button
          className="ms-3 btn btn-warning"
          style={{ width: '46px', height: '50px', borderRadius: '50%' }}
          onClick={handleShow}
        >
          +
        </button>
        </div>

        { categoryData?.length > 0?(
      <div className="container-fluid mt-3">

          {categoryData?.map((eachData,index)=> (
        <div key={index} droppable="true" onDragOver={(e)=>onDragging(e)} onDrop={(e)=> onVideoDrop(e,eachData)} className="border card rounded p-3">

   <div className="d-flex justify-content-between">
    <h3>{eachData.categoryName}</h3>
<button className="btn"><i className="fa-solid fa-trash text-danger fs-5"></i></button>
   </div>
   <div>
    {/* each vidoes */}
   </div>
        </div>
          ))}
      </div>
      ):(
        <div>No Categories Found!!</div>
)}
        
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Your Video Details!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="border rounded p-1 m-2">
              <FloatingLabel
                controlId="floatingInput"
                label="Category Name"
                className="mb-3 w-100"
              >
                <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category" />
              </FloatingLabel>
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addCategoryCall} variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default AllCatergories