import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";
import '../search.css';

const Search = ({ onSearchChange }) => {
  const [searchCity, setSearchCity] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearchCity(searchData);
    onSearchChange(searchData);
  };

  return (
    <>
      {/* <h1 className="text-light">Search Component</h1> */}
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={searchCity}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </>
  );
};



export default Search;
