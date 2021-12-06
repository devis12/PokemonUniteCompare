const { render } = require("react-dom");

import Pokemon3td from './pokemon3td';

export default class Pokemon3tr extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <tr className={"text-center"}>
                <td>{this.props.pkmLevel + 1}</td>
                <Pokemon3td 
                        pkmLevel={this.props.pkmLevel} stat={"hp"}
                        selPkm1={this.props.selPkm1} selPkm2={this.props.selPkm2} selPkm3={this.props.selPkm3}
                        selPkm1Class={this.props.selPkm1Class} selPkm2Class={this.props.selPkm2Class} selPkm3Class={this.props.selPkm3Class}/>
                <Pokemon3td 
                        pkmLevel={this.props.pkmLevel} stat={"attack"}
                        selPkm1={this.props.selPkm1} selPkm2={this.props.selPkm2} selPkm3={this.props.selPkm3}
                        selPkm1Class={this.props.selPkm1Class} selPkm2Class={this.props.selPkm2Class} selPkm3Class={this.props.selPkm3Class}/>
                <Pokemon3td 
                        pkmLevel={this.props.pkmLevel} stat={"defense"}
                        selPkm1={this.props.selPkm1} selPkm2={this.props.selPkm2} selPkm3={this.props.selPkm3}
                        selPkm1Class={this.props.selPkm1Class} selPkm2Class={this.props.selPkm2Class} selPkm3Class={this.props.selPkm3Class}/>
                <Pokemon3td 
                        pkmLevel={this.props.pkmLevel} stat={"sp_attack"}
                        selPkm1={this.props.selPkm1} selPkm2={this.props.selPkm2} selPkm3={this.props.selPkm3}
                        selPkm1Class={this.props.selPkm1Class} selPkm2Class={this.props.selPkm2Class} selPkm3Class={this.props.selPkm3Class}/>
                <Pokemon3td 
                        pkmLevel={this.props.pkmLevel} stat={"sp_defense"}
                        selPkm1={this.props.selPkm1} selPkm2={this.props.selPkm2} selPkm3={this.props.selPkm3}
                        selPkm1Class={this.props.selPkm1Class} selPkm2Class={this.props.selPkm2Class} selPkm3Class={this.props.selPkm3Class}/>
                <Pokemon3td 
                        pkmLevel={this.props.pkmLevel} stat={"lifesteal"}
                        selPkm1={this.props.selPkm1} selPkm2={this.props.selPkm2} selPkm3={this.props.selPkm3}
                        selPkm1Class={this.props.selPkm1Class} selPkm2Class={this.props.selPkm2Class} selPkm3Class={this.props.selPkm3Class}/>
                <Pokemon3td 
                        pkmLevel={this.props.pkmLevel} stat={"cdr"}
                        selPkm1={this.props.selPkm1} selPkm2={this.props.selPkm2} selPkm3={this.props.selPkm3}
                        selPkm1Class={this.props.selPkm1Class} selPkm2Class={this.props.selPkm2Class} selPkm3Class={this.props.selPkm3Class}/>
                <Pokemon3td 
                        pkmLevel={this.props.pkmLevel} stat={"crit"}
                        selPkm1={this.props.selPkm1} selPkm2={this.props.selPkm2} selPkm3={this.props.selPkm3}
                        selPkm1Class={this.props.selPkm1Class} selPkm2Class={this.props.selPkm2Class} selPkm3Class={this.props.selPkm3Class}/>
            </tr>
        )
    }

}