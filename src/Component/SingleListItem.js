import React , {memo}from "react";
import PropTypes from "prop-types";

const SingleListItem = ({ isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={onClickHandler}
    >
      {text}
    </li>
  );
};

SingleListItem.propTypes = {
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default memo(SingleListItem);
