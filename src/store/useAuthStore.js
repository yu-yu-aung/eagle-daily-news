import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: {
        userId: null,
        userName: "",
        userEmail: "",
      },
      setUser: (userData) =>
        set({
          user: {
            userId: userData?.id || null,
            userName: userData?.user_metadata?.display_name || "",
            userEmail: userData?.email || "",
          },
          isLoggedIn: !!userData,
        }),
      logOut: () =>
        set({
          isLoggedIn: false,
          user: {
            userId: null,
            userName: "",
            userEmail: "",
          },
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
