import React, { useEffect, useState } from "react";

const BreedSelector = () => {
  const [allBreeds, setAllBreeds] = useState([]);
  useEffect(() => {
    fetchAllBreeds();
  }, []);
  async function fetchAllBreeds() {
    const data = await fetch("https://dog.ceo/api/breeds/list/all");
    const json = await data.json();
    for (const [key, value] of Object.entries(json.message)) {
      if (value.length === 0) {
        setAllBreeds((prevBreeds) => [...prevBreeds,key[0].toUpperCase() + key.slice(1)]);
      } else {
        value.forEach((element) => {
          setAllBreeds((prevBreeds) => [...prevBreeds,element[0].toUpperCase() +element.slice(1) +" " +(key[0].toUpperCase() + key.slice(1))]);
        });
      }
    }
  }
  function handleChange(){
    return
  }
  return (
    <div className="breed-selector">
      <h3 className="breed-selector-title">Select Breeds</h3>
      <div className="breed-names-collection">
        {allBreeds.map((item, index) => {
          return (
            <div className="breed-name" key={index}>
              <p>{item}</p>
              <input type="checkbox"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BreedSelector;