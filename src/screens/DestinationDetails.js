import React, { useEffect, useState } from 'react';
import fetchCountryDetails from '../api/CountryApi';
import destinationsData from '../data/destinationsData';
import { useParams } from 'react-router-dom';

const findDestinationById = (id) => {
  console.log("ovo je id: "+id);
  const foundCountry = destinationsData.find(destination => destination.id === parseInt(id, 10));
  return foundCountry ? foundCountry.country : null;
};

const DestinationDetails = () => {
  const { id } = useParams();
  console.log("id u dest det  "+id);
  const [countryDetails, setCountryDetails] = useState(null);
  const country = findDestinationById(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(country) {
          console.log("Ogo je drzava: "+country);
          const data = await fetchCountryDetails(country);
          setCountryDetails(data);
        }
      } catch (error) {
        // Handle error, e.g., display an error message
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [country]);

  if (!countryDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{countryDetails.name.common}</h1>
      <p>Capital: {countryDetails.capital[0]}</p>
      <p>Population: {countryDetails.population}</p>
      <p>Currency: {countryDetails.currencies.EUR.name} ({countryDetails.currencies.EUR.symbol})</p>
      <img src={countryDetails.flags.png} alt={`Flag of ${countryDetails.name.common}`} height="200" width="300"/>
    </div>
  );
};

export default DestinationDetails;