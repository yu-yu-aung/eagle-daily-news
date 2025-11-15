import { create } from "zustand";

const useArticleStore = create((set) => {
  return {
    fetchedArticles: [], 
    setFetchedArticles: (articles) => set ({fetchedArticles: articles}), 

    savedArticles: [],
    addSavedArticle: (article) =>
      set((state) => ({
        savedArticles: [...state.savedArticles, article],
      })),

    removeSavedArticle: (articleId) =>
      set((state) => ({
        savedArticles: state.savedArticles.filter(
          (article) => article.id !== articleId
        ),
      })),

    clearSavedArticles: () => set ({ savedArticles: []}), 
  };
});

export default useArticleStore;
