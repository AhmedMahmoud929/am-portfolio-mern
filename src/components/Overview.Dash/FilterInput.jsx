import React from "react";
import Select, { components } from "react-select";
import { useDash } from "../../hooks/useDash.js";

const CustomInput = (props) => {
  const { maxLength } = props.selectProps;
  const inputProps = { ...props, maxLength };

  return <components.Input {...inputProps} />;
};

const App = () => {
  const { getProjectsByCategory } = useDash();
  const options = [
    { label: "All", value: "All" },
    { label: "Web Design", value: "Web Design" },
    { label: "Vector Art", value: "Vector Art" },
    { label: "Graphic Design", value: "Graphic Design" },
  ];

  const styles = {
    menu: (base) => ({
      ...base,

      backgroundColor: "rgba(0,0,0,0.3)",
      backdropFilter: "blur(10px)",
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
      styles={styles}
      options={options}
      placeholder="Category"
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
      onChange={(e) => getProjectsByCategory(e.value)}
    />
  );
};

export default App;
