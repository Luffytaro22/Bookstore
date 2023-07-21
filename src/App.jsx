import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
