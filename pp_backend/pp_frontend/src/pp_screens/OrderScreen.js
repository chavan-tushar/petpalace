import React, {useState, useEffect} from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../pp_components/Message'
import Loader from '../pp_components/Loader'
import { getOrderDetails } from '../pp_actions/orderActions'

function OrderScreen({ match }) {

    // const orderId = match.params.id
    // const dispatch = useDispatch()

    // const orderDetails = useSelector(state => state.orderDetails)
    // const {orderOld, error, loading } = orderDetails
    // const order = useSelector(state => state.cart)


    // if(!loading && !error && order){
    //     order.itemPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    // }
    
    // useEffect(() => {
    //     if(!order || order._id !== Number(orderId)){
    //         dispatch(getOrderDetails(orderId))
    //     }
        
    // }, [order, orderId])

    return (
        <Message variant="success">Thank you! Your Order has been Placed Successfully.</Message>
               
    )

    
//     loading ? (
//         <Message><Loader /></Message>
//     ) : error ? (
//         <Message variant='danger'>{error}</Message>
//     ) :
//     (
//         <div>
//             <h1>Order Placed Successfully ! </h1>
//             <h2>Order : {order._id}</h2>
//             <Row>
//                 <Col md={8}>
//                     <ListGroup variant="flush">
//                         <ListGroup.Item>
//                             <h2>Shipping</h2>
//                              <p>
//                                 <strong>
//                                     Shipping:&nbsp;&nbsp;
//                                 </strong>
//                                 {order.shippingAddress.address}, {order.shippingAddress.city},
//                                 {'   '}
//                                 {order.shippingAddress.postalCode},
//                                 {'   '}
//                                 {order.shippingAddress.country}
//                             </p>
//                         </ListGroup.Item>

//                         <ListGroup.Item>
//                             <h2>Payment Method</h2>
//                              <p>
//                                 <strong>
//                                     Method:&nbsp;&nbsp;
//                                 </strong>
//                                 {order.paymentMethod}
//                             </p>
//                         </ListGroup.Item>

//                         <ListGroup.Item>
//                             <h2>Order Items</h2>
//                             {order.orderItems.length===0 ? <Message varient="info">
//                                 Order is empty
//                             </Message> : (
//                                     <ListGroup variant="flush">
//                                         {order.orderItems.map((item, index) => (
//                                             <ListGroup.Item key={index}>
//                                                 <Row>
//                                                     <Col md={2}>
//                                                         <Image src={item.image} alt={item.name} fluid rounded />
//                                                     </Col>
//                                                     <Col>
//                                                         <Link to={`/product/${item.product}`}>{item.name}</Link>
//                                                     </Col>
//                                                     <Col md={4}>
//                                                         {item.qty} X &#8377;{item.price} = &#8377;{(item.qty * item.price).toFixed(2)}
//                                                     </Col>
//                                                 </Row>
//                                             </ListGroup.Item>
//                                         ))}
//                                     </ListGroup>
//                                 )
//                         }
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </Col>

//                 <Col md={4}>
//                     <Card>
//                         <ListGroup variant="flush">
//                             <ListGroup.Item>
//                                 <h2>Order Summary</h2>
//                             </ListGroup.Item>

//                             <ListGroup.Item>
//                                 <Row>
//                                     <Col>
//                                         Items:&nbsp;&nbsp;
//                                     </Col>
//                                     <Col>
//                                         &#8377;{order.itemPrice}
//                                     </Col>
//                                 </Row>
//                             </ListGroup.Item>

//                             <ListGroup.Item>
//                                 <Row>
//                                     <Col>
//                                         Shipping:&nbsp;&nbsp;
//                                     </Col>
//                                     <Col>
//                                         &#8377;{order.shippingPrice}
//                                     </Col>
//                                 </Row>
//                             </ListGroup.Item>

//                             <ListGroup.Item>
//                                 <Row>
//                                     <Col>
//                                         Tax:&nbsp;&nbsp;
//                                     </Col>
//                                     <Col>
//                                         &#8377;{order.taxPrice}
//                                     </Col>
//                                 </Row>
//                             </ListGroup.Item>

//                             <ListGroup.Item>
//                                 <Row>
//                                     <Col>
//                                         Total:&nbsp;&nbsp;
//                                     </Col>
//                                     <Col>
//                                         &#8377;{order.totalPrice}
//                                     </Col>
//                                 </Row>
//                             </ListGroup.Item>

//                         </ListGroup>
//                     </Card>
//                 </Col>
                
//             </Row>
            
//         </div>
//     )
}

export default OrderScreen
