import { create } from "zustand";

const useAuthStore = create((set) => {
  return {
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
          userName: userData?.user_metadata?.name || "",
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
  };
});

export default useAuthStore;
