import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    props.filterFood(event.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="search">Search</label>
      <Input
        value={searchInput}
        name="search"
        type="text"
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
