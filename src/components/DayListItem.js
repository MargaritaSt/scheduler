import React from "react";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  let itemClass = "day-list__item";
 
   if (props.selected) {
     itemClass += "--selected";
   }
   if (props.spots === 0) {
    itemClass += "--full";
  }

  

  return (
    <li onClick={() => props.setDay(props.name)} className={itemClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}