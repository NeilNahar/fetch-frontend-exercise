import React from 'react'
import IndividualSelectedBreed from './IndividualSelectedBreed';

const ViewSelectedBreeds = (props) => {
  
  return (
    <div className="breed-selector">
      <h3 className="breed-selector-title">View Selected Breeds Gallery</h3>
      <div className="breed-selector-body">
        {props.breedClickCollection.map((item, index) => {
          return (
            <IndividualSelectedBreed key={index} item={item}/>
          );
        })}
      </div>
    </div>
  )
}

export default ViewSelectedBreeds