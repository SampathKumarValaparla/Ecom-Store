import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar';
import {Shop} from './pages/Shop';
import {Cart} from './pages/Cart';



function App() {
  return (
    <div className="App">
      <shopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/Cart' element={<Cart/>}/>
        </Routes>

      </Router>
    </shopContextProvider>


    </div>
  );
}

export default App;
