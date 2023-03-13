import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

    <Router>
      <Routes>
          <Route path='/'  element={<HomeScreen />}/>
          <Route path='/cart'  element={<CartScreen />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
