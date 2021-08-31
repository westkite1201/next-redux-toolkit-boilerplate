/* eslint-disable react-hooks/rules-of-hooks */
import { AppProps } from 'next/app';
import GlobalStyle from 'styles/global-styles';
import { wrapper } from 'store';
import Layout from 'components/base/Layout';
const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} title="" />
      </Layout>
      <div id="root-modal" />
    </>
  );
};

export default wrapper.withRedux(app);
