import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchEvents = (props) => {
  const searchEventHandler = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <div className="header-search">
      <div className="all-events-header">All Events</div>
      <input type="text" onChange={searchEventHandler} />
    </div>
  );
};
export default SearchEvents;
