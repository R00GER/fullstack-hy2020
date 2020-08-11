import React from "react";

const Search = (props) => {
    
  return (
    <div>
      filter shown with <input onChange={props.search}/>
    </div>
  );
};

export default Search;
