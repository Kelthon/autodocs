import './App.css';
import Menu from './components/Navbar';
import Footer from './components/Footer';
import RouterList from './routes';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Menu/>
      <Container>
        <RouterList/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
