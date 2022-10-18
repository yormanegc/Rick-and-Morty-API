import { useEffect, useState } from "react";
import Filter from "./Components/Filter/Filter";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Loader from "./Components/Loader/Loader";
import Navbar from "./Components/Navbar/Navbar";
import Parameter from "./Components/Parameter/Parameter";
import Search from "./Components/Search/Search";
import Api from "./Utilities/Api";

const App = () => {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  const { info, results } = fetchedData;
  const [loading, setLoading] = useState(true);

  const dataResult = () => {
    (async () => {
      let data = await Api(api);
      setFetchedData(data);
      setLoading(false);
    })();
  };
  useEffect(() => {
    setLoading(true);
    dataResult();
  }, [api]);

  return (
    <div className="app">
      <Navbar
        setStatus={setStatus}
        setGender={setGender}
        setSpecies={setSpecies}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <Filter
        setGender={setGender}
        setSpecies={setSpecies}
        setStatus={setStatus}
      />
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <Parameter parameter={status} />
      <Home
        loading={loading}
        results={results}
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <Footer/>
    </div>
  );
};

export default App;
