import "../index.css";
import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";

import { PokeContext } from "./pokemon_ctx";

import PokemonFilter from "./pokemon_filter";
import Pokemon3Select from "./pokemon3_select";
import Pokemon3Table from "./pokemon3_table";
import PokemonStatChart from "./pokemon_stat_chart";
import { Col } from "react-bootstrap";

const levels = Array.from({ length: 15 }, (item, index) => index);

async function fetchJSON(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const fetchPokemonData = async () => {
  let pokeList = await fetchJSON("https://unite-db.com/pokemon.json");
  let pokeStats = await fetchJSON("https://unite-db.com/stats.json");
  for (let pkm of pokeList) {
    pkm.stats = pokeStats.filter(
      (pkm_stat) => pkm.name == pkm_stat.name
    )[0].level;
    pkm.thumbnail =
      "https://d275t8dp8rxb42.cloudfront.net/pokemon/thumbnail/" +
      pkm.name +
      ".png";
  }

  pokeList.sort((pkm1, pkm2) => (pkm1.tags.role < pkm2.tags.role ? -1 : 1));
  return pokeList;
};

const fetchBattleItems = async () => {
  let battleItems = await fetchJSON("https://unite-db.com/battle_items.json");
  return battleItems;
};

const fetchHeldItems = async () => {
  let heldItems = await fetchJSON("https://unite-db.com/held_items.json");
  return heldItems;
};

const filterProps = ["range", "difficulty", "role"];
const filteringDefault = {
  [filterProps[0]]: [],
  [filterProps[1]]: [],
  [filterProps[2]]: [],
};

const PokemonUniteCompareApp = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const [filteringOn, setFilteringOn] = useState(filteringDefault);
  const [fetchErr, setFetchErr] = useState("");
  const [battleItems, setBattleItems] = useState([]);
  const [heldItems, setHeldItems] = useState([]);
  const [selPkm1, setSelPkm1] = useState(undefined);
  const [selPkm2, setSelPkm2] = useState(undefined);
  const [selPkm3, setSelPkm3] = useState(undefined);

  useEffect(() => {
    fetchPokemonData()
      .then((pokeList) => {
        setPokemons(pokeList), setPokemonsFiltered(pokeList);
      })
      .catch((err) =>
        setFetchErr("Impossible to fetch pokemon data\n Error:" + err)
      );
    fetchBattleItems()
      .then((bItems) => setBattleItems(bItems))
      .catch((err) =>
        setFetchErr("Impossible to fetch battle items data\n Error:" + err)
      );
    fetchHeldItems()
      .then((hItems) => setHeldItems(hItems))
      .catch((err) =>
        setFetchErr("Impossible to fetch held items data\n Error:" + err)
      );
  }, []);

  useEffect(() => {
    console.log("new filter list based upon");
    console.log(filteringOn);
    if (filteringOn.role == 0 && filteringOn.range)
      setPokemonsFiltered(pokemons);
    else
      setPokemonsFiltered(
        pokemons.filter((pkm) => {
          const tags = pkm.tags;
          const filter0 =
            filteringOn[filterProps[0]].length == 0 ||
            filteringOn[filterProps[0]].includes(tags[filterProps[0]]);
          const filter1 =
            filteringOn[filterProps[1]].length == 0 ||
            filteringOn[filterProps[1]].includes(tags[filterProps[1]]);
          const filter2 =
            filteringOn[filterProps[2]].length == 0 ||
            filteringOn[filterProps[2]].includes(tags[filterProps[2]]);
          if (pkm.name == "Dragonite") console.log(filter0, filter1, filter2);
          return filter0 && filter1 && filter2;
        })
      );
  }, [filteringOn]);

  const selPkm1Class = "text-danger";
  const selPkm2Class = "text-warning";
  const selPkm3Class = "text-info";

  const handleSelPkm = (selNum, pkmName) => {
    console.log(selNum, pkmName);
    let selPkm =
      pkmName.length > 0
        ? pokemons.filter((pokemon) => pkmName == pokemon.name)[0]
        : undefined;
    switch (selNum) {
      case 1:
        setSelPkm1(selPkm);
        break;
      case 2:
        setSelPkm2(selPkm);
        break;
      case 3:
        setSelPkm3(selPkm);
        break;
    }
  };

  const handleFilter = (filterProp, filterValue, enable) => {
    const ok = filterProps.includes(filterProp);
    console.log(filterProp, filterValue, enable);
    if (ok)
      setFilteringOn((oldFilteringOn) => {
        let newFilteringOn = JSON.parse(JSON.stringify(oldFilteringOn));
        if (enable) newFilteringOn[filterProp].push(filterValue);
        else
          newFilteringOn[filterProp] = oldFilteringOn[filterProp].filter(
            (el) => el != filterValue
          );
        return newFilteringOn;
      });
    else setFilteringOn(filteringDefault);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" className="text-white">
          Pokémon Unite compare
        </Navbar.Brand>
      </Navbar>

      <PokeContext.Provider value={{ selPkm1, selPkm2, selPkm3 }}>
        <Container fluid>
          <Container
            className={"mt-5 w-100 mx-auto bg-dark p-3"}
            style={{ borderRadius: "1.2rem" }}
          >
            <PokemonFilter
              handleFilter={handleFilter}
              filteringOn={filteringOn}
            />
          </Container>
          <Container className={"mt-5"}>
            <Pokemon3Select
              pokemons={pokemonsFiltered}
              handleSelPkm={handleSelPkm}
            />
          </Container>
          <hr />

          <Row className={"text-center mt-5"}>
            <h2>
              <span className={selPkm1Class}>
                {" "}
                {selPkm1 ? selPkm1.name : "-"}{" "}
              </span>
              <span className={selPkm2Class}>
                {" "}
                {selPkm2 ? selPkm2.name : "-"}{" "}
              </span>
              <span className={selPkm3Class}>
                {" "}
                {selPkm3 ? selPkm3.name : "-"}{" "}
              </span>
            </h2>
          </Row>

          <Pokemon3Table
            levels={levels}
            selPkm1={selPkm1}
            selPkm2={selPkm2}
            selPkm3={selPkm3}
            selPkm1Class={selPkm1Class}
            selPkm2Class={selPkm2Class}
            selPkm3Class={selPkm3Class}
          />
          <hr />

          <Row className={"mt-5"}>
            <PokemonStatChart
              stat="hp"
              title="HP across levels"
              levels={levels}
              selPkm1={selPkm1}
              selPkm2={selPkm2}
              selPkm3={selPkm3}
            />
          </Row>

          <Row className={"mt-5"}>
            <Col xl={6}>
              <PokemonStatChart
                stat="attack"
                title="Attack across levels"
                levels={levels}
                selPkm1={selPkm1}
                selPkm2={selPkm2}
                selPkm3={selPkm3}
              />
            </Col>
            <Col xl={6}>
              <PokemonStatChart
                stat="defense"
                title="Defense across levels"
                levels={levels}
                selPkm1={selPkm1}
                selPkm2={selPkm2}
                selPkm3={selPkm3}
              />
            </Col>
          </Row>

          <Row className={"mt-5"}>
            <Col xl={6}>
              <PokemonStatChart
                stat="sp_attack"
                title="Sp. Attack across levels"
                levels={levels}
                selPkm1={selPkm1}
                selPkm2={selPkm2}
                selPkm3={selPkm3}
              />
            </Col>
            <Col xl={6}>
              <PokemonStatChart
                stat="sp_defense"
                title="Sp. Defense across levels"
                levels={levels}
                selPkm1={selPkm1}
                selPkm2={selPkm2}
                selPkm3={selPkm3}
              />
            </Col>
          </Row>

          <Row className={"mt-5"}>
            <Col xl={4}>
              <PokemonStatChart
                stat="Lifesteal"
                title="Lifesteal across levels"
                levels={levels}
                selPkm1={selPkm1}
                selPkm2={selPkm2}
                selPkm3={selPkm3}
              />
            </Col>
            <Col xl={4}>
              <PokemonStatChart
                stat="cdr"
                title="CDR across levels"
                levels={levels}
                selPkm1={selPkm1}
                selPkm2={selPkm2}
                selPkm3={selPkm3}
              />
            </Col>
            <Col xl={4}>
              <PokemonStatChart
                stat="crit"
                title="Crit. rate across levels"
                levels={levels}
                selPkm1={selPkm1}
                selPkm2={selPkm2}
                selPkm3={selPkm3}
              />
            </Col>
          </Row>
        </Container>
      </PokeContext.Provider>

      <footer className={"footer mt-5 py-3 font-small text-light bg-dark"}>
        <div
          className={
            "container footer-copyright text-center fst-italic bg-dark"
          }
        >
          © 2022 Copyright:
          <a style={{ color: "white" }} href="mailto:devisdalmoro@gmail.com">
            Dal Moro Devis
          </a>
        </div>
      </footer>
    </>
  );
};

export default PokemonUniteCompareApp;
