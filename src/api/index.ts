import { createClient } from "@supabase/supabase-js";

const { VITE_PUBLIC_SUPABASE_URL, VITE_PUBLIC_SUPABASE_KEY } = process.env;

console.log(VITE_PUBLIC_SUPABASE_URL, VITE_PUBLIC_SUPABASE_KEY)

export const supabaseClient = createClient(
  VITE_PUBLIC_SUPABASE_URL || "",
  VITE_PUBLIC_SUPABASE_KEY || "",
  {
    db: {
      schema: "public",
    },
    auth: {
      persistSession: true,
    },
  }
);
