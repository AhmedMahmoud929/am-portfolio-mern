import React from "react";
import Select, { components } from "react-select";
import { useDash } from "../../hooks/useDash.js";

const CustomInput = (props) => {
  const { maxLength } = props.selectProps;
  const inputProps = { ...props, maxLength };

  return <components.Input {...inputProps} />;
};

const App = () => {
  const { category, setCategory } = useDash();
  const options = [
    { label: "Web Design", value: "Web Design" },
    { label: "Vector Art", value: "Vector Art" },
    { label: "Graphic Design", value: "Graphic Design" },
  ];

  const styles = {
    menu: (base) => ({
      ...base,

      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(5px)",
      border: "2px solid #9244f0",
    }),
    control: (base) => ({
      ...base,
      border: "transparent",
    }),
    option: (base) => ({
      ...base,
      color: "white",
    }),
  };

  return (
    <Select
      value={category && { label: category, value: category }}
      placeholder="Category"
      styles={styles}
      options={options}
      components={{ Input: CustomInput }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          primary: "#9244f0",
          primary25: "#9244f0",
          neutral0: "#453b57",
          neutrall0: "red",
          neutral80: "white",
        },
      })}
      onChange={(e) => setCategory(e.value)}
    />
  );
};

export default App;
