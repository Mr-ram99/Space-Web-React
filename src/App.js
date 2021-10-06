import './App.css';
import Navbar from './Components/Navbar';
import APOD from './Components/APOD';
import Gallary from './Components/Gallary';
const  App = () =>{
  const api_key="fWl7QxeLYzhQaU5NPZhDSysxDU63MUSVcRD1zZhp";
  return (
   <> 
     <Navbar />
     <APOD api_key={api_key}/>
   </>
  );
}

export default App;
