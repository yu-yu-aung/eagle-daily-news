"use client";

import { signOut } from "@/lib/auth";
import useArticleStore from "@/store/useArticleStore";
import useAuthStore from "@/store/useAuthStore";
import { BookMarked, LogOut, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const { user, logOut } = useAuthStore();
  const { savedArticles, fetchSavedArticles } = useArticleStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      fetchSavedArticles(user.id);
    }
  }, [user]);

  const handleLogOut = async () => {
    try {
      await signOut();
      logOut();
      alert("Logged Out Successfully!");
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <User className="text-orange-500" />
        <div>
          <h2 className="text-xl font-semibold">{user.userName || "Guest"}</h2>
          <div className="flex items-center gap-2 text-gray-500">
            <Mail size={16} />
            <span>{user.userEmail || "No email available"}</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleLogOut}
        className="flex items-center gap-2 text-red-600 hover:text-red-800"
      >
        <LogOut size={18} /> Log Out
      </button>

      <div>
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-2">
          <BookMarked className="text-orange-500" /> Saved Articles
        </h2>

        {savedArticles.length === 0 ? (
          <p className="text-gray-500">No saved articles yet.</p>
        ) : (
          <ul>
            {savedArticles.map((article, index) => (
              <li
                key={index}
                className="border p-3 rounded-md hover:bg-gray-50 transition"
              >
                {article.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default page;
