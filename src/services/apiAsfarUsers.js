import supabase from "../config/supabase";

export async function getAsfarUsers() {
  let { data, error } = await supabase.from("Asfar_Users").select("*");

  if (error) throw new Error("Could load Asfar Users");

  return data;
}

export async function updatingAsfarUserStatus(user) {
  const { data, error } = await supabase
    .from("Asfar_Users")
    .update({ ...user, status: user.status === "false" ? false : true })
    .eq("id", user.id)
    .select();

  if (error) throw new Error("Could upldate the status");

  return data;
}

export async function createAsfarUser(newUser) {
  const { data, error } = await supabase
    .from("Asfar_Users")
    .insert([newUser])
    .select();

  if (error) throw new Error("Could create new user");

  return data;
}
