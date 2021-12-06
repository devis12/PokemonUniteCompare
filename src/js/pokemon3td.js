const { render } = require("react-dom");

export default class Pokemon3td extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <td>
                <span className={this.props.selPkm1Class}>
                    {((this.props.selPkm1)? this.props.selPkm1.stats[this.props.pkmLevel][this.props.stat] + " " : "")}
                </span>
                <span className={this.props.selPkm2Class}>
                    {((this.props.selPkm2)? this.props.selPkm2.stats[this.props.pkmLevel][this.props.stat] + " " : "")}
                </span>
                <span className={this.props.selPkm3Class}>
                    {((this.props.selPkm3)? this.props.selPkm3.stats[this.props.pkmLevel][this.props.stat] + " " : "")}
                </span>
            </td>
        )
    }

}