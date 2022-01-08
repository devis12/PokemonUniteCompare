import "../index.css";
import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "react-bootstrap/ToggleButton";

const filterContext = React.createContext();

const ToggleFilter = ({ filterProp, filterValue }) => {
  const { filters, handleFilter } = useContext(filterContext);
  const on = filters.includes(filterValue);
  return (
    <ToggleButton
      style={{ margin: "0.08rem" }}
      variant="outline-secondary"
      active={on}
      onClick={(e) => {
        e.target.blur(); //lose immediately focus
        handleFilter(filterProp, filterValue, !on);
      }}
    >
      {filterValue}
    </ToggleButton>
  );
};

const PokemonFilter = ({ handleFilter, filteringOn }) => {
  console.log(filters);
  let filters = [
    ...filteringOn["range"],
    ...filteringOn["role"],
    ...filteringOn["difficulty"],
  ];

  return (
    <filterContext.Provider value={{ handleFilter, filters }}>
      <button
        className={
          "p-1 " +
          (filters.length > 0 ? "bg-light text-dark" : "bg-dark text-light")
        }
        style={{ borderRadius: "0.6rem" }}
        onClick={() => handleFilter()}
      >
        <FontAwesomeIcon icon={faEraser} />
        <span className={"mx-2"}>Filter</span>
      </button>
      <Row className={"w-100 mx-auto mt-3"}>
        <Col md={"2"} className={"text-center mt-3"}>
          <ToggleFilter filterProp={"range"} filterValue={"Melee"} />
          <ToggleFilter filterProp={"range"} filterValue={"Ranged"} />
        </Col>

        <Col md={"4"} className={"text-center mt-3"}>
          <ToggleFilter filterProp={"difficulty"} filterValue={"Novice"} />
          <ToggleFilter
            filterProp={"difficulty"}
            filterValue={"Intermediate"}
          />
          <ToggleFilter filterProp={"difficulty"} filterValue={"Expert"} />
        </Col>
        <Col md={"6"} className={"text-center mt-3"}>
          <ToggleFilter filterProp={"role"} filterValue={"All-Rounder"} />
          <ToggleFilter filterProp={"role"} filterValue={"Speedster"} />
          <ToggleFilter filterProp={"role"} filterValue={"Attacker"} />
          <ToggleFilter filterProp={"role"} filterValue={"Defender"} />
          <ToggleFilter filterProp={"role"} filterValue={"Supporter"} />
        </Col>
      </Row>
    </filterContext.Provider>
  );
};

export default PokemonFilter;
