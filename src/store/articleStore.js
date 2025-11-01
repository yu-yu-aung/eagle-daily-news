import { create } from "zustand";

const useArticleStore = create((set) => {
  return {
    article: {
      articleId: null,
      articleTitle: "",
    },
    setArticle: (article) => set({ article }),
  };
});

export default useArticleStore;
