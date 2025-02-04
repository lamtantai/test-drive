import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = await supabase.from("bookings").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function addBooking(newBooking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function changeBookingStatus(id) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: "success" })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
