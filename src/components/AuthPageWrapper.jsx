"use client"

import { useSearchParams } from "next/navigation"
import AuthForm from "./AuthForm"

const AuthPageWrapper = () => {
const searchParams = useSearchParams(); 
const mode = searchParams.get("mode") || "login";

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthForm mode={mode}/>
    </div>
  )
}

export default AuthPageWrapper