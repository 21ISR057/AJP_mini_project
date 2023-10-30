
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Features from './Pages/Features';
import About from './Pages/About';
import Contact from './Pages/Contact';
 import Book1 from './Users/Book1';
import Book from './Pages/Book';
import Edit from './Users/Edit';
import View from './Users/View';
function App() {
  return (
  
     <>
     <Navbar/>
      <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/features" element={<Features/>}/> 
      <Route path="/book1" element={<Book1/>} />
      <Route path="/book" element={<Book/>} />
      <Route path="/updateuser/:id" element={<Edit/>} />
      <Route path="/viewuser/:id" element={<View/>} />
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     {/* <View/> */}
     <Footer/>
     </>
  );
}

export default App;
