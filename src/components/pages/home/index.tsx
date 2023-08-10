import BaseLayout from "../../layouts/BaseLayout";
import Hero from "../../molecules/pages/Hero";

export default function HomePage(): React.ReactNode {
  return (
    <BaseLayout>
      <Hero />
    </BaseLayout>
  );
}
