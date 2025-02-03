import React,{useState} from 'react'
import {Modal,Button,Carousel } from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Room({room}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <div className='container'>
        <div className="row bs mb-3">
            <div className="col-md-4">
                <img src={`/images/${room.imageurls[0]}`} className='smallimg'/>
            </div>
            
            <div className="col md-7 ">
                <h1>{room.name}</h1>
                <p>Max Count:{room.maxCount}</p>
                <p>Contact Number :{room.phoneNumber}</p>
                <p>Type :{room.type}</p>

                <div style={{float:'right'}}>
                  <Link to={`/book/${room._id}`}>
                  <button className='btn btn-primary m-2'>Book Now</button> 
                  </Link>
                  
                  <button className='btn btn-primary' onClick={handleShow}>View Details</button>  
                </div>

            </div>
        </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
        
       
            
        {room.imageurls.map((url, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 bigimg"
                        src={`/images/${url}`}
                    />
                </Carousel.Item>
            ))}
      
      
     
    </Carousel>
    
    <p style={{ fontFamily:"Montserrat", fontSize: '20px', color: '#333', }}>
    {room.description}
</p>
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
        
    )
}

export default Room