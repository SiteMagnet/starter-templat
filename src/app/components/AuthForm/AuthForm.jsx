'use client';
import "./AuthForm.css"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

const AuthForm = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isMounted) return;

    let result;

    if (isLogin) {
      result = await supabase.auth.signInWithPassword({ email, password });
    } else {
      result = await supabase.auth.signUp({ email, password });
      if (result.error) {
        setMessage(result.error.message);
        return;
      }

      const { user } = result.data;
      const { error } = await supabase.from('users').insert([
        {
          auth_id: user.id,
          email,
          full_name: fullName,
          brand_stage: 1,
        },
      ]);

      if (error) {
        setMessage('Error inserting user data: ' + error.message);
        return;
      }
    }

    if (result.error) {
      setMessage(result.error.message);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="auth-form">
         <h1>SiteMagnet</h1>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        )}
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>

      <p>{message}</p>

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to sign up?' : 'Already have an account? Log in'}
      </button>
    </div>
  );
};

export default AuthForm;
