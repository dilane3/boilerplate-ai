import { createClient } from "@supabase/supabase-js";

const { VITE_PUBLIC_SUPABASE_URL, VITE_PUBLIC_SUPABASE_KEY } = import.meta.env;

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
