import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../Utilities/Api";
import Card from "../Card/Card";
import Details from "../Details/Details";
import GoBack from "../GoBack/GoBack";
import Loader from "../Loader/Loader";
const Location = () => {
  const [location, setLocation] = useState([]);
  const [id, setId] = useState(1);
  let parametro = useParams();
  let param = parametro.param;
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  let locationURL = `https://rickandmortyapi.com/api/location/${id}`;

  const locationfunc = () => {
    (async () => {
      let a = await Api(locationURL);
      setLocation(a);
      setLoading(false);

      let b = await Promise.all(
        a.residents.map((x) => {
          return Api(x);
        })
      );
      setResidents(b);
    })();
  };

  useEffect(() => {
    locationfunc();
    setLoading(true);
  }, [id]);

  return (
    <div className="location">
      <div className="location__goback">
        <GoBack url={"/"} />
      </div>
      <div className="location__header">
        <h1>{location.name}</h1>
        <h2>{location.type}</h2>
        <h3>{location.dimension}</h3>
        <h4>{location.created}</h4>
      </div>
      <div className="location__details">
        <Details name={"Location"} total={126} setId={setId} />
        {loading ? <Loader /> : null}
      </div>
      <div className="location__cards">
        {residents.map((x) => {
          const { name, image, text, status, species, origin, location } = x;
          return (
            <Card
              key={x.id}
              url={"/character/"}
              id={x.id}
              name={name}
              image={image}
              text={text}
              status={status}
              species={species}
              origin={origin}
              location={location}
              param={param}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Location;
