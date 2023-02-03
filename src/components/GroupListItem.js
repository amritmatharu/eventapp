import NestedItem from "./NestedItem";

import { useEffect } from "react";

const GroupListItem = ({ groupItem, groupKey, isSelected }) => {
  //const  = props;
  //console.log("groupItem: ", groupItem);
  return (
    <div className="all-events">
      <h1 className="all-events-heading">{groupKey}</h1>

      {groupItem.map((item) => (
        <NestedItem isSelected={isSelected} key={item.id} item={item} />
      ))}
    </div>
  );
};
export default GroupListItem;
