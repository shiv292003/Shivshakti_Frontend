import React , {memo} from "react";
import PropTypes from "prop-types";

const ListContainer = ({ children }) => {
  return <ul style={{ textAlign: "left" }}>{children}</ul>;
};

ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ListContainer);
