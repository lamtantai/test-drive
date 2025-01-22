import supabase from "./supabase";

export default async function getCarId(id) {
  let { data, error } = await supabase.from("cars").select("*").eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Car could not be loaded");
  }

  return data;
}
