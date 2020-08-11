import React from "react";
import "components/DayListItem.scss"

export default function DayListItem(props) {
 
  let textLight;
  const BasicitemClass = "day-list__item";
  const SelecteditemClass = "day-list__item--selected";
  const FullitemClass = "day-list__item--full";
  let itemClass = BasicitemClass;
  if (props.selected) {
    itemClass += ` ${SelecteditemClass}`
  }

  if (props.spots === 0) {
    itemClass += ` ${FullitemClass}`;
    textLight = "no spots remaining"
  } else if (props.spots === 1) {
    textLight = props.spots + " spot remaining"
  } else {
    textLight = props.spots + " spots remaining"
  }


  return (
    //<li onClick = {props.setDay}>  //It also works but in the example bellow it works as a function and can return the week day
      <li onClick={() => props.setDay(props.name)} className={itemClass} data-testid="day">
        <h2 className="text--regular">{props.name}</h2> 
        <h3 className="text--light">{textLight}</h3>
    </li>
  );
}