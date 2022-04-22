/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSignInSns } from '~/fetches';
// import authentication from 'shared/authentication';

function SnsNaverCallback() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let naver_id_login:any = new window.naver_id_login("0yIGtk_Hx0CJq4f3cxEW", "http://pc.bnet.com:5500/snsNaverCallback");
      handleClickNaver(naver_id_login.oauthParams.access_token);
    }
  }, []);

  //  네이버 로그인
  const handleClickNaver = async (res:any) => {
    console.log(res);
    const ress:any = await fetchSignInSns({accessToken: res,uri:"sns/naver",});
    // authentication.set(ress.data);
    //* Ref 페이지가 있는 경우.
    const qs = new URLSearchParams(location.search);
    const next = qs.get('nextUrl');
    if (next) {
      window.location.href = window.atob(next);
    } else {
      window.opener.location.href = "/";
    }
    window.close();
  };

  return (
    <section>
      
    </section>
  );
}

export default SnsNaverCallback;
