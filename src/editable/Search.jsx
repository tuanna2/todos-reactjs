import React, { useState } from "react";

const Search = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const submit = e => {
    e.preventDefault();
    onSubmit(keyword);
  };

  return (
    <form onSubmit={submit}>
      <input placeholder ="Enter keyword" className ="form-control" value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button className= "btn btn-primary" type="submit">Search</button>
    </form>
  );
};

export default Search;
