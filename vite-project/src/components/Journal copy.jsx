import React from "react"

export default function(){
    return (
        <>
        <article className="destination">
            <div >
                <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji"  className="destination-img"/>          
            </div>
            <div className="destination--details">         
                <img src="/src/images/maps-icon.png" className="maps-icon" />
                <span className="destination--name">JAPAN</span>
                <span className="maps--link">View on Google Maps</span>
                <h3 className="destination--title">Mount Fuji</h3>
                <p className="travel--dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="travel-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                                              Mount Fuji is the single most popular tourist site in Japan, for both Japanese and 
                                              foreign tourists.
                </p>    
            </div>
        </article>
        <article className="destination">
            <div >
                <img src="https://scrimba.com/links/travel-journal-australia-image-url" alt="Sydney Opera House"  className="destination-img"/>
            </div>
            <div className="destination--details">         
                <img src="/src/images/maps-icon.png" className="maps-icon" />
                <span className="destination--name">AUSTRALIA</span>
                <span className="maps--link">View on Google Maps</span>
                <h3 className="destination--title">Sydney Opera House</h3>
                <p className="travel--dates">27 May, 2021 - 8 Jun, 2021</p>
                <p className="travel-description">The Sydney Opera House is a multi-venue performing arts centre in Sydney. 
                        Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most 
                        famous and distinctive buildings.
                </p>
            </div>
        </article>
        <article className="destination">
            <div >
                <img src="https://scrimba.com/links/travel-journal-norway-image-url" alt="Geirangerfjord"  className="destination-img"/>
            </div>
            <div className="destination--details">         
                <img src="/src/images/maps-icon.png" className="maps-icon" />
                <span className="destination--name">NORWAY</span>
                <span className="maps--link">View on Google Maps</span>
                <h3 className="destination--title">Geirangerfjord</h3>
                <p className="travel--dates">01 Oct, 2021 - 18 Nov, 2021</p>
                <p className="travel-description">The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. 
                        It is located entirely in the Stranda Municipality.
                </p>
            </div>
        </article>
  </>
    )
}