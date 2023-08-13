import { useActions, useSignal } from "@dilane3/gx";
import { WritingActions, WritingState } from "../gx/signals/writings/types";
import { useEffect } from "react";
import { writingProvider } from "../api/writings";
import { AuthState } from "../gx/signals/auth/types";
import Writing from "../entities/writing/Writing";

export default function useLoadWritings() {
  // Global state
  const { loading } = useSignal<WritingState>("writings");
  const { user } = useSignal<AuthState>("auth");

  const { loadWritings } = useActions<WritingActions>("writings");

  useEffect(() => {
    const loadWritings = async () => {
      if (loading && user) {
        await handleLoadWritings();
      }
    };

    loadWritings();
  }, [loading, user]);

  // Handlers
  const handleLoadWritings = async () => {
    if (!user) return;

    const { success, data } = await writingProvider.getAll({
      uid: user.uid,
    });

    if (success && data) {
      const writings: Writing[] = [];

      for (const writing of data) {
        writings.push(
          new Writing({
            ...writing,
            createdAt: new Date(writing.created_at),
            ownerId: writing.user_id,
          })
        );
      }

      loadWritings(writings);
    }
  };
}
