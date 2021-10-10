import React, {useState,useEffect} from 'react'
import issimg from '../Assets/iss.jpg';
const ISS = () => {
    const [ISSdata, setISSdata] = useState();
    const getISSdata= async () => {
    let ISSData = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    let ISSDataParsed = await ISSData.json();
    setISSdata(ISSDataParsed);
    }
    useEffect(() => {
        getISSdata();
    }, [])
    return (
         <div className="row p-2">
          <h1 className="text-center m-2">International Space Station</h1>
          <div className="col-sm-6 text-center">
            <img src={issimg} alt="International Space Station" width="90%"/>
          </div>
            {ISSdata && <div className="text-center col-sm-6 issdata">
                <p>Latitude : {ISSdata.latitude}</p>
                <p>longitude : {ISSdata.longitude}</p>
                <p>velocity : {ISSdata.velocity}</p>
                <p>visibility : {ISSdata.visibility}</p>
                <p>daynum : {ISSdata.daynum}</p>
                <p>solar_lat : {ISSdata.solar_lat}</p>
                <p>solar_lon : {ISSdata.solar_lon}</p>
            </div>
            }
        </div>
    
    )
}

export default ISS
