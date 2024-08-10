import supabase from "../config/supabase";

export async function getAsfarUsers() {
  let { data, error } = await supabase.from("Asfar_Users").select("*");

  if (error) throw new Error("Could load Asfar Users");

  return data;
}
