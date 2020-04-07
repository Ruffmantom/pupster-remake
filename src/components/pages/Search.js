import React from "react";
import "../../styles/style.css";

function Search() {
  return (
    <div className="main">
      <div className="container cardCont formCont">
        <h1 className="text-center">Search By Breed</h1>
        <p>
          Type in a breed or pick one from the dropdown!
      </p>
        <div className="alert">
          <p>Sorry, there were no matches. please try again</p>
        </div>
        <form className="form">
          <label for="breed">Breed Name:</label>
          <input id="breed" className="dogoInput addPad" type="text" placeholder="Breed Name" name="breed" list="breeds"></input>
          <datalist id="breeds">
            {/* static testesing */}
            <option value="poodle"></option>
            <option value="doogy"></option>
            <option value="Pupper"></option>
            <option value="Noodle"></option>
            {/* this will be updataed with the api call */}
          </datalist>
          <button type="submit" className="btn btn-success addPad">Search</button>
        </form>
        {/* found items from search */}
        <ul className="list-group search-results addPad"></ul>
      </div>

    </div>
  );
}

export default Search;
