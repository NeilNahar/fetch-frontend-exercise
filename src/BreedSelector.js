import React, { useEffect, useState } from "react";
import { ALL_BREEDS } from './constants/Url'; 

import Shimmer from "./Shimmer";

const BreedSelector = (props) => {
  const [allBreeds, setAllBreeds] = useState([]);
  console.log("Breed Selector");

  useEffect(() => {
    fetchAllBreeds();
  }, []);

  async function fetchAllBreeds() {
    const data = await fetch(ALL_BREEDS);
    const json = await data.json();
    for (const [key, value] of Object.entries(json.message)) {
      if (value.length === 0) {
        setAllBreeds((prevBreeds) => [
          ...prevBreeds,
          key[0].toUpperCase() + key.slice(1),
        ]);
      } else {
        value.forEach((element) => {
          setAllBreeds((prevBreeds) => [
            ...prevBreeds,
            element[0].toUpperCase() +
              element.slice(1) +
              " " +
              (key[0].toUpperCase() + key.slice(1)),
          ]);
        });
      }
    }
  }

  function handleChange(e) {
    props.handleChange(e.target.value);
  }

  return (
    <div className="breed-selector">
      <h3 className="breed-selector-title">Select Breeds</h3>
      {allBreeds.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="breed-names-collection">
          {allBreeds.map((item, index) => {
            return (
              <div className="breed-name" key={index}>
                <p>{item}</p>
                <input type="checkbox" value={item} onChange={handleChange} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BreedSelector;
