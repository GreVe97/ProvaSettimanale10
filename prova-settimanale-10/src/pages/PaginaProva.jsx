import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const PaginaProva = ({ meteoData }) => {
  useEffect(() => {
    const { lat, lon} = meteoData.coord;
    const weather = meteoData.weather;

    // Configura uno stile di mappa personalizzato in base alle condizioni meteorologiche
    const mapStyles = {
      'Clouds': { color: '#808080', icon: 'cloud' },
      // Aggiungi altri stili in base alle condizioni meteorologiche
    };

    const weatherCondition = weather[0].main;
    const mapStyle = mapStyles[weatherCondition] || { color: '#00aaff', icon: 'sun' };

    const center = [lat, lon];
    const zoom = 10;

    const map = L.map('map').setView(center, zoom);

    // Usa un'icona personalizzata in base alle condizioni meteorologiche
    const customIcon = L.icon({
      iconUrl: `http://leafletjs.com/examples/custom-icons/${mapStyle.icon}.png`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    L.marker(center, { icon: customIcon }).addTo(map);

    // Aggiungi uno stile di mappa personalizzato
    L.tileLayer(`https://tile.openweathermap.org/map/clouds_new/{4}/{0}/{15}.png?appid=ffb99f146969547191dab81df6c39e4b`)
      .addTo(map);
  }, [meteoData]);

  return (
    <div id="map" style={{ height: '400px' }}></div>
  );
};

export default PaginaProva;