import React from 'react'

const GallaryImage = (props) => {
    return (
        <span className="rover-image-box col-sm-4 my-2">
                <img className="px-1 rover-image" src={props.img} alt="Rover-pic-mars" />
                <span className="rover-image-info">
                    <p>SOL : {props.sol}</p>
                    <p>Camera : {props.camera}</p>
                    <p>Rover Name : {props.rover_name}</p>
                    <p>Rover Status : {props.rover_status}</p>
                    <p>Date : {props.date}</p>
                </span>
        </span>
            )
}

            export default GallaryImage
