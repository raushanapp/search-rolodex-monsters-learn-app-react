import React from "react";
import "./search-box.styles.css"
//  why we would't put here state 
const SearchBox = ({ placeholder, handleOnChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleOnChange}
    />
)
export default SearchBox;