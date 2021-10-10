import './App.css';
import Navbar from './Components/Navbar';
import APOD from './Components/APOD';
import SearchNasa from './Components/SearchNasa';
import NasaIVL from './Components/NasaIVL';
import PeopleInSpaceRN from './Components/PeopleInSpaceRN';
import ISS from './Components/ISS';
const  App = () =>{
  const api_key="fWl7QxeLYzhQaU5NPZhDSysxDU63MUSVcRD1zZhp";
  return (
   <> 
     <Navbar />
     <SearchNasa api_key={api_key}/>
     <APOD api_key={api_key}/>
     <PeopleInSpaceRN />
     <ISS />
   </>
  );
}

export default App;
