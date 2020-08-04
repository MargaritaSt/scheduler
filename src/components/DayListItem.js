import React from "react";
import "components/DayListItem.scss"
//const classNames = require('classnames');

export default function DayListItem(props) {
 
  let textLight;
  let itemClass = "day-list__item";
  if (props.selected) {
    //itemClass += "--selected"
    itemClass = `${itemClass} ${itemClass}--selected`
  }

  if (props.spots === 0) {
    itemClass = `${itemClass} ${itemClass}--full`
    textLight = "no spots remaining"
  } else if (props.spots === 1) {
    textLight = props.spots + " spot remaining"
  } else {
    textLight = props.spots + " spots remaining"
  }


  return (
    //<li onClick = {props.setDay}>  //It also works but in the example bellow it works as a function and can return the week day
      <li onClick={() => props.setDay(props.name)} className={itemClass}>
        { console.log(props)}
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{textLight}</h3>
    </li>
  );
}