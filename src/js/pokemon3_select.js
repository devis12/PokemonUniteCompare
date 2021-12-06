const { render } = require("react-dom");

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default class Pokemon3Select extends React.Component {
    constructor(props) {
        super(props);
    }

    roleColour(role){
        let color;
        switch(role){
            case 'All-Rounder':
                color = '#8134a0';
                break;
            case 'Attacker':
                color = '#db5824';
                break;
            case 'Defender':
                color = '#6dd82f';
                break;
            case 'Speedster':
                color = '#1d7cca';
                break;
            case 'Supporter':
                color = '#e0c034';
                break;
        }
        return color;
    }

    render(){
        let pokemons1 = this.props.pokemons.filter((pkm) => ((this.props.selPkm2 == undefined || this.props.selPkm2.name != pkm.name) && (this.props.selPkm3 == undefined || this.props.selPkm3.name != pkm.name)))
        let pokemons2 = this.props.pokemons.filter((pkm) => ((this.props.selPkm1 == undefined || this.props.selPkm1.name != pkm.name) && (this.props.selPkm3 == undefined || this.props.selPkm3.name != pkm.name)))
        let pokemons3 = this.props.pokemons.filter((pkm) => ((this.props.selPkm2 == undefined || this.props.selPkm2.name != pkm.name) && (this.props.selPkm1 == undefined || this.props.selPkm1.name != pkm.name)))

        return(
            <Row className={"text-center text-white"}>
                <Col>
                    <h4>Pokémon 1</h4>
                    <Form.Select className={"text-center"} aria-label="Select Pokémon 1" onChange={(e) => this.props.handleSelPkm(1, e.target.value)}>
                        <option value="">-</option>
                        {pokemons1.map(pkm => (
                            <option key={pkm.name + 1} value={pkm.name}  className={"text-white"} style={{ background: this.roleColour(pkm.tags.role)}}>{pkm.name}</option>
                        ))}
                    </Form.Select>
                </Col>

                <Col>
                    <h4>Pokémon 2</h4>
                    <Form.Select className={"text-center"} aria-label="Select Pokémon 2" onChange={(e) => this.props.handleSelPkm(2, e.target.value)}>
                        <option value="">-</option>
                        {pokemons2.map(pkm => (
                            <option key={pkm.name + 2} value={pkm.name}  className={"text-white"} style={{ background: this.roleColour(pkm.tags.role)}}>{pkm.name}</option>
                        ))}
                    </Form.Select>
                </Col>

                <Col>
                    <h4>Pokémon 3</h4>
                    <Form.Select className={"text-center"} aria-label="Select Pokémon 3" onChange={(e) => this.props.handleSelPkm(3, e.target.value)}>
                        <option value="">-</option>
                        {pokemons3.map(pkm => (
                            <option key={pkm.name + 3} value={pkm.name} className={"text-white"} style={{ background: this.roleColour(pkm.tags.role)}}>{pkm.name}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
        )
    }

}