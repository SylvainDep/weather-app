import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = (props) => {
  const coord = [props.lat, props.lng]

  return (
    <LeafletMap
      center={coord}
      zoom={6}
      maxZoom={10}
      attributionControl={false}
      zoomControl={false}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker position={coord}>
        <Popup>
          Popup for any custom information.
        </Popup>
      </Marker>
    </LeafletMap>
  );
}

export default Map
