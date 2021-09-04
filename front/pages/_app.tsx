import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from 'store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global-styles';
import Layout from 'components/base/Layout';
import Toggle from 'components/common/Toggle';
import { darkTheme, lightTheme } from 'styles/theme';
import { useDarkMode } from 'hooks/useDarkMode';

const app = ({ Component, pageProps }: AppProps) => {
  const [theme, toggleTheme] = useDarkMode();
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const body = (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Toggle themeMode={theme} toggleTheme={toggleTheme} />
      <Layout>
        <Component {...pageProps} title="" />
      </Layout>
    </ThemeProvider>
  );

  // prevents ssr flash for mismatched dark mode
  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return <>{body}</>;
};

export default wrapper.withRedux(app);
