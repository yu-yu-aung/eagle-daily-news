import { supabase } from "./supabaseClient";

export async function saveArticlestoDB(userId, article) {
  const articleId = article.id;

  const { data, error } = await supabase.from("saved_articles").insert({
    user_id: userId,
    article_id: articleId,
    title: article.title,
    description: article.description,
    url: article.url,
  });

  if (error) {
    console.error("Error saving the article: ", error);
    return error;
  }

  return { data };
}

export async function deleteArticle(rowId) {
  const { data, error } = await supabase
    .from("saved_articles")
    .delete()
    .eq("id", rowId);

  if (error) {
    console.error("Error saving the article: ", error);
    return error;
  }

  return { data };
}
