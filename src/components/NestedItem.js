import { useEffect } from "react";
import { useDispatch } from "react-redux";

const NestedItem = ({ item, isSelected }) => {
  const dispatch = useDispatch();
  const getDisplayHour = (date) => {
    let hr = new Date(date).getHours();
    let period = "AM";
    if (hr > 12) {
      hr = hr - 12;
      period = "PM";
    }
    return {
      hr: hr,
      period: period,
    };
  };
  const { hr: startHr, period: startPeriod } = getDisplayHour(item.start_time);
  const { hr: endHr, period: endPeriod } = getDisplayHour(item.end_time);
  const selectEventHandler = () => {
    dispatch({ type: "select-event", payload: item.id });
  };
  const removeEventHandler = () => {
    dispatch({ type: "remove-event", payload: item.id });
  };

  return (
    <div
      className="card"
      key={`${item.id}-${item.event_name}-${item.event_category}`}
    >
      <h1 className="card-left">{item.event_category.charAt(0)}</h1>
      <div className="card-right">
        <div>{item.event_name}</div>
        <div>{`(${item.event_category})`}</div>
        <div>{`${startHr} ${startPeriod} - ${endHr} ${endPeriod}`}</div>
        {!isSelected && (
          <button type="button" onClick={selectEventHandler}>
            Select
          </button>
        )}
        {isSelected && (
          <button type="button" onClick={removeEventHandler}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};
export default NestedItem;
