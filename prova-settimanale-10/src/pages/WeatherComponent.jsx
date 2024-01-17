import React, { useState } from 'react';
import axios from 'axios';
import PaginaProva from './PaginaProva';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'ffb99f146969547191dab81df6c39e4b'; // Sostituisci con la tua chiave API di OpenWeatherMap

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      setError('Errore durante la ricerca delle informazioni meteorologiche.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Inserisci la città"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Cerca</button>

      {loading && <p>Caricamento...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div>
          <PaginaProva meteoData={weatherData} />
          {/* Aggiungi altri componenti per visualizzare le informazioni meteorologiche */}
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
