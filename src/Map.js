import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function Map() {
    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const position = {
        lat: 29.745,
        lng: 78.523
    };
    const position1 = {
        lat: 39.745,
        lng: 58.523
    };
    const position2 = {
        lat: 38.745,
        lng: 56.523
    };
    const position3 = {
        lat: 40.745,
        lng: 59.523
    };
    const position4 = {
        lat: 35.745,
        lng: 55.523
    };

    const center = {
        lat: 30.745,
        lng: 68.523
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBWWqLNReiozUBS4KFeuqusi-xmo22Rz38",
        library: ["places"]
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(position);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}

        // Marker={center}
        >
            <Marker position={center} />
            <Marker position={position2} />
            <Marker position={position3} />
            <Marker position={position4} />
            <Marker position={position} />
            <Marker position={position1} /> { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>

}

export default Map