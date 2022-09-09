import Menu from './components/Navbar';
import Footer from './components/Footer';
import RouterList from './routes';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/authcontext';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Menu/>
          <Container>
            <RouterList/>
          </Container>
        <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
