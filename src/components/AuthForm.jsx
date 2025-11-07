"use client"

import { signIn, signUp } from '@/lib/auth';
import useAuthStore from '@/store/useAuthStore';
import React, { useState } from 'react'

const AuthForm = ({mode = "login"}) => {

  //using useState 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const {setUser} = useAuthStore(); 
  
  async function handleSubmit (e) {
    e.preventDefault(); 
    setLoading(true); 

    try {
      let response; 
      if (mode === "signup"){
        response = await signUp(email, password); 
      } else {
        response = await signIn(email, password)
      }
      if (response.error) throw response.error; 
      if (response.data?.user){
        setUser(response.data.user);
        alert (`${mode === "signup" ? "Registered" : "Logged in"} successfully!`); 
    }
    } catch (error){
      alert(error.message); 
    } finally {
      setLoading(false);
    }
  }
  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-3 w-80 p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-center">
        {mode === "signup" ? "Create Your Account Now!" : "Welcome Back!"}
      </h2>

      <input 
        type='email'
        placeholder='Enter your email!'
        value={email}
        className='border p-2 rounded'
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>
        {loading ? "Processing..." : mode === "signup" ? "Register" : "Log In"}
      </button>

    </form>
  )
}

export default AuthForm