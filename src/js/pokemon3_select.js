import React, { useContext } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { PokeContext } from "./pokemon_ctx";
import PokemonSelect from "./pokemon_select";

const Pokemon3Select = ({ pokemons, handleSelPkm }) => {
  const { selPkm1, selPkm2, selPkm3 } = useContext(PokeContext);

  const arrangeByRole = (pokemons, roles) => {
    let groupedPokemons = [];
    if (pokemons && roles)
      for (let role of roles) {
        groupedPokemons.push({
          label: role,
          background: roleColour(role),
          options: pokemons
            .filter((pkm) => pkm.tags.role == role)
            .map((pkm) => ({
              label: pkm.name,
              value: pkm.name,
              image: pkm.thumbnail,
              background: roleColour(pkm.tags.role),
            })),
        });
      }
    return groupedPokemons;
  };

  const roleColour = (role) => {
    let color;
    switch (role) {
      case "All-Rounder":
        color = "#8134a0";
        break;
      case "Attacker":
        color = "#db5824";
        break;
      case "Defender":
        color = "#6dd82f";
        break;
      case "Speedster":
        color = "#1d7cca";
        break;
      case "Supporter":
        color = "#e0c034";
        break;
    }
    return color;
  };

  // const filterOutPkm = (pkm)
  let roles =
    pokemons &&
    pokemons.length > 0 &&
    pokemons.reduce((total, current, index) => {
      if (index === 0) return [current.tags.role];
      else if (current.tags.role !== pokemons[index - 1].tags.role)
        return [...total, current.tags.role];
      else return total;
    }, []);

  const pokemons1 = pokemons.filter(
    (pkm) =>
      (selPkm2 == undefined || selPkm2.name != pkm.name) &&
      (selPkm3 == undefined || selPkm3.name != pkm.name)
  );
  const groupedPokemons1 = arrangeByRole(pokemons1, roles);

  const pokemons2 = pokemons.filter(
    (pkm) =>
      (selPkm1 == undefined || selPkm1.name != pkm.name) &&
      (selPkm3 == undefined || selPkm3.name != pkm.name)
  );
  const groupedPokemons2 = arrangeByRole(pokemons2, roles);

  const pokemons3 = pokemons.filter(
    (pkm) =>
      (selPkm2 == undefined || selPkm2.name != pkm.name) &&
      (selPkm1 == undefined || selPkm1.name != pkm.name)
  );
  const groupedPokemons3 = arrangeByRole(pokemons3, roles);

  return (
    <Row className={"text-white"}>
      <Col>
        <h4 className={"text-center"}>Pokémon 1</h4>
        <PokemonSelect
          options={groupedPokemons1}
          onChange={(opt) => handleSelPkm(1, opt.value)}
          aria={"Select Pokémon 1"}
        />
      </Col>

      <Col>
        <h4 className={"text-center"}>Pokémon 2</h4>
        <PokemonSelect
          options={groupedPokemons2}
          onChange={(opt) => handleSelPkm(2, opt.value)}
          aria={"Select Pokémon 2"}
        />
      </Col>

      <Col>
        <h4 className={"text-center"}>Pokémon 3</h4>
        <PokemonSelect
          options={groupedPokemons3}
          onChange={(opt) => handleSelPkm(3, opt.value)}
          aria={"Select Pokémon 3"}
        />
      </Col>
    </Row>
  );
};

export default Pokemon3Select;
