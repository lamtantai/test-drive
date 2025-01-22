import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gtgvulegezypnfqagled.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0Z3Z1bGVnZXp5cG5mcWFnbGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNDQzMzgsImV4cCI6MjA1MjkyMDMzOH0.DRT6ZHIdFjKPoADrDpU_ctuoewSijiH25bEAey9W6ro";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
