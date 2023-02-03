import { createStore } from "redux";
//Step 2: Create reducer function
const eventReducer = (state = { events: [] }, action) => {
  if (action.type === "search-events") {
    const searchText = action.payload;
    const matchedEvents = state.events.filter((event) =>
      event.event_name.includes(searchText)
    );
    return {
      events: matchedEvents,
    };
  } else if (action.type === "all-events") {
    let payload = action.payload;
    payload = payload.map((event) => ({ ...event, selected: false }));
    return {
      events: [...state.events, ...payload],
    };
  } else if (action.type === "select-event") {
    const selectedEvents = state.events.filter((event) => event.selected);
    const currSelEvent = state.events.find(
      (event) => event.id === action.payload
    );
    let isConflictingTime = false;
    if (currSelEvent && selectedEvents && selectedEvents.length) {
      const currEventStartDate = new Date(currSelEvent.start_time);
      const currEventEndDate = new Date(currSelEvent.end_time);

      for (let i = 0; i < selectedEvents.length; i++) {
        const startTime = new Date(selectedEvents[i].start_time);
        const endTime = new Date(selectedEvents[i].end_time);
        if (
          (currEventStartDate.getTime() >= startTime.getTime() &&
            currEventStartDate.getTime() <= endTime.getTime()) ||
          (currEventEndDate.getTime() >= startTime.getTime() &&
            currEventEndDate.getTime() <= endTime.getTime())
        ) {
          isConflictingTime = true;
          break;
        }
      }
    }
    if (selectedEvents.length < 3 && !isConflictingTime) {
      return {
        events: state.events.map((event) => {
          if (event.id === action.payload) {
            return { ...event, selected: true };
          } else {
            return event;
          }
        }),
      };
    } else {
      return {
        events: state.events,
      };
    }
  } else if (action.type === "remove-event") {
    return {
      events: state.events.map((event) => {
        if (event.id === action.payload) {
          return { ...event, selected: false };
        } else {
          return event;
        }
      }),
    };
  }
  return state;
};

//Step 1
const store = createStore(eventReducer);
export default store;
