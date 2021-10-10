import React, {useState,useEffect} from 'react';

const PeopleInSpaceRN = () => {
    const [peopleInSpace, setPeopleInSpace] = useState();
    const getPeopleInSpace = async () => {
    let peopleData = await fetch("http://api.open-notify.org/astros.json");
    let peopleDataParsed = await peopleData.json();
    setPeopleInSpace(peopleDataParsed);
    }
    useEffect(() => {
        getPeopleInSpace();
    }, [])
    return (
        <div className="PISdiv">
           <h2>People in Space at Present : {peopleInSpace && peopleInSpace["number"]}</h2>
           <div className="row">
           {peopleInSpace && peopleInSpace["people"].map(element =>{
                return <p className="col-sm-3"> <span>{element.name}</span>, <span>{element.craft}</span></p>
                
           })}
           </div>
        </div>
    )
}

export default PeopleInSpaceRN
