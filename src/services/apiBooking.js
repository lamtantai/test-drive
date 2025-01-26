import supabase from "./supabase";

export async function getBookings() {
  let { data, error } = await supabase.from("bookings").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not be load bookings data");
  }

  return data;
}

export async function addBooking(newBooking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could not be send data");
  }

  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Could not delete booking");
  }

  return data;
}
