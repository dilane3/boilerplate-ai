import { supabaseClient } from "..";

export const writingProvider = {
  create: async (payload: any) => {
    try {
      const { data, error } = await supabaseClient.from("writings").insert({
        type: payload.type,
        description: payload.description,
        user_id: payload.ownerId,
        deleted: false,
        config: payload.config,
      })
      .select("*")
      .single();

      console.log({ data, error })

      if (error) {
        return {
          success: false,
          error,
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error: any) {
      return {
        success: false,
        error,
      };
    }
  },

  getAll: async (payload: any) => {
    try {
      const { data, error } = await supabaseClient
        .from("writings")
        .select("*")
        .eq("user_id", payload.uid);

      if (error) {
        return {
          success: false,
          error,
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error: any) {
      return {
        success: false,
        error,
      };
    }
  }
};
