import React, { useEffect, useState } from "react"; // Import React and hooks (useEffect, useState)
import ShortenForm from "./shorten-form"; // Import ShortenForm component to handle URL shortening
import UrlList from "./url-list"; // Import UrlList component to display the list of shortened URLs

// Define the structure of a URL object
type Url = {
  id: string; // Unique identifier for the URL
  shortCode: string; // The shortened version of the URL
  originalUrl: string; // The original (long) URL
  visits: number; // Number of visits to the shortened URL
};

export default function UrlShortenerContainer() {
  // State to hold the list of URLs
  const [urls, setUrls] = useState<Url[]>([]);

  // Function to fetch the list of URLs from the API
  const fetchUrls = async () => {
    try {
      const response = await fetch("/api/urls"); // Fetch data from the server
      const data = await response.json(); // Parse the JSON response
      setUrls(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching URLs", error); // Log any errors to the console
    }
  };

  // useEffect hook to fetch URLs when the component mounts
  useEffect(() => {
    fetchUrls(); // Call the fetchUrls function to load data
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to handle a new URL being shortened and added to the list
  const handleUrlShortened = (newUrl: Url) => {
    setUrls((prevUrls) => [newUrl, ...prevUrls]); // Add the new URL to the top of the list
  };

  return (
    <div className="flex flex-col px-2 sm:px-0 gap-3 ">
      {/* Pass handleUrlShortened function to ShortenForm component */}
      <ShortenForm handleUrlShortened={handleUrlShortened} />
      {/* Pass the list of URLs to the UrlList component */}
      <UrlList urls={urls} />
    </div>
  );
}
