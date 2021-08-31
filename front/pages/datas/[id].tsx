import React from 'react';
import { getDatasThunk } from 'store/board';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { wrapper, RootState } from 'store';

const FrogsPage = () => {
  const { datas } = useSelector((state: RootState) => state.board);
  return <div style={{ margin: '200px' }}>{}</div>;
};

// SSR (프론트 서버에서 실행)

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query: queryParam }) => {
      const { id } = queryParam;
      await store.dispatch(getDatasThunk());
      return {
        props: {},
      };
    },
);

export default FrogsPage;
