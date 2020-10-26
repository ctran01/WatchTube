import React, { useContext, useState } from "react";
import "./css/TopNavBar.css";
import { Link, withRouter } from "react-router-dom";
import {Context as VideoContext} from '../context/VideoContext'

const SearchBar = ()=>{

  const {state,onSearchSubmit} = useContext(VideoContext)
  const [searchTerm,setSearchTerm] = useState("")
  

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchTerm);

    //TODO: Make sure we call callback from parent component
  };

  
    return (
      <div>
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field searchbar">
            <input
              type="text"
              value={searchTerm}
              onChange={onInputChange}
              placeholder="Search"
            ></input>
            <button className="search-button">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
      </div>
    );
  
}

export default withRouter(SearchBar);
