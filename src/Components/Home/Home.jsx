import Pagination from "./Pagination";
import Error404 from "../Error/Error404";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
const Home = ({ results, info, pageNumber, setPageNumber, loading }) => {
  if (!results) return <Error404 />;
  return (
    <div className="globalContainer">
      {loading ? <Loader /> : null}
      <div className="container">
        {results.map((x) => (
          <Card
            key={x.id}
            url={"/character/"}
            id={x.id}
            name={x.name}
            image={x.image}
            text={x.text}
            status={x.status}
            species={x.species}
            origin={x.origin}
            location={x.location}
          />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          info={info}
        />
      </div>
    </div>
  );
};

export default Home;
