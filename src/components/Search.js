import React from "react";

const Search = ({ search, setInput, input }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="input"
        onChange={inputHandler}
        type="text"
        value={input}
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
