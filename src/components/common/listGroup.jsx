import React from "react";
const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {items.map(listItem => (
        <li
          onClick={() => onItemSelect(listItem)}
          key={listItem[valueProperty]}
          className={
            listItem !== selectedItem
              ? "list-group-item clickable"
              : "list-group-item clickable active"
          }
        >
          {listItem[textProperty]}
        </li>
      ))}
    </ul>
  );
};
export default ListGroup;
