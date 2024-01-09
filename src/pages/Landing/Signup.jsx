import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiAngelWings } from 'react-icons/gi';
import { setUserDetails, setToken } from '../../Redux/action';
import { useDispatch } from 'react-redux';

const Signup = () => {
  // let navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [terms, setTerms] = useState(true);
  // const [password, setPassword] = useState('');
  // const [msg, setMsg] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   error: '',
  //   exists: '',
  // });
  // const onNameChange = (event) => {
  //   setName(event.target.value);
  // };
  // const onEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const onSignup = (e) => {
  //   e.preventDefault();

  //   if (!terms) {
  //     return;
  //   }
  //   setMsg({});
  //   console.log({
  //     name,
  //     email,
  //     password,
  //   });

  //   fetch('https://sheltered-bastion-98583.herokuapp.com/sign-up', {
  //     method: 'post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log('res', res);
  //       const { token } = res;
  //       const { user } = res;
  //       dispatch(setToken(token));

  //       if (res.msg) {
  //         setMsg(res.msg);
  //         console.log('msg', msg);
  //       }

  //       if (token != undefined) {
  //         dispatch(setUserDetails(user));
  //         navigate('../user/dashboard', { replace: true });
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const inputStyle = ' pl-4 mt-1 block w-full border-none bg-primary placeholder-white text-sm h-11 focus:ring-0';

  return (
    <div className="bg-black/70 h-screen">
      <div>
        <div>
          rrrrrrrr
        </div>
      </div>
    </div>
  );
};

export default Signup;
