import './App.css';
import Navbar from './Components/Navbar';
import APOD from './Components/APOD';
import Gallary from './Components/Gallary';
const  App = () =>{
  const api_key="fWl7QxeLYzhQaU5NPZhDSysxDU63MUSVcRD1zZhp";
  const curiosity_launch_date = new Date("06-08-2012");
    const today_date = new Date();
    const calculateSol =(date1,date2)=>{
        let millis = date1 - date2;
        let sol = Math.floor(millis/88775244.089999)-58;
        return sol;
    }
    const sol = calculateSol(today_date,curiosity_launch_date);
  return (
   <> 
     <Navbar />
     {/* <APOD api_key={api_key}/> */}
     <Gallary api_key={api_key} sol={sol}/>
   </>
  );
}

export default App;
