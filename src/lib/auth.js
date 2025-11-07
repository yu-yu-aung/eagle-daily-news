import { supabase } from "./supabaseClient";

//sign up function
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

//sign in function
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

//sign out function
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

//get user
export async function getUser() {
  return supabase.auth.getUser();
}
