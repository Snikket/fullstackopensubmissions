import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import countriesService from "./services/countriesService";
import Countries from "./components/Countries";
import Notification from "./components/Notification";
import Country from "./components/Country";
function App() {
  const [filterTerm, setFilterTerm] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleSearchTermChange = (event) => {
    setFilterTerm(event.target.value);
  };

  const countriesToShow =
    filterTerm === ""
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(filterTerm.toLowerCase())
        );

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
        <Country country={countriesToShow[0]}/> 
      ) : null}
    </div>
  );
}

export default App;
