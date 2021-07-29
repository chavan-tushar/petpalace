import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './pp_components/Header'
import Footer from './pp_components/Footer'
import HomeScreen from './pp_screens/HomeScreen'
import ProductScreen from './pp_screens/ProductScreen'

import CartScreen from './pp_screens/CartScreen'



function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
