import { useState } from 'react';
import { createSession, errorMessages } from './services';

const Login = function({ onLogin }) {
  const [username, setUsername] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState('');

  const onChange = (e) => {
    setUsername(e.target.value);
    setIsDisabled(!e.target.value);
  };

  const login = () => {
    setIsPending(true);
    createSession({ username })
    .then( userinfo => {
      setStatus('');
      setIsPending(false);
      onLogin({ username, info: userinfo.info });
    })
    .catch( err => {
      setStatus(errorMessages[err.code || 'DEFAULT']);
      setIsPending(false);
    });
  };

  return (
    <div className="header">
      <h1>Join the webchat room</h1>
      { status && <div class="status">{status}</div>}
      <label>
        Username:
        <input disabled={isPending} onChange={onChange} value={username} />
      </label>
      <button onClick={login} disabled={isDisabled || isPending} >{ isPending ? "..." : "Login"}</button>
    </div>
  );
};
export default Login;