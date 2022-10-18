import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };
  return (
    <ReactPaginate
      containerClassName="pagination__container"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      previousClassName="pagination__container-button2"
      nextClassName="pagination__container-button1"
      activeClassName="actives"
      pageCount={info?.pages}
      onPageChange={pageChange}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      breakClassName="page-break"
    />
  );
};

export default Pagination;
