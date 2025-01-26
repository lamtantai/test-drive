import supabase from "./supabase";

export async function getCars() {
  let { data, error } = await supabase.from("cars").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cars could not be loaded");
  }

  return data;
}

export async function getCarId(id) {
  let { data, error } = await supabase.from("cars").select("*").eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Car could not be loaded");
  }

  return data;
}
