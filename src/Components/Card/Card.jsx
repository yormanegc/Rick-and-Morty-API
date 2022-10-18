import { RiRadioButtonLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Card = ({
  url,
  id,
  name,
  image,
  text,
  status,
  species,
  origin,
  location,
  param,
}) => {
  return (
    <Link
      to={param ? url + id + "/" + param : url + id + "/" + name}
      className="link-cards"
    >
      <div className="card">
        <div className="card__imgContainer">
          <img src={image} alt={text} className="card__imgContainer-img"></img>
        </div>
        <div className="card__informationContainer">
          <h2 className="card__informationContainer-name">{name}</h2>
          <h3 className="card__informationContainer-text">
            {status === "Alive" ? (
              <RiRadioButtonLine style={{ color: "green" }} />
            ) : status === "Dead" ? (
              <RiRadioButtonLine style={{ color: "red" }} />
            ) : (
              <RiRadioButtonLine style={{ color: "grey" }} />
            )}{" "}
            {status} - {species}
          </h3>
          <h4 className="card__informationContainer-company">Source:</h4>
          <h5>{origin?.name}</h5>
          <h4 className="card__informationContainer-company">
            Last known location:
          </h4>
          <h5 className="card__informationContainer-company">
            {location?.name}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
