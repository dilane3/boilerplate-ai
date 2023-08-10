import Header from "../molecules/Header";
import Main from "../molecules/Main";

type BaseLayoutProps = {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header transparent={false} />

      <Main pt={80}>{children}</Main>
    </>
  )
}