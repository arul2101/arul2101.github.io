import { useState } from 'react';
import './categories.css';
import PropTypes from "prop-types";

export default function Categories({ filter }) {
  const [toggleState, setToggleState] = useState(1);
    
  const toggleHandle = (index, filterName) => {
      filter(filterName);
      setToggleState(index);
  }

  return (
    <div className="row-portfolio-1">
      <p
        onClick={()=>toggleHandle(1, "All")}
        className={toggleState === 1 ? "categories active" : "categories"}
      >All</p>
      <p
        onClick={()=>toggleHandle(2, "App")}
        className={toggleState === 2 ? "categories active" : "categories"}
      >App</p>
      <p
        onClick={()=>toggleHandle(3, "Web")}
        className={toggleState === 3 ? "categories active" : "categories"}
      >Web</p>
      <p
        onClick={()=>toggleHandle(4, "rest-api")}
        className={toggleState === 4 ? "categories active" : "categories"}
      >Rest API</p>
    </div>
  )
}

Categories.propTypes = {
  filter: PropTypes.func,
}
