import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../pp_components/Product'
import Loader from '../pp_components/Loader'
import Message from '../pp_components/Message'
import { listProducts } from '../pp_actions/productActions'

function HomeScreen({history}) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    //const [products1, setProducts1] = useState()
    const { error, loading, products } = productList
    //console.log(`Product list ${ JSON.stringify(productList)}`)

    let keyword = history.location.search
    console.log(keyword)
    //console.log('Tushar', products)
    useEffect(() => {
        // const res  = axios.get('/api/products/')
        // res.then((data) => {
        //     console.log(data.data)
        //     setProducts1(data.data)
        // })
        // .catch((e) => {
        //     console.log(e)
        // })

        dispatch(listProducts(keyword))

        //setProducts1(listProducts())
        //console.log(products1)
        // const mydispatch = dispatch(listProducts())
        // console.log(mydispatch)
    },[dispatch, keyword])
    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <Loader />
                : error? <Message variant="danger">{error}</Message>
                : 
                <Row>
                
                    {products && products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>

                    ))}
                </Row>

            }
            
        </div>
    )
}

export default HomeScreen
