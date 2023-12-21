const apiUrl = "https://restcountries.com/v3.1/name/";

const fetchCountryDetails = async (countryName) => {
  try {
    const response = await fetch(`${apiUrl}${countryName}`);
    if (!response.ok) {
      throw new Error("Failed to fetch country details");
    }

    const data = await response.json();
    return data[0]; // Assuming the API returns an array with a single country object
  } catch (error) {
    console.error("Error fetching country details:", error);
    throw error;
  }
};

export default fetchCountryDetails;
