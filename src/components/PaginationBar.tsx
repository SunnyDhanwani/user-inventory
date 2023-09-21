import "../styles/Pagination.scss";

const PaginationBar = (props: any) => {
  const handlePreviousPage = () => {
    props.setPage((prev: any) => +prev - 1);
  };
  const handleNextPage = () => {
    props.setPage((prev: any) => +prev + 1);
  };
  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={props.page === 1}>
          Prev
        </button>
        <div>
          {props.page}/{Math.ceil(props.total / props.limit)}
        </div>
        <button
          onClick={handleNextPage}
          disabled={props.page >= Math.ceil(props.total / props.limit)}
        >
          Next
        </button>
      </div>
      <select
        value={props.limit}
        onChange={(e) => {
          props.setLimit(e.target.value);
          props.setPage(1);
        }}
        title="Limit"
      >
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
      </select>
    </div>
  );
};

export default PaginationBar;
