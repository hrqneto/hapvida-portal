import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar serviços"
      className="flex-1 mx-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
