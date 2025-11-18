"use client"

import { signIn, signUp } from '@/lib/auth';
import useAuthStore from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AuthForm = ({mode = "login"}) => {

  //using useState 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const {setUser} = useAuthStore(); 
  const router = useRouter(); 
  const [displayName, setDisplayName] = useState(""); 
  
  async function handleSubmit (e) {
    e.preventDefault(); 
    setLoading(true); 

    try {
      let response; 
      if (mode === "signup"){
        response = await signUp(email, password, displayName); 
      } else {
        response = await signIn(email, password)
      }
      if (response.error) throw response.error; 
      if (response.data?.user){
        setUser(response.data.user);
        alert (`${mode === "signup" ? "Registered" : "Logged in"} successfully!`); 

        router.push("/")
        setEmail(""); 
        setPassword("");
        setDisplayName("");
    }
    } catch (error){
      toast.error("An unknown error occurred!")
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

      {mode === "signup" && (
        <input
          type='text'
          placeholder='Enter your display name'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className='border p-2 rounded'
          required
        />
      )}
      <input 
        type='email'
        placeholder='Enter your email!'
        value={email}
        className='border p-2 rounded'
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className='border border-blue-800 bg-blue-600 text-white py-2 px-2 rounded  hover:scale-95 active:scale-95'>
        {loading ? "Processing..." : mode === "signup" ? "Register" : "Log In"}
      </button>
    </form>
  )
}

export default AuthForm