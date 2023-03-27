import './App.css';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import Nav from './files/nav';
import Home from './files/home';
import About from './files/about'
import Services from './files/services'
import Contact from './files/contact'
import Footer  from  './files/footer'


function App() { 
  
  return (
    
     <Router>

        <div className="App">
        <Nav/>
           

          <Switch>
            <Route exact path='/' >
              <Home/>  
            </Route>

            <Route path='/about' >
              <About/> 
            </Route>

            <Route path='/services' >
              <Services/>  
            </Route>

            <Route path='/contact' >
              <Contact/>  
            </Route>

            <Route path='/footer' >
              <Footer/>  
            </Route>

          </Switch>
         </div>

     </Router>

  );
}

export default App;
