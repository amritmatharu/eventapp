import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import EventParent from "./components/EventParent";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //const [eventList, setEventList] = useState([]);
  const eventList = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const selectedEvents = eventList.filter((event) => event.selected);
  const notSelectedEvents = eventList.filter((event) => !event.selected);
  console.log("selectedEvents", selectedEvents);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a")
      .then((response) => response.json())
      .then((jsonResp) => {
        //console.log("Response: ", jsonResp);
        dispatch({ type: "all-events", payload: jsonResp });
      });
  }, []);
  return (
    <div className="App">
      <EventParent eventList={notSelectedEvents} />
      {selectedEvents && selectedEvents.length > 0 && (
        <EventParent isSelected="true" eventList={selectedEvents} />
      )}
    </div>
  );
}

export default App;
