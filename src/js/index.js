
import React from "react";
import ReactDOM from "react-dom";

import 'regenerator-runtime/runtime';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'

import Pokemon3Select from "./pokemon3_select";
import Pokemon3Table from './pokemon3_table'
import PokemonStatChart from "./pokemon_stat_chart";
import '../index.css';


const levels = Array.from({length: 15}, (item, index) => index)

async function fetchJSON(url){
  const response = await fetch(url)
  const json = await response.json()
  return json
}

class PokemonUniteCompare extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelPkm = this.handleSelPkm.bind(this);

        this.state = {
            pokemons: [],
            battle_items: [],
            held_items: [],
            selPkm1: undefined,
            selPkm2: undefined,
            selPkm3: undefined
        };
    

        fetchJSON("https://unite-db.com/pokemon.json")
            .then(pokeList =>  {
                fetchJSON("https://unite-db.com/stats.json")
                    .then(pokeStats =>  {
                        for(let pkm of pokeList)
                            pkm.stats = pokeStats.filter((pkm_stat) => (pkm.name == pkm_stat.name))[0].level
                        pokeList.sort((pkm1, pkm2) => (pkm1.tags.role < pkm2.tags.role)? -1:1);
                        this.setState({pokemons: pokeList})
                        //console.log(this.state.pokemons)
                    })
                    .catch(err => console.log(err))        
            })
            .catch(err => console.log(err))
        
        
        fetchJSON("https://unite-db.com/battle_items.json")
            .then(bitemsList =>  this.setState({battle_items: bitemsList}))
            .catch(err => console.log(err))
        
        fetchJSON("https://unite-db.com/held_items.json")
            .then(hitemsList =>  this.setState({held_items: hitemsList}))
            .catch(err => console.log(err))
        
    }

    handleSelPkm(selnum, pkmName){
        let selPkm = (pkmName.length > 0)? this.state.pokemons.filter((pokemon) => (pkmName == pokemon.name))[0] : undefined;
        switch(selnum){
            case 1:
                this.setState({selPkm1: selPkm});
                break;
            case 2:
                this.setState({selPkm2: selPkm});
                break;
            case 3:
                this.setState({selPkm3: selPkm});
                break;
        }
    }

    render() {

        const selPkm1Class = "text-danger";
        const selPkm2Class = "text-warning";
        const selPkm3Class = "text-info";

        return (
            <>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#home" className="text-white">Pokémon Unite compare</Navbar.Brand>
                </Navbar>

                <Container>
                    <Pokemon3Select pokemons={this.state.pokemons} handleSelPkm={this.handleSelPkm}
                                    selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3} />

                    <hr />
                    
                    <Row className="text-center">
                        <h2>
                            <span className={selPkm1Class}> {(this.state.selPkm1)? this.state.selPkm1.name : "-"} </span>
                            <span className={selPkm2Class}> {(this.state.selPkm2)? this.state.selPkm2.name : "-"} </span>
                            <span className={selPkm3Class}> {(this.state.selPkm3)? this.state.selPkm3.name : "-"} </span>
                        </h2>
                    </Row>

                    <Pokemon3Table 
                        levels={levels} 
                        selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3}
                        selPkm1Class={selPkm1Class} selPkm2Class={selPkm2Class} selPkm3Class={selPkm3Class}   
                        />
                    <hr />
                    
                    <PokemonStatChart stat="hp" title="HP across levels" levels={levels}
                        selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3} />

                    <PokemonStatChart stat="attack" title="Attack across levels" levels={levels}
                        selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3} />
                    <PokemonStatChart stat="defense" title="Defense across levels" levels={levels}
                        selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3} />
                    
                    <PokemonStatChart stat="sp_attack" title="Sp. Attack across levels" levels={levels}
                        selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3} />
                    <PokemonStatChart stat="sp_defense" title="Sp. Defense across levels" levels={levels}
                        selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3} />
                    
                    <PokemonStatChart stat="Lifesteal" title="Lifesteal across levels" levels={levels}
                        selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3} />
                    <PokemonStatChart stat="cdr" title="CDR across levels" levels={levels}
                        selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3} />
                    <PokemonStatChart stat="crit" title="Crit. rate across levels" levels={levels}
                        selPkm1={this.state.selPkm1} selPkm2={this.state.selPkm2} selPkm3={this.state.selPkm3} />
                </Container>

                <hr />
                
            </>
        );
    }
}


const App = () => {

  
  return (
        <PokemonUniteCompare />
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));