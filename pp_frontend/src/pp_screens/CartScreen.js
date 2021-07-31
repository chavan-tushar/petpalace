import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../pp_components/Message'
import { addToCart, removeFromCart } from '../pp_actions/cartActions'

function CartScreen({match, location, history}) {
    let { id:productId } = useParams()
    console.log("productId:", productId)
    //const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    console.log(cart)
    const { cartItems } = cart
    console.log('Cart: ',cartItems)

    useEffect(() => {
        console.log('UseEffect')
        if(productId)
            dispatch(addToCart(productId, qty))
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ?(
                    <Message variant='info'>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </Message>
                    ):

                    (
                    
                    <ListGroup variant='flush'>
                        {cartItems && cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}> {item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        &#8377;{item.price}
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {
                                                [...Array(item.countInStock).keys()].map((cnt) => (
                                                    <option key={cnt + 1} value={cnt + 1}>
                                                        {cnt + 1}
                                                    </option>
                                                ))

                                            }
                                        </Form.Control>
                                    </Col>
                                    <Col md={1}>
                                        <Button 
                                            type="button"
                                            variant="light"
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <i className="fas fa-trash" ></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            //console.log("Hello")
                        ))

                        }
                    </ListGroup>
                        
                    )
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        
                        <ListGroup.Item>
                            <h2>
                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                            </h2>
                            &#8377;{cartItems.reduce((acc, item) => acc + item.qty* item.price, 0).toFixed(2)}    
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>
                        <Button 
                            type='button' 
                            className='btn-block' 
                            disabled={cartItems.length === 0} 
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>
        </Row>


    )
        
    
}

export default CartScreen
