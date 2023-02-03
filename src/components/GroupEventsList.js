import { useEffect } from "react";
import GroupListItem from "./GroupListItem";

const GroupEventsList = ({eventList, isSelected}) => {
  //const { eventList } = props;
  //console.log("eventList: ", eventList);
  const groupBy = (key) => {
    return (array) => {
      return array.reduce((acc, obj) => {
        const property = obj[key];
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        return acc;
      }, {});
    };
  };
  const groupByList = groupBy("event_category")(eventList);
  //console.log("groupByList: ", groupByList);
  return (
    <>
      {Object.keys(groupByList).map((key, index) => (
        <GroupListItem isSelected={isSelected} key={key} groupKey={key} groupItem={groupByList[key]} />
      ))}
    </>
  );
};
export default GroupEventsList;
