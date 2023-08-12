import { useSignal } from "@dilane3/gx"
import { WritingState } from "../gx/signals/writings/types"
import { useEffect } from "react";
import { writingProvider } from "../api/writings";
import { AuthState } from "../gx/signals/auth/types";
import { userProvider } from "../api/users";

export default function useLoadWritings() {
  // Global state
  const { loading } = useSignal<WritingState>("writings");
  const { user } = useSignal<AuthState>("auth");

  useEffect(() => {
    const loadWritings = async () => {
      if (loading && user) {
        await handleLoadWritings();
      }
    }

    loadWritings();
  }, [loading, user])

  // Handlers
  const handleLoadWritings = async () => {
    if (!user) return;
    
    const { success, data, error } = await writingProvider.getAll({ uid: user.uid });
    console.log({ data, error })

    if (success && data) {
    }
  }
}