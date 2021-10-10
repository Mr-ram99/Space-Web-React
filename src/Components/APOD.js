import React, { useState, useEffect } from 'react'

const APOD = (props) => {
    const [parsedData, setParsedData] = useState([]);
    const updateAPOD = async () => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${props.api_key}`;
        let data = await fetch(url);
        let parseData = await data.json();
        setParsedData(parseData);
    }
    useEffect(() => {
        updateAPOD();
    },[]);
    return (
        <>
        <h1 className="text-center m-auto text-light">Astronomical Picture of the Day</h1>
           <div className="container-fluid apod-container text-light row m-0 py-4">
                <div className="apod-desc col-sm-6 my-auto">
                    <p>
                        {parsedData.explanation}
                    </p>
                </div>
                <div className="col-sm-6 my-auto">
                    {parsedData.media_type === "video" && <iframe src={parsedData.url} width="560" height="315" className="iframe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                    {parsedData.media_type === "image" && <img width="100%" src={parsedData.url} alt="Astronomy pic of the day" />}
                    <figcaption className="text-center">&copy; {parsedData.copyright}</figcaption>
                </div>             
            </div>
        </>

    )

}

export default APOD
