import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartActions';
export default function Pizza({pizza}) {
    const [quantity,setQuantity] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch= useDispatch();
    function AddtoCart(){
      dispatch(addToCart(pizza,quantity))
    }
  
  return (
    <div  className ="shadow-lg p-3 mb-3 bg-white rounded">
        
        <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style={{height:"150px", width:"150px"}} />
        </div>
        <div className='flex-container '>

        <div className='flex-conatiner m-3'>
            <p className='quantity_text'>Quantity</p>
            <select className='form-control form-quantity'  value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((x,i)=>{
                    return <option value={i+1}>{i+1}</option>
                })}
            </select>
        </div>

        </div>
        <div className='flex-conatiner'>
            <div className='m-1 w-100'>
                <h1 className='mt-1'> Price: {pizza.prices * quantity} Rs/-</h1>
            </div>
            <div className='m-1 w-100'>
                <button className='btn' onClick={AddtoCart}>Add to Cart</button>
            </div>

        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <img src={pizza.image} className="img-fluid" style={{height: "400px", width :"400px"}}/> 
         <p>{pizza.description}</p>
                </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
         </div>
  )
}
