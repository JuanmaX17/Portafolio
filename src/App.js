import './App.css';
import {Home} from './components/Home/index.home'
import {About} from './components/About/index.about'
import {Menu} from './components/Menu/index.menu'
import {useState} from 'react'
import {Briefcase} from './components/Briefcase/index.briefcase';

function App() {

  let [page, setPage] = useState("home")

  return (

    <div className='container'>
      <div></div>
      <Menu setPage={setPage}/>
     

       {
        page === "home"
        ? <Home />
        : page === "about"
        ? <About />
        :page === "briefcase"
        ? <Briefcase />
        : <h1>404 not Found</h1>
        
        


       }
        
     
    </div>
  );
}

export default App;
