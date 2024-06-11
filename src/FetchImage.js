import React, { useEffect, useState } from 'react'
import { BREEDS_LIST } from './constants/Url';

const FetchImage = (props) => {
    const [breedName, setBreedName] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        let name = props.item.toLowerCase();
        if (props.item.includes(" ")) {
        const parts = props.item.split(' ');
        const reversedParts = parts.reverse();
        name = reversedParts.map(part => part.toLowerCase()).join('/');
        }
        setBreedName(name);
    }, [props.item]);


    useEffect(() => {
        const fetchBreedImage = async () => {
        const response = await fetch(`${BREEDS_LIST}/${breedName}/images/random`);
        const data = await response.json();
        setUrl(data.message);
        };

        if (breedName) {
        fetchBreedImage();
        }
    }, [breedName]);
  return (
    <img src={url} className="fetch-image" alt="dog" />
  )
}

export default FetchImage