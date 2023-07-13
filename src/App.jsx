import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Home from './Routes/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="categories" />
      </Route>
    </Routes>
  )
}

export default App
