import { Container } from 'react-bootstrap'

import Header from './pp_components/Header'
import Footer from './pp_components/Footer'
import HomeScreen from './pp_screens/HomeScreen'


function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
