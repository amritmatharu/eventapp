import { useEffect, useState } from "react";
import EventList from "./EventList";

const EventParent = ({ eventList, isSelected }) => {
  console.log("eventList", eventList);
  return (
    <>
      <EventList isSelected={isSelected} allevents={eventList} />
    </>
  );
};
export default EventParent;
