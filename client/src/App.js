import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouterList from './routes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouterList/>
      <Footer/>
    </div>
  );
}

export default App;
