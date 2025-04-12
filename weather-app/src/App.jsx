// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, InputGroup, Spinner } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';
import { WiDaySunny, WiNightClear, WiRain, WiSnow, WiCloudy, WiDayCloudy, 
         WiThunderstorm, WiWindy, WiHumidity, WiBarometer } from 'react-icons/wi';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import './App.css';

function App() {
  const API_KEY = 'f5494dd8ea66dd629c985ae34fb471b0';
  
  // State management
  const [loading, setLoading] = useState(false);
  const [showStarter, setShowStarter] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState({ show: false, message: '' });
  const [view, setView] = useState('grant'); // 'grant', 'search', 'weather'
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState('');
  
  useEffect(() => {
    // Show starter screen
    const timer = setTimeout(() => {
      setShowStarter(false);
      // Show alert message after starter screen
      setTimeout(() => {
        alert(`Note: It is advised to zoom out the screen on smaller devices and reload the screen to get exact information.
Have a good weather 😊`);
      }, 500);
    }, 2000);
    
    // Update time
    const timeInterval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);
  
  const getWeatherByCoords = async (lat, long) => {
    try {
      setLoading(true);
      setError({ show: false, message: '' });
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
      );
      const data = await response.json();
      
      if (response.ok) {
        setWeatherData(data);
        setView('weather');
      } else {
        setError({ show: true, message: data.message });
      }
    } catch (err) {
      setError({ show: true, message: 'Failed to fetch weather data' });
    } finally {
      setLoading(false);
    }
  };
  
  const getWeatherByCityName = async () => {
    if (!searchInput.trim()) return;
    
    try {
      setLoading(true);
      setError({ show: false, message: '' });
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}`
      );
      const data = await response.json();
      
      if (response.ok) {
        setWeatherData(data);
        setView('weather');
      } else {
        setError({ show: true, message: data.message });
        setView('search');
      }
    } catch (err) {
      setError({ show: true, message: 'Failed to fetch weather data' });
      setView('search');
    } finally {
      setLoading(false);
    }
  };
  
  const handleLocationAccess = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherByCoords(latitude, longitude);
        },
        (err) => {
          setLoading(false);
          setError({
            show: true,
            message: 'Failed to get location. Please enable location access.'
          });
          setView('grant');
        }
      );
    } else {
      setError({
        show: true,
        message: 'Geolocation is not supported by this browser.'
      });
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchInput.trim()) {
      e.preventDefault();
      getWeatherByCityName();
    }
  };
  
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
  const handleYourWeatherClick = () => {
    if (weatherData) {
      setView('weather');
    } else {
      setView('grant');
      handleLocationAccess(); // Added this line to trigger location request immediately
    }
  };
  
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };
  
  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': <WiDaySunny className="weather-main-icon" />,
      '01n': <WiNightClear className="weather-main-icon" />,
      '02d': <WiDayCloudy className="weather-main-icon" />,
      '02n': <WiCloudy className="weather-main-icon" />,
      '03d': <WiCloudy className="weather-main-icon" />,
      '03n': <WiCloudy className="weather-main-icon" />,
      '04d': <WiCloudy className="weather-main-icon" />,
      '04n': <WiCloudy className="weather-main-icon" />,
      '09d': <WiRain className="weather-main-icon" />,
      '09n': <WiRain className="weather-main-icon" />,
      '10d': <WiRain className="weather-main-icon" />,
      '10n': <WiRain className="weather-main-icon" />,
      '11d': <WiThunderstorm className="weather-main-icon" />,
      '11n': <WiThunderstorm className="weather-main-icon" />,
      '13d': <WiSnow className="weather-main-icon" />,
      '13n': <WiSnow className="weather-main-icon" />,
      '50d': <WiWindy className="weather-main-icon" />,
      '50n': <WiWindy className="weather-main-icon" />
    };
    
    return iconMap[iconCode] || <WiDaySunny className="weather-main-icon" />;
  };
  
  const getBackgroundClass = (iconCode) => {
    if (!iconCode) return 'default-bg';
    
    if (iconCode.includes('01') || iconCode.includes('02')) {
      return iconCode.includes('n') ? 'night-clear-bg' : 'day-clear-bg';
    } else if (iconCode.includes('03') || iconCode.includes('04')) {
      return iconCode.includes('n') ? 'night-cloudy-bg' : 'day-cloudy-bg';
    } else if (iconCode.includes('09') || iconCode.includes('10')) {
      return 'rainy-bg';
    } else if (iconCode.includes('11')) {
      return 'storm-bg';
    } else if (iconCode.includes('13')) {
      return 'snow-bg';
    } else if (iconCode.includes('50')) {
      return 'mist-bg';
    }
    
    return 'default-bg';
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'} 
      ${weatherData ? getBackgroundClass(weatherData.weather[0].icon) : 'default-bg'}`}>
      
      {showStarter && (
        <div className="starter-screen">
          <div className="loader-container">
            <div className="loader-circle"></div>
            <div className="loader-text">WEATHER APP</div>
          </div>
        </div>
      )}
      
      <div className={`glass-nav ${showStarter ? 'opacity-0' : ''}`}>
        <div className="app-logo">
          <span className="logo-icon">
            {darkMode ? <WiNightClear /> : <WiDaySunny />}
          </span>
          <span className="logo-text">SKYCAST</span>
        </div>
        
        <div className="nav-center">
          <div 
            className={`nav-item ${view === 'weather' ? 'active' : ''}`} 
            onClick={handleYourWeatherClick}
          >
            <FaMapMarkerAlt className="nav-icon" />
            <span>My Location</span>
          </div>
          <div 
            className={`nav-item ${view === 'search' ? 'active' : ''}`} 
            onClick={() => setView('search')}
          >
            <FaSearch className="nav-icon" />
            <span>Search</span>
          </div>
        </div>
        
        <div className="nav-right">
          <Button 
            className="theme-toggle" 
            onClick={toggleDarkMode}
          >
            {darkMode ? <BsSunFill /> : <BsMoonFill />}
          </Button>
        </div>
      </div>
      
      <Container className={`main-content ${showStarter ? 'opacity-0' : ''}`}>
        {view === 'grant' && (
          <div className="grant-container">
            <div className="grant-card">
              <div className="grant-icon">
                <FaLocationArrow />
              </div>
              <h2>We Need Your Location</h2>
              <p>To provide accurate weather updates for your area, we need permission to access your location.</p>
              <Button 
                className="grant-button"
                onClick={handleLocationAccess}
                disabled={loading}
              >
                {loading ? <Spinner size="sm" animation="border" /> : "Allow Location Access"}
              </Button>
            </div>
          </div>
        )}
        
        {view === 'search' && (
          <div className="search-container">
            <InputGroup className="search-bar-container">
              <Form.Control
                className="custom-search-input"
                placeholder="Search city..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button 
                className="search-button"
                onClick={getWeatherByCityName}
                disabled={loading}
              >
                {loading ? <Spinner size="sm" animation="border" /> : <FaSearch />}
              </Button>
            </InputGroup>
            
            {error.show && (
              <div className="error-message">
                <p>{error.message}</p>
              </div>
            )}
          </div>
        )}
        
        {weatherData && view === 'weather' && !loading && (
          <div className="weather-display">
            <div className="weather-header">
              <div className="location-badge">
                <FaMapMarkerAlt className="location-icon" />
                <h1>{weatherData.name}, {weatherData.sys.country}</h1>
              </div>
              <div className="time-badge">
                {time}
              </div>
            </div>
            
            <div className="weather-content">
              <div className="weather-main-display">
                <div className="weather-temp-container">
                  <div className="temp-display">
                    <span className="temp-value">{kelvinToCelsius(weatherData.main.temp)}</span>
                    <span className="temp-unit">°C</span>
                  </div>
                  <div className="temp-feel">
                    Feels like {kelvinToCelsius(weatherData.main.feels_like)}°C
                  </div>
                </div>
                
                <div className="weather-icon-display">
                  {getWeatherIcon(weatherData.weather[0].icon)}
                  <div className="weather-condition">
                    {weatherData.weather[0].main}
                  </div>
                  <div className="weather-description">
                    {weatherData.weather[0].description}
                  </div>
                </div>
              </div>
              
              <div className="weather-details-grid">
                <div className="weather-detail-card">
                  <WiWindy className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-value">{weatherData.wind.speed}</span>
                    <span className="detail-unit">m/s</span>
                    <div className="detail-label">Wind Speed</div>
                  </div>
                </div>
                
                <div className="weather-detail-card">
                  <WiHumidity className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-value">{weatherData.main.humidity}</span>
                    <span className="detail-unit">%</span>
                    <div className="detail-label">Humidity</div>
                  </div>
                </div>
                
                <div className="weather-detail-card">
                  <WiCloudy className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-value">{weatherData.clouds.all}</span>
                    <span className="detail-unit">%</span>
                    <div className="detail-label">Cloud Cover</div>
                  </div>
                </div>
                
                <div className="weather-detail-card">
                  <WiBarometer className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-value">{weatherData.main.pressure}</span>
                    <span className="detail-unit">hPa</span>
                    <div className="detail-label">Pressure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;