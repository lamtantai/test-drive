import supabase from "./supabase";

export async function getCars() {
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 2000),
  // );

  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCarId(id) {
  const { data, error } = await supabase.from("cars").select("*").eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
