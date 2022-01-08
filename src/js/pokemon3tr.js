import Pokemon3td from "./pokemon3td";

export default class Pokemon3tr extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      pkmLevel,
      selPkm1,
      selPkm2,
      selPkm3,
      selPkm1Class,
      selPkm2Class,
      selPkm3Class,
    } = this.props;

    return (
      <tr className={"text-center"}>
        <td>{pkmLevel + 1}</td>
        <Pokemon3td
          pkmLevel={pkmLevel}
          stat={"hp"}
          selPkm1={selPkm1}
          selPkm2={selPkm2}
          selPkm3={selPkm3}
          selPkm1Class={selPkm1Class}
          selPkm2Class={selPkm2Class}
          selPkm3Class={selPkm3Class}
        />
        <Pokemon3td
          pkmLevel={pkmLevel}
          stat={"attack"}
          selPkm1={selPkm1}
          selPkm2={selPkm2}
          selPkm3={selPkm3}
          selPkm1Class={selPkm1Class}
          selPkm2Class={selPkm2Class}
          selPkm3Class={selPkm3Class}
        />
        <Pokemon3td
          pkmLevel={pkmLevel}
          stat={"defense"}
          selPkm1={selPkm1}
          selPkm2={selPkm2}
          selPkm3={selPkm3}
          selPkm1Class={selPkm1Class}
          selPkm2Class={selPkm2Class}
          selPkm3Class={selPkm3Class}
        />
        <Pokemon3td
          pkmLevel={pkmLevel}
          stat={"sp_attack"}
          selPkm1={selPkm1}
          selPkm2={selPkm2}
          selPkm3={selPkm3}
          selPkm1Class={selPkm1Class}
          selPkm2Class={selPkm2Class}
          selPkm3Class={selPkm3Class}
        />
        <Pokemon3td
          pkmLevel={pkmLevel}
          stat={"sp_defense"}
          selPkm1={selPkm1}
          selPkm2={selPkm2}
          selPkm3={selPkm3}
          selPkm1Class={selPkm1Class}
          selPkm2Class={selPkm2Class}
          selPkm3Class={selPkm3Class}
        />
        <Pokemon3td
          pkmLevel={pkmLevel}
          stat={"lifesteal"}
          selPkm1={selPkm1}
          selPkm2={selPkm2}
          selPkm3={selPkm3}
          selPkm1Class={selPkm1Class}
          selPkm2Class={selPkm2Class}
          selPkm3Class={selPkm3Class}
        />
        <Pokemon3td
          pkmLevel={pkmLevel}
          stat={"cdr"}
          selPkm1={selPkm1}
          selPkm2={selPkm2}
          selPkm3={selPkm3}
          selPkm1Class={selPkm1Class}
          selPkm2Class={selPkm2Class}
          selPkm3Class={selPkm3Class}
        />
        <Pokemon3td
          pkmLevel={pkmLevel}
          stat={"crit"}
          selPkm1={selPkm1}
          selPkm2={selPkm2}
          selPkm3={selPkm3}
          selPkm1Class={selPkm1Class}
          selPkm2Class={selPkm2Class}
          selPkm3Class={selPkm3Class}
        />
      </tr>
    );
  }
}
