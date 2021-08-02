import React, {useState, useEffect} from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../pp_components/Message'
import CheckoutSteps from '../pp_components/CheckoutSteps'
import { createOrder } from '../pp_actions/orderActions'
import { ORDER_CREATE_RESET } from '../pp_constants/orderConstants'

function PlaceOrderScreen({ history }) {

    const orderCreate = useSelector(state => state.orderCreate)
    const {order, error, success} = orderCreate
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    cart.itemPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = Number(cart.itemPrice > 1000 ? 0 : 100).toFixed(2)
    cart.taxPrice = Number((0.06) * cart.itemPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    if(!cart.paymentMethod){
        history.push("/payment")
    }

    useEffect(() => {
        if(success){
            history.push(`/order/${order._id}`)
            dispatch({type: ORDER_CREATE_RESET})
        }
    }, [success, history])


    const placeOrder = () => {
        //console.log("Order is placed")
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress:cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }))
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                             <p>
                                <strong>
                                    Shipping:&nbsp;&nbsp;
                                </strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city},
                                {'   '}
                                {cart.shippingAddress.postalCode},
                                {'   '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                             <p>
                                <strong>
                                    Method:&nbsp;&nbsp;
                                </strong>
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length===0 ? <Message varient="info">
                                Your Cart is empty
                            </Message> : (
                                    <ListGroup variant="flush">
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={2}>
                                                        <Image src={`/static${item.image}`} alt={item.name} fluid rounded />
                                                    </Col>
                                                    <Col>
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} X &#8377;{item.price} = &#8377;{(item.qty * item.price).toFixed(2)}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )
                        }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Items:&nbsp;&nbsp;
                                    </Col>
                                    <Col>
                                        &#8377;{cart.itemPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Shipping:&nbsp;&nbsp;
                                    </Col>
                                    <Col>
                                        &#8377;{cart.shippingPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Tax:&nbsp;&nbsp;
                                    </Col>
                                    <Col>
                                        &#8377;{cart.taxPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Total:&nbsp;&nbsp;
                                    </Col>
                                    <Col>
                                        &#8377;{cart.totalPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                {error && <Message variant="danger">{error}</Message>}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className="btn-block"
                                    disabled={cart.cartItems === 0 }
                                    onClick = {placeOrder}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                
            </Row>
            
        </div>
    )
}

export default PlaceOrderScreen
