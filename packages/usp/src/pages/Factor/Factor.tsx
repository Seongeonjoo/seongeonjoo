// import { fetchFactor} from '~/fetches';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FormType = {
  password?: string;
};

function Factor() {
  const [form, setForm] = useState<FormType>({ password: '1234' });

  const navigate = useNavigate();
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm((state) => ({ ...state, [name]: value }));
  };
  
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // TODO: 비밀번호 확인
    // if (form.password) {
    //   fetchFactor(form.password)
    //     .then((res) => {
    //       const { passwdCheckKey: key } = res;
    //       //* response 로 받은 키를 저장해 둔다.
    //       sessionStorage.setItem('__FACTOR_KEY__', key);

    //       //* 회원 정보 조회
    //       // me(key);

    //       navigate('/mypage');
    //     })
    //     .catch((e) => {
    //       if (e.response) {
    //         //* 비밀 번호가 맞지 않을 때.
    //         alert(e.response.data.message);
    //       } else {
    //         //* 오류
    //         alert('서비스를 이용 할 수 없습니다.');
    //       }
    //     });
    // }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        name="password"
        defaultValue={form.password}
        onChange={handleChange}
      />
      <button type="submit">비밀번호 확인</button>
    </form>
  );
}

export default Factor;
