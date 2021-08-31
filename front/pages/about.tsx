import React from 'react';
import { NextPage } from 'next';
import { wrapper } from 'store';
import axios from 'axios';

const AboutPage: NextPage = (props: any) => {
  const { query, isCSR } = props;
  return (
    <>
      <div>hello</div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query, req }) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.Cookie = '';
      // 쿠키가 브라우저에 있는경우만 넣어서 실행
      // (주의, 아래 조건이 없다면 다른 사람으로 로그인 될 수도 있음)
      if (req && cookie) {
        console.log('cookie  = ', cookie);
        axios.defaults.headers.Cookie = cookie;
      }
      const isCSR = !req || (req.url && req.url.startsWith('/_next/data'));
      return { props: { query, isCSR } };
    },
);

export default AboutPage;
