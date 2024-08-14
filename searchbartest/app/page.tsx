"use client";

import { useState } from "react";
import SearchBar from "./_components/SearchBar";
import SearchResults from "./_components/SearchResults";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults searchTerm={searchTerm} />
    </div>
  );
}
