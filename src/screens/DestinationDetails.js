import React, { useEffect, useState } from 'react';
import fetchCountryDetails from '../api/CountryApi';

const DestinationDetails = ({ countryName }) => {
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO OBRISI OVU LINIJU ISPOD I NEK SE SALJE prosledjen country name
        countryName = "spain";
        const data = await fetchCountryDetails(countryName);
        setCountryDetails(data);
      } catch (error) {
        // Handle error, e.g., display an error message
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [countryName]);

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