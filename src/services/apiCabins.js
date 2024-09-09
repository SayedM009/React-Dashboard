import supabase, { supabaseURL } from "../config/supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Could not load Cabins");
  }
  return data;
}

export async function deleteCabin(cabin) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", cabin.id);

  if (error) {
    throw new Error("Could not delete the Cabin");
  }

  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace(" ", "");
  const imagePath = `${supabaseURL}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([
      {
        ...newCabin,
        image: typeof newCabin.image === "object" ? imagePath : newCabin.image,
      },
    ])
    .select();

  if (error) {
    throw new Error("Could not create cabin");
  }

  if (typeof !newCabin.image === "object") return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", newCabin.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function updateCabin(cabin) {
  const isString = typeof cabin.image === "string";

  const imageName = isString
    ? cabin.image
    : `${Math.random()}-${cabin.image[0].name}`
        .replaceAll("/", "")
        .replaceAll(" ", "");

  const imagePath = isString
    ? cabin.image
    : `${supabaseURL}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .update({ ...cabin, image: imagePath })
    .eq("id", cabin.id)
    .select("*");

  if (error) throw new Error("Could not update the cabin " + cabin.name);

  if (!isString) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabin.image[0]);

    if (storageError)
      throw new Error(
        "Cabin image could not be uploaded and the cabin was not created"
      );
  }

  return data;
}

export async function fetchCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id);

  if (error) {
    throw new Error("Could not load the cabin details");
  }
  return data;
}
