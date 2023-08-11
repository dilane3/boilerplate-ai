import nookies from "nookies";
import { supabaseClient } from "..";

export const authProvider = {
  logout: async () => {
    nookies.destroy(null, "token");
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: true,
      redirectTo: "/",
    };
  },

  googleLogin: async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      return {
        success: false,
        error,
      };
    }

    if (data) {
      const { data: sessionData, error } =
        await supabaseClient.auth.getSession();

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (sessionData?.session) {
        nookies.set(null, "token", sessionData.session?.access_token, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          path: "/",
          sameSite: "none",
          secure: true,
        });

        return {
          success: true,
          redirectTo: "/dashboard/writings",
        };
      }
    }

    return {
      success: false,
      error: {
        message: "Login failed",
        name: "Invalid email or password",
      },
    };
  },

  check: async (ctx: any) => {
    const { token } = nookies.get(ctx);
    const { data } = await supabaseClient.auth.getUser(token);
    const { user } = data;

    if (user) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/auth",
    };
  },

  getPermissions: async () => {
    const user = await supabaseClient.auth.getUser();

    if (user) {
      return user.data.user?.role;
    }

    return null;
  },

  getIdentity: async () => {
    const { data } = await supabaseClient.auth.getUser();

    if (data?.user) {
      return {
        ...data.user,
        name: data.user.email,
      };
    }

    return null;
  },
};
