import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import ListContainer from "./ListContainer";
import SingleListItem from "./SingleListItem";

const List = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    selectedIndex === index ? setSelectedIndex(null) : setSelectedIndex(index);
  };

  return (
    <ListContainer>
      {items.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          isSelected={selectedIndex === index}
        />
      ))}
    </ListContainer>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {
  items: [{ text: "I" }, { text: "am" }, { text: "placed" }, { text: "hello" }],
};

export default memo(List);
//Shivshakti_Frontend