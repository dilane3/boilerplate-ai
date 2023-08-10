import Header from "../molecules/layout/Header";
import Main from "../molecules/layout/Main";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header transparent={true} type="dashboard" />

      <Main pt={80}>{children}</Main>
    </>
  );
}
