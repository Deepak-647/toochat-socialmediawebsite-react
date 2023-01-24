import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import styles from '../styles/login.module.css';

const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {
      return addToast('Please enter both email and password', {
        appearance: 'error',

      });
    }
  };

   return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input type="email" placeholder="Email"
          vaue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input type="password" placeholder="Paasword" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field} disabled={loggingIn}>
        <button>{loggingIn ? "Logging in .." : "Log in " }</button>
      </div>
    </form>
  );
};

export default Login ;