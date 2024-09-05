import React from "react"

export default function(props){
    console.log("props",props);
    return (
        <>   
        <article className="destination">
            <div>
                <img src={props.locPic} alt="Mount Fuji"  className="destination-img"/>          
            </div>
            <div className="destination--details">         
                <img src="/src/images/maps-icon.png" className="maps-icon" />
                <span className="destination--name">{props.country}</span>
                <a href={props.googleMapsUrl} className="maps--link">View on Google Maps</a>
                <h3 className="destination--title">{props.title}</h3>
                <p className="travel--dates">{props.startDate} - {props.endDate}</p>
                <p className="travel-description">{props.description}</p>    
            </div>
        </article>
       
  </>
    )
}