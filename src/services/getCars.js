import supabase from "./supabase";

export default async function getCars() {
  let { data, error } = await supabase.from("cars").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cars could not be loaded");
  }

  return data;
}
