import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const List = ({ id, title, className, listItems }) => {

  // const LoadingRow = (
  //   <div className="loading-item">
  //     <span className="glow-checkbox"/>
  //     <span className="glow-text">
  //       <span>Loading</span> <span>cool</span> <span>state</span>
  //     </span>
  //   </div>
  // )

  if (listItems.length === 0) {
    return (
      <div className="list-items" key={"empty"}>
        <div className="wrapper-message">
          <span className="icon-check"/>
          <p className="title-message">You have no list items.</p>
          <p className="subtitle-message">Sit back and relax.</p>
        </div>
      </div>
    )
  }

  return (
    <ul className="list-items" data-testid="success" key={"success"}>
      {listItems.map((litItem) => {
        <ListItem
          key={listItem.id}
          listItem={listItem}
        />
      })}
    </ul>
  )
}

export default List