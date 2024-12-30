"use client"; // Indicating that this component is client-side

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface ShortenFormProps {
  handleUrlShortened: (newUrl: URL) => void;
}

export default function ShortenForm({ handleUrlShortened }: ShortenFormProps) {
  const [url, setUrl] = useState<string>(""); // URL input state
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string>(""); // Error message state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Reset previous errors

    try {
      // Send the URL to the backend for shortening
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }), // Send URL to backend
      });

      if (!response.ok) {
        throw new Error("Failed to shorten the URL");
      }

      const data = await response.json();
      handleUrlShortened(data); // Pass shortened URL to parent component

      setUrl(""); // Clear input field after successful shortening
    } catch (error: unknown) {
      console.error("Error shortening URL", error);
      setError("An error occurred while shortening the URL. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center justify-center px-2 rounded-3xl" style={{
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      }}>
        <Input
          className="h-12 border-none bg-transparent"
          type="url"
          placeholder="Enter your URL to shorten"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          aria-label="URL to shorten"
        />
        <Button
          className="flex"
          variant="newstyle"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Shortening...' : 'Shorten URL'}
        </Button>
      </div>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </form>
  );
}
