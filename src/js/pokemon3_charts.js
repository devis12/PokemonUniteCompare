const { render } = require("react-dom");


export default class Pokemon3Charts extends React.Component {
    constructor(props) {
        super(props);
                        
    }

    render(){

        return(
            <>
                <PokemonStatChart stat="hp" title="HP across levels" levels={this.props.levels}
                  selPkm1={this.props.selPkm1} selPkm2={this.props.selPkm2} selPkm3={this.props.selPkm3} />
            </>
        )
    }

}