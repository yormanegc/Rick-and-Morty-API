import { useEffect, useState } from "react";
import GoBack from "../GoBack/GoBack";
import Api from "../../Utilities/Api.js";
import { useParams } from "react-router-dom";

const CharactersDetails = () => {
  const { characterId, param } = useParams();
  const [characterDetails, setCharacterDetails] = useState([]);
  const {
    id,
    name,
    image,
    status,
    species,
    gender,
    created,
    origin,
    location,
  } = characterDetails;
  const initialUrl = `https://rickandmortyapi.com/api/character/${characterId}`;
  const [url, setUrl] = useState("/");

  const changeUrl = () => {
    param === "episodes"
      ? setUrl(`/episodes/${param}`)
      : param === "location"
      ? setUrl(`/location/${param}`)
      : setUrl("/");
  };

  const characters = () => {
    (async () => {
      let data = await Api(initialUrl);
      setCharacterDetails(data);
    })();
  };

  useEffect(() => {
    characters();
    changeUrl();
  }, []);

  return (
    <div>
      <GoBack url={url} />
      <div className="characterDetails" key={id}>
        <div className="characterDetails__imgContainer">
          <img
            src={image}
            alt={name}
            className="characterDetails__imgContainer-img"
          />
        </div>
        <div className="characterDetails__detailsContainer">
          <h1>{name}</h1>
          <p>Status: {status}</p>
          <p>Specie: {species}</p>
          <p>Gender: {gender}</p>
          <p>Created: {created}</p>
          <p>Origin: {origin?.name}</p>
          <p>Last known location: {location?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharactersDetails;
