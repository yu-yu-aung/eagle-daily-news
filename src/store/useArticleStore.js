import { supabase } from "@/lib/supabaseClient";
import { create } from "zustand";

const useArticleStore = create((set) => {
  return {
    fetchedArticles: [], 
    setFetchedArticles: (articles) => set ({fetchedArticles: articles}), 

    selectedArticle: null, 
    setSelectedArticle: (article) => set({selectedArticle: article}), 

    savedArticles: [],
    addSavedArticle: (article) =>
      set((state) => ({
        savedArticles: [...state.savedArticles, article],
      })),

    fetchSavedArticles: async (userId) => {
      const { data, error } = await supabase.from("saved_articles").select("*").eq("user_id", userId); 

      if (!error && data){
        set ({savedArticles: data}); 
      }
    },

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
