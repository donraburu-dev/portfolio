import './App.css';
import Nav from './files/nav';
import Home from './files/home';
import About from './files/about';
import Services from './files/services';
import Contact from './files/contact';
import Footer from './files/footer';
import { BrowserRouter as Router, Switch, Route ,Routes } from 'react-router-dom';



function App() {
    
  
  return (
    
    <div className="App">
     <Nav/>
       <Router>
       <Routes>
          <Route  path="/" component={<Home/>} />
          <Route path="/about" component={ <About/> } />
          <Route path="/services" component={ <Services/> } />
          <Route path="/contact" component={ <Contact/> } />
          <Route path="/footer" component={ <Footer/> } />
         </Routes>
       </Router>
         
      
    </div>
  );
}

export default App;
