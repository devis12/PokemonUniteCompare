import Table from "react-bootstrap/Table";
import Pokemon3tr from "./pokemon3tr";

export default class Pokemon3Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      levels,
      selPkm1,
      selPkm2,
      selPkm3,
      selPkm1Class,
      selPkm2Class,
      selPkm3Class,
    } = this.props;

    return (
      <Table striped bordered hover variant="dark" responsive="md">
        <thead>
          <tr className={"text-center"}>
            <th>Level</th>
            <th>HP</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Sp. Attack</th>
            <th>Sp. Defense</th>
            <th>Lifesteal</th>
            <th>CDR</th>
            <th>Crit.</th>
          </tr>
        </thead>

        <tbody>
          {levels.map((pkmLevel) => (
            <Pokemon3tr
              key={"lev" + pkmLevel + 1}
              pkmLevel={pkmLevel}
              selPkm1={selPkm1}
              selPkm2={selPkm2}
              selPkm3={selPkm3}
              selPkm1Class={selPkm1Class}
              selPkm2Class={selPkm2Class}
              selPkm3Class={selPkm3Class}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}
