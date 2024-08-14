"use client";
import React, { useEffect, useState } from "react";
import PinList from "./PinList";

interface Pin {
  id: string;
  image: string;
  alt_description?: string;
}

const SearchResults: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const [listOfPins, setListOfPins] = useState<Pin[]>([]);

  useEffect(() => {
    if (searchTerm) {
      fetchPins(searchTerm);
    }
  }, [searchTerm]);

  const fetchPins = async (term: string) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${
          process.env.NEXT_PUBLIC_UNSPLASH_API_KEY
        }&query=${encodeURIComponent(term)}`
      );
      const data = await response.json();
      const pins = data.results.map((result: any) => ({
        id: result.id,
        image: result.urls.regular,
        alt_description: result.alt_description,
      }));
      setListOfPins(pins);
    } catch (error) {
      console.error("Error fetching pins:", error);
    }
  };

  return (
    <div>
      <PinList listOfPins={listOfPins} />
    </div>
  );
};

export default SearchResults;
