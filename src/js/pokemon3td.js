export default class Pokemon3td extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      stat,
      pkmLevel,
      selPkm1,
      selPkm2,
      selPkm3,
      selPkm1Class,
      selPkm2Class,
      selPkm3Class,
    } = this.props;

    return (
      <td>
        <span className={selPkm1Class}>
          {selPkm1 ? selPkm1.stats[pkmLevel][stat] + " " : ""}
        </span>
        <span className={selPkm2Class}>
          {selPkm2 ? selPkm2.stats[pkmLevel][stat] + " " : ""}
        </span>
        <span className={selPkm3Class}>
          {selPkm3 ? selPkm3.stats[pkmLevel][stat] + " " : ""}
        </span>
      </td>
    );
  }
}
