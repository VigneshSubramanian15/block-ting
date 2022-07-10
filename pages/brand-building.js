import Header from "../src/components/header";
import ServiceHero from "../src/components/services";
import Features from "../src/components/services/features";
import ImageSection from "../src/components/services/ImageSection";
import { pageColor } from "../src/constant";

function Service() {
  const content = {
    title: "Brand Building",
    content: `  Content marketing includes things like educational articles,
        e-books, videos, entertainment, and webinars that answer
        specific questions people have and provide them with
        something they can&apos;t get elsewhere.`,
  };
  const color = pageColor.brandPage;
  return (
    <div className="service">
      <Header page={"brand"} />
      <div className="hero-section brand">
        <ServiceHero
          content={content}
          page="brand"
          image="/assets/service/branding.svg"
        />
      </div>
      <Features color={color} />
      <ImageSection color={color} />
    </div>
  );
}

export default Service;
