import Header from "../molecules/layout/Header";
import Main from "../molecules/layout/Main";

type DashboardProfilLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardProfilLayout({ children }: DashboardProfilLayoutProps) {
  return (
    <>
      <Header transparent={true} type="dashboard" profil={true} />

      <Main pt={60}>{children}</Main>
    </>
  );
}
