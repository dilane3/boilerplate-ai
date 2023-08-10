import Footer from "../molecules/layout/Footer";
import Header from "../molecules/layout/Header";
import Main from "../molecules/layout/Main";

type BaseLayoutProps = {
  children: React.ReactNode;
  transparent?: boolean;
  showBgLogo?: boolean;
  pt?: number;
};

export default function BaseLayout({
  children,
  transparent,
  pt,
}: BaseLayoutProps) {
  return (
    <>
      <Header transparent={transparent} />

      <Main pt={pt}>{children}</Main>

      <Footer />
    </>
  );
}

BaseLayout.defaultProps = {
  transparent: true,
  pt: 0,
};
