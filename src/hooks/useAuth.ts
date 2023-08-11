import { useActions, useSignal } from "@dilane3/gx";
import * as React from "react";
import User from "../entities/user/User";
import { getRandomColor } from "../utils/colors";
import { authProvider } from "../api/auth";
import { userProvider } from '../api/users';
import { AuthActions, AuthState } from "../gx/signals/auth/types";

export default function useAuth() {
  const { getIdentity } = authProvider;

  // Global state
  const { loading, user } = useSignal<AuthState>("auth");

  // Global actions
  const { login } = useActions<AuthActions>("auth");

  // Effects
  React.useEffect(() => {
    const getCurrentUser = async () => {
      if (!getIdentity) return;

      const userData = (await getIdentity()) as any;

      if (userData) {
        await handleCreateUserIfNotRegistered(userData);

        // Get the user data
        const { data } = await userProvider.getUser({
          uid: userData.id,
        });

        console.log({ data })

        if (data && data?.length > 0) {
          const user = new User(data[0]);

          login(user);

          return;
        }

        login(null);
      } else {
        login(null);
      }
    };

    if (loading === false || user) return;

    getCurrentUser();
  }, [loading, user]);

  // Handlers
  const handleCreateUserIfNotRegistered = async (data: any) => {
    // Check if the user is already registered into the users table
    const {
      success,
      data: userData,
      error: userError,
    } = await userProvider.getUser({
      uid: data.id,
    });

    console.log({ success, data: userData, error: userError });

    if (success && userData) {
      if (userData.length === 0) {
        // User is not registered, so we register it
        const { error } = await userProvider.createUser({
          email: data.email,
          uid: data.id,
          created_at: data.created_at,
          color: getRandomColor(),
        });

        if (error) {
          return {
            success: false,
            error,
          };
        } else {
          return {
            success: true,
            data,
          };
        }
      }
    }

    return {
      success: false,
      error: userError,
    };
  };
}
