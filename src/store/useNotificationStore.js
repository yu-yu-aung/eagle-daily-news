import { create } from "zustand";

const useNotificationStore = create((set) => ({
  isLiked: false,
  isCommented: false,
  comment: "",

  toggleLiked: () => set((state) => ({ isLiked: !state.isLiked })),
  setCommented: (isCommented) => set({ isCommented }),
  setComment: (comment) => set({ comment }),
}));

export default useNotificationStore;
