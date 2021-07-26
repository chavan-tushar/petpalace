import { Container } from 'react-bootstrap'

import Header from './pp_components/Header'
import Footer from './pp_components/Footer'

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
