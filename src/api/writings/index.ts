import { supabaseClient } from "..";
import Writing from "../../entities/writing/Writing";

export const writingProvider = {
  create: async (payload: any) => {
    try {
      const { data, error } = await supabaseClient
        .from("writings")
        .insert({
          type: payload.type,
          description: payload.description,
          user_id: payload.ownerId,
          deleted: false,
          config: payload.config,
        })
        .select("*")
        .single();

      console.log({ data, error });

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
        .eq("user_id", payload.uid)
        .eq("deleted", false);

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

  update: async (payload: Writing) => {
    try {
      const { data, error } = await supabaseClient
        .from("writings")
        .update({
          description: payload.description,
          content: payload.content,
          config: payload.config,
          history: payload.history,
          image: payload.image,
        })
        .eq("id", payload.id)
        .single();

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

  delete: async (payload: any) => {
    try {
      const { data, error } = await supabaseClient
        .from("writings")
        .update({ deleted: true })
        .eq("id", payload.id)
        .single();

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
};
