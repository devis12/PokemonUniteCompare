import Select, { components } from "react-select";
const { SingleValue, Option } = components;

const IconSingleValue = (props) => (
  <SingleValue {...props}>
    <div className="w-100">
      <img
        src={props.data.image}
        style={{
          height: "64px",
          width: "64px",
          borderRadius: "64%",
          marginRight: "10px",
        }}
        height="64px"
        width="64px"
      />
      <span style={{ color: "white", backgroundColor: props.data.background }}>
        {props.data.label}
      </span>
    </div>
  </SingleValue>
);

const IconOption = (props) => (
  <Option {...props} key={props.data.name}>
    <div style={{ backgroundColor: props.data.background }} className="w-100">
      <img
        src={props.data.image}
        style={{
          height: "64px",
          width: "64px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
        height="64px"
        width="64px"
      />
      <span>{props.data.label}</span>
    </div>
  </Option>
);

const customStyles = {
  menu: (provided) => ({
    ...provided,
    backgroundColor: "rgb(62, 50, 70)",
  }),
  option: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    textAlign: "center",
    minHeight: "64px",
  }),
};

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#3e3d3d",
  color: "white",
  borderRadius: "1.6em",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.24em 0.64em",
  margin: "0.16rem",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={{ ...groupStyles, backgroundColor: data.background }}>
    <span style={{ color: "white" }}>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const PokemonSelect = ({ options, onChange, aria }) => {
  return (
    <Select
      aria-label={aria}
      styles={customStyles}
      components={{ SingleValue: IconSingleValue, Option: IconOption }}
      options={options}
      formatGroupLabel={formatGroupLabel}
      isSearchable={false}
      onChange={onChange}
    />
  );
};

export default PokemonSelect;
