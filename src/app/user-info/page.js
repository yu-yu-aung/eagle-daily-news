"use client";

import { deleteArticle } from "@/lib/articles";
import { signOut } from "@/lib/auth";
import useArticleStore from "@/store/useArticleStore";
import useAuthStore from "@/store/useAuthStore";
import {
  BookMarked,
  LogOut,
  Mail,
  Trash2,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const { user, logOut } = useAuthStore();
  const { savedArticles, fetchSavedArticles } = useArticleStore();
  const router = useRouter();

  useEffect(() => {
    if (!user?.userId) return;
    fetchSavedArticles(user.userId);
  }, [user?.userId]);

  //console.log("fetchSavedArticles: ", savedArticles);

  const handleLogOut = async () => {
    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <p>Are you sure you want to log out?</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                try {
                  toast.dismiss(t.id);
                  await signOut();
                  logOut();
                  toast.success("Logged out successfully");
                  router.push("/");
                } catch (error) {
                  toast.dismiss(t.id);
                  toast.error("Error: failed to log out!");
                }
              }}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Log Out
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
    
  };

  const handleDeleteBtn = (article) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <p>Are you sure you want to delete this article?</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                await deleteArticle(article.id);
                await fetchSavedArticles(user.userId);
                toast.dismiss(t.id);
                toast.success("Article deleted");
              }}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: Infinity }
    );
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
          <>
            <img 
              src="/error.jpg" 
              alt="No Data!" 
              className="w-40 h-40 object-contain"
            />
            <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-700">No saved article yet!</p>
          </>  
        ) : (
          <div className="p-4 flex flex-col">
            <ul>
              {savedArticles.map((article, index) => (
                <li
                  key={index}
                  className="border p-3 rounded-md hover:bg-gray-50 transition mt-2 flex justify-between"
                >
                  <Link
                    href={article.url}
                    target="_blank"
                    className="hover:underline hover:text-blue-800"
                  >
                    <p className="w-[200px] sm:w-[280px] lg:w-[360px] line-clamp-2">{article.title}</p>
                  </Link>
                  <button
                    onClick={() => handleDeleteBtn(article)}
                    className="underline text-red-800"
                  >
                    <Trash2 />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
