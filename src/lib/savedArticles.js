import { CloudRain } from "lucide-react";
import { supabase } from "./supabaseClient";


export default async function saveArticlestoDB(userId, article) {
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