import Footer from "../molecules/layout/Footer";
import Header from "../molecules/layout/Header";
import Main from "../molecules/layout/Main";

type BaseLayoutProps = {
  children: React.ReactNode;
  transparent?: boolean;
  showBgLogo?: boolean;
};

export default function BaseLayout({ children, transparent, showBgLogo }: BaseLayoutProps) {
  return (
    <>
      <Header transparent={transparent} showBgLogo={showBgLogo} />

      <Main>{children}</Main>

      <Footer />
    </>
  );
}

BaseLayout.defaultProps = {
  transparent: false,
  showBgLogo: false,
}