import React, { useState } from "react";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import News from "./News";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bodyBg};
  }

  #header {
    background-color: ${(props) => props.theme.headerBg};
  }

  .notice {
    border: ${(props) => props.theme.noticeBorder};
  }

  .notice:hover {
    background-color: ${(props) => props.theme.noticeBg};
  }

  .title {
    background-color: ${(props) => props.theme.bodyBg};
    color: ${(props) => props.theme.textColor};
  }

  input {
    background-color: ${(props) => props.theme.inputBg};
    color: ${(props) => props.theme.textColor};
  }

  p, h1, h2, h3, h4, h5 {
    color: ${(props) => props.theme.textColor};
  }
`;

const lightTheme = {
  bodyBg: "#fff",
  headerBg: "#fff",
  inputBg: "transparent",
  textColor: "#222",
  noticeBorder: "1px solid transparent",
  noticeBg: "#f2f2f2",
};

const darkTheme = {
  bodyBg: "#2d2d2d",
  headerBg: "#1a1a1a",
  inputBg: "#444",
  textColor: "#fff",
  noticeBorder: "1px solid #ffffff29",
  noticeBg: "#242424",
};

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const onChangeTheme = (value) => {
    setIsDark(value);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />

      <News
        isDark={isDark}
        onChangeTheme={onChangeTheme}
      />
    </ThemeProvider>
  );
};

export default App;
