import { createClient } from "@supabase/supabase-js";

// Vercel'de value sonuna yanlışlıkla \n / boşluk gelirse diye trim
const supabaseUrl = (process.env.REACT_APP_SUPABASE_URL || "").trim();
const supabaseAnonKey = (process.env.REACT_APP_SUPABASE_ANON_KEY || "").trim();

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase env eksik! REACT_APP_SUPABASE_URL / REACT_APP_SUPABASE_ANON_KEY");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
