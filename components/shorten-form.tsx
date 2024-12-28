"use client"; // Indicating that this component is client-side

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// Defining the interface for the props passed to the ShortenForm component
interface ShortenFormProps {
  handleUrlShortened: (newUrl: URL) => void; // Function to handle the shortened URL from the API
}

// The ShortenForm component allows users to input a URL and shorten it
export default function ShortenForm({ handleUrlShortened }: ShortenFormProps) {
  // State hooks to handle URL input, loading state, and error messages
  const [url, setUrl] = useState<string>(""); // Store the URL input
  const [isLoading, setIsLoading] = useState<boolean>(false); // To track the loading state
  const [error, setError] = useState<string>(""); // To store any error messages

  // Handle the form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsLoading(true); // Set loading state to true
    setError(""); // Reset any previous errors

    try {
      // Make an API request to shorten the URL
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }), // Send the URL to be shortened
      });

      // If the response is not successful, throw an error
      if (!response.ok) {
        throw new Error("Failed to shorten the URL");
      }

      // Parse the response data and pass it to the parent component
      const data = await response.json();
      handleUrlShortened(data); // Pass the new shortened URL to the parent

      // Clear the input field after successful shortening
      setUrl("");
    } catch (error: unknown) {
      console.error("Error Shortening URL", error);
      setError("An error occurred while shortening the URL. Please try again."); // Set error message
    } finally {
      // Set loading state to false after the operation is complete
      setIsLoading(false);
    }
  };

  return (
    // Form element that triggers URL shortening on submission
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center justify-center px-2 rounded-3xl" style={{
        // Adding custom box shadow for better visual effect
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      }}>
        {/* Input field for the URL */}
        <Input
          className="h-12 border-none bg-transparent" // Styled input
          type="url" // Specify the input type as URL
          placeholder="Enter your URL to shorten" // Placeholder text for the input
          required // Mark the input field as required
          value={url} // Bind input value to the state
          onChange={(e) => setUrl(e.target.value)} // Update the URL state on change
          aria-label="URL to shorten" // Accessibility label
        />

        {/* Submit button */}
        <Button
          className="flex" // Flexbox for the button layout
          variant="newstyle" // Custom button style variant
          type="submit" // Button type is submit
          disabled={isLoading} // Disable the button while loading
        >
          {/* Show loading text while the URL is being shortened */}
          {isLoading ? 'Shortening...' : 'Shorten URL'}
        </Button>
      </div>

      {/* Display error message if an error occurs */}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </form>
  );
}
