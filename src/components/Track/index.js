import React from 'react';
import './style.css';

const Track = (props) => {
    return (
        <article className="track">
            <div className="ip">
                <button><h2>{props.ip}</h2></button>
            </div>
            <div className="track-content">
                <div>
                    <div className="track-status">
                        <h3>Status: <span>{props.status}</span></h3>
                    </div>
                    <div className="track-continent">
                        <h3>Continent: <span>{props.continent}</span></h3>
                    </div>
                    <div className="track-country">
                        <h3>Country: <span>{props.country}</span></h3>
                    </div>
                    <div className="track-city">
                        <h3>City: <span>{props.city}</span></h3>
                    </div>
                    <div className="track-regionName">
                        <h3>Region Name: <span>{props.regionName}</span></h3>
                    </div>
                    <div className="track-zip">
                        <h3>Postal Code: <span>{props.zip}</span></h3>
                    </div>
                    <div className="track-lat">
                        <h3>Latitude: <span>{props.lat}</span></h3>
                    </div>
                    <div className="track-lon">
                        <h3>Longitude: <span>{props.lon}</span></h3>
                    </div>
                    <div className="track-timezone">
                        <h3>Timezone: <span>{props.timezone}</span></h3>
                    </div>
                    <div className="track-org">
                        <h3>Org: <span>{props.org}</span></h3>
                    </div>
                    <div className="track-query">
                        <h3>IP: <span>{props.query}</span></h3>
                    </div>
                </div>
                <div className="imagem">
                    <img src="https://imagizer.imageshack.com/img922/2246/ucgGiQ.jpg"/>
                </div>
            </div>
        </article>
    )
}
export default Track;