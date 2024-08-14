"use client";
import React, { useEffect } from "react";
import { HiSearch as SearchIcon } from "react-icons/hi";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const getUnsplashApiUrl = (searchTerm: string) => {
    return `https://api.unsplash.com/search/collections?client_id=${
      process.env.NEXT_PUBLIC_UNSPLASH_API_KEY
    }&page=1&per_page=20&query=${encodeURIComponent(searchTerm)}`;
  };

  useEffect(() => {
    const form = document.getElementById("search-form") as HTMLFormElement;
    const searchInput = document.getElementById(
      "search-input"
    ) as HTMLInputElement;
    const searchIcon = document.getElementById("search-icon");

    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const searchTerm = searchInput.value;
      const apiUrl = getUnsplashApiUrl(searchTerm);
      console.log("Search term:", searchTerm);
      console.log("API URL:", apiUrl);
      if (typeof onSearch === "function") {
        onSearch(searchTerm);
      } else {
        console.error("onSearch is not a function");
      }

      searchInput.value = "";
    };

    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    if (searchIcon) {
      searchIcon.addEventListener("click", () => form.requestSubmit());
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
      if (searchIcon) {
        searchIcon.removeEventListener("click", () => form.requestSubmit());
      }
    };
  }, [onSearch]);

  return (
    <div className="bg-[#e9e9e9] border border-solid border-slate-900  p-2 px-3 gap-3 items-center rounded-full w-[70%] hidden md:flex h-10 ml-[15vw] mt-[45vh] mr-[15vw] mb-[45vh]">
      <SearchIcon
        id="search-icon"
        className="text-[20px] text-gray-500 cursor-pointer"
      />
      <form id="search-form" className="w-full">
        <input
          type="text"
          id="search-input"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-[15px]"
        />
      </form>
    </div>
  );
};

export default SearchBar;
