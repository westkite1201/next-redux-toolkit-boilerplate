import React from 'react';
import Link from 'next/link';

const HeaderAuths: React.FC = () => {
  return (
    <>
      <div className="header-auth-buttons">
        <Link href="/signup">
          <button className="header-sign-up-button" type="button">
            회원가입
          </button>
        </Link>

        <Link href="/login">
          <button className="header-login-button" type="button">
            로그인
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeaderAuths;
