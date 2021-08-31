import React, { useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global-styles";
import { FiSun, FiMoon } from "react-icons/fi";
import { wrapper } from "store";
import Layout from "components/base/Layout";
import { Toggler } from "components/common/Toggler";

const app = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const icon = theme === "light" ? <FiMoon size={26} /> : <FiSun size={26} />;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar>
          <Toggler onClick={() => toggleTheme()}>{icon}</Toggler>
        </NavBar>
        <Layout>
          <Component {...pageProps} title="" />
        </Layout>
        <div id="root-modal" />
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(app);
