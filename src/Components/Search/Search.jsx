const Search = ({ setSearch, setPageNumber }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Find a Character"
        type="text"
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        className="form__search"
      />

      <button type="submit" className="form__submit"></button>
    </form>
  );
};

export default Search;
