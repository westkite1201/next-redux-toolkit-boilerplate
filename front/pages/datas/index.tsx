import React from 'react';
import { getDatasThunk } from 'store/board';
import { useSelector } from 'react-redux';
import { wrapper, RootState } from 'store';

import Link from 'next/link';

export const DatasPage = () => {
  const { datas, datasNum } = useSelector((state: RootState) => state.board);
  return (
    <div style={{ marginTop: '100px' }}>
      <div
        style={{
          height: '500px',
          background: 'black',
          color: 'white',
          margin: '5px',
        }}
      >
        <Link href="/frogtest">프로그 값 확인</Link>
      </div>
      <div
        style={{
          height: '500px',
          background: 'black',
          color: 'white',
          margin: '5px',
        }}
      >
        <Link href="/frogs/1"> 이동 1번</Link>
      </div>
      <div
        style={{
          height: '500px',
          background: 'black',
          color: 'white',
          margin: '5px',
        }}
      >
        <Link href="/frogs/2"> 이동 2번</Link>
      </div>
      <div
        style={{
          height: '500px',
          background: 'black',
          color: 'white',
          margin: '5px',
        }}
      >
        <Link href="/frogs/3"> 이동 3번</Link>
      </div>
    </div>
  );
};
// SSR (프론트 서버에서 실행)
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query: queryParam }) => {
      await store.dispatch<any>(getDatasThunk());
      return {
        props: {},
      };
    },
);

export default DatasPage;
