import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import countriesService from "./services/countriesService";
import weatherService from "./services/weatherService";
import Countries from "./components/Countries";
import Notification from "./components/Notification";
import Country from "./components/Country";

function App() {
  const [filterTerm, setFilterTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [temp, setTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);


  useEffect(() => {
    if (!selectedCity) {
      return;
    }
    console.log('selected city is',selectedCity)
    weatherService.getByCity({ cityName: selectedCity })
      .then(data => {
        setTemp(data.main.temp);
        setWind(data.wind.speed)
        setWeatherIcon(data.weather[0].icon)
      })
  },[selectedCity]);

  useEffect(() => {
    countriesService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const countriesToShow =
  filterTerm === ""
    ? countries
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterTerm.toLowerCase())
      );

  useEffect(() => {
    if (countriesToShow.length === 1) {
      setSelectedCity(countriesToShow[0].capital[0]);
    }
  }, [filterTerm, countriesToShow]);

  const handleSearchTermChange = (event) => {
    setFilterTerm(event.target.value);
  };



  return (
    <div>
      <Filter filterTerm={filterTerm} onChange={handleSearchTermChange} />
      {filterTerm && countriesToShow.length > 1 ? (
        countriesToShow.length > 10 ? (
          <Notification message="Too many matches, specify another filter" />
        ) : (
          <Countries countries={countriesToShow} setFilterTerm={setFilterTerm} />
        )
      ) : null}

      {countriesToShow.length === 1 ? (
        <Country country={countriesToShow[0]} temperature={temp} wind={wind} icon={weatherIcon}/> 
      ) : null}
    </div>
  );
}

export default App;
