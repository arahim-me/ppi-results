import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link, Outlet, useRoutes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Results from './Pages/Pages/Results';
import About from './Pages/About/About';
import Contact from './Pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/results' element={<Results></Results>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>
      </BrowserRouter>        
  </div>
);
}


export default App;
