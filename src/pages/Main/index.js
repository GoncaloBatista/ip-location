import React, { useState, useEffect } from 'react';
import Track from '../../components/Track';
import './style.css';
const publicIp = require("react-public-ip");

const Main = () => {
    const [track, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const ipv4 = await publicIp.v4() || "";
            const data = await fetch(`http://ip-api.com/json//${ipv4}?fields=status,message,continent,country,regionName,city,zip,lat,lon,timezone,org,query`)
            const response = await data.json();
            console.log(response);
            setData(response);
        }
        fetchData();
    }, []);

    return (
        <main>
            <Track
                ip={track.query}
                status={track.status}
                continent={track.continent}
                country={track.country}
                city={track.city}
                regionName={track.regionName}
                zip={track.zip}
                lat={track.lat}
                lon={track.lon}
                timezone={track.timezone}
                org={track.org}
                query={track.query}
            />
        </main>
    )
}
export default Main;