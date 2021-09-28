import './App.css';
import Navbar from './Components/Navbar';
import PicOfDay from './Components/PicOfDay';

const  App = () =>{
  const api_key="fWl7QxeLYzhQaU5NPZhDSysxDU63MUSVcRD1zZhp";
  return (
   <> 
     <Navbar />
     <PicOfDay api_key={api_key}/>
   </>
  );
}

export default App;
