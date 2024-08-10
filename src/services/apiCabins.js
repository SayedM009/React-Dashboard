import supabase from "../config/supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Could not load Cabins");
  }
  return data;
}
