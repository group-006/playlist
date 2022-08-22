import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Like from './pages/Like';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/like' element={<Like/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
