import { useEffect, useState } from "react";
import Api from "../../Utilities/Api";
import Details from "../Details/Details";
import GoBack from "../GoBack/GoBack";
import Card from "../Card/Card.jsx";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [id, setId] = useState(1);
  const [character, setCharacter] = useState([]);
  let parametro = useParams();
  let param = parametro.param;
  const initialUrl = `https://rickandmortyapi.com/api/episode/${id}`;
  const [loading, setLoading] = useState(true);

  const episodeList = () => {
    (async () => {
      let a = await Api(initialUrl);
      setEpisodes(a);
      setLoading(false);

      let b = await Promise.all(
        a.characters?.map((x) => {
          return Api(x);
        })
      );
      setCharacter(b);
    })();
  };

  useEffect(() => {
    episodeList();
    setLoading(true);
  }, [id]);

  return (
    <div className="episodes">
      <GoBack url={"/"} />
      <div className="episodes__header">
        <h1>
          Episode: {episodes.id} {episodes.name}
        </h1>
        <h2>{episodes.air_date}</h2>
      </div>

      <div className="episodes__container">
        {loading ? <Loader /> : null}
        <Details total={51} setId={setId} name={"Episode"} />
      </div>

      <div className="episodes__cards">
        {character?.map((x) => {
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
export default Episodes;
