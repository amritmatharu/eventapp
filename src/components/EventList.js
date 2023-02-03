import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroupEventsList from "./GroupEventsList";
import SearchEvents from "./SearchEvents";

const EventList = ({ allevents, isSelected }) => {
  //const allevents = useSelector((state) => state.events);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const filterEventsHandler = (searchText) => {
    setSearchText(searchText);
  };
  const filteredEvents = useMemo(() => {
    if (!searchText) {
      return allevents;
    } else {
      return allevents.filter((event) =>
        event.event_name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }, [searchText, allevents]);
  return (
    <div className="event-list">
      <SearchEvents onSearch={filterEventsHandler} />
      <GroupEventsList eventList={filteredEvents} isSelected={isSelected}/>
    </div>
  );
};
export default EventList;
