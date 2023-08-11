import { useSignal } from "@dilane3/gx";
import { AuthState } from "../../gx/signals/auth/types";
import Header from "../molecules/layout/Header";
import Main from "../molecules/layout/Main";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();

  // Global state
  const { user, loading } = useSignal<AuthState>("auth");

  useEffect(() => {
    if (!user && !loading) {
      navigate("/auth");
    }
  }, [user]);

  if (!user) return null;

  return (
    <>
      <Header transparent={true} type="dashboard" />

      <Main pt={60}>{children}</Main>
    </>
  );
}
