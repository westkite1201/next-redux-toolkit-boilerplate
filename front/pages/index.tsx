import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { getDatasThunk } from 'store/data';
import { wrapper } from 'store';

const HomeContainer = dynamic(() => import('components/home/HomeContainer'), {
  ssr: true,
});

const Home: NextPage = () => {
  return (
    <>
      <HomeContainer />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query, req }) => {
      await store.dispatch(getDatasThunk());
      return { props: {} };
    },
);

export default Home;
