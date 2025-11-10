'use client'

import useArticleStore from "@/store/useArticleStore";
import { Mail, User } from "lucide-react";

const page = () => {

  const {user} = useAuthStore(); 
  const {savedArticle} = useArticleStore(); 

  return (
    <div>
      <User/> {user.userName} 
      <Mail/> {user.userName} 
      <LogOut/> Log Out  

      <div>
        <h2><BookMarked/> Saved Articles   </h2>

      </div>        
    </div>

  )
}

export default page