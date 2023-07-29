import React from "react";

const Switch = ({
  isDark,
  handleToggle,
}) => {
  return (
    <div className={"switch-container"}>
      <label className={"switch"}>
        <input
          type={"checkbox"}
          checked={isDark}
          onChange={handleToggle}
        />
        <span className={"slider round"}></span>
      </label>

      <p>{isDark ? "Tema escuro" : "Tema claro"}</p>
    </div>
  );
};

export default Switch;
