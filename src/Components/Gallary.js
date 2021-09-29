import React, {useState, useEffect}from 'react'
import GallaryImage from './GallaryImage';
const Gallary = (props) => {
    const [photos, setPhotos] = useState([]);

    const updatePhotos = async() =>{
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${props.sol}&api_key=${props.api_key}`;
        const data = await fetch(url);
        const jsonData = await data.json();
        setPhotos(jsonData["photos"]);
    }
    useEffect(() => {
       updatePhotos();
    });
    return (
        <div className="row container-fluid my-3 mx-auto">
           {
           photos.map((element)=>{
            return <GallaryImage key={element["id"]} img={element["img_src"]} sol={element["sol"]} camera={element["camera"]["full_name"]} rover_name={element["rover"]["name"]} rover_status={element["rover"]["status"]} date={element["earth_date"]} />
           }
           )
           }
        </div>
    )
}

export default Gallary
