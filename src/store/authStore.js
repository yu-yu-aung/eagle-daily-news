import { create } from "zustand";

const useAuthStore = create((set) => {
  return {
    isLoggedIn: false,
    user: {
      userId: null,
      userName: "",
      userEmail: "",
    },
    setUser: (user) => set({ user }),
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
