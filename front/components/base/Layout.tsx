import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const St = {
  AllWrapper: styled.div`
    height: 100%;
    display: flex;
    position: relative;
    min-width: 500px;
    background: ${(props) => props.theme.colors.primary};
  `,

  LayoutWrapper: styled.div`
    flex-grow: 1;
    transition: margin-top 0.2s ease 0s,
      margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: translate3d(0px, 0px, 0px);
  `,
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Your title</title>
        <link rel="shortcut icon" href="/images/your.ico" />
        <meta property="og:title" content="your title" key="title" />
      </Head>
      <St.AllWrapper>
        <St.LayoutWrapper>{children}</St.LayoutWrapper>
      </St.AllWrapper>
    </>
  );
};

export default Layout;
