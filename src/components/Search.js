import React from "react";

import { Button, Input } from "../style/styles";

const Search = ({
  handleClear,
  searchedText,
  onChangeSearch,
}) => {
  return (
    <div className={"search"}>
      <Input
        id={"searchedText"}
        onChange={onChangeSearch}
        placeholder={"Buscar notícias"}
      />

      {searchedText &&
        <Button onClick={() => handleClear()}>Limpar</Button>
      }
    </div>
  );
};

export default Search;
