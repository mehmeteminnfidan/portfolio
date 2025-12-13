import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (process.env.REACT_APP_SUPABASE_URL || "").trim();
const supabaseAnonKey = (process.env.REACT_APP_SUPABASE_ANON_KEY || "").trim();

// DEBUG (şimdilik kalsın)
console.log("SUPABASE_URL(raw):", JSON.stringify(process.env.REACT_APP_SUPABASE_URL));
console.log("SUPABASE_URL(trim):", JSON.stringify(supabaseUrl));
console.log("ANON_KEY starts:", supabaseAnonKey.slice(0, 10));

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log(
  "PROD CHECK SUPABASE URL:",
  JSON.stringify(process.env.REACT_APP_SUPABASE_URL)
);

