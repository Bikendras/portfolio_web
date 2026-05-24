import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='skills' element={<Skills/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects'  element={<Projects/>}/>
          <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
